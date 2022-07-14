/*
  Warnings:

  - You are about to drop the `chambers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `chapters` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `region` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "chambers";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "chapters";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "region";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Region" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "areaPresident" TEXT NOT NULL,
    "regionName" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Chambers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "parentRegion" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "governor" TEXT NOT NULL DEFAULT '',
    CONSTRAINT "Chambers_parentRegion_fkey" FOREIGN KEY ("parentRegion") REFERENCES "Region" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Chapters" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "chapterName" TEXT NOT NULL,
    "lat" TEXT NOT NULL,
    "long" TEXT NOT NULL,
    "parentChamber" TEXT NOT NULL,
    CONSTRAINT "Chapters_parentChamber_fkey" FOREIGN KEY ("parentChamber") REFERENCES "Chambers" ("title") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Region_regionName_key" ON "Region"("regionName");

-- CreateIndex
CREATE UNIQUE INDEX "Chambers_title_key" ON "Chambers"("title");
