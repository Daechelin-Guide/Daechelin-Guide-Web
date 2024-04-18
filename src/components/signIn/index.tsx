import axios from 'axios';
import React, { useEffect } from 'react';
import { redirect, useSearchParams } from 'react-router-dom';

// OAuth에서 이런 형태로 도착
// http://localhost:3000/signIn?code=ad36bf84-e3b9-46fa-af90-8232498fdc49&state=null
const SignIn = () => {
    const [queryParam] = useSearchParams()

    useEffect(()=>{
        alert("준비 중인 기능입니다!!")
        redirect("/")

        /*
        axios.post(`http://54.180.155.53:8080/auth/login?code=${queryParam.get('code')}`)
        .then((res)=>{
            localStorage.setItem("accessToken",res.data.accessToken)
            localStorage.setItem("refreshToken",res.data.refreshToken)
        })
        .catch((err)=>{
            console.log(err)
        }) */
    },[])

    return (
        <div>
            
        </div>
    );
};

export default SignIn;