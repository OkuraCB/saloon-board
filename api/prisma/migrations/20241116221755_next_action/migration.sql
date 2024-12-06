/*
  Warnings:

  - You are about to drop the column `menu` on the `actions` table. All the data in the column will be lost.
  - You are about to drop the column `nextMenu` on the `actions` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[serviceId]` on the table `scheduled` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `actions` DROP COLUMN `menu`,
    DROP COLUMN `nextMenu`,
    ADD COLUMN `nextAction` TEXT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `scheduled_serviceId_key` ON `scheduled`(`serviceId`);
