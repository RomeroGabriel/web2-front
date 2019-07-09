import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { getTeacher } from '../redux/actions/teacherActions';

class TeacherCreate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            department: ''
        };
    }

    submit = (e) => {
        e.preventDefault();
        const { name, email, department } = this.state;
        axios.post('http://localhost:8080/teacher/createTeacher', { name, email, department }).then(res => {
            alert('Professor criado com sucesso');
            this.props.getTeacher();
        }, err => {
            alert('Erro ao cadastrar professor!');
        })
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div>
                <h4 className="text-center text-white" >Cadastrar professor</h4>
                <form onSubmit={this.submit}>
                    <div className="form-group">
                        <label htmlFor="name">Nome*</label>
                        <input type="text" className="form-control" name="name" id="name" placeholder="Inserir nome do professor"
                            value={this.state.name} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email*</label>
                        <input type="email" className="form-control" name="email" id="email" placeholder="Inserir email do professor"
                            value={this.state.email} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="department">Departamento*</label>
                        <input type="text" className="form-control" name="department" id="department" placeholder="Inserir departamento do professor"
                            value={this.state.department} onChange={this.onChange} />
                    </div>
                    <button className="btn btn-primary">Cadastrar</button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTeacher: () => { dispatch(getTeacher()) }
    }
}
export default connect(null, mapDispatchToProps)(TeacherCreate);
