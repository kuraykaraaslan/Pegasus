import React, { useState, ReactNode, useRef, useEffect, useCallback } from 'react';

const buttonClass = "btn btn-circle border-1 border-white text-white hover:bg-white hover:text-black active:bg-white active:text-black bg-opacity-20 sm:bg-opacity-0 hidden sm:flex shadow-lg border border-base-200";
const mobileButtonClass = "btn rounded-full dark:text-black dark:hover:text-white sm:hidden rounded-full -py-2 w-10 h-10  shadow-lg border border-base-200";

const DefaultSponsors = ({ children }: { children?: ReactNode[] }) => {
    const [active, setActive] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    const handleSlideClick = useCallback((index: number) => () => setActive(index), []);

    useEffect(() => {
        const timer = setInterval(() => {
            const carouselItems = carouselRef.current?.querySelectorAll('.carousel-item');
            carouselItems?.forEach((element, i) => {
                if (element.getBoundingClientRect().left === 0) {
                    setActive(i);
                }
            });
        }, 5);

        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <div className="w-full max-h-[400px] overflow-x-hidden" style={{ top: '0', left: '0'}} ref={carouselRef}>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-4 max-h-[400px]'>
                    {children?.map((child, index) => (
                        <div id={`slide${index + 1}`} className="carousel-item relative w-full" key={index} onClick={handleSlideClick(index)}>
                            {child}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );

}

export default DefaultSponsors;
