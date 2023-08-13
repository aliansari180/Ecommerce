import './Body.css'
import ImageGallery from './ImageGallery';

const images = [
  { src: 'shi.jpg' },
  { src: 'download.jpg' },
  { src: 'R.jpg' },
  { src: 'pan.jpg' },
  // Add more images here
];

function Body() {
    return(

<>
    <div className="container">
        <img src="bg.jpg" alt="" />
        <h1>SALE 70% OFF</h1>
        <p>The Best Men Collection Of Summer</p>
        <button className="shop-now-button">Shop Now</button>
    </div>
    <div>
      <ImageGallery images={images} />
    </div>
</>

    )
}

export default Body;