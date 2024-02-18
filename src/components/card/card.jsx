import Swal from 'sweetalert2'
import { FaCartPlus } from "react-icons/fa6";


const Card = (product) => {



  const alertAdd =( )=>{
    Swal.fire({
      position: "center",
      icon: "success",
      title:product.title + " en el carrito" ,
      showConfirmButton: false,
      timer: 1500,
      background: '#19191A', // fondo negro
      color: '#A2A2A3' // texto blanco
    });
  };

  const alertDetails =()=>{
    Swal.fire({
      title: product.title,
      text: product.description,
      imageUrl: product.img,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
      background: '#19191A', // fondo negro
      color: '#A2A2A3' // texto blanco
    });
    
  }

  return (



<div class="mx-auto bg-custom-gray rounded-xl shadow-md overflow-hidden w-[92vw] m-4 h-32">
  <div class="flex">
    <div class="flex-shrink-0">
      <img class="h-32 w-3/5" src={product?.img} alt="Imagen de comida"/>
    </div>
    <div class="-ml-20">
      <div class="uppercase tracking-wide text-gray-text font-semibold w-32 relative  text-lg " >{product?.title}</div>
      <p class="mt-2 text-gray-500  h-13  line-clamp-3 w-38">{product?.description}</p>
      <button class="block text-lg leading-tight font-medium text-yellow-500 hover:underline -mt-1" onClick={alertDetails}>Leer más</button>
    </div>
    <div class="p-2 mt-auto">
      <div class="text-lg font-bold text-white -mt-[5vh]">{"$"+product?.price}</div>
      <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-[6.7vh]" onClick={alertAdd}>
      <FaCartPlus />
      </button>
    </div>
  </div>
</div>

  );
};
export default Card;
