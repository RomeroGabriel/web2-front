import React from 'react';
import axios from 'axios';
import TeacherList from './Teacher';
import TeacherCreate from './TeacherCreate';
import Orientation from './Orientation';
import OrientationCreate from './OrientationCreate';

class Home extends React.Component {

  constructor(props) {
    super(props);
    axios.defaults.headers.common['authorization'] = localStorage.getItem("token");
  }

  render() {
    return (
      <div className="container bg-info" >
        <h2 className="text-center text-white">Bem vindo ao gerenciamento de orientações</h2>
        <TeacherCreate />
        <TeacherList />
        <OrientationCreate />
        <Orientation />
      </div>
    );
  }
}

export default Home;
