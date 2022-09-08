import Slider from "react-slick";
import Cuisines from '../Cuisines.js'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {Link} from 'react-router-dom'

const Carousel = (props) => {

    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

      return (
        <div className='slide-container'>
          <h3 className='cuisine-title'>Search by Cuisine</h3>
        <Slider {...settings}>
            {Cuisines.map(cuisine => {
                return (
                  <div className='cuisine-container' key={cuisine.id} >
                    <Link to='/cuisineResults' state={{results: `${cuisine.name}`}}>
                      <img className='cuisines' src={cuisine.image} alt={cuisine.name}/>  
                    </Link>
                     <p className="cuisine-name"> {cuisine.name} </p>  
                  </div>
                   
                )    
            })}
        </Slider>
        </div>
      )

}


export default (Carousel);