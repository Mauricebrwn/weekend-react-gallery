import axios from 'axios';
import {React, useState} from "react";

const GalleryItem = ({item, getGalleryList}) => {
    const [likes, setLikes] = useState(item.likes);
    const [isFlipped, setIsFlipped] = useState (true);

    const handleFlipped = () => {
        if (isFlipped === true) {
            setIsFlipped(false);
        }else {
            setIsFlipped(true)
        }
    }

    const addlikes = (id) => {
        axios 
        .put(`/gallery/likes/${id}`,)
        .then((response) => {
            setLikes(likes + 1);
            getPhotos()
        }).catch((err) => {
            console.log(err);
        })
    }


    return (
        <>
        {isFlipped ? (
            <>
        <img img src={item.path} onClick={handleFlipped} style={{width:'100px', height: '100px'}}/>
        <div>
            <p>{item.likes} Liked</p>    
        </div> 
        <div>
        <button onClick={() => addLikes (item.id)}> Like</button>
        </div>
        </>
        ) : (
            <>
            <div onClick={handleFlipped}>
                <p> {item.description} Liked</p>
            </div>
            <div>
            <button onClick={() =>addLikes (item.id)}> Like</button>  
            </div>
            </>
            )}
            </>
    )
};


export default GalleryItem;
