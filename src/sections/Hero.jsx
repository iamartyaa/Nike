import React from 'react'
import { useState } from 'react';
import Button from '../components/Button';
import { arrowRight } from '../assets/icons';
import { shoes, statistics } from '../constants';
import { bigShoe1, bigShoe2, bigShoe3 } from '../assets/images';
import ShoeCard from '../components/ShoeCard';

const Hero = () => {
    const [bigShoeImg, setbigShoeImg] = useState(bigShoe1)
    return (
        <section
            id="home"
            className='flex w-full xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
        >
            <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
                <p className='text-xl font-montserrat text-coral-red'>Our Summer collection</p>
                <h1 className='text-8xl font-palanquin mt-10 max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
                    <span className='xl:whitespace-nowrap xl:bg-white relative z-10 pr-10'>The New Arrival </span>
                    <br />
                    <span className='text-coral-red inline-block mt-3'>Nike </span> Shoes

                </h1>
                <p className='font-montserrat text-slate-gray z-10 text-lg mt-10 mb-14 leading-8 sm:max-w-sm'>Discover stylish Nike arrivals, quality comfort, and innovation for your active life</p>
                <Button label="Shop Now"
                    iconURL={arrowRight}
                />

                <div className='flex justify-start flex-wrap mt-20 items-start w-full gap-16' >
                    {statistics.map((stat, index) => (
                        <div key={index}>
                            <p className='text-4xl font-bold font-palanquin'>{stat.value}</p>
                            <p className='leading-7 font-montserrat text-slate-gray'>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>


            <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center' >
                <img
                    src={bigShoeImg}
                    alt='shoe-collection'
                    width={610}
                    height={500}
                    className='object-contain relative z-10'
                />


                <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
                    {shoes.map((image,index) => (
                        <div key={index}>
                            <ShoeCard
                                index={index}
                                imgURL={image}
                                changeBigShoeImage={(shoe) => setbigShoeImg(shoe)}
                                bigShoeImg={bigShoeImg}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Hero;
