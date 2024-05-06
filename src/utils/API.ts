import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = axios.create({
    baseURL : "http://54.180.155.53:8080"
}) 

API.interceptors.response.use(
    (res) => {
        return res
    },
    async (err) => {
        const navigate = useNavigate();

        if(err.response.status === 401 ){
            localStorage.removeItem("accessToken")
            localStorage.removeItem("refreshToken")

            alert("인증이 만료되었습니다. 다시 로그인해주세요.")

            navigate("/signin")
        }
        return Promise.reject(err)
    }
)

export default API;