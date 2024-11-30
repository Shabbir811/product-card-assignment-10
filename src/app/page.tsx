import Image from "next/image";

import camera from "../../public/camera.jpg"
import moblie from "../../public/iphone.jpg"
import laptop from "../../public/laptop.jpg"

export default function Home() {
  return (
    <div 
      className="min-h-screen bg-slate-400 text-center  flex justify-center items-center flex-col"
    >
      <h1 className="text-blue-800 text-5xl font-extrabold">PRODUCTS</h1>

      <div 
        className="products w-screen h-fit flex justify-center gap-8 flex-wrap"
      >
        <div className="mobile h-full w-[358px] sm:w-1/2 md:w-[280px] text-black border rounded-md">
          <div className="img-div w-full h-60 ">
            <Image 
              src={moblie} 
              alt={"mobile"}
              width={300}
            className="w-full h-full  shadow-lg "
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-600">Product Name: MOBILE</h2>
          <h2 className="font-semibold">Product Price: 1350$</h2>
          <h2 className="font-semibold">Product Rating: 4.3</h2>
          <button
            className=" h-12 w-40 bg-gray-600 rounded-lg hover:bg-gray-700 text-white"
          >Buy Now
          </button>
        </div>

{/* ------------------------------------------------------------------------------ */}

        <div className="laptop h-full  w-[358px] sm:w-1/2 md:w-[280px]  text-black border rounded-md">
          <div className="img-div w-full h-60 ">
            <Image 
              src={laptop} 
              alt={"laptop"}
              width={300}
            className="w-full h-full  shadow-lg "
            />
          </div>
          <h2 className="text-2xl font-bold text-red-600">Product Name: LENOVO</h2>
          <h2 className="font-semibold">Product Price: 1750$</h2>
          <h2 className="font-semibold">Product Rating: 3.8</h2>
          <button
            className=" h-12 w-40 bg-red-600 rounded-lg hover:bg-red-700 text-white"
          >Buy Now
          </button>
        </div>

        {/* -------------------------------------------------------------------------------------- */}

        <div className="camera h-full w-[358px] sm:w-1/2 md:w-[280px]  text-black border rounded-md">
          <div className="img-div w-full h-60 ">
            <Image 
              src={camera} 
              alt={"camera"}
              width={300}
            className="w-full h-full shadow-lg "
            />
          </div>
          <h2 className="text-2xl font-bold">Product Name: CAMERA</h2>
          <h2 className="font-semibold">Product Price: 200$</h2>
          <h2 className="font-semibold">Product Rating: 4.8</h2>
          <button
            className="h-12 w-40 bg-black rounded-lg hover:bg-gray-700 text-white"
          >Buy Now
          </button>
        </div>

        
      </div>

    </div>
  );
}
