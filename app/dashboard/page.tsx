'use client';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChartData } from '@/store/thunks';
import LineChartComponent from '@/components/charts/LineChartComponent';
import BarChartComponent from '@/components/charts/BarChartComponent';
import PieChartComponent from '@/components/charts/PieChartComponent';
import dynamic from 'next/dynamic';
import { RootState ,AppDispatch } from '@/store/store';

const CandlestickChartComponent = dynamic(() => import('@/components/charts/CandlestickChartComponent'), {
  ssr: false,
});

const Dashboard: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const candlestickData = useSelector((state: RootState) => state.chart.candlestick);
  const lineChartData = useSelector((state: RootState) => state.chart.lineChart);
  const barChartData = useSelector((state: RootState) => state.chart.barChart);
  const pieChartData = useSelector((state: RootState) => state.chart.pieChart);

  useEffect(() => {
    dispatch(fetchChartData());
  }, [dispatch]);

  return (
    <>
      <h2 className="text-2xl text-black text-center font-semibold mb-5">Blockhouse assignment</h2>
      <div className="lg:p-8 p-1 m-3 bg-gray-200 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-700 mb-10">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className='m-3 bg-gray-100 p-4 rounded-xl shadow-lg'>
            <h2 className="text-xl m-1 text-gray-600 text-center mb-4">Candlestick Chart</h2>
            <CandlestickChartComponent data={candlestickData} />
          </div>
          <div className='m-3 bg-gray-100 p-7  rounded-xl shadow-lg'>
            <h2 className="text-xl m-1 text-center text-gray-600 mb-4">Line Chart</h2>
            <LineChartComponent data={lineChartData} />
          </div>
          <div className='m-3  bg-gray-100 p-7 rounded-xl shadow-lg'>
            <h2 className="text-xl m-1 text-center text-gray-600 mb-4">Bar Chart</h2>
            <BarChartComponent data={barChartData} />
          </div>
          <div className='m-3 bg-gray-100 p-2 rounded-xl shadow-lg'>
            <h2 className="text-xl m-1 text-center text-gray-600 mb-4">Pie Chart</h2>
            <PieChartComponent data={pieChartData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
