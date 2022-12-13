import React from 'react'
import '../App.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { BOOK_DETAILS_URL } from '../API'

const Bookdetails = () => {
  const [book, setbook] = useState({})


  const {id} = useParams()

  useEffect(() => {
    axios.get(`${BOOK_DETAILS_URL}/${id}`).then((response) => {
      setbook(response.data)
    }).catch(error => console.log(error))
  }, [id])

  return (
    <>
      <div className="bookdetails">
        <div className='bookimage'>
          <h2>{book?.title}</h2>
          <img src={book?.image_url} alt="#" />
        </div>

        <div className='bookposter'>
          <h2>Description</h2>
          <p>{book?.description}</p>
          <h2>Authors</h2>
          <p>{book?.authors}</p>
          <h2>Genres</h2>
          <p>{book?.genres}</p>
        </div>
      </div>
    </>
  )
}

export default Bookdetails
