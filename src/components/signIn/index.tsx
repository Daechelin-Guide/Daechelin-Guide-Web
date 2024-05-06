import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import API from '../../utils/API';

// OAuth에서 이런 형태로 도착
// http://localhost:3000/signIn?code=ad36bf84-e3b9-46fa-af90-8232498fdc49&state=null
const SignIn = () => {
    const navigate = useNavigate();

    const [queryParam] = useSearchParams()
    const DAuthURL:string = process.env.REACT_APP_DAuthLink || ""
    const isAdmin:boolean = localStorage.getItem("accessToken") ? true : false

    useEffect(()=>{
        if (isAdmin) {
            alert("이미 로그인 되어있습니다.")
            navigate("/")
        } else if (queryParam.get('code') === null){
            window.location.replace(DAuthURL)
        } else {
            API.post(`/auth/login?code=${queryParam.get('code')}`)
            .then((res)=>{
                console.log("correct request")
                localStorage.setItem("accessToken",res.data.accessToken)
                localStorage.setItem("refreshToken",res.data.refreshToken)

                navigate("/")
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    },[])

    return (
        <div>
            
        </div>
    );
};

export default SignIn;