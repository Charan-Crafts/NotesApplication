import React from 'react';
import { SquarePen, Trash } from 'lucide-react';

const Card = (
    { title = 'The Coldest Sunset', body = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.' }) => {
    return (
        <div className="w-full rounded-lg overflow-hidden shadow-lg mb-6 bg-white flex flex-col hover:shadow-2xl transition-shadow duration-200">
            <div className="px-6 py-4 flex-1">
                <div className="font-bold text-lg sm:text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-sm sm:text-base">{body}</p>
            </div>

            <div className="px-6 pt-4 pb-4 flex items-center justify-end gap-3">
                <button className="p-2 rounded-md hover:bg-gray-100 transition-colors" aria-label="edit">
                    <SquarePen size={20} className="shadow-sm text-gray-700" />
                </button>
                <button className="p-2 rounded-md hover:bg-gray-100 transition-colors" aria-label="delete">
                    <Trash size={20} color="#ec1818" className="shadow-sm" />
                </button>
            </div>
        </div>
    );
};

export default Card;
