'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Link from 'next/link';
import { IoMdArrowRoundBack } from 'react-icons/io';

const Page = () => {
	const [allUsers, setAllUsers] = useState([]);
	const [filteredUsers, setFilteredUsers] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const API_URL =
					process.env.NODE_ENV === 'development'
						? process.env.NEXT_PUBLIC_URL_REQUESTS_USERS_LOCAL
						: process.env.NEXT_PUBLIC_PROD_URL_REQUESTS_USERS_DEPLOY;
				const response = await axios(API_URL);
				setAllUsers(response.data);
				setFilteredUsers(response.data);
			} catch (error) {
				console.error('Error fetching users:', error);
			}
		};
		fetchUsers();
	}, []);

	// Función para eliminar un usuario por id

	const deleteUser = async (userId) => {
		try {
			const API_URL =
				process.env.NODE_ENV === 'development'
					? process.env.NEXT_PUBLIC_URL_REQUESTS_USERS_DELETE_LOCAL
					: process.env.NEXT_PUBLIC__PROD_URL_REQUESTS_USERS_DELETE_DEPLOY;
			await axios.delete(API_URL, {
				data: { userId },
			});

			Swal.fire({
				title: 'Do you want to delete this user?',
				text: "You won't be able to revert this",
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Yes, delete it',
				background: '#333333',
				color: '#FF9500',
			}).then((result) => {
				if (result.isConfirmed) {
					Swal.fire({
						title: 'Deleted!',
						text: 'User has been deleted.',
						icon: 'success',
						background: '#333333',
						color: '#FF9500',
					});
					// Actualizar el estado para reflejar el usuario eliminado
					setFilteredUsers((prevUsers) =>
						prevUsers.filter((user) => user.user_id !== userId)
					);
					setAllUsers((prevUsers) =>
						prevUsers.filter((user) => user.user_id !== userId)
					);
				}
			});
		} catch (error) {
			console.error('Error deleting user:', error);
		}
	};
	/////////////////////////
	const handleSearchChange = (event) => {
		const searchTerm = event.target.value;
		setSearchTerm(searchTerm);

		// Filtrar la lista de usuarios en función del término de búsqueda
		const filteredUsers = allUsers.filter((user) =>
			user.username.toLowerCase().includes(searchTerm.toLowerCase())
		);

		setFilteredUsers(filteredUsers);
	};

	const inputClassName =
		'font-sans block text-sm leading-5 ml-1 w-11/12 py-2 px-3 border-2 border-cyan-600 text-slate-500 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-cyan-200 focus:border-cyan-500 dark:text-slate-400 dark:placeholder:text-slate-600 dark:bg-custom-gray dark:border-cyan-500 dark:focus:ring-cyan-900 dark:focus:border-cyan-600';
	return (
		<div className="flex flex-col justify-center items-center bg-custom-gray text-white md:w-2/4 mx-auto mt-4 rounded-lg">
			<div className="flex justify-start w-full">
				<div>
					<button className="bg-red-800 mt-2 w-20 md:w-2/4 lg:w-32 rounded-lg h-10 hover:bg-red-600 font-sans block text-sm leading-5 mx-1 ">
						<Link href={'/panelAdmin/'}>
							<IoMdArrowRoundBack className="transform scale-150 mx-auto" />
						</Link>
					</button>
				</div>
			</div>
			<h1 className="mt-4 text-gray-text font-semibold mb-2">USERS</h1>

			<div className=" w-60">
				<input
					type="text"
					className={`${inputClassName}`}
					value={searchTerm}
					onChange={handleSearchChange}
					placeholder="search by username"
				/>
			</div>
			<div className="text-gray-text font-semibold mb-2 overflow-x-auto flex">
				<table className="rounded-lg border-white text-center bg-custom-gray mt-4">
					<thead className="border-white">
						<tr className="border-white border">
							<th className="p-2 md:p-4 ">Nombre</th>
							<th className="p-2 md:p-4 ">Email</th>
							<th className="p-2 md:p-4">Acciones</th>
						</tr>
					</thead>
					<tbody>
						{filteredUsers.map((user) => (
							<tr key={user.id} className=" bg-custom-gray text-xs md:text-lg">
								<td className="p-2 md:p-4 text-left w-8 border-white border">
									<a href={`/panelAdmin/Usuarios/${user.id}`}>
										{user.username}
									</a>
								</td>
								<td className="p-2 ml-2 md:p-4 text-left truncate border-white border">
									<a href={`/panelAdmin/Usuarios/${user.id}`}>{user.email}</a>
								</td>
								<td className="p-2 md:p-4 text-center border-white border">
									<button onClick={() => deleteUser(user.user_id)}>🗑️</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Page;
