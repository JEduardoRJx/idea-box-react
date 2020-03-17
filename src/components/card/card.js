import React from 'react';
import './Card.scss';

const Card = ({ idea, deleteIdea, toggleFavorite }) => {
  const favorite = idea.fav ? 'favorite' : null;

  return (
    <article className={favorite} key={idea.id}>

    </article>
  )
}

export default Card;