import { render, screen } from '@testing-library/react';
import PieChartComponent from '@/components/charts/PieChartComponent';

test('renders PieChartComponent with data', () => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    data: [300, 50, 100],
  };

  render(<PieChartComponent data={data} />);

  expect(screen.getByText('Red')).toBeInTheDocument();
  expect(screen.getByText('Blue')).toBeInTheDocument();
  expect(screen.getByText('Yellow')).toBeInTheDocument();
});

test('renders no data message when data is null', () => {
  render(<PieChartComponent data={null} />);
  expect(screen.getByText('No data available to display the chart.')).toBeInTheDocument();
});
