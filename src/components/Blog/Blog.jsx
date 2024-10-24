import PropTypes from 'prop-types';

const Blog = ({blog}) => {
     console.log('i take');
     console.log(blog)
     return (
          <div>
               
          </div>
     );
};

Blog.propTypes = {
     blog: PropTypes.object.isRequired
}

export default Blog;