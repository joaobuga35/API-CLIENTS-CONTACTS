/*
  Warnings:

  - You are about to drop the column `password` on the `contacts` table. All the data in the column will be lost.
  - Added the required column `photo` to the `contacts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "contacts" DROP COLUMN "password",
ADD COLUMN     "photo" TEXT NOT NULL;
