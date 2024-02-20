'use client';
import axios from 'axios';
import { useState } from 'react';
import Link from 'next/link';
import Swal from 'sweetalert2';

const CreateProduct = () => {
	const [data, setData] = useState({
		title: '',
		description: '',
		price: '',
		img: '',
		type: '',
	});

	const handleEvent = (event) => {
		setData({ ...data, [event.target.name]: event.target.value });
	};

	const handleSubmit = async () => {
		event.preventDefault();
		const priceAsInt = parseInt(data.price);
		const dataWithIntPrice = { ...data, price: priceAsInt };
		const API_URL =
			process.env.NODE_ENV === 'development'
				? process.env.NEXT_PUBLIC_URL_REQUESTS_PRODUCTOS_LOCAL
				: process.env.NEXT_PUBLIC__PROD_URL_REQUESTS_PRODUCTOS_DEPLOY;
		const response = await axios.post(API_URL, dataWithIntPrice);
		Swal.fire({
			title: `${data.title} `,
			text: `se creo correctamente`,
			icon: 'success',
			background: '#19191A', // fondo negro
			color: '#A2A2A3', // texto blanco
		});
		return response;
	};
	const inputClassName =
		'font-sans block text-sm leading-5 ml-1 w-11/12 py-2 px-3 border-2 border-cyan-600 text-slate-500 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-cyan-200 focus:border-cyan-500 dark:text-slate-400 dark:placeholder:text-slate-600 dark:bg-custom-gray dark:border-cyan-500 dark:focus:ring-cyan-900 dark:focus:border-cyan-600';

	return (
		<div className="flex flex-col bg-custom-gray sm: w-3/4 md:w-2/4 mx-auto mt-2 rounded-lg ">
			<form className="flex flex-col mx-auto md:w-2/5  ">
				<label className="mt-4 text-gray-text font-semibold">
					<input
						type="text"
						placeholder="nombre de producto"
						name="title"
						value={data.title}
						onChange={handleEvent}
						className={`${inputClassName}`}
					/>
				</label>
				<label className="mt-4 text-gray-text font-semibold">
					<input
						type="text"
						placeholder="description de producto"
						name="description"
						value={data.description}
						onChange={handleEvent}
						className={`${inputClassName}`}
					/>
				</label>
				<label className="mt-4 text-gray-text font-semibold">
					<input
						type="text"
						placeholder="link de la imagen"
						name="img"
						value={data.img}
						onChange={handleEvent}
						className={`${inputClassName}`}
					/>
				</label>
				<label className="mt-4 text-gray-text font-semibold">
					<input
						type="text"
						placeholder="precio del producto"
						name="price"
						value={data.price}
						onChange={handleEvent}
						className={`${inputClassName}`}
					/>
				</label>
				<select
					className={`${inputClassName} mt-4`}
					name="type"
					value={data.type}
					onChange={handleEvent}
				>
					<option value="definir">sin definir</option>
					<option value="comida">comida</option>
					<option value="bebidas">bebida</option>
					<option value="promos">promos</option>
					<option value="puntos">puntos</option>
				</select>
				<div className=" flex items-center justify-center mb-2 mx-auto	  ">
					<button className="bg-red-800 mt-4 w-2/4 lg:w-32 rounded-lg h-10 hover:bg-red-600 font-sans block text-sm leading-5 mx-1 ">
						<Link href={'/panelAdmin/Productos'}>Regresar</Link>
					</button>
					<button
						onClick={handleSubmit}
						className="bg-sky-800 mt-4 w-2/4 lg:w-32 rounded-lg h-10 hover:bg-sky-600 font-sans block text-sm leading-5"
					>
						Crear Producto
					</button>
				</div>
			</form>
		</div>
	);
};
export default CreateProduct;
