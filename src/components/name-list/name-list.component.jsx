
import Card from '../card/card.components'
import './name-list.component.styles.css'

const NameList = ({ pubs }) => {

        return(
            <div className='name-list'>
            {pubs.map((pub, i) =>{
            return <Card key={i} pub={ pub } />;
            })} 
        </div>       
        )

}

export default NameList;