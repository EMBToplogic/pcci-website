-- CreateTable
CREATE TABLE "Chambers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "parentRegion" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    CONSTRAINT "Chambers_parentRegion_fkey" FOREIGN KEY ("parentRegion") REFERENCES "Region" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Chapters" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "chapterName" TEXT NOT NULL,
    "lat" DECIMAL(6,3) NOT NULL,
    "long" DECIMAL(6,3) NOT NULL,
    "parentChamber" TEXT NOT NULL,
    CONSTRAINT "Chapters_parentChamber_fkey" FOREIGN KEY ("parentChamber") REFERENCES "Chambers" ("title") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Chambers_title_key" ON "Chambers"("title");
