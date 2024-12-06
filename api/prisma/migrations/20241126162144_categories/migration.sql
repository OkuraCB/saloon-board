/*
  Warnings:

  - You are about to drop the `ClosedDays` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Saloon` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `categoryId` to the `services` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `ClosedDays` DROP FOREIGN KEY `ClosedDays_saloonId_fkey`;

-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `users_saloonId_fkey`;

-- AlterTable
ALTER TABLE `services` ADD COLUMN `categoryId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `ClosedDays`;

-- DropTable
DROP TABLE `Saloon`;

-- CreateTable
CREATE TABLE `saloons` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `create_time` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `update_time` TIMESTAMP(0) NULL,
    `name` TEXT NOT NULL,
    `workDays` INTEGER NOT NULL DEFAULT 62,
    `opening` INTEGER NOT NULL,
    `closing` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `closed_days` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `saloonId` INTEGER NOT NULL,
    `closedAt` DATE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categories` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_saloonId_fkey` FOREIGN KEY (`saloonId`) REFERENCES `saloons`(`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `closed_days` ADD CONSTRAINT `closed_days_saloonId_fkey` FOREIGN KEY (`saloonId`) REFERENCES `saloons`(`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `services` ADD CONSTRAINT `services_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `categories`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
