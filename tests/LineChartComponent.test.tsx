import { render, screen } from '@testing-library/react';
import LineChartComponent from '@/components/charts/LineChartComponent';

describe('LineChartComponent', () => {
  const mockData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    data: [10, 20, 30, 40],
  };

  it('renders LineChartComponent with data', () => {
    render(<LineChartComponent data={mockData} />);

    expect(screen.getByText('Jan')).toBeInTheDocument();
    expect(screen.getByText('Feb')).toBeInTheDocument();
    expect(screen.getByText('Mar')).toBeInTheDocument();
    expect(screen.getByText('Apr')).toBeInTheDocument();
  });

  it('renders no data message when data is null', () => {
    render(<LineChartComponent data={null} />);
    expect(screen.getByText('No data available to display the chart.')).toBeInTheDocument();
  });
});
