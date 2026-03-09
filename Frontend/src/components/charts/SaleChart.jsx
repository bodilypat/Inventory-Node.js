//src/components/charts/SaleChart.jsx    # Sales trends over time 

import React from 'react';
import LineChart from './LineChart';

/*  Sales Chart 
** Props:
    - salesData: [
        {
            period: string,
            total_sales: number
        },
        ...]
*/

const SalesChart = ({ salesData = [] }) => {
    // Extract labels (Months / Dates)
    const labels = salesData.map(item => item.period);

    // Extract sales values 
    const salesValues = salesData.map(item => item.total_sales);

    const dataset = [
        {
            label: 'Total Sales',
            data: salesValues,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true,
            tension: 0.4
        },
    ];    
        
    return (
        <div className="sales-chart">
            <h3>Sales Trends</h3>
            <LineChart 
                labels={labels} 
                datasets={dataset} 
                title="Sales Trend" 
                height="300px"
             />
        </div>
    );
};

export default SalesChart;

