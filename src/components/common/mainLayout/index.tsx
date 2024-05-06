import { Outlet } from "react-router-dom"
import SideBar from "../sideBar"
import styled, { createGlobalStyle } from "styled-components"

const MainLayout = () => {
    return (
        <>
            <GlobalStyle/>
            <SideBar/>
            <Outlet/>
        </>
    )
}

export default MainLayout;

const GlobalStyle = createGlobalStyle`
    @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.7/dist/web/static/pretendard.css");
`