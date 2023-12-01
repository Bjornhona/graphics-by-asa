import { useState, useEffect, useContext } from 'react';
import StyledContent from '../../components/styledContent/StyledContent';
import './blog.scss';
import BlogContainer from './BlogContainer';
import { BlogsContext } from './BlogsContext';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogsContext = useContext(BlogsContext);
  const blogs = blogsContext.state.newBlogs;
  const [allPosts, setAllPosts] = useState(blogs);
  const [firstPost, setFirstPost] = useState({});
  const [restOfPosts, setRestOfPosts] = useState([]);

  useEffect(() => {
    setAllPosts(blogs?.reverse());
  }, [blogs]);

  useEffect(() => {
    allPosts?.length > 0 && setFirstPost(allPosts[0]);
    allPosts?.length > 1 && setRestOfPosts(allPosts.splice(1, allPosts.length));
  }, [allPosts]);

  const blogContent = (post) => {
    return (
      <>
        <div className='title-container'>
          <h4>{post.data?.title}</h4>
          <span className='date-text'>Posted on {post.data?.date}</span>
        </div>
        {post.images?.map((image, index) => <div key={index} className='post-image'><img src={image} alt={'Post ' + index} /></div>)}
        <p>{post.data?.teaser}</p>
        <Link to={`/blog/${post.name}`}>Read more</Link>
      </>
    )
  }

  return (
    <div id="blog">
      <BlogContainer>
        {firstPost && <StyledContent title='blog'>
          {blogContent(firstPost)}
        </StyledContent>}
        {restOfPosts && restOfPosts.length > 0 && restOfPosts.map((post, index) => (
          <StyledContent key={index} blogPost>
            {blogContent(post)}
          </StyledContent>))}
      </BlogContainer>
  </div>
  )
}

export default Blog;