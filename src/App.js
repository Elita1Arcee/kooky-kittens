import { useState, useEffect } from 'react';
import SearchBox from './components/search-box/search-box.components';
import NameList from './components/name-list/name-list.component'
import './components/search-box/search-box.component.styles.css'
import './App.css';

const App = () =>{
  const [searchInput, logSearchInput] = useState('');
  const [pubs, setPubs] = useState([]);
  const [filteredPubs, setFilteredPubs] = useState(pubs);

  useEffect(() => {
    fetch('https://api.openbrewerydb.org/v1/breweries?by_state=illinois&per_page=12')
      .then((response) => response.json())
      .then((illinoisPubs) => setPubs(illinoisPubs) )
    }, [])

  useEffect(() =>{
    const filteredIlliPubs = pubs.filter((pub) =>{
        return pub.name.toLocaleLowerCase().includes(searchInput);
      });

      setFilteredPubs(filteredIlliPubs);

  }, [pubs, searchInput])

  const getInput = (e) =>{
    const userEntry = e.target.value.toLocaleLowerCase();
    logSearchInput(userEntry)
  }

  return (
    <div>
    <SearchBox className='search-box' placeholder='Enter name ex.) 16 Stone Brewpub'  onChangeHandler={getInput} />
    <NameList pubs={filteredPubs} />
    </div>
  )
}
  


export default App;
