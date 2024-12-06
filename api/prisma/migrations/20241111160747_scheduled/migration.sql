-- CreateTable
CREATE TABLE `Scheduled` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `authorName` TEXT NOT NULL,
    `authorNumber` TEXT NOT NULL,
    `serviceId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Scheduled` ADD CONSTRAINT `Scheduled_serviceId_fkey` FOREIGN KEY (`serviceId`) REFERENCES `Services`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
