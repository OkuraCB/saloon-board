/*
  Warnings:

  - You are about to drop the `Scheduled` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Services` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Scheduled` DROP FOREIGN KEY `Scheduled_serviceId_fkey`;

-- DropTable
DROP TABLE `Scheduled`;

-- DropTable
DROP TABLE `Services`;

-- CreateTable
CREATE TABLE `services` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` TEXT NOT NULL,
    `time` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `scheduled` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `authorName` TEXT NOT NULL,
    `authorNumber` TEXT NOT NULL,
    `serviceId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `scheduled` ADD CONSTRAINT `scheduled_serviceId_fkey` FOREIGN KEY (`serviceId`) REFERENCES `services`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
