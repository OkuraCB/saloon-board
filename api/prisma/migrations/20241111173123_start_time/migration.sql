/*
  Warnings:

  - Added the required column `endTime` to the `scheduled` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startTime` to the `scheduled` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `scheduled` ADD COLUMN `endTime` DATETIME(3) NOT NULL,
    ADD COLUMN `startTime` DATETIME(3) NOT NULL;
