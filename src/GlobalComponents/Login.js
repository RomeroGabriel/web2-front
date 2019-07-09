import React from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';

class Login extends React.Component {

    constructor() {
        super();
        this.state = {
            password: '',
            email: '',
        };
    }

    submit = (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        axios.post('http://localhost:8080/users/login', { email, password }).then(res => {
            localStorage.setItem('token', res.data.token);
            this.props.history.push('/home');
        }, err => {
            console.log(err);
            alert('Erro ao logar!');
        })
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { email, password } = this.state;
        return (
            <div className="container bg-info text-white align-middle" >
                <h2 className="text-center">Bem vindo ao gerenciamento de orientações</h2>
                <h4>Realizar login</h4>
                <form onSubmit={this.submit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" name="email" id="email" placeholder="Inserir email"
                            value={email} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" id="password" placeholder="Senha"
                            value={password} onChange={this.onChange} />
                    </div>
                    <button className="btn btn-primary">Login</button>
                    <Link className="btn btn-primary float-right" to="/registerUser">Register User</Link>
                </form>
            </div>
        );
    }
}

export default withRouter(Login);
