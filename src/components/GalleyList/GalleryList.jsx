import GalleryItem from '../GalleryItem/GalleryItem';
import React from 'react';

function GalleryList({galleryData, getGalleryList}) {
    return (
        <div>
            {galleryData.map((item) => (
                <GalleryItem key ={item.id} item={item}
                getGalleryList={getGalleryList} />
            ))}
        </div>
    );
}

export default GalleryList ;