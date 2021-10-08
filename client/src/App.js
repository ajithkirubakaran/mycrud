import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import MyNavbar from './components/Navbar';
import AddUser from './components/Layout';
import axios from 'axios';

class App extends Component {
 state = {
    data: null
  };
 componentDidMount() {
    axios.get('http://localhost:5000/express')
        .then(res => this.setState({ data : JSON.parse(JSON.stringify(res.data.message)) }))
        .catch(error => {
            this.setState({ data : error.message });
            console.error('Error fetching message!', error);
        });
 }
  render() {
    return (
      <div className="App">
        <header className="my-header">
		  <MyNavbar/>
		  <AddUser/>
        </header>
        <p className="App-intro pt-5 mt-5">{this.state.data}</p>
      </div>
    );
  }
} 
export default App;