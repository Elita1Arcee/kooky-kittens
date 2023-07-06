import { Component } from "react";

import './card.component.styles.css'


class Card extends Component {

    render() {
        const { id, name, city} = this.props.pub;
        return(
            <div className='card-container' key={id}>
                <h3>{name}</h3>
                <img src={`https://robohash.org/${name}?set=set4&size=180x180`} alt={`Kooky kitten for pub in ${city}`}/>
                <h4>{city}</h4>
            </div>
            ) 
    }
}

export default Card;