import { NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';

export async function POST(request) {
    try {
        const client = await clientPromise;
        const db = client.db('wedding_guests'); // Ensure this matches the database name in your URI

        const { firstName, lastName } = await request.json();
        const fullName = `${firstName.toLowerCase().replace(/\s+/g, '')} ${lastName.toLowerCase().replace(/\s+/g, '')}`;
 
        // Search in the wedding_guest collection
        const guest = await db.collection('People').findOne({ name: fullName });

        if (!guest) {
            // console.log('Guest not found');
            return NextResponse.json({ message: 'Guest not found' }, { status: 404 });
        }

        // Fetch the guest in the RSVP collection
        const rsvpEntry = await db.collection('RSVP').findOne({ guest_ids: guest.id });

        if (!rsvpEntry) {
            // console.log('RSVP entry not found for the guest');
            return NextResponse.json({ message: 'RSVP entry not found for the guest' }, { status: 404 });
        }

        // Fetch all guest info based on IDs in the guest list from RSVP entry
        const guestsInfo = await db.collection('People').find({ id: { $in: rsvpEntry.guest_ids } }).toArray();

        return NextResponse.json(guestsInfo);
    } catch (e) {
        return NextResponse.json({ message: 'Internal Server Error', error: e.message }, { status: 500 });
    }
}