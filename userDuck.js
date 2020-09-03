import axios from 'axios'

const URL = "http://34.69.62.82:9009/cifras/api/auth/signin"

// const
const initialState = {
    username:"",
    password:"",
   message:"",
    loggedIn: false,
    fetching: false,
}

const LOGIN = "LOGIN"
const LOGIN_SUCCESS = "LOGIN_SUCCESS"
const LOGIN_ERROR = "LOGIN_ERROR"
const LOG_OUT = "LOG_OUT"
const  ERROR_MSG="Usuario y/o Contraseña incorrecta"
// reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOG_OUT:
            {
            
                console.log("ENTRO EN AUTH LOGOUT"+state);
                console.dir(state);
            return { ...initialState }
            }
        case LOGIN_SUCCESS:
            {
            
                console.log("ENTRO EN AUTH LOGIN SUCCESS"+state);
                console.dir(state);
            return { ...state, fetching: false, ...action.payload, loggedIn: true } }
        case LOGIN_ERROR:
            {
            
                console.log("ENTRO EN AUTH LOGIN ERROR"+state);
            return { ...state, fetching: false, error: action.payload,message:ERROR_MSG } }
        case LOGIN:
            return { ...state, fetching: true }
        default:{
            
            console.log("ENTRO EN AUTH DEFAULT");
            console.dir(state);
            return state;
        }
    }
}

// aux
function saveStorage(storage) {
    localStorage.storage = JSON.stringify(storage)
}

// actions
export const logOutAction = () => (dispatch, getState) => {
 //   signOutGoogle()
    dispatch({
        type: LOG_OUT
    })
    localStorage.removeItem('storage')
}

export const restoreSessionAction = () => dispatch => {
    const storage = JSON.parse(localStorage.getItem('storage'));
    if (storage && storage.user) {
        dispatch({
            type: LOGIN_SUCCESS,
            payload: storage.user
        })
    }
}

export const logInAction =    (username, password) => (dispatch, getState) => {
    console.log("ENTRO LOGIN ACTION"); 
  console.log("value "+username + password )  ;
  if(username==="kblum" & password=== "kblum"){
    dispatch({
        type: LOGIN_SUCCESS,
        
    })
    saveStorage(getState());
  }else{
    dispatch({
        type:  LOGIN_ERROR,
       
          
  })
   /* return loginWithGoogle()
        .then(user => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: {
                    uid: user.uid,
                    displayName: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL
                }
            })
            saveStorage(getState())
            retreiveFavs()(dispatch, getState)
        })
        .catch(e => {
            console.log(e)
            dispatch({
                type: LOGIN_ERROR,
                payload: e.message
            })
        }) */
}
}