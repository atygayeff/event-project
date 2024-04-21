import { Outlet } from "react-router-dom"
import { Header } from "./Header"
import { MainWrapper } from "./Main.styles"

export const MainLayout = () => {
    return <MainWrapper>
        <Header />
        <Outlet />
    </MainWrapper>
}