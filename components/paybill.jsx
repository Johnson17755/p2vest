import Image from "next/image";
import { Button } from "@/components/button";
import bg from "@/assets/images/bg.svg";
import spotify from "@/assets/images/spotify.svg";
import emirates from "@/assets/images/Emirates.svg";
import dstv from "@/assets/images/dstv.svg";
import netflix from "@/assets/images/Netflix.svg";
import mtn from "@/assets/images/MTN.svg";

export default function PayBillsSection() {
  const serviceIcons = [
    { src: spotify, alt: "Spotify", date: 2 },
    { src: emirates, alt: "Emirates", date: 6 },
    { src: dstv, alt: "DStv", date: 17 }, // Adjusted to fit the image better
    { src: netflix, alt: "Netflix", date: 22 },
    { src: mtn, alt: "MTN", date: 26 }, // Adjusted to fit the image better
  ];

  return (
    // <div className="relative w-full min-h-screen bg-[#7aacbd] overflow-hidden flex items-center justify-center p-4  md:p-8 pt-60">
    <div className="relative w-full min-h-screen bg-[#7aacbd] overflow-hidden flex items-center justify-center p-4 md:p-8">
      {/* Background Image */}
      <Image
        src={bg}
        alt="Man on couch with remote"
        fill
        quality={100}
        className="z-0"
        style={{ objectFit: "cover" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className=" p-6 md:p-8 space-y-6 max-w-md lg:max-w-none mx-auto lg:mx-0">
          <h1 className="text-4xl font-paytone md:text-4xl lg:text-4xl font-bold text-white leading-tight">
            Pay Bills
          </h1>

          <p className="text-blue-100 text-lg md:text-xl leading-relaxed max-w-sm">
            Say goodbye to long queues and endless processes—our platform offers
            a seamless solution for paying bills instantly without any hiccups.
          </p>

          <div className="space-y-2 pt-4">
            <p className="text-blue-100 text-sm">Get Revve on your phone</p>
            <Button className="bg-white text-blue-900 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
              Coming soon
            </Button>
          </div>
        </div>

        {/* Right Calendar with Icons */}
        <div className="flex justify-center lg:justify-end">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 md:p-6 border border-white/20 shadow-lg w-full max-w-xs md:max-w-sm">
            <div className="grid grid-cols-7 gap-2 text-center text-white text-sm font-medium mb-4">
              {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
                <div key={index}>{day}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-2 text-center text-white text-lg">
              {Array.from({ length: 30 }, (_, i) => i + 1).map((date) => {
                const icon = serviceIcons.find((icon) => icon.date === date);
                return (
                  <div
                    key={date}
                    className={`relative flex items-center justify-center w-full aspect-square rounded-md ${
                      icon ? "bg-white/20" : ""
                    }`}
                  >
                    {icon && (
                      <Image
                        src={icon.src || "/placeholder.svg"}
                        alt={icon.alt}
                        width={32}
                        height={32}
                        className="absolute top-0 left-0 w-full h-full object-contain p-1"
                      />
                    )}
                    <span
                      className={`${
                        icon ? "text-xs absolute bottom-1 right-1" : ""
                      }`}
                    >
                      {date}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
