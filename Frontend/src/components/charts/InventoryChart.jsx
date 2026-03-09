//src/components/charts/InventoryChart.jsx 

import React from 'react';
import BarChart from './BarChart';

/* 
** Inventory Chart 
** Displays inventory levels per product 
** Props:
** - inventoryData: [
**    {
        product_name: string,
        quantity: number,
        reorder_level: number
    }
]
 */
const InventoryChart = ({ inventoryData = [] }) => {
    // Prepare labels (Product Names)
    const labels = inventoryData.map(item => item.product_name);

    // Stock quantity data 
    const quantityData = inventoryData.map(item => item.quantity);

    // Reorder level dataset ( comparison)
    const reorderLevelData = inventoryData.map(item => item.reorder_level);

    const dataset = [
        {
            label: 'current Stock',
            data: quantityData,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
        },
        {
            label: 'Reorder Level',
            data: reorderLevelData, 
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
        },
    ]

    return (
        <BarChart
            labels={labels}
            dataset={dataset}
            title="Inventory Levels per Product"
            height={350}
        />
    );
};

export default InventoryChart;



