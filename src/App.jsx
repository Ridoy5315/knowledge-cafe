
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/header/header'


function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const [readingTime, setReadingTime] = useState((0));
  
  const handleBookmarks = blog => {
    const newBookhmarks = [...bookmarks, blog];
    setBookmarks(newBookhmarks);
  }

  const handleReadingTime = time => {
    setReadingTime(readingTime+time);
  }
  return (
    <>
     <Header ></Header>
     <div className='flex p-10 mx-6'>
     <Blogs handleBookmarks={handleBookmarks}  handleReadingTime={handleReadingTime}></Blogs>
     <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
     </div>
    </>
  )
}

export default App