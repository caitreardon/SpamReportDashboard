import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BarChart from './chartAssets/BarChart.jsx'
import LineChart from './chartAssets/LineChart.jsx'
import HalfPieChart from './chartAssets/HalfPieChart.jsx'
import CommonWords from './CommonWords.jsx'
import MapDisplay from './chartAssets/MapDisplay.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App className="App"/>
    <CommonWords />
    <BarChart />
    <LineChart />
    <HalfPieChart />
    <MapDisplay />
  </StrictMode>,
)
