import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { BarPlot } from '@mui/x-charts/BarChart';
import { BarChart } from '@mui/x-charts/BarChart';

const uData = [20, 15, 12, 17, 22, 18, 23];
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
        <ChartContainer
            width={500}
            height={300}
            series={[{ data: uData, label: 'Series 1', type: 'bar' }]}
            xAxis={[{ scaleType: 'band', data: xLabels }]}
        >
            <BarChart 
                xAxis={[
                    {
                        id: 'barCategories',
                        data: xLabels,
                    },
                ]}
                series={[
                    {
                        data: uData,
                    },
                ]}
                height={300}
                slotProps={{ tooltip: {trigger:'item'}}}/>
            <BarPlot slotProps={{ tooltip: {trigger: 'item' } }}/>
        </ChartContainer>
    );
}
