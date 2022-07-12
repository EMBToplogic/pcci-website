const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");

async function openDb() {
  return sqlite.open({
    filename: "./database.db",
    driver: sqlite3.Database,
  });
}

async function setup() {
  const db = await openDb();
  await db.migrate({
    migrationsPath: "./migrations",
    force: "last",
  });

  const regions = await db.all("SELECT * FROM Region");
  console.log("REGIONS", JSON.stringify(regions, null, 2));

  const chambers = await db.all("SELECT * FROM Chambers");
  console.log("CHAMBERS", JSON.stringify(chambers, null, 2));

  const chapters = await db.all("SELECT * FROM Chapters");
  console.log("CHAPTERS", JSON.stringify(chapters, null, 2));
}

setup();
