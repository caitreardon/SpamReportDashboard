import {PieChart} from '@mui/x-charts/PieChart';

const data = [
    {label: 'group 1', value:400},
    {label: 'group 2', value:200},
    {label: 'group 3', value:430},
    {label: 'group 4', value:1000},
];
export default function HalfPieChart(){
    return (
        <PieChart
        series={[{
            startAmgle: -90,
            endAngle: 90,
            data,
        },
    ]}
    height={200}
    width={200}
    />
    );
}
