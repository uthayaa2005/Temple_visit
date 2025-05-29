// database.js
import { MongoClient } from 'mongodb';

const mongoURI = 'mongodb://localhost:27017';
const dbName = 'temple_guide';

const client = new MongoClient(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let db;

async function connectToDatabase() {
  if (!db) {
    try {
      await client.connect();
      db = client.db(dbName);

      const existingCollections = (await db.listCollections().toArray()).map(col => col.name);

      const createCollectionIfNotExists = async (name, validator = {}) => {
        if (!existingCollections.includes(name)) {
          await db.createCollection(name, validator);
          console.log(`✅ Collection '${name}' created`);
        }
      };

      // Create collections with optional validators
      await createCollectionIfNotExists('users', {
        validator: {
          $jsonSchema: {
            bsonType: 'object',
            required: ['name', 'email', 'password'],
            properties: {
              name: { bsonType: 'string' },
              email: { bsonType: 'string' },
              password: { bsonType: 'string' },
              is_admin: { bsonType: 'bool' },
              created_at: { bsonType: 'date' }
            }
          }
        }
      });

      await createCollectionIfNotExists('temples');
      await createCollectionIfNotExists('amenities');
      await createCollectionIfNotExists('reviews');

      console.log('✅ MongoDB connected and collections are ready');
    } catch (err) {
      console.error('❌ Failed to connect to MongoDB:', err);
    }
  }

  return db;
}

export default connectToDatabase;
