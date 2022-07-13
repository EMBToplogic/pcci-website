/*
  Warnings:

  - You are about to drop the `Chambers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Chapters` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Region` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Chambers";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Chapters";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Region";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "region" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "areaPresident" TEXT NOT NULL,
    "regionName" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "chambers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "parentRegion" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "governor" TEXT NOT NULL DEFAULT '',
    CONSTRAINT "chambers_parentRegion_fkey" FOREIGN KEY ("parentRegion") REFERENCES "region" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "chapters" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "chapterName" TEXT NOT NULL,
    "lat" INTEGER NOT NULL,
    "long" INTEGER NOT NULL,
    "parentChamber" TEXT NOT NULL,
    CONSTRAINT "chapters_parentChamber_fkey" FOREIGN KEY ("parentChamber") REFERENCES "chambers" ("title") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "chambers_title_key" ON "chambers"("title");
