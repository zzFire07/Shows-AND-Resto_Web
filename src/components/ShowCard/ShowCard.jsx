import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, useMediaQuery } from '@mui/material';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import './ShowCard.css';

const ShowCard = (show) => {
    
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
    <Card className="ShowCard">
      <CardActionArea className="ShowCardAction"
      onMouseOver={ handleMouseOver }
      onMouseOut={ handleMouseOut }
      onClick={() => window.open(show.link, "_blank")}
      >
        <CardMedia
        component="img"
        image={show.image} /* IMAGEN FORMATO 16 : 9 */
        alt="show icon"
            />
        { isHovered || mobileMatch?
        <CardContent className="ShowCardContent">   
            <Typography gutterBottom variant="h5" component="div" className='TituloShow'>
                {show.name} {mobileMatch}
            </Typography>
        </CardContent>
        : <div></div>
        }
      </CardActionArea>
    </Card>
  );
};

export default ShowCard;