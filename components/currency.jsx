import Image from "next/image";
import girl from "@/assets/images/Girl.svg";

export default function Currency() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center pt-8 sm:pt-12 md:pt-16 lg:pt-20 px-4 sm:px-6 md:px-8 lg:px-15">
      <div className="max-w-7xl w-full">
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-4 sm:space-y-5 text-center lg:text-left order-1 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Multi-currency
              <br />
              Wallets
            </h1>

            <div className="space-y-3 sm:space-y-4 text-gray-600 max-w-xs sm:max-w-sm md:max-w-md mx-auto lg:mx-0">
              <p className="text-sm sm:text-base md:text-base">
                Facilitate effortless management of multiple wallets, each
                dedicated to a specific currency, streamlining transactions and
                storage across various currencies.
              </p>

              <p className="text-sm sm:text-base md:text-base">
                Enhance user experience with tailored wallets for different
                currencies, empowering efficient financial management and
                flexibility in global transactions
              </p>
            </div>
          </div>

          <div className="flex-shrink-0 order-2 lg:order-2">
            <div className="relative">
              <div className="w-52 sm:w-60 md:w-64 lg:w-72 h-[420px] sm:h-[460px] md:h-[500px] lg:h-[580px] bg-black rounded-[2rem] sm:rounded-[2.25rem] md:rounded-[2.5rem] p-1.5 sm:p-2 overflow-visible relative">
                <div className="w-full h-full bg-white rounded-[1.5rem] sm:rounded-[1.75rem] md:rounded-[2rem] overflow-visible relative">
                  {/* Phone Screen Content */}
                  <div className="p-3 sm:p-4 md:p-5 lg:p-6 pt-0 space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 h-full flex flex-col">
                    <div className="bg-gradient-to-br from-pink-400 via-purple-500 to-pink-600 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-white relative -mt-8 sm:-mt-32 md:-mt-48 lg:-mt-60 z-10">
                      <div className="flex items-center justify-between mb-4 sm:mb-6 md:mb-8">
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-500 flex items-center justify-center">
                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white rounded-full"></div>
                          </div>
                          <span className="font-semibold text-sm sm:text-base">
                            NGN
                          </span>
                        </div>
                        <span className="font-bold text-base sm:text-lg">
                          ₦1,098,000
                        </span>
                      </div>
                      <div className="flex justify-between items-end">
                        <span className="text-xs sm:text-sm opacity-90">
                          Nigerian Naira
                        </span>
                        <span className="font-bold text-lg sm:text-xl">
                          VISA
                        </span>
                      </div>
                    </div>

                    {/* CFA Card */}
                    <div className="bg-gradient-to-br from-blue-500 via-teal-500 to-green-500 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-white relative overflow-hidden">
                      <div className="flex items-center justify-between mb-4 sm:mb-6 md:mb-8">
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-orange-500 flex items-center justify-center">
                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white rounded-full"></div>
                          </div>
                          <span className="font-semibold text-sm sm:text-base">
                            CFA
                          </span>
                        </div>
                        <span className="font-bold text-base sm:text-lg">
                          CFA 660,000
                        </span>
                      </div>
                      <div className="flex justify-between items-end">
                        <span className="text-xs sm:text-sm opacity-90">
                          West African CFA franc
                        </span>
                        <div className="flex gap-1">
                          <div className="w-5 h-3 sm:w-6 sm:h-4 bg-red-500 rounded-sm"></div>
                          <div className="w-5 h-3 sm:w-6 sm:h-4 bg-orange-400 rounded-sm"></div>
                        </div>
                      </div>
                    </div>

                    {/* CAD Card */}
                    <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-white relative overflow-hidden">
                      <div className="flex items-center justify-between mb-4 sm:mb-6 md:mb-8">
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-red-500 flex items-center justify-center">
                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white rounded-full"></div>
                          </div>
                          <span className="font-semibold text-sm sm:text-base">
                            CAD
                          </span>
                        </div>
                        <span className="font-bold text-base sm:text-lg">
                          C$750
                        </span>
                      </div>
                      <div className="flex justify-between items-end">
                        <span className="text-xs sm:text-sm opacity-90">
                          Canadian Dollars
                        </span>
                        <span className="font-bold text-lg sm:text-xl">
                          VISA
                        </span>
                      </div>
                    </div>

                    {/* USD Card */}
                    <div className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-white relative overflow-hidden">
                      <div className="flex items-center justify-between mb-4 sm:mb-6 md:mb-8">
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-600 flex items-center justify-center">
                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white rounded-full"></div>
                          </div>
                          <span className="font-semibold text-sm sm:text-base">
                            USD
                          </span>
                        </div>
                        <span className="font-bold text-base sm:text-lg">
                          $890.50
                        </span>
                      </div>
                      <div className="flex justify-between items-end">
                        <span className="text-xs sm:text-sm opacity-90">
                          United States Dollars
                        </span>
                        <div className="flex gap-1">
                          <div className="w-5 h-3 sm:w-6 sm:h-4 bg-red-500 rounded-sm"></div>
                          <div className="w-5 h-3 sm:w-6 sm:h-4 bg-orange-400 rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image - Hidden on mobile and small tablets */}
          <div className="flex-1 justify-center lg:justify-end order-3 lg:order-3 hidden md:flex">
            <div className="relative w-[70%] sm:w-[80%] max-w-md">
              <Image
                src={girl}
                alt="Woman using mobile phone for multi-currency wallet management"
                width={250}
                height={350}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
