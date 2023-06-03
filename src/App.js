import React from 'react';
import PropTypes from 'prop-types';

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgZnNhJ-WoAjK6ejfdB90QNxPo7XsdRTk_UA&usqp=CAU',
    rating: 5
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmOdNf-Fp-tOAy_QVJce8D99UxfaPQzkyA1w&usqp=CAU',
    rating: 4.9
  },
  {
    id: 3,
    name: 'Bibimbap',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-gz-SdYi0qkBq3MbLbI4M9EVxZSAN6UB2tw&usqp=CAU',
    rating: 3.7
  },
  {
    id: 4,
    name: 'Doncasu',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSumtIvCsMZnl7WGHc2jLEYNaT43QhCdk1fUtdtiPs__ie5bg5ThfTvX0znMFEe8WQWSEE&usqp=CAU',
    rating: 2
  },
  {
    id: 5,
    name: 'Kimbap',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs5uFUs2rCl_GCg-nudLZjPykm2s1veKBxGQ&usqp=CAU',
    rating: 4.2
  }
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

export default App;
