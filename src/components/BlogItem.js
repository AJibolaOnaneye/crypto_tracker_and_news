import React, { useState } from 'react';
import { FaTwitter, FaGlobeAfrica, FaBookmark, FaRegBookmark} from 'react-icons/fa'
// import Linkify from 'react-linkify';

import './Blog.css'



const BlogItem = ({blog, description, website, twitter, date,links, id}) => {
    const [bookmark, setBookmark] = useState(false)
    // const [show, setShow] = (false)


    const saveBookmark = () => {
        setBookmark(!bookmark)
        console.log('bookmarked');
    }

// console.log(date);


 return (
  
  <div>

{description !== '' ? <div className='blog-card'>
  <div className='top-content'>

 <p className='card-date'>{date.split('T')[0].toString('DD-MM-YYYY')}</p>

  <span className='card-icons'>

 <span>  {links?.twitter? <a href={links.twitter[0]}> <FaTwitter className='card-twitter' /> </a> : null }  </span>
 <span>  {links?.website? <a href={links.website[0]}> <FaGlobeAfrica className='card-globe' /> </a> : null }  </span>

  </span>

  </div>
  <div className='middle-content'>
      <p className='descript'> {description} </p> 
  </div>
  <div className='bottom-content'>
  <span onClick={saveBookmark} > {!bookmark ? <FaRegBookmark/> : <FaBookmark/>} </span>
  </div>
</div> : null }


  </div>

)

};

export default BlogItem;

