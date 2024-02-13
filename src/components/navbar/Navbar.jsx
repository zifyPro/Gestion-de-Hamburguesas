import React from 'react';
import { GiTrophy } from 'react-icons/gi';
import Users from '../Users/Users';
const Navbar = () => {
	return (
		<div className="flex flex- justify-around items-center pt-6">
			<Users />
			<button className=" text-white scale-150 flex flex-row">
				<a className="flex flex-row items-center font-sans font-semibold italic text-xs text-nowrap my-auto mx-2 ">
					<GiTrophy className="w-10 h-7 text-white " />
					700
				</a>
			</button>
		</div>
	);
};
export default Navbar;
