import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'

import '@/shared/assets/fonts/style.scss'

import App from './app.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>
)
