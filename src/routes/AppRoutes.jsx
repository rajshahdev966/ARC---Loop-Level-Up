import LandingPage from "../features/landing/ui/pages/LandingPage"
import LoginPage from "../features/auth/ui/pages/LoginPage"
import { createBrowserRouter, RouterProvider } from 'react-router'
import VisionBoard from "../features/vission_board/ui/pages/VisionBoard"
import AuthProtected from "./protected/AuthProtected"
import VisionProtected from "./protected/VisionProtected"
import StickyWall from "../features/sticky_wall/ui/pages/StickyWall"
import YourWrapped from "../features/your_wrapped/ui/pages/YourWrapped"
import GlowUpCarousel from "../features/glow_up/ui/pages/GlowUpCarousel"
import { StickyNotesContext, StickyNotesContextProvider } from "../config/StickyNoteContext"
import { VisionBoardContextProvider } from "../config/VisionBoardContext"

const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingPage />
    },
    {
        path: '/landing',
        element: <LandingPage />
    },
    {
        path: '/login',
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
                element: <VisionBoardContextProvider>
                    <VisionBoard />
                </VisionBoardContextProvider>
            },
            {
                path: 'sticky',
                element: <StickyNotesContextProvider>
                    <StickyWall />
                </StickyNotesContextProvider>
            },
            {
                path: "wrapped",
                element: <YourWrapped/>

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