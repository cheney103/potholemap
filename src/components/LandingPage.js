import React from 'react';

export const LandingPage = () => {
    return (
        <section className="bg-white p-20">
          <div className="w-full flex flex-col items-center">
            <div className="bg-gradient-to-tl from-purple-500 via-purple-600 to-purple-700 p-4 rounded-xl mb-10 text-4xl tracking-tight font-semibold text-white sm:text-4xl md:text-5xl shadow-2xl">
              <div class="grid grid-rows-2 grid-flow-col gap-1">
                <div class="row-span-2 text-9xl font-bold">3</div>
                <div class="col-span-1 mt-7 text-4xl font-bold">SIMPLE</div>
                <div class="row-span-1 col-span-2 text-4xl font-bold">
                  STEPS
                </div>
              </div>
            </div>
            <div className="p-2 grid grid-flow-col auto-rows-max text-center mx-auto">
              <div className="bg-gradient-to-tl from-blue-400 via-blue-500 to-blue-700 bg-opacity-75 rounded-md mr-10 w-24 md:w-32 lg:w-80 h-90 md:h-full shadow-lg mx-auto ">
                <p className=" text-6xl text-center pt-8 font-semibold font-black text-white">
                  1
                </p>
                <p className="text-black text-1xl pt-8 pb-12 pr-5 pl-5 flex flex-wrap justify-center text-white">
                  Sign up now to report an issue.
                </p>
              </div>
              <div className="bg-gradient-to-tl from-red-400 via-red-500 to-red-600 bg-opacity-75 rounded-md mr-10 w-24 md:w-32 lg:w-80 h-90 md:h-full shadow-lg mx-auto">
                <p className="text-6xl text-center pt-8 font-semibold font-black text-white">
                  2
                </p>
                <p className="text-black text-1xl pt-8 pb-12 pr-5 pl-5 flex flex-wrap justify-center text-white">
                  Double click on the map, then fill out the form to add a new
                  issue at that location.
                </p>
              </div>
              <div className="bg-gradient-to-tl from-green-400 via-green-500 to-green-700 bg-opacity-75 rounded-md mr-10 w-24 md:w-32 lg:w-80 h-90 md:h-full shadow-lg mx-auto">
                <p className="text-6xl text-center pt-8 font-semibold font-black text-white">
                  3
                </p>
                <p className="text-black text-1xl pt-8 pb-12 pr-5 pl-5 flex flex-wrap justify-center text-white">
                  Share to get upvotes to raise awareness.
                </p>
              </div>
            </div>
          </div>
        </section>
    )
}
