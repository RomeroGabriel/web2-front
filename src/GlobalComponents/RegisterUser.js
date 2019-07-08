import React from 'react';
import axios from 'axios';
import { withRouter } from "react-router";

class RegisterUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            password: '',
            email: '',
        };
    }

    submit = (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        axios.post('http://localhost:8080/users/createUser', { email, password }).then(res => {
            this.props.history.push('/');
        }, err => {
            alert(err.response.data.error)
        });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { email, password } = this.state;
        return (
            <div className="container bg-info bg-warning" >
                <h2 className="text-center">Bem vindo ao gerenciamento de orientações</h2>
                <h4>Cadastrar novo usuário</h4>
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
                    <button className="btn btn-primary">Register User</button>
                </form>
            </div>
        );
    }
}

export default withRouter(RegisterUser);
