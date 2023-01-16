import axios from 'axios';
import {React, useState} from "react";
// conditional rendering from true to false to flip the picture
const GalleryItem = ({item, getGalleryList}) => {
    const [likes, setLikes] = useState(item.likes);
    const [isFlipped, setIsFlipped] = useState(true);

    const handleFlipped = () => {
        if (isFlipped === true) {
            setIsFlipped(false);
        }else {
            setIsFlipped(true)
        }
        // setIsFlipped(!isFlipped);
    }
// the function for increasing likes on the DOM 
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

// ternary operator for image being flipped to description text
    return (
        <>
        {isFlipped ? (
            <>
        <img src={item.path} onClick={handleFlipped} style={{width:'300px', height: '375px'}}/>
        <div>
            {/* set up on purpose for like button display on same line as likes display*/}
            <p>{item.likes} Likes <button onClick={() => addlikes (item.id)}> Like</button></p>
        </div>
        </>
        ) : (
            <>
            <div onClick={handleFlipped}>
                <p>{item.description}</p>
            </div>
            <div>
            <p>{item.likes} Likes <button onClick={() => addlikes (item.id)}> Like</button></p>
            </div>
            </>
            )}
            </>
    )
};


export default GalleryItem;
