// import React from 'react'

import styles from './styles.module.scss'

export const MovieForm = () => {
  return (
    <div className={styles.formContainer}>
        <div className={styles.formCard}>
            <h2>Movie Form</h2>
            <form id="add-account-form" >
                        <label >Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            // value={formData.email}
                            // onChange={handleInputChange}
                            required />
                        <label >Description</label>
                        <input
                            type="text"
                            id="description"
                            name="description"
                            // value={formData.password}
                            // onChange={handleInputChange}
                            required />
                        <label>Duration</label>
                        <input
                            type="text"
                            id="duration"
                            name="duratio"
                            // value={formData.provider}
                            // onChange={handleInputChange}
                            required />

                        <label>Duration</label>
                        <input
                            type="text"
                            id="provider"
                            name="provider"
                            // value={formData.provider}
                            // onChange={handleInputChange}
                            required />

                        <label>Duration</label>
                        <input
                            type="text"
                            id="provider"
                            name="provider"
                            // value={formData.provider}
                            // onChange={handleInputChange}
                            required />

                        <label>Duration</label>
                        <input
                            type="text"
                            id="provider"
                            name="provider"
                            // value={formData.provider}
                            // onChange={handleInputChange}
                            required />

                        <label>Duration</label>
                        <input
                            type="text"
                            id="provider"
                            name="provider"
                            // value={formData.provider}
                            // onChange={handleInputChange}
                            required />
                        
                        <button type="submit">Submit</button>
                    </form>
            
        </div>
    </div>
  )
}

