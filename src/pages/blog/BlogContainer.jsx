import { useEffect, useContext } from 'react';
import { BlogsContext } from './BlogsContext';

const BlogContainer = ({children}) => {
  const blogsContext = useContext(BlogsContext);

  useEffect(() => {
    const newBlogs = [];
    const blogsNameList = [];
    const files = require.context(`../../posts`, true);
    const fileKeys = files.keys();

    fileKeys.reduce((res, modulePath) => {
      const pathName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
      const blogFolders = pathName.split('/')[0];

      return blogFolders !== "." && blogsNameList.push(blogFolders);
    }, {});

    const uniqueBlogFolders = [...new Set(blogsNameList)];

    const handleSave = (value, key, blogName, newBlogs) => {
      newBlogs.forEach(newBlog => {
        if (newBlog.name === blogName) {
          newBlog[key] = value;
        }
      });
      blogsContext.dispatch({newBlogs});
    };

    uniqueBlogFolders.forEach(blogName => {
      const blogImageUrls = [];

      newBlogs.push({
        name: blogName
      });

      fileKeys.forEach(file => {
        const fileEnd = file.split('.').slice(-1)[0];
        if (file.includes(blogName) && (fileEnd === 'jpg' || fileEnd === 'jpeg' || fileEnd === 'png')) {
          blogImageUrls.push(file.slice(2));
        }
        if (file.includes(blogName) && (fileEnd === 'json')) {
          import(`../../posts/${file.slice(2)}`)
          .then(res => {
            handleSave(res.default, 'data', blogName, newBlogs);
          });
        }
      });

      const getMedia = async (urlsList, tag) => {
        const results = await Promise.all(urlsList.map(async (file) => {
          const media = await import(`../../posts/${file}`)
          .then(res => res.default);
          file = media;
          return file
        }));
        handleSave(results, tag, blogName, newBlogs);
      }
      getMedia(blogImageUrls, 'images');
    });
  }, []);

  return (
    <div id="blog-container">
      {children}
    </div>
  )
}

export default BlogContainer;