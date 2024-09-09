import { render, screen } from '@testing-library/react';
import BarChartComponent from '@/components/charts/BarChartComponent';

describe('BarChartComponent', () => {
  const mockData = {
    labels: ['Product A', 'Product B', 'Product C'],
    data: [100, 150, 200],
  };

  it('renders BarChartComponent with data', () => {
    render(<BarChartComponent data={mockData} />);

    expect(screen.getByText('Product A')).toBeInTheDocument();
    expect(screen.getByText('Product B')).toBeInTheDocument();
    expect(screen.getByText('Product C')).toBeInTheDocument();
  });

  it('renders no data message when data is null', () => {
    render(<BarChartComponent data={null} />);
    expect(screen.getByText('No data available to display the chart.')).toBeInTheDocument();
  });
});
