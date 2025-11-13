import React from 'react';
import DOMPurify from 'dompurify';
import { SquarePen, Trash } from 'lucide-react';

const Card = ({ title = 'The Coldest Sunset', body = 'Lorem ipsum...', onEdit, onDelete }) => {
    return (
        <div className="w-full rounded-lg overflow-hidden shadow-lg mb-6 bg-white flex flex-col hover:shadow-2xl transition-shadow duration-200">
            <div className="px-6 py-4 flex-1">
                <div className="font-bold text-lg sm:text-xl mb-2">{title}</div>
                {/* Render sanitized HTML content. Using DOMPurify to avoid XSS. */}
                <div
                    className="text-gray-700 text-sm sm:text-base prose max-w-none"
                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(body || '') }}
                />
            </div>

            <div className="px-6 pt-4 pb-4 flex items-center justify-end gap-3">
                <button onClick={onEdit} className="p-2 rounded-md hover:bg-gray-100 transition-colors" aria-label="edit">
                    <SquarePen size={20} className="shadow-sm text-gray-700" />
                </button>
                <button onClick={onDelete} className="p-2 rounded-md hover:bg-gray-100 transition-colors" aria-label="delete">
                    <Trash size={20} color="#ec1818" className="shadow-sm" />
                </button>
            </div>
        </div>
    );
};

export default Card;
