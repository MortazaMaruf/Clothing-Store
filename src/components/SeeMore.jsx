
import React from 'react'
import { IoIosArrowDropupCircle } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const SeeMore = () => {
    const navigate = useNavigate();
    const goToCollections = () => {
        navigate("/collections");
    }

    return (
        <div onClick={goToCollections} className="cursor-pointer">
            <div className="flex items-center justify-center mb-10 text-gray-400 gap-2 text-sm sm:text-base">
                <span className="capitalize">All Collections</span>
                <IoIosArrowDropupCircle className="text-2xl sm:text-3xl" />
            </div>
        </div>
    )
}

export default SeeMore
