import { Component, useEffect } from "react"
import LoginPage from "../features/auth/ui/pages/LoginPage"
import { createBrowserRouter, RouterProvider } from 'react-router'
import VisionBoard from "../features/vission_board/ui/pages/VisionBoard"
import AuthProtected from "./protected/AuthProtected"
import VisionProtected from "./protected/VisionProtected"
import StickyWall from "../features/sticky_wall/ui/pages/StickyWall"
import YourWrapped from "../features/your_wrapped/ui/pages/YourWrapped"
import TerminalChat from "../features/terminal_chat/ui/pages/TerminalChat"
import GlowUpCarousel from "../features/glow_up/ui/pages/GlowUpCarousel"
import { addArchetype, addHandle } from "../features/auth/state/authSlice"
import { useDispatch } from "react-redux"

const router = createBrowserRouter([
    {
        path: '/',
        element: <AuthProtected />,
        children: [
            {
                path: "",
                element: <LoginPage />
            }
        ]
    },
    {
        path: "/main",
        element: <VisionProtected />,
        children: [
            {
                path: '',
                element: <VisionBoard />
            },
            {
                path: 'sticky',
                element: <StickyWall />
            },
            {
                path: "wrapped",
                element: <YourWrapped/>

            },
            {
                path:"terminal",
                element: <TerminalChat/>
            },
            {
                path: "glowup",
                element: <GlowUpCarousel/>
            }
            
        ]
    }

])

const AppRoutes = () => {
    return <RouterProvider router={router} />
}

export default AppRoutes;