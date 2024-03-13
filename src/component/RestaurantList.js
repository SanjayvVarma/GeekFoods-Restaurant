import React, { useState } from 'react';
import './RestaurantList.css';

const RestaurantList = ({ restaurants }) => {
  const itemsPerPage = 24;
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState('');

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = restaurants
    .filter(restaurant => restaurant.name.toLowerCase().includes(filter.toLowerCase()))
    .slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(restaurants.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div style={{ background: 'darkgray' }}>
      <input
        type="text"
        placeholder="Search by name"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {currentItems.map((restaurant) => (
          <li key={restaurant.name}> 
            <strong>{restaurant.name}<span style={{ color: 'yellow', fontSize: '1.6rem' }}>{renderRatingStars(restaurant.rating)}</span></strong>
            <p>Location: {restaurant.address}</p>
            <p>{restaurant.postcode}</p>
            <p style={{paddingTop: '2rem', color: 'rgb(243, 6, 6)'}}><i className="fa-solid fa-utensils"></i>{restaurant.type_of_food}</p>
            <a href='{restaurant.URL}'>Visit Menu</a>
          </li>
        ))}
      </ul>
      <div>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <button key={page} onClick={() => handlePageChange(page)}>
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

const renderRatingStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  const stars = Array.from({ length: fullStars }, (_, index) => (
    <span key={index}>&#9733;</span>
  ));

  if (halfStar) {
    stars.push(<span key="half">&#9734;&#9733;</span>);
  }

  return stars;
};

export default RestaurantList;
