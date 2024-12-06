/*
  Warnings:

  - Added the required column `price` to the `services` table without a default value. This is not possible if the table is not empty.
  - Added the required column `saloonId` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `services` ADD COLUMN `price` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `saloonId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Saloon` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `create_time` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `update_time` TIMESTAMP(0) NULL,
    `name` TEXT NOT NULL,
    `workDays` VARCHAR(7) NOT NULL DEFAULT '1000001',
    `opening` INTEGER NOT NULL,
    `closing` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ClosedDays` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `saloonId` INTEGER NOT NULL,
    `closedAt` DATE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ServicesToUser` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ServicesToUser_AB_unique`(`A`, `B`),
    INDEX `_ServicesToUser_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_saloonId_fkey` FOREIGN KEY (`saloonId`) REFERENCES `Saloon`(`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ServicesToUser` ADD CONSTRAINT `_ServicesToUser_A_fkey` FOREIGN KEY (`A`) REFERENCES `services`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ServicesToUser` ADD CONSTRAINT `_ServicesToUser_B_fkey` FOREIGN KEY (`B`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
