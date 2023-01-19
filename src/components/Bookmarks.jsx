import React from 'react'
import '../App.css'
import { useAppContext } from './context/AppContext'
import { motion } from 'framer-motion'

function Bookmark() {
  const {bookmarks, addBooksToBookmark, removeBooksFromBookmark} = useAppContext()

  console.log('bookmarks are', bookmarks)
 
  const bookmarkChecker = (id) => {
    const boolean = bookmarks.some((book) => book.id === id)

    return boolean;
  }


  return (
    <>
      <div className="bookmarks">
      {bookmarks.length > 0 ? bookmarks.map((book) => (
          <div key={book.id} className="book-list2">
            <div><h4>{book.title}</h4></div>

            <div><img src={book.image_url} alt="#" /></div>

            <div><h4>Rating: {book.rating}</h4></div>

            <div>
              {bookmarkChecker(book.id) ? 
                <motion.button whileTap={{scale: 1.2}}onClick={() => removeBooksFromBookmark(book.id)}>Remove from bookmark <i class="uil uil-trash-alt"></i></motion.button >

              : <motion.button whileTap={{scale: 1.2}}onClick={() => addBooksToBookmark(book)}>Add to Bookmark  <i class="uil uil-plus"></i></motion.button >}
              
            </div>

          </div>
        )) : <h1>You don't have any bookmarks yet</h1>}
      </div>
    </>
  )
}

export default Bookmark
