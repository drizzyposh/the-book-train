import { createContext, useContext, useState } from "react";

const AppContext = createContext(null)

export const useAppContext = () => {
    const context = useContext(AppContext)

    if(context ===  undefined) {
        throw new Error('Appcontext must be within appContextProvider')
    } else {
        return context;
    }
}


const AppContextProvider = ({children}) => {
    const [bookmarks, setBookmarks] = useState([])

    const addBooksToBookmark = (book) => {
        const oldBookmark = [...bookmarks]

        const newBookmark = oldBookmark.concat(book)

        setBookmarks(newBookmark)
    }

    const removeBooksFromBookmark = (id) => {
        const oldBookmark = [...bookmarks]

        const newBookmark = oldBookmark.filter((book) => book.id != id)

        setBookmarks(newBookmark)
    }


    return (
        <AppContext.Provider value={{bookmarks, addBooksToBookmark, removeBooksFromBookmark}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider