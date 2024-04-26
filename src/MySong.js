import './MySong.css';

export default function Item(props){
    return (
        <div className="card">
            <img className="my-img" src={props.image} />
            <div className="identity">
                <p className="title">{props.name}</p>
                <p className="artist">{props.artist}</p>
            </div>
        </div>
    )
}