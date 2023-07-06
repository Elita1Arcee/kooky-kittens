import { Component } from 'react';

class NameList extends Component {
    
    render() {
        const { pubs } = this.props;

        return(
           pubs.map((pub, i) =>{
            return(
                <div key={pub.id}>
                    <h3>{pub.name}</h3>
                    <h4>{pub.city}</h4>
                </div>
                ) 
      }) 
        ) 
    }

    

}

export default NameList;