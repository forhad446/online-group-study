import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Banner = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const sliders = [
        { img: "https://i.ibb.co/rvKqHRr/photo-1588072432836-e10032774350.jpg", }, 
        { img: "https://i.ibb.co/VQS6Sjn/photo-1588072432904-843af37f03ed.jpg", },
        { img: "https://i.ibb.co/G22zq6j/photo-1577896851231-70ef18881754.jpg", },
        { img: "https://i.ibb.co/PZDwc7R/photo-1588075592405-d3d4f0846961.jpg", },
        { img: "https://i.ibb.co/SxCNWPG/premium-photo-1683121693735-df6b63dc5b8b.jpg", },
    ];

    const prevSlider = () => setCurrentSlider((currentSlider) => currentSlider === 0 ? sliders.length - 1 : currentSlider - 1);
    const nextSlider = () => setCurrentSlider((currentSlider) => currentSlider === sliders.length - 1 ? 0 : currentSlider + 1);

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlider();
        }, 3000);
        return () => {
            clearInterval(intervalId);
        };
    }, [currentSlider]);
    return (
        <div>
            <section className="flex my-0 md:my-10 lg:my-0 min-h-[530px] md:min-h-[700px]  w-full items-center justify-center bg-white px-4 md:px-8">
                <div className="flex w-full md:gap-10 lg:flex-row flex-col items-center justify-between">
                    <div className="max-w-md md:space-y-6 sm:space-y-5 space-y-4 text-center md:text-left">
                        <h1 className="lg:text-3xl sm:text-4xl text-3xl font-bold leading-tight text-gray-900">
                            Transforming Study Sessions with Friendship
                        </h1>
                        <p className="lg:text-lg sm:text-base text-sm text-gray-600">
                            Encapsulates the idea of your online group study application that goes beyond traditional learning. It emphasizes the integration of social connections into the learning experience. The platform fosters a collaborative environment where friends come together to support each other in their academic endeavors, transforming ordinary study sessions into meaningful and engaging learning experiences. Through shared goals and mutual encouragement, users can leverage the power of friendship to enhance their understanding and excel academically.
                        </p>
                        <div className="flex justify-center gap-5 space-x-4">
                            <button className="inline-flex flex-nowrap items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-blue-600 text-white">
                                <Link to="/all_assignment">Get Started</Link>
                            </button>
                            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-transparent text-blue-600">
                                Learn More
                            </button>
                        </div>
                        <p className="text-sm text-gray-500">Trusted by 5000+ Users</p>
                    </div>
                    <div className="relative hidden md:block">
                        {/*  */}
                        <div className="max-w-6xl mx-auto h-[540px] md:h-[670px] flex flex-col xl:flex-row items-center overflow-hidden gap-5 lg:gap-10 relative">
                            <div className="absolute w-full h-full flex items-center justify-between z-50 px-5 ">
                                {/* arrow left */}
                                <button onClick={prevSlider} className="flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8">
                                    <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
                                </button>
                                {/* arrow right */}
                                <button onClick={nextSlider} className="flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8">
                                    <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(180)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
                                </button>
                            </div>
                            {/* slider container */}
                            <div className="h-[540px] md:h-[670px] w-2/3 ml-auto relative ease-linear duration-300 md:flex items-center "
                                style={{ transform: `translateX(-${currentSlider * 50}%)` }}>
                                {/* sliders */}
                                {sliders.map((slide, inx) => (
                                    <div key={inx}
                                        className={`${currentSlider === inx ? "h-[240px] sm:h-[310px] md:h-[480px] lg:h-[580px]" : "h-full md:h-[380px] lg:h-[480px] scale-95 opacity-40"} min-w-[50%] relative duration-200`}
                                        style={{ perspective: "200px" }}>
                                        <img src={slide.img} className="w-full h-full bg-gray-900 rounded-lg duration-300" alt={slide.tags} style={{ transform: `${currentSlider - 1 === inx ? "rotateY(4deg)" : currentSlider + 1 === inx ? "rotateY(-4deg)" : ""}`, transformStyle: "preserve-3d", }} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/*  */}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;