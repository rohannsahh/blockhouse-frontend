import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setCandlestickData, setLineChartData, setBarChartData, setPieChartData } from './slices/chartSlice';

export const fetchChartData = createAsyncThunk(
  'chart/fetchChartData',
  async (_, { dispatch }) => {
    try {
      const candlestickResponse = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/candlestick-data/`);
     const lineChartResponse = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/line-chart-data/`);
      const barChartResponse = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/bar-chart-data/`);
      const pieChartResponse = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/pie-chart-data/`);

      dispatch(setCandlestickData(candlestickResponse.data.data));
      dispatch(setLineChartData({
        labels: lineChartResponse.data.labels,
        data: lineChartResponse.data.data,
      }));
      dispatch(setBarChartData({
        labels: barChartResponse.data.labels,
        data: barChartResponse.data.data,
      }));
      dispatch(setPieChartData({
        labels: pieChartResponse.data.labels,
        data: pieChartResponse.data.data,
      }));
    } catch (error) {
      console.error('Error fetching chart data:', error);
    }
  }
);
