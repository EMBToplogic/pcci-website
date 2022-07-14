/*
  Warnings:

  - The primary key for the `Chambers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Region` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Chapters` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
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
CREATE TABLE "new_Region" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "areaPresident" TEXT NOT NULL,
    "regionName" TEXT NOT NULL
);
INSERT INTO "new_Region" ("areaPresident", "id", "regionName", "title") SELECT "areaPresident", "id", "regionName", "title" FROM "Region";
DROP TABLE "Region";
ALTER TABLE "new_Region" RENAME TO "Region";
CREATE UNIQUE INDEX "Region_regionName_key" ON "Region"("regionName");
CREATE TABLE "new_Chapters" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "chapterName" TEXT NOT NULL,
    "lat" TEXT NOT NULL,
    "long" TEXT NOT NULL,
    "parentChamber" TEXT NOT NULL,
    CONSTRAINT "Chapters_parentChamber_fkey" FOREIGN KEY ("parentChamber") REFERENCES "Chambers" ("title") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Chapters" ("chapterName", "id", "lat", "long", "parentChamber") SELECT "chapterName", "id", "lat", "long", "parentChamber" FROM "Chapters";
DROP TABLE "Chapters";
ALTER TABLE "new_Chapters" RENAME TO "Chapters";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
