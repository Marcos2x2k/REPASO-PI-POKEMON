import axios from 'axios';
export const SET_PAGE = 'SET_PAGE';


//aca se realiza la coneccion de back con el front HAGO EN PROMISE MEJOR
// export function getGames(){
//     return function(dispatch){
//         var json = await axios.get("http://localhost:3001/games",{});
//     return dispatch({
//         type: 'GET_GAMES',
//         payload: json.data   
//     })}}; 
// HAGO EN PROMISE MEJOR
export function getGames(){
    return function(dispatch){
        axios.get('http://localhost:3001/games')
        .then((json) => {
            dispatch({type: 'GET_GAMES', payload: json.data})
        })
        .catch(() =>{
            console.log ('HUBO UN ERROR EN LOS DATOS');
        })
    }
}

export function getNameGames(name){
    return async function (dispatch){
    try{
        var json = await axios.get("http://localhost:3001/games?name=" + name);
        return dispatch({
            type: "GET_NAME_GAMES",
            payload: json.data
        })
    } 
    catch (error) {
        console.log(error)
    }}
    }
//despacha ruta del back con los Generos
export function getGenres(){
    return async function (dispatch){
        var json = await axios.get("http://localhost:3001/genres", {
            
        });
        // var info = await axios(`http://localhost:3001/types/${name}`); otra forma
        return dispatch({
            type: "GET_GENRES", 
            payload: json.data});
    };
}
// PARA EL POST DE GENRES
export function postGame(payload){
    return async function (dispatch){
        const response = await axios.post("http://localhost:3001/games", payload)
        console.log (response);
        return response
    }
}
    
// la logica siempre hacerla en reducer o en los components
export function filterGamesByStatus(payload){
    console.log (payload)
    return {
        type: 'FILTER_GAMES_BY_GENRES',
        payload
    }
};

//hacemos la accion de filtrar por API o Bdatos // payload trae el value de la accion q elija
export function filterCreated(payload){
    return{
        type: 'FILTER_GAMES_BY_CREATED',
        payload
    }
};

export function orderByName(payload){
    return{
        type: 'ORDER_BY_NAME',
        payload
    }
}

export function setPage(page){
    return {
        type: SET_PAGE,
        payload: page
    }
}