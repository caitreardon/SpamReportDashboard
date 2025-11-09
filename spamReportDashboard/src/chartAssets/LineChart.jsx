import { ChartContainer } from '@mui/x-charts/ChartContainer';
import {
    LinePlot,
    MarkPlot,
 
} from '@mui/x-charts/LineChart';


const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
    'Page A',
    'Page B',
    'Page C',
    'Page D',
    'Page E',
    'Page F',
    'Page G',
];

export default function TinyLineChart() {
    return (
        <ChartContainer
            width={500}
            height={300}
            series={[{ type: 'line', data: pData }]}
            xAxis={[{ scaleType: 'point', data: xLabels, position: 'none' }]}
            yAxis={[{ position: 'none' }]}
        >
            <LinePlot slotProps={{
                tooltip: {
                    trigger: 'item',
                } }}/>
            <MarkPlot />
        </ChartContainer>
    );
}
