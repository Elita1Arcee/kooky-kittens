import { Component } from 'react';
import Card from '../card/card.components'
import './name-list.component.styles.css'
class NameList extends Component {

    
    render() {
        const { pubs } = this.props;

        return(
            <div className='name-list'>
            {pubs.map((pub, i) =>{
            return <Card key={i} pub={ pub } />;
            })} 
        </div>       
        ) 
    }

    

}

export default NameList;