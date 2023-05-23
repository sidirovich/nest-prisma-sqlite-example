/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Bookmaker" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "ratingCount" INTEGER,
    "ios" TEXT NOT NULL,
    "android" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Bookmaker_id_key" ON "Bookmaker"("id");
