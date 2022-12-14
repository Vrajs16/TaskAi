/*
  Warnings:

  - Added the required column `iCal` to the `Appointment` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Appointment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userID" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "start" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "iCal" TEXT NOT NULL
);
INSERT INTO "new_Appointment" ("description", "end", "id", "start", "title", "userID") SELECT "description", "end", "id", "start", "title", "userID" FROM "Appointment";
DROP TABLE "Appointment";
ALTER TABLE "new_Appointment" RENAME TO "Appointment";
CREATE UNIQUE INDEX "Appointment_iCal_key" ON "Appointment"("iCal");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
