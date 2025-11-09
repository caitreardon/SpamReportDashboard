import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { BarPlot } from '@mui/x-charts/BarChart';
import { BarChart } from '@mui/x-charts/BarChart';
import Box from '@mui/material/Box';
const uData = ['87', '150' , '90', '400', '220', '127', '234' , '109', '42'];
const xLabels = [
    'Page A',
    'Page B',
    'Page C',
    'Page D',
    'Page E',
    'Page F',
    'Page G',
];

export default function SimpleBarChart() {
    return (
        <div>
            <h2>Words to look out for</h2>
            <box sx={{ width: '100%', height: 300 }}>
                <BarChart series={[
                    { data: uData, label: ' % frequency', id: 'wordFrequencyId' }
                ]}
                xAxis={[{ data:xLabels, label:'Most Common Words'}]}
                />
            </box>

        </div>
    )
}
