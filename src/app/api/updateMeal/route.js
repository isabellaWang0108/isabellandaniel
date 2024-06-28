import clientPromise from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export async function POST(req) {
  try {
    const client = await clientPromise;
    const db = client.db('wedding_guests');
    const body = await req.json();
    let { meal } = body;

    console.log("Received meal data:", meal);

    if (!Array.isArray(meal)) {
      meal = [meal];
    }
    const updateOperations = meal.map((item) => {
      if (!item._id) {
        throw new Error("Item missing '_id' property");
      }

      const { _id, ...updateData } = item;  // Exclude _id from update data

      console.log(`Updating item with _id: ${_id} with data:`, updateData);

      return {
        updateOne: {
          filter: { _id: new ObjectId(_id) },
          update: { $set: updateData },
          upsert: true
        }
      };
    });

    db.collection('People').bulkWrite(updateOperations)
      .then(result => {
        console.log("Bulk update result:", result);
      })
      .catch(error => {
        console.error("Error in bulk update:", error);
      });

    await Promise.all(updateOperations);

    console.log("Update operations completed successfully.");

    return new Response(JSON.stringify({ message: 'Meals updated successfully' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error("Error updating meals:", error);
    return new Response(JSON.stringify({ message: 'Internal server error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

export async function GET() {
  return new Response(JSON.stringify({ message: 'GET request received' }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}