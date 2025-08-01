import './main.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {Provider} from "react-redux";

import App from "../app/App.tsx";

import store from "../../store/store.ts"


createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <StrictMode>
            <App />
        </StrictMode>
    </Provider>
)
