import './projectGallery.scss';

const ProjectGallery = () => {

  const items = Array.from({ length: 100 }).map((_, index) => (
    <div className='grid-item'>
      <img
        key={index}
        src={`https://picsum.photos/200/${Math.floor(
          Math.random() * (300 - 200 + 1) + 200
        )}`}
        style={{ width: "100%" }}
        alt="whatever test"
      />
    </div>
  ));

  return (
    <div id='project-gallery'>
      <div class="container masonry-bricks-container">
        {items}
      </div>
    </div>
  )
}

export default ProjectGallery;
