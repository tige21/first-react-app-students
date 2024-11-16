import React, {useEffect, useState} from 'react'
import { useFavoritePhotos } from '../store/useFavoritePhotos';

export const First = () => {

  const [photos, setPhotos] = useState([]);

  const addToFavotites = useFavoritePhotos((state) => state.addToFavotites)
  const favoritesPhotos = useFavoritePhotos((state) => state.favoritesPhotos)
  console.log(1, favoritesPhotos)
  const fetchPhotos = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          [
            {
              "albumId": 1,
              "id": 1,
              "title": "accusamus beatae ad facilis cum similique qui sunt",
              "url": "https://via.placeholder.com/600/92c952",
              "thumbnailUrl": "https://via.placeholder.com/150/92c952"
            },
            {
              "albumId": 1,
              "id": 2,
              "title": "reprehenderit est deserunt velit ipsam",
              "url": "https://via.placeholder.com/600/771796",
              "thumbnailUrl": "https://via.placeholder.com/150/771796"
            },
            {
              "albumId": 1,
              "id": 3,
              "title": "officia porro iure quia iusto qui ipsa ut modi",
              "url": "https://via.placeholder.com/600/24f355",
              "thumbnailUrl": "https://via.placeholder.com/150/24f355"
            },
            {
              "albumId": 1,
              "id": 4,
              "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
              "url": "https://via.placeholder.com/600/d32776",
              "thumbnailUrl": "https://via.placeholder.com/150/d32776"
            },
            {
              "albumId": 1,
              "id": 5,
              "title": "natus nisi omnis corporis facere molestiae rerum in",
              "url": "https://via.placeholder.com/600/f66b97",
              "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
            },
            {
              "albumId": 1,
              "id": 6,
              "title": "accusamus ea aliquid et amet sequi nemo",
              "url": "https://via.placeholder.com/600/56a8c2",
              "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
            },
            {
              "albumId": 1,
              "id": 7,
              "title": "officia delectus consequatur vero aut veniam explicabo molestias",
              "url": "https://via.placeholder.com/600/b0f7cc",
              "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
            },
            {
              "albumId": 1,
              "id": 8,
              "title": "aut porro officiis laborum odit ea laudantium corporis",
              "url": "https://via.placeholder.com/600/54176f",
              "thumbnailUrl": "https://via.placeholder.com/150/54176f"
            },
            {
              "albumId": 1,
              "id": 9,
              "title": "qui eius qui autem sed",
              "url": "https://via.placeholder.com/600/51aa97",
              "thumbnailUrl": "https://via.placeholder.com/150/51aa97"
            },
            {
              "albumId": 1,
              "id": 10,
              "title": "beatae et provident et ut vel",
              "url": "https://via.placeholder.com/600/810b14",
              "thumbnailUrl": "https://via.placeholder.com/150/810b14"
            }
          ]
        )
      }, 2000)
      
      
    })
  }

  useEffect(() => {

    const getData = async () => {
      const data = await fetchPhotos()
      setPhotos(data)
    }
    
    getData()
  }, [])
  console.log(photos)

  if(photos.length === 0) {
    return (
      <div style={{fontSize: '50px', color: 'red'}}>loading...</div>
    )
  }
  return (
<>
    <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", flexDirection: "column", width: "100%"}}>
      
      {photos.map((photo) => (
        <div key={photo.id} style={{display: "flex", flexDirection: "colum", alignItems: "center", width: "100%", borderWidth: "1px", borderColor: "black", gap: "20px"}}>
          <div>
            <div style={{fontSize: "15px", fontWeight: "bold", color: "black"}}>
              {photo.title}
            </div>
          <img style={{height: "100px", width: "100px", borderRadius: "50%"}} src={photo.url} alt={photo.title} />

          </div>
          <div onClick={() => addToFavotites(photo)} style={{fontSize: "15px", fontWeight: "bold", color: "black"}}>
            Добавить в избранное
          </div>
        </div>
      ))}

    </div>
    </>
  )
}
