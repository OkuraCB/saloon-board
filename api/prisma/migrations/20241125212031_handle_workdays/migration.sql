/*
  Warnings:

  - You are about to alter the column `workDays` on the `Saloon` table. The data in that column could be lost. The data in that column will be cast from `VarChar(7)` to `Int`.

*/
-- AlterTable
ALTER TABLE `Saloon` MODIFY `workDays` INTEGER NOT NULL DEFAULT 62;
