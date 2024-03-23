import React from 'react'
// import logo from './logo.svg';
import './App.css';
// import Item from './MyItem';

class FilmItemRow extends React.Component{
  render(){
    return(
      <li>
        <a href = {this.props.url}>{this.props.url}</a>
      </li>
    )
  }
}


class StarWars extends React.Component{
  
  constructor(){
    super()
    this.state = {
      loaderCharacter: false,
      name : null,
      height : null,
      homeworld : null,
      films : [],
    }
  }
  getNewCharacter(){
    console.log("Get new character from a button")
    const randomNumber = Math.round(Math.random() *82)
    const url = `https://swapi.dev/api/people/${randomNumber}/`
    fetch(url)
    .then(response => response.json())
    .then(data => {
      
      this.setState({
        name: data.name,
        height: data.height,
        homeworld: data.homeworld,
        films: data.films,
        loaderCharacter: true,
        
      })
    })
  }
      
    
  
  render(){
    
    const movies = this.state.films.map((film, i)=>{
      return <FilmItemRow key={i} url = {film}/>
    })
    
    return(
      <div>
      
      {
        this.state.loaderCharacter && 
        <div>
             <h1>{this.state.name}</h1>
             <p>{this.state.height} cm</p>
             <p><a href={this.state.homeworld}>HomeWorld</a></p>
             <ul>
               {movies}
             </ul>
        </div>     
      }
        
        <button 
        type= "button"
        onClick={()=> this.getNewCharacter()}
        className = "btn"
        >
        Randomize Character 
        </button>
      </div>
    )
  }
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
       
       
        <StarWars/>
     
     
     
     
        
        {/* <img src={logo} className="App-logo" alt="logo" />
        
        
        <Item name = "Zubair"/>
        <Item name = "Adnan"/>
  
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
