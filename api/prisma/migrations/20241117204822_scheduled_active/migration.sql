/*
  Warnings:

  - Added the required column `active` to the `scheduled` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `scheduled` ADD COLUMN `active` BOOLEAN NOT NULL;
