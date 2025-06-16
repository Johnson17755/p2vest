import Image from "next/image";
import { Button } from "@/components/button";
import phone from "@/assets/images/phone.svg";
import phones from "@/assets/images/phone1.svg";
import perfume from "@/assets/images/perfume.svg";
import bag from "@/assets/images/bag.svg";
import shoe from "@/assets/images/shoe.svg";
import iphone from "@/assets/images/iphone.svg";
import yellow from "@/assets/images/yellow.svg";
import cake from "@/assets/images/cake.svg";
import canvas from "@/assets/images/canvas.svg";
import blue from "@/assets/images/blue.svg";
import laptop from "@/assets/images/laptop.svg";

export default function Shopping() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 -mt-10 relative z-10">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 pt-38">
          {/* Left Content */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-black">
              Shop Online
            </h1>

            <div className="space-y-4 text-gray-700 max-w-md mx-auto lg:mx-0">
              <p className="text-lg">
                Experience the world at your fingertips with our seamless online
                shopping platform.
              </p>

              <p className="text-base">
                From the latest fashion trends to must-have gadgets, shop the
                world's best brands and products from the comfort of your own
                home.
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-medium text-gray-600">
                Get Revive on your phone
              </p>
              <Button className="bg-black text-white hover:bg-gray-800 px-6 py-3 rounded-full">
                Download the app
              </Button>
            </div>
          </div>

          {/* Center Phone Mockup */}
          <div className="relative w-64 md:w-80 lg:w-96 h-auto">
            {/* Base Image (Bottom) */}
            <Image
              src={phones}
              alt="Phone showing ASOS shopping app"
              width={300}
              height={600}
              className="w-full h-auto rounded-[2rem] object-cover"
            />

            {/* Overlay Background Image (Top) */}
            <div className="absolute inset-3 m-5 pt-12">
              <Image
                src={phone}
                alt="Overlay"
                width={350}
                height={500}
                className="object-cover opacity-100"
              />
            </div>
          </div>

          {/* Right Product Grid */}
          <div className="flex-1 w-full lg:w-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-4">
              {/* Row 1 */}
              <div className="aspect-square rounded-lg overflow-hidden bg-pink-100 flex items-center justify-center">
                <Image
                  src={perfume}
                  alt="perfume product"
                  width={150}
                  height={150}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="aspect-square rounded-lg overflow-hidden bg-teal-400">
                <Image
                  src={cake}
                  alt="birthday cake"
                  width={150}
                  height={150}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="aspect-[4/5] rounded-lg overflow-hidden bg-pink-200 row-span-2">
                <Image
                  src={blue}
                  alt="Pink sneakers"
                  width={150}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Row 2 */}
              <div className="aspect-square rounded-lg overflow-hidden bg-coral-300">
                <Image
                  src={shoe}
                  alt="shoe product"
                  width={150}
                  height={150}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="aspect-square rounded-lg overflow-hidden bg-blue-300">
                <Image
                  src={canvas}
                  alt="shoes canvas"
                  width={150}
                  height={150}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Row 3 */}
              <div className="aspect-square rounded-lg overflow-hidden bg-yellow-400">
                <Image
                  src={bag}
                  alt="designer bag"
                  width={150}
                  height={150}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="aspect-square rounded-lg overflow-hidden bg-beige-200">
                <Image
                  src={yellow}
                  alt="clothes brands"
                  width={150}
                  height={150}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="aspect-[4/5] rounded-lg overflow-hidden bg-gray-100 row-span-2">
                <Image
                  src={laptop}
                  alt="Laptop"
                  width={150}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Row 4 */}
              <div className="aspect-square rounded-lg overflow-hidden bg-gray-200 col-span-2 md:col-span-1">
                <Image
                  src={iphone}
                  alt="latest Phone"
                  width={150}
                  height={150}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
