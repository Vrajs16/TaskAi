/*
  Warnings:

  - Added the required column `password` to the `UserExample` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserExample" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT
);
INSERT INTO "new_UserExample" ("email", "id", "name") SELECT "email", "id", "name" FROM "UserExample";
DROP TABLE "UserExample";
ALTER TABLE "new_UserExample" RENAME TO "UserExample";
CREATE UNIQUE INDEX "UserExample_email_key" ON "UserExample"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
