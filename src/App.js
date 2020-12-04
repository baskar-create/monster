import React,{Component} from "react";
import {CardList} from "./components/card-list/card-list.components.jsx";
import {Search} from "./components/search/search.components.jsx";
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters:[],
      searchField:""
    }
  
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users => this.setState({monsters:users}));
  }
  handleChange = event => {
    this.setState({searchField:event.target.value});
  }
  render(){
    const {monsters,searchField}=this.state;
    const filteredMonsters = monsters.filter(monsters=>monsters.name.toLowerCase().includes(searchField.toLowerCase()))
  
    return (
    <div className="App">
     <Search placeholder="search" handler={this.handleChange} />
    <CardList monsters={filteredMonsters}/>
    </div>
  );
}
}

export default App;
