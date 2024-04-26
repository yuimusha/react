import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useState } from "react";
import './Item.css';

export default function Item(props){
    const [buttonText, setButtonText] = useState('Add To My List');
    const [color, setColor] = useState("primary");
    
    const handleClick = () => {
        props.add(props.item.name, props.item.artist, props.item.image);
        if (buttonText == 'Remove from My List'){
            setButtonText('Add To My List');
            setColor("primary");
        } else {
            setButtonText('Remove from My List');
            setColor("secondary");
        }
    };

    const theme = createTheme({
        palette: {
            primary: {
                main: '#23C9FF',
            },
            secondary: {
                main: '#C884A6',
            }
        },
    });
    return (
        <div className="item-card">
            <img className="item-img" src={props.item.image} />
            <div className="identity">
                <p className="title">{props.item.name}</p>
                <p className="artist">{props.item.artist}</p>
            </div>
            <div className="rest">
                <div className="other-info">
                    <div className="genre">
                        <p className="shrink">{props.item.genre}</p>
                    </div>
                    <div className="length">
                        <p className="shrink">{props.item.length}</p>
                    </div>
                </div>
                <div className="button-container">
                    <ThemeProvider theme={theme}>
                        <Button variant="contained" color={color} onClick={handleClick}>{buttonText}</Button>
                    </ThemeProvider>
                </div>
            </div>
        </div>
    )
}