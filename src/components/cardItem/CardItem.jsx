'use-client';

import { useState } from 'react';

const CardItem = ({ item }) => {
	const [quantity, setQuantity] = useState(0);

	const handleIncrement = () => {
		setQuantity(quantity + 1);
	};
	const handleDecrement = () => {
		if (quantity >= 1) {
			setQuantity(quantity - 1);
		}
	};
	return (
		<div className=" flex justify-center  ">
			<div className=" bg-white  lg:w-3/5 shadow-md m-5 rounded-lg flex flex-row justify-between">
				<div className=" flex flex-col w-auto">
					<h1 className="text-black font-sans font-semibold italic text-left ml-4 sm:text-5xl m-5 text-xl">
						{item.title}
					</h1>
					<h1 className="text-gray-500 font-sans font-semibold italic text-left ml-4 sm:text-xl m-4 text-xs">
						{item.description}
					</h1>
					<h1 className="text-black font-sans font-semibold italic text-left ml-4 sm:text-xl m-4 text-xs">
						${item.price}
					</h1>
					<div className="flex  items-center">
						<button
							onClick={handleDecrement}
							className=" font-sans font-semibold italic   sm:text-xl m-4 text-xs bg-slate-800 hover:bg-slate-700 w-7 text-white  rounded-lg"
						>
							-
						</button>
						<h1 className="text-black font-sans font-semibold italic text-left ml-4 sm:text-xl m-4 text-xs">
							{quantity}
						</h1>
						<button
							onClick={handleIncrement}
							className="font-sans font-semibold italic   sm:text-xl m-4 text-xs bg-slate-800 hover:bg-slate-700 w-7 text-white  rounded-lg"
						>
							+
						</button>
					</div>
				</div>
				<div>
					<img src={item.image} alt={item.title} className="w-64 h-64 p-8" />
				</div>
			</div>
		</div>
	);
};
export default CardItem;
