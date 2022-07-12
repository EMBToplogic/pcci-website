import {NextApiRequest, NextApiResponse} from 'next';

const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");

async function openDb() {
    return sqlite.open({
      filename: "./database.db",
      driver: sqlite3.Database,
    });
  }

export default async function getAllChambers(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        res.status(500).json({message: '(500) Internal Server Error'})
    }

    const db = await openDb();
    await db.migrate({
      migrationsPath: "./migrations",
      force: "last",
    });
    
  const allChambers = await db.all("SELECT * FROM Chambers");
    res.json(allChambers);
}