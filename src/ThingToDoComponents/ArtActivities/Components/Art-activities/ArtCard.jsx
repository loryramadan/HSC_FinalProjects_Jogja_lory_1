import React from 'react'
import { Link } from 'react-router-dom';

const ArtCard = ({ imageSrc, title, description }) => {

    return (
    <div className='w-[280px] sm:w-[240px] md:w-[233px] lg:w-[310px] xl:w-[400px] mb-[10px] lg:mb-[30px] bg-white px-3 py-2 flex flex-col  rounded-lg justify-center break-inside-avoid'>
    <Link to={`/things-to-do/art-activities-jogja/detail-art`}>

        <div className='h-fit '>
            <img className='rounded-lg mt-1 border' src={imageSrc} alt="image-card" />
            

        </div>
        
        <div className='w-[255px] flex justify-end sm:w-[215px] md:w-[208px] lg:w-[285px] xl:w-[375px]'>
            <div className='mt-[-41px] sm:mt-[-49px] xl:mt-[-49px]'>
                <button className='p-2 sm:p-3 flex justify-center items-center bg-button2 rounded-tl-lg rounded-br-lg'>
                    <i className='bx bx-heart text-[24px] text-button'></i>
                </button>
            </div>
        </div>
        <div className='flex flex-col pl-2 pt-2'>
            <p className='font-semibold font-Poppins text-[20px]'>
                {title}
            </p>
            <p className='mt-2 text-justify text-[12px] line-clamp-3'>
                {description}
            </p>
        </div>
        </Link>
    </div>
    );
}
export default ArtCard
