import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ChartData {
  candlestick: any[];
  lineChart: { labels: string[], data: number[] } | null;
  barChart: { labels: string[], data: number[] } | null;
  pieChart: { labels: string[], data: number[] } | null;
}

const initialState: ChartData = {
  candlestick: [],
  lineChart: null,
  barChart: null,
  pieChart: null,
};

const chartSlice = createSlice({
  name: 'chart',
  initialState,
  reducers: {
    setCandlestickData(state, action: PayloadAction<any[]>) {
      state.candlestick = action.payload;
    },
    setLineChartData(state, action: PayloadAction<{ labels: string[], data: number[] } | null>) {
      state.lineChart = action.payload;
    },
    setBarChartData(state, action: PayloadAction<{ labels: string[], data: number[] } | null>) {
      state.barChart = action.payload;
    },
    setPieChartData(state, action: PayloadAction<{ labels: string[], data: number[] } | null>) {
      state.pieChart = action.payload;
    },
  },
});

export const { setCandlestickData, setLineChartData, setBarChartData, setPieChartData } = chartSlice.actions;
export default chartSlice.reducer;
