import GalleryItem from '../GalleyItem/GalleryItem.jsx';
import React from 'react';
//render function that loops through array using .map
function GalleryList({galleryData, getGalleryList}) {
    return (
        <div>
            {galleryData.map((item) => (
                <GalleryItem key ={item.id} item={item} getGalleryList = {getGalleryList} />
            ))}
        </div>
    );
}

export default GalleryList;