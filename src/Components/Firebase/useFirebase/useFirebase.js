import React, { useEffect, useState } from 'react';
import { GoogleAuthProvider,signInWithPopup,onAuthStateChanged,signOut} from "firebase/auth";
import auth from '../Firebaseint/Firebaseint';
import { selectuser, updateuser } from '../../../Redux/authslice';
import { useDispatch, useSelector } from 'react-redux';


const useFirebase = () => {
    const dispach=useDispatch()
    // const loginitems=useSelector(selectuser)
    function googlelog(){
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth,provider)
        .then(result=>{
            const user=result.user
            dispach(updateuser(user))
            
        }).catch(err=>{
            console.log(err.message)
        })
    }
    // data autometic loaded
    onAuthStateChanged(auth,u=>{
        dispach(updateuser(u))
    })
    
    // sign out
    const handlesignout=()=>{
        signOut(auth)
        .then(()=>{
            dispach(updateuser(null))
        })
    }
    return {googlelog,handlesignout}
};

export default useFirebase;