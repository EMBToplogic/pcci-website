/*
  Warnings:

  - A unique constraint covering the columns `[chapterUrl]` on the table `LocalChambers` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "LocalChambers_chapterUrl_key" ON "LocalChambers"("chapterUrl");
