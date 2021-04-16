import React from 'react';

export const LandingPage = () => {
    return (
        <section>
            <div className="min-h-screen w-full flex flex-col items-center">
                <div className="font-semibold text-4xl text-center">
                    3 Simple Steps
          </div>
                <div className="grid grid-flow-col auto-rows-max text-center mx-auto">
                    <div className="border-2 mt-10 rounded-md mr-10 w-24 md:w-32 lg:w-80 h-90 md:h-full shadow-lg mx-auto ">
                        <p className="text-3xl text-center pt-5 font-semibold">1</p>
                        <p className="text-1xl pt-8 pb-12 pr-5 pl-5 flex flex-wrap justify-center">Sign up now to report an issue.</p>
                    </div>
                    <div className="border-2 mt-10 rounded-md mr-10 w-24 md:w-32 lg:w-80 h-90 md:h-full shadow-lg mx-auto">
                        <p className="text-3xl text-center pt-5 font-semibold">2</p>
                        <p className="text-1xl pt-8 pb-12 pr-5 pl-5 flex flex-wrap justify-center">Double click on the map, then fill out the form to add a new issue at that location.</p>

                    </div>
                    <div className="border-2 mt-10 rounded-md mr-10 w-24 md:w-32 lg:w-80 h-90 md:h-full shadow-lg mx-auto">
                        <p className="text-3xl text-center pt-5 font-semibold">3</p>
                        <p className="text-1xl pt-8 pb-12 pr-5 pl-5 flex flex-wrap justify-center">Share to get upvotes to raise awareness.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
