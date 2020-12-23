import React, { Component } from 'react';
import StarwarsInfo from './StarwarsInfo';

class StarwarsList extends Component {
  constructor(props){
    super(props);
    this.state = {
      searching: '',
      lists : [],
    }
  }

    handleSearch = (e) => {
        this.setState({
          searching: e.target.value
        })
      }
    
      handleSubmit= (e) => {

        e.preventDefault();
        const url = 'https://swapi-thinkful.herokuapp.com/api/people/'
    
       console.log(e);
        fetch(url , {
          method: 'GET',
          headers : {
            'Content-Type' : 'application/json'
          }
        })
        .then(res =>{
          if(!res.ok){
            res.json().then(e => {throw new Error(e)})
          }
          return res.json()
        })
        .then(data =>{
          this.setState({
            lists : data.results
          })
        })
        .catch(e =>{
          console.log(e.message)
        })
      }
    
    render() {
      const searchingList = this.state.lists.map((search, i) => <StarwarsInfo
                                                                      key={i}
                                                                      name={search.name}
                                                                      gender={search.gender}
                                                                      birth_year={search.birth_year} />)
        return (
            <div className="search">
                <h2>What are you looking for?</h2>
                <form onSubmit={(search) => this.handleSubmit(search)}>  
                    <label htmlFor="search">Name</label>
                    <input type="text" value={this.state.searching} id="search" placeholder="skywalker" required
                    onChange = {this.handleSearch}/>
                    <button type="submit">Search</button>
                </form>
               {searchingList}
            </div>
        );
    }
}

export default StarwarsList;