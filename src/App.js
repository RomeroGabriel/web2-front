import React from 'react';
import axios from 'axios';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      password: '',
      email: '',
    };
  }
  // componentDidMount() {
  //   axios.get('http://localhost:8080/orientation/getAll').then(res => {
  //     console.log(res);
  //   }, err => {
  //     console.log(err);
  //   });
  // }

  submit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);
    axios.post('http://localhost:8080/users/login', { email: email, password: password }).then(res => {
      console.log(res);
    }, err => {
      console.log(err);
    })
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="container bg-info text-white" >
        <h2>Bem vindo ao gerenciamento de orientações</h2>
        <p>Realizar login</p>
        <form onSubmit={this.submit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" name="email" id="email" placeholder="Inserir email"
              value={email} onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" name="password" id="password" placeholder="Senha"
              value={password} onChange={this.onChange}/>
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default App;
