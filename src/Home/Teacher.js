import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { getTeacher } from '../redux/actions/teacherActions';

const List = ({ element, funcDelete }) => {

    const list = element.length ?
        (
            element.map(e => {
                return (
                    <div className="card" key={e._id} style={{ width: '49%', marginBottom: '5px' }}>
                        <div className="card-body">
                            <h5 className="card-title text-black">{e.name}</h5>
                            <h5 className="card-title text-black">{e.email}</h5>
                            <h5 className="card-title text-black">{e.department}</h5>
                            <button onClick={funcDelete.bind(this, e._id)} className="card-link">Deletar professor</button>
                        </div>
                    </div >
                )
            })
        ) : (
            <div> Sem registros </div>
        )

    return (
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 20 }}>
            {list}
        </div>
    );
}

class TeacherList extends React.Component {

    componentDidMount() {
        this.props.getTeacher()
    }


    deleteTeacher = (id) => {
        axios.delete('http://localhost:8080/teacher/delete/' + id).then(res => {
            this.props.getTeacher();
        }, err => {
            alert("Erro ao excluir professor")
        })
    }

    render() {
        return (
            <List element={this.props.teachers} funcDelete={this.deleteTeacher} />
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
        getTeacher: () => { dispatch(getTeacher()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeacherList);
