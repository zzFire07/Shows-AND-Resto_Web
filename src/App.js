import './App.css';
import React, {useState, useEffect} from 'react';
import axios from "axios";
import Layout from './components/Layout/Layout';
import SectionDetails from './components/SectionDetails/SectionDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RestaurantDetail from './components/RestaurantDetail/RestaurantDetail';


// La constante RESTAURANTES es provisoria para simular la informacion de la base de datos.
const RESTAURANTES = [
  {image: "https://www.daleeeel.com/f/res/s05/locations-photos/000/819/0081979-269-rinnoo-9f537c6de8e1478b893bd18a4185fb0e.jpg",
  name: "McDonald's", location:"Punta del Este", link: "https://www.mcdonalds.com.uy"},
  {image: "https://marketplace.canva.com/EAFVq1ge0ZU/1/0/1600w/canva-logo-restaurante-circular-sencillo-negro-blanco-QEgdJHSl6GE.jpg",
  name: "Grill House", location:"Punta del Este", link: "https://www.mcdonalds.com.uy"},
  {image: "https://marketplace.canva.com/EADiIIVxcT4/2/0/1600w/canva-negro-la-corteza-restaurante-logo-o6NfZ-Gk69A.jpg",
  name: "El Ahumado", location:"Punta del Este", link: "https://www.mcdonalds.com.uy"},
  {image: "https://static.wixstatic.com/media/0784b1_c3d17c9b44d642c59490242ef3b9bc76~mv2.png/v1/fill/w_270,h_270,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Restaurant-logo-04.png",
  name: "Dimple", location:"Punta del Este", link: "https://www.mcdonalds.com.uy"},
  {image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgk5EctTLX__7qdZLhONLYtzxO2newq69pEw&usqp=CAU",
  name: "SeaFood", location:"Punta del Este", link: "https://www.mcdonalds.com.uy"},
  {image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsdvFOfEWoPzmI3AyhrMbOTUYiRDNwfzdsxA&usqp=CAU",
  name: "Cheff", location:"Punta del Este", link: "https://www.mcdonalds.com.uy"},
  {image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy_6f-OZ_XD2lXyR6c6IQHdoB0cBksovrCpg&usqp=CAU",
  name: "Catering", location:"Punta del Este", link: "https://www.mcdonalds.com.uy"}
]

// La constante SHOWS es provisoria para simular la informacion de la base de datos.
const SHOWS = [
  {
      image: "https://i.pinimg.com/736x/4e/13/7a/4e137af9391404ee7ee7048cdc1df1b7.jpg",
      name: "Show chino", location:"Punta del Este", link: "https://www.mcdonalds.com.uy"
  },
  {
      image: "https://m.media-amazon.com/images/I/71DGcdOmwJL._AC_UF894,1000_QL80_.jpg",
      name: "Show Dr Strange", location:"Punta del Este", link: "https://www.mcdonalds.com.uy"
  },
  {
      image: "https://i.pinimg.com/736x/7b/9e/6b/7b9e6be214c85bf068788d082f7d3137.jpg",
      name: "Show kill bill", location:"Punta del Este", link: "https://www.mcdonalds.com.uy"
  },
  {
      image: "https://i.pinimg.com/564x/09/0c/92/090c9262f9899224a531353c9743a06d.jpg",
      name: "Show breaking bad", location:"Punta del Este", link: "https://www.mcdonalds.com.uy"
  },
  {
      image: "https://miro.medium.com/v2/resize:fit:1080/1*-jgFlueHLvFwm9pg8v5LoQ.jpeg",
      name: "Show Zulu", location:"Punta del Este", link: "https://www.mcdonalds.com.uy"
  },
  {
      image: "https://i.pinimg.com/736x/42/b7/af/42b7af43dcebc5968c491b9fe344548c.jpg",
      name: "Show Gear 5", location:"Punta del Este", link: "https://www.mcdonalds.com.uy"
  },
  {
      image: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/poster-design-template-e0789f3a7a5d2e495ec7f30dbbf4b8a3_screen.jpg?ts=1636997055",
      name: "Show navidad", location:"Punta del Este", link: "https://www.mcdonalds.com.uy"
  },
  {
      image: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/vintage-sci-fi-movie-poster-phone-wallpaper-i-design-template-ff2d932d08de7a99dc1850881dae6375_screen.jpg?ts=1729467039",
      name: "Show alienigenas", location:"Punta del Este", link: "https://www.mcdonalds.com.uy"
  },
  {
      image: "https://imgcdn.stablediffusionweb.com/2024/12/6/60b40414-503f-44b3-b568-ae9002bcda39.jpg",
      name: "Show Matrix", location:"Punta del Este", link: "https://www.mcdonalds.com.uy"
  },
  {
      image: "https://i.pinimg.com/736x/3d/53/64/3d53640c580c447e5af17809791bab7e.jpg",
      name: "Show Spider-Man", location:"Punta del Este", link: "https://www.mcdonalds.com.uy"
  }
]

function App() {
  const [restaurantes, setRestaurante]=useState([])
  const [shows, setShows]=useState([])

  useEffect(()=>{
    // Se intenta traer informacion desde la base de datos, si no se puede se setea la informacion provisoria.
    axios.get('http://localhost:3000/findAllRestaurant',{
      headers: {
        'Access-Control-Allow-Origin' : '*'
      },
      responseType: "json",
    }).then((response) => {
    // Si el back-end esta corriendo correctamente, se setea la informacion de la base de datos.
      setRestaurante(response.data);
      console.log('restaurantes', response.data)
    }).catch((error) => {
    // Si el back-end no esta corriendo, se setea la informacion provisoria.
      setRestaurante(RESTAURANTES);
    })

    // Se intenta traer informacion desde la base de datos, si no se puede se setea la informacion provisoria.
    axios.get('http://localhost:3000/shows/findAllShow',{
      headers: {
        'Access-Control-Allow-Origin' : '*'
      },
      responseType: "json",
    }).then((response) => {
    // Si el back-end esta corriendo correctamente, se setea la informacion de la base de datos.
      setShows(response.data);
    }).catch((error) => {
    // Si el back-end no esta corriendo, se setea la informacion provisoria.
      setShows(SHOWS);
    })


  } ,[])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout restaurantes={restaurantes} shows={shows}/>} />
          <Route path="/restaurantes" element={<SectionDetails sectionName="restaurantes" section={restaurantes}/>} />
          <Route path="/shows" element={<SectionDetails sectionName="shows" section={shows}/>} />
          <Route path="/restaurante/mcdonalds" element={<RestaurantDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;