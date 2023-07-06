import { Component } from 'react';

class SearchBox extends Component {

    getInput = (e) =>{
        const userEntry = e.target.value.toLocaleLowerCase();
        this.setState(() => {
            return {searchInput: userEntry};
        })
      }

    render() {
        return (
            <input className={this.props.className} 
            type='search' 
            placeholder= {this.props.placeholder} 
            onChange={this.props.onChangeHandler}/>
        )
    }
}
export default SearchBox;