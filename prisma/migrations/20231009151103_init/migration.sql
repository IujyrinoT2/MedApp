/*
  Warnings:

  - A unique constraint covering the columns `[personId]` on the table `medic` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "medic" ADD COLUMN     "personId" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "person" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "address_id" INTEGER NOT NULL,

    CONSTRAINT "person_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "person_email_key" ON "person"("email");

-- CreateIndex
CREATE UNIQUE INDEX "person_address_id_key" ON "person"("address_id");

-- CreateIndex
CREATE UNIQUE INDEX "medic_personId_key" ON "medic"("personId");

-- AddForeignKey
ALTER TABLE "medic" ADD CONSTRAINT "medic_personId_fkey" FOREIGN KEY ("personId") REFERENCES "person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
