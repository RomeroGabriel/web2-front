import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { getOrientation } from '../redux/actions/orientationActions';

const List = ({ element, funcDelete }) => {

    const list = element.length ?
        (
            element.map(e => {
                return (
                    <div className="card" key={e._id} style={{ width: '49%', marginBottom: '5px' }}>
                        <div className="card-body">
                            <h5 className="card-title text-black">Estudante: {e.studentName}</h5>
                            <h5 className="card-title text-black">Tema: {e.thema}</h5>
                            <h5 className="card-title text-black">Professor: {e.teacherName.name}</h5>
                            <button onClick={funcDelete.bind(this, e._id)} className="card-link">Deletar orientação</button>
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

class OrientationList extends React.Component {

    componentDidMount() {
        this.props.getOrientation()
    }

    deleteOrientation = (id) => {
        axios.delete('http://localhost:8080/orientation/delete/' + id).then(res => {
            this.props.getOrientation();
        }, err => {
            alert("Erro ao excluir orientação")
        })
    }

    render() {
        return (
            <List element={this.props.orientations} funcDelete={this.deleteOrientation} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        orientations: state.orientationReducer.orientations,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getOrientation: () => { dispatch(getOrientation()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrientationList);
