import Slider from "react-slick";
import Cuisines from '../Cuisines.js'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { getCuisineRecipes } from '../store/cuisines'
import {connect} from 'react-redux'
import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'

const CuisineResults = ({getCuisineRecipes, state}) => {
  const navigate = useNavigate()
  const [cuisine, setCuisine] = useState('')
  const [gotRecipeResults, setGotRecipeResults] = useState(false)
 
  const getResults = async(name) => {
    setCuisine(name)
    await getCuisineRecipes(name)
    setGotRecipeResults(true)
  }

  useEffect(() => {
    if (gotRecipeResults) navigate('/searchResults', {state: {recipes:state.cuisines.results, query:cuisine}})
  },[gotRecipeResults])

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
        <>
        <div className='slide-container'>
          <h2 className='cuisine-title'>Search by Cuisine</h2>
        <Slider {...settings}>
            {Cuisines.map(cuisine => {
                return (
                  <div className='cuisine-container' key={cuisine.id}>
                    <img className='cuisine-image' src={cuisine.image} alt={cuisine.name}/>  
                    <button className="cuisine-button button" onClick={() => getResults(cuisine.name)}> {cuisine.name} </button>  
                  </div>
                   
                )    
            })}
        </Slider>
        </div>
        </>
        
      )

}

const mapState = (state) => {
  console.log(state)
  return {state}
}
const mapDispatch = (dispatch) => {
  return {
    getCuisineRecipes: async(name)=> await dispatch(getCuisineRecipes(name))
  }
}
export default connect(mapState, mapDispatch)(CuisineResults);