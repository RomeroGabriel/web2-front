import axios from 'axios';

export function getTeacher() {

    return (dispatch) => {
        axios.get('http://localhost:8080/teacher/getAll').then(res => {
            dispatch(setTeacher(res.data));
        }, err => {
            alert('Erro ao buscar orientações !');
            dispatch(setTeacher([]));
        })
    }
}

export function setTeacher(data) {
    return {
        type: 'SET_TEACHER',
        data: data,
    }
}
