import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

interface LineChartComponentProps {
  data: {
    labels: string[];
    data: number[];
  } | null;
}

const LineChartComponent: React.FC<LineChartComponentProps> = ({ data }) => {
  if (!data || !data.labels || !data.data || data.labels.length === 0 || data.data.length === 0) {
    return <p>No data available to display the chart.</p>;
  }

  const formattedData = data.labels.map((label, index) => ({
    name: label,
    value: data.data[index],
  }));

  return (
    <ResponsiveContainer width="90%" height={300}>
      <LineChart data={formattedData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;
