import { render } from '@testing-library/react';
import CandlestickChartComponent from '@/components/charts/CandlestickChartComponent';

describe('CandlestickChartComponent', () => {
  const mockData = [
    { x: '2023-01-01', open: 30, high: 40, low: 25, close: 35 },
    { x: '2023-01-02', open: 35, high: 45, low: 32, close: 40 },
  ];

  it('renders CandlestickChartComponent with data', () => {
    const { container } = render(<CandlestickChartComponent data={mockData} />);
    expect(container).toBeInTheDocument();
  });

  it('renders an empty chart when no data is provided', () => {
    const { container } = render(<CandlestickChartComponent data={[]} />);
    expect(container).toBeInTheDocument();
  });
});


