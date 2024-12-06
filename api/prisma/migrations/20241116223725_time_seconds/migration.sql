/*
  Warnings:

  - You are about to alter the column `create_time` on the `actions` table. The data in that column could be lost. The data in that column will be cast from `DateTime(3)` to `DateTime(1)`.

*/
-- AlterTable
ALTER TABLE `actions` MODIFY `create_time` DATETIME(1) NOT NULL DEFAULT CURRENT_TIMESTAMP(1);
