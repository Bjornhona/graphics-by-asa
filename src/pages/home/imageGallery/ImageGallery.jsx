import './imageGallery.scss';
import angsviolen1 from './images/Angsviolen-hemsida.jpg';
import angsviolen2 from './images/Angsviolen-hemsida2.jpg';

const ImageGallery = () => {
  return (
    <div id="image-gallery">
      <div className="image">
        <img src={angsviolen1} alt="my-art-work" />
      </div>
      <div className="image">
        <img src={angsviolen2} alt="my-art-work" />
      </div>
      <div className="image">
        {/* <img src={angsviolen} alt="my-art-work" /> */}
      </div>
      <div className="image">
        {/* <img src={angsviolen} alt="my-art-work" /> */}
      </div>
      <div className="image">
        {/* <img src={angsviolen} alt="my-art-work" /> */}
      </div>
      <div className="image">
        {/* <img src={angsviolen} alt="my-art-work" /> */}
      </div>
      <div className="image">
        {/* <img src={angsviolen} alt="my-art-work" /> */}
      </div>
      <div className="image">
        {/* <img src={angsviolen} alt="my-art-work" /> */}
      </div>
      <div className="image">
        {/* <img src={angsviolen} alt="my-art-work" /> */}
      </div>
      <div className="image">
        {/* <img src={angsviolen} alt="my-art-work" /> */}
      </div>
    </div>
  )
}

export default ImageGallery;