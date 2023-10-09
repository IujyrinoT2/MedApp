-- CreateTable
CREATE TABLE "address" (
    "id" SERIAL NOT NULL,
    "country" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "suite" TEXT,
    "floor" INTEGER,
    "appartment" INTEGER,

    CONSTRAINT "address_pkey" PRIMARY KEY ("id")
);
