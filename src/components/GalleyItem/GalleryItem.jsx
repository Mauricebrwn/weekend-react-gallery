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
        .put(`/gallery/like/${id}`)
        .then((response) => {
            setLikes(likes + 1);
            getGalleryList()
        }).catch((err) => {
            console.log(err);
        })
    }


    return (
        <>
        {isFlipped ? (
            <>
        <img img src={item.path} onClick={handleFlipped} style={{width:'300px', height: '375px'}}/>
        <div>
            <p>{item.likes} Likes <button onClick={() => addlikes (item.id)}> Like</button></p>
        </div>
        </>
        ) : (
            <>
            <div onClick={handleFlipped}>
                <p> {item.description}</p>
            </div>
            <div>
                <button onClick={() =>addlikes (item.id)}> Like</button>
            </div>
            </>
            )}
            </>
    )
};


export default GalleryItem;
