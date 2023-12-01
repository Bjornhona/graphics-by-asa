import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { BlogsContext } from '../BlogsContext';
import StyledContent from '../../../components/styledContent/StyledContent';

const BlogPost = () => {
  const { id } = useParams();
  const blogsContext = useContext(BlogsContext);
  const blogs = blogsContext.state.newBlogs;
  const post = blogs.find(b => b.name === id);

  // console.log(blog);

  return (
    <div id="blog-post">
      {post && <StyledContent title={post.data?.title}>
        {/* {blogContent(post)} */}
      </StyledContent>}
    </div>
  )
}

export default BlogPost;