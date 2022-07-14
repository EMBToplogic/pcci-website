/*
  Warnings:

  - A unique constraint covering the columns `[parentRegion]` on the table `Chambers` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Chambers_parentRegion_key" ON "Chambers"("parentRegion");
