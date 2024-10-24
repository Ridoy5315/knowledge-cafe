import PropTypes from 'prop-types';

const Blog = ({blog}) => {
     const {cover_img, author_img, author_name, date, reading_time, title, hashtags} = blog;
     return (
          <div className='space-y-5 mb-7'>
               <img className='h-[450px] w-full rounded-xl' src={cover_img} alt={`Cover picture of title ${title}`} />
               <div className='flex justify-between items-center'>
                    <div className='flex gap-5'>
                         <img className='w-14 h-14 rounded-full' src={author_img} alt="" />
                         <div>
                              <h4 className='font-bold text-2xl'>{author_name}</h4>
                              <p className='text-gray-500 text-sm'>{date}</p>
                         </div>
                    </div>
                    <div>
                         <p className='text-gray-500'>{reading_time} min read</p>
                    </div>
               </div>
               <h2 className='font-bold text-4xl'>{title}</h2>
               <p>
                    {
                         hashtags.map((hash, idx) => <span className='mr-4 text-gray-500' key={idx}><a href="">{hash}</a></span>)
                    }
               </p>
          </div>
     );
};

Blog.propTypes = {
     blog: PropTypes.object.isRequired
}

export default Blog;