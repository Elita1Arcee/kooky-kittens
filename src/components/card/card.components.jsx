
import './card.component.styles.css'

 const Card = ({pub}) => {
        const { id, name, city} = pub;
        return(
            <div className='card-container' key={id}>
                <h3>{name}</h3>
                <img src={`https://robohash.org/${name}?set=set4&size=180x180`} alt={`Kooky kitten for pub in ${city}`}/>
                <h4>{city}</h4>
            </div>
            ) 
}

export default Card;