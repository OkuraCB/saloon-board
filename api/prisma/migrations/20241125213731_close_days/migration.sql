-- AlterTable
ALTER TABLE `scheduled` ADD COLUMN `pending` BOOLEAN NOT NULL DEFAULT true;

-- AddForeignKey
ALTER TABLE `ClosedDays` ADD CONSTRAINT `ClosedDays_saloonId_fkey` FOREIGN KEY (`saloonId`) REFERENCES `Saloon`(`id`) ON DELETE NO ACTION ON UPDATE CASCADE;
