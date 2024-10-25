import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({handleBookmarks, handleReadingTime}) => {

     const [blogs, setBlogs] = useState([]);

     useEffect(() => {
          fetch('blogs.json')
          .then(res => res.json())
          .then(data => setBlogs(data))
     }, [])
     return (
          <div>
               <h3>Blogs: {blogs.length}</h3>
               {
                    blogs.map(blog => <Blog key={blog.id} 
                         handleBookmarks={handleBookmarks} 
                         handleReadingTime={handleReadingTime} 
                         blog={blog}></Blog>)
               }
          </div>
     );
};

Blogs.propTypes = {
     handleBookmarks: PropTypes.func.isRequired
}
export default Blogs;