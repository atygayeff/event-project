import { Outlet } from "react-router-dom"
import { Header } from "./Header"
import { Content, MainWrapper } from "./Main.styles"

export const MainLayout = () => {
    return <MainWrapper>
        <Header />
        <Content>
            <Outlet />
        </Content>
    </MainWrapper>
}