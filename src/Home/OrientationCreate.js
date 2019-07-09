import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { getOrientation } from '../redux/actions/orientationActions';

class OrientationCreate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            thema: '',
            name: '',
            idTheacher: ''
        };
    }

    submit = (e) => {
        e.preventDefault();
        const { thema, name, idTheacher } = this.state;
        axios.post('http://localhost:8080/orientation/create', { thema, studentName: name, teacher: idTheacher }).then(res => {
            alert('Orientação criada com sucesso');
            this.props.getOrientation();
        }, err => {
            alert('Erro ao cadastrar orientação!');
        })
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div>
                <h4 className="text-center text-white" style={{ marginTop: 20 }} >Cadastrar orientação</h4>
                <form onSubmit={this.submit}>
                    <div className="form-group">
                        <label htmlFor="name">Nome*</label>
                        <input type="text" className="form-control" name="name" id="name" placeholder="Inserir nome do Aluno"
                            value={this.state.name} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="thema">Tema*</label>
                        <input type="text" className="form-control" name="thema" id="thema" placeholder="Inserir tema da orientação"
                            value={this.state.thema} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="idTheacher">Professor*</label>
                        <select required name="idTheacher" value={this.state.idTheacher} onChange={this.onChange} className="custom-select">
                            <option value="" selected>Selecione um professor orientador</option>
                            {this.props.teachers.map(t => {
                                return (<option value={t._id}>{t.name}</option>)
                            })}
                        </select>
                    </div>
                    <button className="btn btn-primary">Cadastrar</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        teachers: state.teacherReducer.teachers,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getOrientation: () => { dispatch(getOrientation()) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(OrientationCreate);
