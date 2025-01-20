import * as React from 'react';
import './Layout.css';
import Carousel from '../Carousel/Carousel.jsx';
import SearchBar from '../SearchBar/SearchBar';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import ListView from '../ListView/ListView';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router';

// La constante RESTAURANTES es provisoria para simular la informacion de la base de datos.
const RESTAURANTES = [
    {
        image: "https://www.daleeeel.com/f/res/s05/locations-photos/000/819/0081979-269-rinnoo-9f537c6de8e1478b893bd18a4185fb0e.jpg",
        name: "McDonald's", location:"Punta del Este", link: "/restaurante/mcdonalds"
    },
    {
        image: "https://marketplace.canva.com/EAFVq1ge0ZU/1/0/1600w/canva-logo-restaurante-circular-sencillo-negro-blanco-QEgdJHSl6GE.jpg",
        name: "Grill House", location:"Punta del Este", link: "/restaurante/mcdonalds"
    },
    {
        image: "https://marketplace.canva.com/EADiIIVxcT4/2/0/1600w/canva-negro-la-corteza-restaurante-logo-o6NfZ-Gk69A.jpg",
        name: "El Ahumado", location:"Punta del Este", link: "/restaurante/mcdonalds"
    },
    {
        image: "https://static.wixstatic.com/media/0784b1_c3d17c9b44d642c59490242ef3b9bc76~mv2.png/v1/fill/w_270,h_270,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Restaurant-logo-04.png",
        name: "Dimple", location:"Punta del Este", link: "/restaurante/mcdonalds"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgk5EctTLX__7qdZLhONLYtzxO2newq69pEw&usqp=CAU",
        name: "SeaFood", location:"Punta del Este", link: "/restaurante/mcdonalds"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsdvFOfEWoPzmI3AyhrMbOTUYiRDNwfzdsxA&usqp=CAU",
        name: "Cheff", location:"Punta del Este", link: "/restaurante/mcdonalds"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy_6f-OZ_XD2lXyR6c6IQHdoB0cBksovrCpg&usqp=CAU",
        name: "Catering", location:"Punta del Este", link: "/restaurante/mcdonalds"
    }
]

// La constante SHOWS es provisoria para simular la informacion de la base de datos.
const SHOWS = [
    {
        image: "https://i.pinimg.com/736x/4e/13/7a/4e137af9391404ee7ee7048cdc1df1b7.jpg",
        name: "Show1", location:"Punta del Este", link: "/restaurante/mcdonalds"
    },
    {
        image: "https://i.pinimg.com/736x/4e/13/7a/4e137af9391404ee7ee7048cdc1df1b7.jpg",
        name: "Show2", location:"Punta del Este", link: "/restaurante/mcdonalds"
    },
    {
        image: "https://i.pinimg.com/736x/4e/13/7a/4e137af9391404ee7ee7048cdc1df1b7.jpg",
        name: "Show3", location:"Punta del Este", link: "/restaurante/mcdonalds"
    },
    {
        image: "https://i.pinimg.com/736x/4e/13/7a/4e137af9391404ee7ee7048cdc1df1b7.jpg",
        name: "Show4", location:"Punta del Este", link: "/restaurante/mcdonalds"
    },
    {
        image: "https://i.pinimg.com/736x/4e/13/7a/4e137af9391404ee7ee7048cdc1df1b7.jpg",
        name: "Show5", location:"Punta del Este", link: "/restaurante/mcdonalds"
    },
    {
        image: "https://i.pinimg.com/736x/4e/13/7a/4e137af9391404ee7ee7048cdc1df1b7.jpg",
        name: "Show6", location:"Punta del Este", link: "/restaurante/mcdonalds"
    },
    {
        image: "https://i.pinimg.com/736x/4e/13/7a/4e137af9391404ee7ee7048cdc1df1b7.jpg",
        name: "Show7", location:"Punta del Este", link: "/restaurante/mcdonalds"
    },
    {
        image: "https://i.pinimg.com/736x/4e/13/7a/4e137af9391404ee7ee7048cdc1df1b7.jpg",
        name: "Show8", location:"Punta del Este", link: "/restaurante/mcdonalds"
    },
    {
        image: "https://i.pinimg.com/736x/4e/13/7a/4e137af9391404ee7ee7048cdc1df1b7.jpg",
        name: "Show9", location:"Punta del Este", link: "/restaurante/mcdonalds"
    },
    {
        image: "https://i.pinimg.com/736x/4e/13/7a/4e137af9391404ee7ee7048cdc1df1b7.jpg",
        name: "Show10", location:"Punta del Este", link: "/restaurante/mcdonalds"
    }
  ]

const Layout = ({restaurantes, shows}) => {
    const navigate = useNavigate();

    const navigateToRestaurants = () => {
        navigate('/restaurantes');
    }

    const navigateToShows = () => {
        navigate('/shows');
    }

  
    

    return <div>
       
        <NavBar /> 
        <div style={{marginTop:"5rem"}}></div>
        <Carousel/>

        <div className="hero-section">
            <SearchBar/> 

             <div className="layout-section-container">
                <Typography className="layout-section-name" variant="h4" sx={{mb: 6}} onClick={navigateToRestaurants}>
                    Restaurantes
                </Typography>
                <ListView cards={restaurantes} type="restaurant"/>
            </div>
            
            <div className="layout-section-container">
                    <Typography className="layout-section-name" variant="h4" sx={{mb: 6}} onClick={navigateToShows}>
                        Shows
                    </Typography>
                <ListView cards={shows} type="shows"/>
            </div>

        </div>
        <Footer/>
    </div>;
}

export default Layout;