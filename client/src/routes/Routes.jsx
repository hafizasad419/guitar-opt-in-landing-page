import { Navigate, Route, Routes } from "react-router-dom"
import { lazy } from "react"

// lazy load
const Home = lazy(() => import('../pages/Home'))


function BaseRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default BaseRoutes
