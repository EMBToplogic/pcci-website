/*
  Warnings:

  - You are about to drop the column `chapterUrl` on the `Chapters` table. All the data in the column will be lost.
  - Added the required column `chapterId` to the `LocalChambers` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
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
CREATE TABLE "new_LocalChambers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "chapterId" TEXT NOT NULL,
    "chapterUrl" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "bannerUrl" TEXT NOT NULL,
    "servicesTitle" TEXT NOT NULL,
    "servicesDesc" TEXT NOT NULL,
    "aboutTitle" TEXT NOT NULL,
    "aboutDesc" TEXT NOT NULL,
    "phoneNumbers" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "sched" TEXT NOT NULL,
    "chaptersId" TEXT,
    CONSTRAINT "LocalChambers_chapterId_fkey" FOREIGN KEY ("chapterId") REFERENCES "Chambers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "LocalChambers_chaptersId_fkey" FOREIGN KEY ("chaptersId") REFERENCES "Chapters" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_LocalChambers" ("aboutDesc", "aboutTitle", "address", "bannerUrl", "chapterUrl", "email", "id", "phoneNumbers", "sched", "servicesDesc", "servicesTitle", "title") SELECT "aboutDesc", "aboutTitle", "address", "bannerUrl", "chapterUrl", "email", "id", "phoneNumbers", "sched", "servicesDesc", "servicesTitle", "title" FROM "LocalChambers";
DROP TABLE "LocalChambers";
ALTER TABLE "new_LocalChambers" RENAME TO "LocalChambers";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
