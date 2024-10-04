/*
  Warnings:

  - You are about to drop the column `senha` on the `usuario` table. All the data in the column will be lost.
  - Added the required column `usuario_cpf` to the `usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuario_senha` to the `usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `usuario` DROP COLUMN `senha`,
    ADD COLUMN `usuario_cpf` VARCHAR(191) NOT NULL,
    ADD COLUMN `usuario_senha` VARCHAR(191) NOT NULL;
