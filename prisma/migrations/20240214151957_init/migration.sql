-- CreateTable
CREATE TABLE "Productos" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "img" TEXT NOT NULL,

    CONSTRAINT "Productos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ventas" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "numeroDeOrden" SERIAL NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "Ventas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProductosToVentas" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_user_id_key" ON "User"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_ProductosToVentas_AB_unique" ON "_ProductosToVentas"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductosToVentas_B_index" ON "_ProductosToVentas"("B");

-- AddForeignKey
ALTER TABLE "Ventas" ADD CONSTRAINT "Ventas_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductosToVentas" ADD CONSTRAINT "_ProductosToVentas_A_fkey" FOREIGN KEY ("A") REFERENCES "Productos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductosToVentas" ADD CONSTRAINT "_ProductosToVentas_B_fkey" FOREIGN KEY ("B") REFERENCES "Ventas"("id") ON DELETE CASCADE ON UPDATE CASCADE;
