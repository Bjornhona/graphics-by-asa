import "./imageGallery.scss";
import { Link } from "react-router-dom";

const ImageGallery = () => {
  const importAll = (r) => {
    return r.keys().map(r);
  };

  const imageList = importAll(
    require.context("./images", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <div className="image-gallery-reference">
      <div id="image-gallery">
        {imageList.map((image, index) => {
          const match = image.match(/(\d+)\./);
          const number = match ? match[1] : null;
          return (
            <Link to={`/portfolio/${number}`} key={index} className="image">
              <img src={image} alt={`my-art-work-${index}`} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ImageGallery;
