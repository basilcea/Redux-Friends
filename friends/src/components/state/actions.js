import * as types from './actionTypes';
import axios from 'axios';

export const success = () => {
    return {
        type:types.SUCCESS,
    }
}
export const failure = (value) => {
    return{
        type: types.FAILURE,
        payload:value,
    }
}
export const friends=(value) =>{
    return{
       type: types.SAVE,
       payload:value,
    }
}

export const login = (username , password) => async dispatch => {
    dispatch({type:types.LOGIN});
    const loginCred = {username ,password}
    const AxiosData = await axios.post('http://localhost:5000/api/login', loginCred)
    try{
        localStorage.setItem('token', AxiosData.data.payload);
    setTimeout(() => dispatch(success(true)), 6000);

    }catch(err) {
        setTimeout(() => dispatch(failure(AxiosData.statusText)), 6000);

    }
}
export const save = (data) => async dispatch => {
    dispatch({type:types.SAVE});
    try{
        await axios.post('http://localhost:5000/api/friends', data)
        setTimeout(() => dispatch(friends(data)), 2000);
    }
    catch(err){
        setTimeout(() => dispatch(failure(data)), 2000);
    }
    
}