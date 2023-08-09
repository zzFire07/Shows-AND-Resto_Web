import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, useMediaQuery } from '@mui/material';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import './RestaurantCard.css';

const RestaurantCard = (restaurant) => {
    
    const [ isHovered, setIsHovered ] = useState( false );
    
    const theme = useTheme();
    const mobileMatch = useMediaQuery(theme.breakpoints.down('701'));
    
    function handleMouseOver() {
        setIsHovered( true );
    }

    function handleMouseOut() {
        setIsHovered( false );
    }

  return (
    <Card className="RestaurantCard">
      <CardActionArea className='RestaurantCardAction'
      onMouseOver={ handleMouseOver }
      onMouseOut={ handleMouseOut }
      onClick={() => window.open(restaurant.link, "_blank")}
      >
        <CardMedia
        className='RestaurantCardMedia'
        component="img"
        image={restaurant.image} /* IMAGEN FORMATO 16 : 9 */
        alt="restaurant icon"
            />
        { isHovered || mobileMatch?
        <CardContent className="RestaurantCardContent">   
            <Typography gutterBottom variant="h5" component="div" className='TituloRestaurant'>
                {restaurant.name} {mobileMatch}
            </Typography>
        </CardContent>
        : <div></div>
        }
      </CardActionArea>
    </Card>
  );
};

export default RestaurantCard;