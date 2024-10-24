
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/header/header'


function App() {
 

  return (
    <>
     <Header></Header>
     <div className='flex p-10 mx-6'>
     <Blogs></Blogs>
     <Bookmarks></Bookmarks>
     </div>
    </>
  )
}

export default App