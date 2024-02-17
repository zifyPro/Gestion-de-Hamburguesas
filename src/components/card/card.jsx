const Card = (product) => {
	return (
		<div class="mx-auto bg-custom-gray rounded-xl shadow-md overflow-hidden w-11/12 m-5 h-32">
			<div class="flex ">
				<div class="flex-shrink-0">
					<img class="h-32 w-3/5" src={product?.img} alt="Imagen de comida" />
				</div>
				<div class="-ml-20">
					<div class="uppercase tracking-wide  text-gray-text font-semibold w-32 relative  text-lg ">
						{product?.title}
					</div>
					<p class="mt-2 text-gray-500  ">{product?.description}</p>
					<a
						href="#"
						class="block text-lg leading-tight font-medium text-yellow-500 hover:underline -mt-1"
					>
						Leer más
					</a>
				</div>
				<div class="p-2 mt-7">
					<div class="text-lg font-bold text-white">{'$' + product?.price}</div>
					<button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4">
						Ordenar
					</button>
				</div>
			</div>
		</div>
	);
};
export default Card;
