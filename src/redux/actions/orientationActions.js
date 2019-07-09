import axios from 'axios';

export function getOrientation() {

    return (dispatch) => {
        axios.get('http://localhost:8080/orientation/getAll').then(res => {
            dispatch(setOrientation(res.data));
        }, err => {
            alert('Erro ao buscar orientações !');
            dispatch(setOrientation([]));
        })
    }
}

export function setOrientation(data) {
    return {
        type: 'SET_ORIENTATION',
        data: data,
    }
}
