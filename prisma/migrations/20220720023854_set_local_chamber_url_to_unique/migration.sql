/*
  Warnings:

  - A unique constraint covering the columns `[parentChapter]` on the table `LocalChambers` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "LocalChambers_parentChapter_key" ON "LocalChambers"("parentChapter");
