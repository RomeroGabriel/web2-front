import React from 'react';
import axios from 'axios';

class Home extends React.Component {

  constructor(props){
    super(props);
    axios.defaults.headers.common['authorization'] = localStorage.getItem("token");
  }

  componentDidMount(){
    axios.get('http://localhost:8080/orientation/getAll').then(res => {
      console.log(res);
    })
  }

  render() {
    return (
      <div className="container bg-info text-white" >
        <h2 className="text-center">Bem vindo ao gerenciamento de orientações</h2>
      </div>
    );
  }
}

export default Home;
