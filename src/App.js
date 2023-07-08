import { useState } from 'react';
import SearchBox from './components/search-box/search-box.components';
import NameList from './components/name-list/name-list.component'
import './components/search-box/search-box.component.styles.css'
import './App.css';

const App = () =>{
  const [searchInput, logSearchInput] = useState('');
  const [pubs, setPubs] = useState([]);

  //   async componentDidMount(){
//     try{
//       const response = await fetch('https://api.openbrewerydb.org/v1/breweries?by_state=new_york&per_page=12');
//       const pubName = await response.json();
//       console.log(pubName)
//       this.setState({pubs: pubName}) 
//     }


  const getInput = (e) =>{
    const userEntry = e.target.value.toLocaleLowerCase();
    logSearchInput(userEntry)
  }
  
  const filteredPubs = pubs.filter((pub) =>{
        return pub.name.toLocaleLowerCase().includes(searchInput);
      })

  return (
    <div>
    <SearchBox className='search-box' placeholder='Enter name ex.) 16 Stone Brewpub'  onChangeHandler={getInput} />
    <NameList pubs={filteredPubs} />
    </div>
  )
}

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       pubs: [],
//       searchInput: ''
//     }
//   }

//   async componentDidMount(){
//     try{
//       const response = await fetch('https://api.openbrewerydb.org/v1/breweries?by_state=new_york&per_page=12');
//       const pubName = await response.json();
//       console.log(pubName)
//       this.setState({pubs: pubName}) 
//     }
    
//     catch(err){
//       console.log(err);
//     }
//   };

// render() {
//   const { pubs, searchInput } = this.state;
//   const { getInput } = this;

//   const filteredPubs = pubs.filter((pub) =>{
//     return pub.name.toLocaleLowerCase().includes(searchInput);
//   })

//     return (
//       <div>
//       <SearchBox className='search-box' placeholder='Enter name ex.) 16 Stone Brewpub'  onChangeHandler={getInput} />
//       <NameList pubs={filteredPubs} />
//       </div>
//     )
//   }


// }
  


export default App;
