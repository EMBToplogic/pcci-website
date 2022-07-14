-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Chambers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "parentRegion" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "governor" TEXT NOT NULL DEFAULT '',
    CONSTRAINT "Chambers_parentRegion_fkey" FOREIGN KEY ("parentRegion") REFERENCES "Region" ("regionName") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Chambers" ("governor", "id", "parentRegion", "title") SELECT "governor", "id", "parentRegion", "title" FROM "Chambers";
DROP TABLE "Chambers";
ALTER TABLE "new_Chambers" RENAME TO "Chambers";
CREATE UNIQUE INDEX "Chambers_title_key" ON "Chambers"("title");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
