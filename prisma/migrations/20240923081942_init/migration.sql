/*
  Warnings:

  - Added the required column `member_id` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `member_id` VARCHAR(191) NOT NULL;
