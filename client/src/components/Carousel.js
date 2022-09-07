import Slider from "react-slick";
import Cuisines from '../Cuisines.js'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { getCuisineRecipes } from "../store/store.js";
import { connect } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";



const Carousel = ({cuisineRecipes, getCuisineRecipes}) => {
  let navigate = useNavigate();

useEffect(() => {
  console.log('true')
  // if(cuisineRecipes) navigate('/cuisineRecipes', {cuisineResults: cuisineRecipes})
},[cuisineRecipes])

console.log(cuisineRecipes)

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
                  <div className='cuisine-container'>
                    <img className='cuisines'  key={cuisine.id} src={cuisine.image} alt={cuisine.name} onClick={() => getCuisineRecipes(cuisine.name)}/>  
                     <p className="cuisine-name"> {cuisine.name} </p>  
                  </div>
                   
                )    
            })}
        </Slider>
        </div>
      )

}

const mapState = (state) => {
  const {cuisineRecipes} = state;
  return {cuisineRecipes};
}
const mapDispatch = (dispatch) => {
  return {
    getCuisineRecipes: async(query)=> await dispatch(getCuisineRecipes(query))
  }
}
export default connect(mapState, mapDispatch)(Carousel);