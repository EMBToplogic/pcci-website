/*
  Warnings:

  - You are about to drop the column `chamberUrl` on the `LocalChambers` table. All the data in the column will be lost.
  - You are about to drop the column `chaptersId` on the `LocalChambers` table. All the data in the column will be lost.
  - You are about to drop the column `chamberUrl` on the `Chapters` table. All the data in the column will be lost.
  - Added the required column `chapterUrl` to the `LocalChambers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `chapterUrl` to the `Chapters` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_LocalChambers" (
    "id" TEXT NOT NULL PRIMARY KEY,
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
    CONSTRAINT "LocalChambers_chapterUrl_fkey" FOREIGN KEY ("chapterUrl") REFERENCES "Chapters" ("chapterUrl") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_LocalChambers" ("aboutDesc", "aboutTitle", "address", "bannerUrl", "email", "id", "phoneNumbers", "sched", "servicesDesc", "servicesTitle", "title") SELECT "aboutDesc", "aboutTitle", "address", "bannerUrl", "email", "id", "phoneNumbers", "sched", "servicesDesc", "servicesTitle", "title" FROM "LocalChambers";
DROP TABLE "LocalChambers";
ALTER TABLE "new_LocalChambers" RENAME TO "LocalChambers";
CREATE TABLE "new_Chapters" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "chapterName" TEXT NOT NULL,
    "lat" TEXT NOT NULL,
    "long" TEXT NOT NULL,
    "parentChamber" TEXT NOT NULL,
    "chapterUrl" TEXT NOT NULL,
    CONSTRAINT "Chapters_parentChamber_fkey" FOREIGN KEY ("parentChamber") REFERENCES "Chambers" ("title") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Chapters" ("chapterName", "id", "lat", "long", "parentChamber") SELECT "chapterName", "id", "lat", "long", "parentChamber" FROM "Chapters";
DROP TABLE "Chapters";
ALTER TABLE "new_Chapters" RENAME TO "Chapters";
CREATE UNIQUE INDEX "Chapters_chapterUrl_key" ON "Chapters"("chapterUrl");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
