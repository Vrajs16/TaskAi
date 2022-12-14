/*
  Warnings:

  - You are about to drop the `Appointments` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Appointments";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Appointment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userID" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "start" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
