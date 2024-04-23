import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from '@mui/material/styles'
import './Item.css';

export default function Item(props){
    const handleClick = () => {
        props.add(props.item.name);
    };
    const theme = createTheme({
        palette: {
            primary: {
                main: '#23C9FF',
            }
        },
    });
    return (
        <div className="item-card">
            <img src={props.item.image} />
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
                        <Button variant="contained" color="primary" onClick={handleClick}>Add to My List</Button>
                    </ThemeProvider>
                </div>
            </div>
        </div>
    )
}