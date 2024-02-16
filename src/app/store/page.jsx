'use client';
import Burgers from '@/components/burgers/Burger';
import Link from 'next/link';
import React from 'react';

const page = () => {
	return (
		<>
			<div className="flex justify-center items-center">
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
			<br />
			<br />
			<br />
			<Burgers />
		</>
	);
};

export default page;
