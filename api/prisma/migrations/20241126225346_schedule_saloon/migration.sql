/*
  Warnings:

  - Added the required column `saloonId` to the `scheduled` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `scheduled` ADD COLUMN `saloonId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `scheduled` ADD CONSTRAINT `scheduled_saloonId_fkey` FOREIGN KEY (`saloonId`) REFERENCES `saloons`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
