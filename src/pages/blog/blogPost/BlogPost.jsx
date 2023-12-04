import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { BlogsContext } from '../BlogsContext';
import StyledContent from '../../../components/styledContent/StyledContent';
import BlogContainer from '../BlogContainer';
import './blogPost.scss';

const BlogPost = () => {
  const { id } = useParams();
  const blogsContext = useContext(BlogsContext);
  const blogs = blogsContext.state.newBlogs;

  const post = blogs?.find(b => b.name === id);

  const blogContent = (post) => {
    return (
      <>
        <div className='title-container'>
          <h4>{post.data?.title}</h4>
          <span className='date-text'>Posted on {post.data?.date}</span>
        </div>
        {post.images?.map((image, index) => <div key={index} className='post-image'><img src={image} alt={'Post ' + index} /></div>)}
        <p>{post.data?.teaser}</p>
        {post.data?.chapters?.map((chapter, index) => (
          <div key={index}>
            {chapter.h2 && <h3>{chapter.h2}</h3>}
            {chapter.h3 && <h4>{chapter.h3}</h4>}
            {chapter.h4 && <h4 className="smaller-text">{chapter.h4}</h4>}
            <p>{chapter.text}</p>
            <ul>
              {chapter.list && chapter.list.map((item, index) => (
                <p className="list-item"><li key={index}>{item}</li></p>
              ))}
            </ul>
            {chapter.blockquote && <blockquote>{chapter.blockquote}</blockquote>}
          </div>
        ))}
      </>
    )
  }

  return (
    <div id="blog-post">
      <BlogContainer>
        {post && <StyledContent title='blog'>
          {blogContent(post)}
        </StyledContent>}
      </BlogContainer>
    </div>
  )
}

export default BlogPost;