import Slider from "react-slick";
import Cuisines from '../Cuisines.js'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {Link, useNavigate} from 'react-router-dom'
import { getCuisineRecipes } from '../store/cuisines'
import {connect} from 'react-redux'

const CuisineResults = ({getCuisineRecipes, cuisines}) => {
  const navigate = useNavigate()

  const getResults = async(name) => {
    await getCuisineRecipes(name)
    navigate('/searchResults',{recipes: cuisines, query:name})
  }

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
                  <div className='cuisine-container' key={cuisine.id} onClick={() => getResults(cuisine.name)}>
                    <img className='cuisines' src={cuisine.image} alt={cuisine.name}/>  
                    <p className="cuisine-name"> {cuisine.name} </p>  
                  </div>
                   
                )    
            })}
        </Slider>
        </div>
      )

}


const mapState = (state) => {
  console.log(state)
  const {cuisines} = state;
  return {cuisines}
}
const mapDispatch = (dispatch) => {
  return {
    getCuisineRecipes: async(name)=> await dispatch(getCuisineRecipes(name))
  }
}
export default connect(mapState, mapDispatch)(CuisineResults);