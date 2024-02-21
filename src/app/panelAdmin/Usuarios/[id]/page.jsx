'use client';
import axios from 'axios';
import Link from 'next/link';
import { GiTrophy } from 'react-icons/gi';

const Page = async ({ params }) => {
	const API_URL =
		process.env.NODE_ENV === 'development'
			? process.env.NEXT_PUBLIC_URL_REQUESTS_USERS_LOCAL
			: process.env.NEXT_PUBLIC_URL_REQUESTS_USERS_DEPLOY;
	const response = await axios(`${API_URL}/${params.id}`);
	const user = response.data;

	return (
		<>
			<div className="flex flex-col justify-start bg-custom-gray mt-2 w-3/4  mx-auto">
				<button className="bg-red-800 mt-2 w-2/4 lg:w-32 rounded-lg h-10 hover:bg-red-600 font-sans block text-sm leading-5 mx-1 ">
					<Link href={'/panelAdmin/Usuarios'}>Atras</Link>
				</button>

				<div className="flex justify-center items-center bg-custom-gray mt-4 w-full text-gray-text font-semibold mb-2">
					<div className="flex flex-col  md:w-3/4">
						<div className="flex flex-row justify-around">
							<h1 className="text-3xl">{user[0].username}</h1>
							<div className="flex flex-row items-center text-3xl mb-2 ">
								<GiTrophy />
								<h1 className="ml-4">700</h1>
							</div>
						</div>
						<hr />

						<section className="juegosUd">
							<div className="grid grid-cols-[1fr,100px] mt-5 justify-around ">
								<h1 className="m-2">Compro 1 Billie Cheese por : $5000</h1>
								<h1 className="m-2">10/2/2024</h1>
								<h1 className="m-2">Compro 1 Billie Cheese por : $5000</h1>
								<h1 className="m-2">10/2/2024</h1>
								<h1 className="m-2">1232456123</h1>
								<h1 className="m-2">10/2/2024</h1>
								{/* {user[0].ventas.length > 0 ? (
									user[0].ventas.map((license) => (
										<div key={license.id} className="gap-2">
											<p>ventas: {license.nombre}</p>
											<p>productos: {license.producto.title}</p>{' '}
										</div>
									))
								) : (
									<p>El usuario no realizo ninguna compra</p>
								)} */}
							</div>
						</section>
					</div>
				</div>
			</div>
		</>
	);
};
export default Page;
