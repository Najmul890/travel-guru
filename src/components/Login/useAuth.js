import React from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';
import { useContext } from 'react';
import { Route, Redirect} from 'react-router-dom';
import firebaseConfig from '../../firebaseConfig';


firebase.initializeApp(firebaseConfig);


const AuthContext= createContext();
export const AuthContextProvider=(props)=>{
    const auth=Auth();
    return <AuthContext.Provider value={auth}> {props.children} </AuthContext.Provider>
}
export const useAuth=()=> useContext(AuthContext);


export const  PrivateRoute = ({ children, ...rest }) => {
    const auth = useAuth();
    return (
      <Route
        {...rest}
        render={({ location }) =>
          auth.user ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

  
  const getUser = user =>{
    const {displayName, email}= user;
    return {name: displayName, email}          
}

const Auth= ()=>{
  
  const [user, setUser]=useState(null);
    
    const signInWithGoogle= ()=>{
      const provider=new firebase.auth.GoogleAuthProvider();
        return firebase.auth().signInWithPopup(provider)
        .then(res=>{
            const signedInUser= getUser(res.user);
            setUser(signedInUser);
            return res.user;
        })
        .catch(err=>{
            console.log(err);
            setUser(null);
            return err.message;
        })
  }
  const signOut=() =>{
    return firebase.auth().signOut()
    .then(()=>{
        setUser(null);
        return true;
    })
    .catch(err=>{
        console.log(err);
        return false;
    })
}

    const signIn =(email,password)=>{
        return firebase.auth().signInWithEmailAndPassword(email,password)
        .then(res=>{
            setUser(res.user);
            window.history.back();
        })
        .catch(err=>setUser({ error: err.message }) )
    }

    const signUp =(email, password, name)=>{
        return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res=>{
            firebase.auth().currentUser.updateProfile({
                displayName: name
            })
            .then(()=>{
                setUser(res.user);
                window.history.back();
            });
        })
        .catch(err=> setUser({error: err.message }))
    }
    const fbSignIn=()=>{
      var provider = new firebase.auth.FacebookAuthProvider();
     return firebase.auth().signInWithPopup(provider)
      .then(res=>{
        const signedInFbUser= getUser(res.user);
            setUser(signedInFbUser);
            return res.user
      })
      .catch(err=>{
        console.log(err);
        setUser(null);
        return err.message
      })
    }
    useEffect(()=>{
      firebase.auth().onAuthStateChanged(function(usr){
         
             if(usr){
                 const currentUser =getUser(usr) ;
                 setUser(currentUser)
             }else{
    
             }
         })
     
  },[])
    return{
        user, signIn, signUp, signOut,signInWithGoogle, fbSignIn 
    }

}

export default Auth;