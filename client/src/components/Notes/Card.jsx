import React from 'react';
import {SquarePen,Trash} from "lucide-react"
const Card = () => {
    return (
        <>
            <div class="max-w-sm rounded overflow-hidden shadow-xl mb-10  ">
                
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                    <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2 flex items-center justify-around" >
                    
                    <SquarePen size={24} className='shadow-lg' />
                    <Trash size={24} color="#ec1818" className='shadow-lg' />
                    
                </div>
            </div>
        </>
    );
}

export default Card;
