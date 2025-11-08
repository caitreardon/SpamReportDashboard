import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BarChart from './chartAssets/BarChart.jsx'
import LineChart from './chartAssets/LineChart.jsx'
import HalfPieChart from './chartAssets/HalfPieChart.jsx'
import CommonWords from './CommonWords.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <CommonWords />
    <BarChart />
    <LineChart />
    <HalfPieChart />
  </StrictMode>,
)
