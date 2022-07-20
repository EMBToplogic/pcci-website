-- CreateTable
CREATE TABLE "LocalChambers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "bannerUrl" TEXT NOT NULL,
    "servicesTitle" TEXT NOT NULL,
    "servicesDesc" TEXT NOT NULL,
    "aboutTitle" TEXT NOT NULL,
    "aboutDesc" TEXT NOT NULL,
    "phoneNumbers" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "sched" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Services" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "parentLCId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "dateEncoded" DATETIME NOT NULL,
    "encodedBy" TEXT NOT NULL,
    CONSTRAINT "Services_parentLCId_fkey" FOREIGN KEY ("parentLCId") REFERENCES "LocalChambers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Events" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "parentLCId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "eventDate" DATETIME NOT NULL,
    "eventVenue" TEXT NOT NULL,
    "dateEncoded" DATETIME NOT NULL,
    "encodedBy" TEXT NOT NULL,
    CONSTRAINT "Events_parentLCId_fkey" FOREIGN KEY ("parentLCId") REFERENCES "LocalChambers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "About" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "parentLCId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "subHead" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    CONSTRAINT "About_parentLCId_fkey" FOREIGN KEY ("parentLCId") REFERENCES "LocalChambers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
