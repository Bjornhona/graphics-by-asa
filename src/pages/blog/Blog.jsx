import { useContext } from 'react';
import { Link } from 'react-router-dom';
import StyledContent from '../../components/styledContent/StyledContent';
import './blog.scss';
import BlogContainer from './BlogContainer';
import { BlogsContext } from './BlogsContext';

const Blog = () => {
  const blogsContext = useContext(BlogsContext);
  const blogs = blogsContext.state.newBlogs;

  blogs && console.log(blogs);

  return (
    <div id="blog">
      <BlogContainer>
        {blogs?.length > 0 && <StyledContent title='blog'>
          <div className='title-container'>
            <h4>{blogs[0].data?.title}</h4>
            <span className='date-text'>Posted on {blogs[0].data?.date}</span>
          </div>
          {blogs[0].images?.map((image, index) => <div key={index} className='post-image'><img src={image} alt={'Post ' + index} /></div>)}
          <p>{blogs[0].data?.teaser}</p>
          <Link to={`/blog/${blogs[0].data.name}`}>Read more</Link>
        </StyledContent>}
        {/* <Post /> */}
      </BlogContainer>
  </div>
  )
}

export default Blog;