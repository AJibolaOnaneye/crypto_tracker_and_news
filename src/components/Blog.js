import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogItem from "./BlogItem";
import ReactPaginate from "react-paginate";
import "./Blog.css";
// import Footer from "./Footer";

const Blog = () => {
  const [blog, setBlog] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [postPerPage] = useState(20);

  const url = `https://coinpaprika1.p.rapidapi.com/exchanges`;
  const headers = {
    "x-rapidapi-host": "coinpaprika1.p.rapidapi.com",
    "x-rapidapi-key": "9e5929f225mshf0c1d4d2c3d4cb5p173c36jsne4d6710e8065",
  };

  useEffect(() => {
    axios
      .get(url, { headers })
      .then((res) => {
        setBlog(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));

    // eslint-disable-next-line
  }, []);


  //Get Pages
  const indexOfLastPost = currentPage * postPerPage;
  const currentPost = blog
    .slice(indexOfLastPost, indexOfLastPost + postPerPage)
    .map(({description, website, twitter, last_updated, id, links}) => {
      return <BlogItem key={id} description={description} website={website} twitter={twitter} date={last_updated} links={links} />;
    });
    // .map((item) => {
    //   return <BlogItem key={item.id} blog={item} />;
    // });

  const pageCount = Math.ceil(blog.length / postPerPage);
  const changePage = ({ selected }) => {
    setCurrentPage(selected);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <div className="blog-container">
        {/* {blog.map((item) => (
         <BlogItem key={item.id} blog={item} />
     ))} */}

        {currentPost}
        <div className="pagination">
          <ReactPaginate
            previousLabel={"Prev"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousClassName={"previousBttn"}
            nextClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </div>

        {/* <div className='blog-card'>
    <div className='top-content'>

   {blog[0] ? <p className='card-date'>{blog[0].last_updated.split('T')[0].toString('DD-MM-YYYY')}</p> : null }
    <span className='card-icons'>

    <span> {blog[0]?.links?  <FaTwitter>{blog[0].links.twitter}</FaTwitter> : "" }</span>
   
    <span>{blog[0]?.links? <FaGlobeAfrica> {blog[0].links.website}  </FaGlobeAfrica>: "" } </span>
    
        <FaGlobeAfrica />
    </span>
    </div>
    <div className='middle-content'>
        {blog[0]? <p className='descript'> {blog[1].description} </p> : null}
    </div>
    <div className='bottom-content'>
    <span onClick={saveBookmark} > {!bookmark ? <FaRegBookmark/> : <FaBookmark/>} </span>
    </div>
</div> */}
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default Blog;
