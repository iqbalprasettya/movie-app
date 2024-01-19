// import React from 'react'

import Navbar from '../../components/Navbar'
import { MovieForm } from "../../components/Form"

import styles from './style.module.scss'

export const MovieEditor = () => {
  return (
    <div className={styles.container}>
        <Navbar/>
        <MovieForm/>
    </div>
  )
}
