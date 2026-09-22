import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './routes/AppRoutes.jsx'
import { ToastContainer } from 'react-toastify'
import store from './app/store/store.jsx'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
        <Provider store={store}>
            <AppRoutes/>
            <ToastContainer/>
        </Provider>

)
