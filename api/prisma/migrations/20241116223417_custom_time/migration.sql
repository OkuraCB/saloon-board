/*
  Warnings:

  - Made the column `nextAction` on table `actions` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `actions` MODIFY `create_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `nextAction` TEXT NOT NULL;
