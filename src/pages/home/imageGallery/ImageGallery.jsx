import './imageGallery.scss';

const ImageGallery = () => {

  const importAll = (r) => {
    return r.keys().map(r);
  }
  
  const imageList = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

  return (
    <div className="image-gallery-reference">
      <div id="image-gallery">
        {imageList.map((image, index) =>
          <div key={index} className="image">
            <img src={image} alt={`my-art-work-${index}`} />
          </div>
        )}
      </div>
    </div>
  )
}

export default ImageGallery;