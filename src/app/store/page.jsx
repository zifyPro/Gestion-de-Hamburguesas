'use client';
import Burgers from '@/components/burgers/Burger';
import Link from 'next/link';
import React from 'react';

const page = () => {
	return (
		<section className='bg-black rounded-lg w-[95vw] mx-auto'>
			<div className="flex justify-center  h-5">
				<button className="bg-slate-800 hover:bg-slate-700  text-white rounded m-3 w-20 shadow-md md:w-24 md:m-20 h-10 font-sans font-semibold italic ">
					Burgers
				</button>
				<button className="bg-slate-800 hover:bg-slate-700 text-white rounded m-3 w-20 shadow-md md:w-24 md:m-20 h-10 font-sans font-semibold italic ">
					<Link href="/store/promos">Promos</Link>
				</button>
				<button className="bg-slate-800 hover:bg-slate-700 text-white rounded m-3 w-20 shadow-md md:w-24 md:m-20 h-10 font-sans font-semibold italic ">
					<Link href="/store/bebidas">Bebidas</Link>
				</button>
			</div>
			<Burgers />
		</section>
	);
};

export default page;
