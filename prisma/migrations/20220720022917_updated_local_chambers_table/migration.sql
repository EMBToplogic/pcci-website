/*
  Warnings:

  - You are about to drop the column `chapterUrl` on the `LocalChambers` table. All the data in the column will be lost.
  - Added the required column `parentChapter` to the `LocalChambers` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_LocalChambers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "parentChapter" TEXT NOT NULL,
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
    CONSTRAINT "LocalChambers_parentChapter_fkey" FOREIGN KEY ("parentChapter") REFERENCES "Chapters" ("chapterUrl") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_LocalChambers" ("aboutDesc", "aboutTitle", "address", "bannerUrl", "email", "id", "phoneNumbers", "sched", "servicesDesc", "servicesTitle", "title") SELECT "aboutDesc", "aboutTitle", "address", "bannerUrl", "email", "id", "phoneNumbers", "sched", "servicesDesc", "servicesTitle", "title" FROM "LocalChambers";
DROP TABLE "LocalChambers";
ALTER TABLE "new_LocalChambers" RENAME TO "LocalChambers";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
