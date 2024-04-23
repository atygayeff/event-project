import { Outlet } from "react-router-dom"
import { AuthWrapper } from "./Auth.styles"

export const AuthLayout = () => {
    return <AuthWrapper>
        <Outlet />
    </AuthWrapper>
}