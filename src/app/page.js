import Home from "@/components/Home/Home";
import "tailwindcss/tailwind.css";

export default function HomeP() {
  return (
    <>
      <Home></Home>
      <a href="/about">
        <button>ABOUT</button>
      </a>
    </>
  );
}
