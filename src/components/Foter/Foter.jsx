import React from 'react';
import { MdLocationOn } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

const Foter = () => {
	return (
		<section className="mx-auto w-full bg-custom-gray text-gray-text">
			<div className="flex flex-col justify-center items-center">
				<img className="w-8 mx-auto mt-3 pt-3 " src="copy.png" alt="" />
				<h1 className="font-sans font-semibold text-center italic mt-4 mb-2">
					TODOS LOS DERECHOS RESERVADOS 2024.
				</h1>
				<div className="flex flex-row items-center text-gray-text font-semibold mb-2 gap-3">
					<MdLocationOn />
					<h1 className="font-sans font-semibold">Monteros - Tucuman</h1>
				</div>
				<div className="flex flex-row items-center text-gray-text font-semibold mb-2 gap-3">
					<FaWhatsapp />
					<h1 className="font-sans font-semibold">+ 54 9 3863 69-8557</h1>
				</div>
				<div className="flex flex-row items-center text-gray-text font-semibold mb-2 gap-3">
					<FaFacebook />
					<FaInstagram />
				</div>
			</div>
		</section>
	);
};

export default Foter;
