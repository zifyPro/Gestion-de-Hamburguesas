import React from 'react';
import { GiTrophy } from 'react-icons/gi';
import Users from '../Users/Users';
const Navbar = () => {
	return (
		<div className="flex flex- justify-around items-center pt-6">
			<Users />
			<button className=" text-white scale-150">
				<a>
					<GiTrophy className="w-10 h-7 text-white " />
				</a>
			</button>
		</div>
	);
};
export default Navbar;
