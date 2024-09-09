
import React from 'react';

import CanvasJSReact from '@canvasjs/react-stockcharts';

const CanvasJSStockChart = CanvasJSReact.CanvasJSStockChart;

interface CandlestickChartProps {
  data: { x: string; open: number; high: number; low: number; close: number }[];
}

const CandlestickChartComponent: React.FC<CandlestickChartProps> = ({ data }) => {
  const formattedData = data.map(item => ({
    x: new Date(item.x),
    y: [item.open, item.high, item.low, item.close],
  }));

  const options = {   
    charts: [{
      data: [{
        type: "candlestick",
        dataPoints: formattedData
      }]
    }],
    rangeSelector: {
      enabled: true,
    }
  };

  return (
    <div className=''>
      <CanvasJSStockChart options={options} />
    </div>
  );
};

export default CandlestickChartComponent;
