import React from 'react'
import { useState, useEffect } from 'react'
import '../App.css'
import { API_URL } from '../API'
import axios from 'axios'
import { motion } from 'framer-motion'
import { useAppContext } from './context/AppContext'
import { useNavigate } from 'react-router-dom'

function Booklist() {
  const [books, setBooks] = useState([])

  const {bookmarks, addBooksToBookmark, removeBooksFromBookmark} = useAppContext()

  const navigate = useNavigate()

  console.log('bookmarks are', bookmarks)
 
  const bookmarkChecker = (id) => {
    const boolean = bookmarks.some((book) => book.id === id)

    return boolean;
  }

  useEffect(() => {
    axios.get(API_URL).then((response) => {
      setBooks(response.data)
    }).catch(error => console.log(error))
  }, [])

  


  return (
    <>
      <div className="booklist">

        {books.map((book) => (
          <div key={book.id} className="book-list2">
            <div><h4>{book.title}</h4></div>

            <div><img src={book.image_url} alt="#" onClick={() => navigate(`/books/${book.id}`)}/></div>

            <div><h4>Rating: {book.rating}</h4></div>

            <div>
              {bookmarkChecker(book.id) ? 
                <motion.button whileTap={{scale: 1.2}}onClick={() => removeBooksFromBookmark(book.id)}>Remove from bookmark <i class="uil uil-trash-alt"></i></motion.button >

              : <motion.button whileTap={{scale: 1.2}}onClick={() => addBooksToBookmark(book)}>Add to Bookmark  <i class="uil uil-plus"></i></motion.button >}
              
            </div>

          </div>
        ))}
      </div>
    </>
  )
}

export default Booklist
