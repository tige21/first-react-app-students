import React from 'react'
import { useFavoritePhotos } from '../store/useFavoritePhotos';

export const Seconds = () => {

  const favoritesPhotos = useFavoritePhotos((state) => state.favoritesPhotos)
  console.log(2, favoritesPhotos)
  return (
    <div>
      <div style={{fontSize: '50px', color: 'red'}}>
        избранное
      </div>
      <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', width: '100%', border: '1px solid red'}}>
        {favoritesPhotos.map((photo) => (
          <div key={photo.id}>
          <img src={photo.url} alt={photo.title} style={{width: '200px', height: '200px'}} />

          </div>
        ))}
      </div>
    </div>
  )
}

