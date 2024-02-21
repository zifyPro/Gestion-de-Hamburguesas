import { NextResponse } from 'next/server';
import { prisma } from '@/libs/prisma';

export async function GET() {
	const ventas = await prisma.ventas.findMany({
		include: {
			productos: true,
		},
	});

	ventas.forEach((venta) => {
		let precioTotal = 0;
		venta.productos.forEach((producto) => {
			precioTotal += producto.price;
		});
		venta.precioTotal = precioTotal;
	});
	return NextResponse.json(ventas);
}

export async function POST(request) {
	const { nombre, telefono, direccion, numeroDeOrden, titleProductos } =
		await request.json();
	const newVenta = await prisma.ventas.create({
		data: {
			nombre,
			telefono,
			direccion,
			numeroDeOrden,
			productos: {
				connect: {
					title: titleProductos,
				},
			},
		},
	});
	return NextResponse.json(newVenta);
}
