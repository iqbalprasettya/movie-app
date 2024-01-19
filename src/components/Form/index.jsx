// import React from 'react'

import Slider from '@mui/material/Slider';
import { CallAPI } from '../../domain/CallAPI';

import styles from './styles.module.scss'
import { useState } from 'react';
import { useNavigate } from 'react-router';

export const MovieForm = () => {
    const navigate = useNavigate()
    // const [ratingValue, setRatingValue] = useState(0);

    // const handleChangeRating = (event, newValue) => {
    //     setRatingValue(newValue);
    // };
    
    const [formData, setFormData] = useState({
        title: "",
        imageUrl: "",
        desc: "",
        duration: "",
        genre: "",
        rating: "",
        releaseYear: "",
        commentUser: "",
        comments: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await CallAPI({
                endpoint: '/movie',
                method: 'POST',
                data: formData
            })    
        navigate('/')
        }catch (error) {
            console.log(error.message)
        }
    }

  return (
    <div className={styles.formContainer}>
        <div className={styles.formCard}>
            <h2 className={styles.formTitle}>Movie Form</h2>
            <form id="add-account-form" onSubmit={handleSubmit}>
                <label >Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required />
                <label >Poster URL</label>
                <input
                    type="text"
                    id="imageUrl"
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleInputChange}
                    required />
                <label >Description</label>
                <input
                    type="text"
                    id="description"
                    name="desc"
                    value={formData.desc}
                    onChange={handleInputChange}
                    required />
                <label>Duration</label>
                <input
                    type="text"
                    id="duration"
                    name="duration"
                    value={formData.duration}
                    onChange={handleInputChange}
                    required />

                <label>Genre</label>
                <input
                    type="text"
                    id="genre"
                    name="genre"
                    value={formData.genre}
                    onChange={handleInputChange}
                    required />

                <label>Rating</label>
                <input
                    type="text"
                    id="rating"
                    name="rating"
                    value={formData.rating}
                    onChange={handleInputChange}
                    required />
                {/* <Slider className={styles.ratingSlider} 
                defaultValue={0} 
                step={1} 
                marks min={0} max={5}
                valueLabelDisplay="on"
                    name='rating' value={ratingValue}
                    onChange={handleChangeRating}/> */}

                <label>Release Year</label>
                <input
                    type="text"
                    id="releaseYear"
                    name="releaseYear"
                    value={formData.releaseYear}
                    onChange={handleInputChange}
                    required />
                
                <label>Username</label>
                <input
                    type="text"
                    id="commentUser"
                    name="commentUser"
                    value={formData.commentUser}
                    onChange={handleInputChange}
                    required />                        

                <label>Comment</label>
                <input
                    type="text"
                    id="comments"
                    name="comments"
                    value={formData.comments}
                    onChange={handleInputChange}
                    required />
                
                <button type="submit">Submit</button>
            </form>
            
        </div>
    </div>
  )
}

