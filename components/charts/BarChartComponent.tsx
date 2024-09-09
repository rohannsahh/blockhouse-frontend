import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

interface BarChartComponentProps {
  data: {
    labels: string[];
    data: number[];
  }| null;
}

const BarChartComponent: React.FC<BarChartComponentProps> = ({ data }) => {
  if (!data || !data.labels || !data.data) {
    return <p>No data available to display the chart.</p>; 
  }

  const formattedData = data.labels.map((label, index) => ({
    label,
    value: data.data[index],
  }));

  return (
    <ResponsiveContainer width="90%" height={300}>
      <BarChart data={formattedData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="label" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};


export default BarChartComponent;
