import {default as React} from 'react'
import {unstable_createRoot} from 'react-dom'
import App from './components/App'
import './index.css'

unstable_createRoot(document.getElementById('main')).render(<App/>)