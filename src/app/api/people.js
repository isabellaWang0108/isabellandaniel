import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db('wedding_guests');

  const people = await db.collection('People').find({}).toArray();

  res.json(people);
}