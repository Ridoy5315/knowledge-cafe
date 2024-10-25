
import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
     const {title} = bookmark;
     return (
          <div>
               <h4>{title}</h4>
          </div>
     );
};

Bookmark.propTypes = {
     
};

export default Bookmark;