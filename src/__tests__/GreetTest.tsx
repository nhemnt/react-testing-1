import { render, screen } from "@testing-library/react";
import Greet from '../components/Greet/Greet';


describe('Greet', () => {
  test('renders correctly', () => {
    render(<Greet />);
    const textElement = screen.getByText(/Hello/);
    expect(textElement).toBeInTheDocument();
  });
  
  
  test('renders with a name', () => {
    render(<Greet name='Vishal'/>);
    const textElement = screen.getByText('Hello Vishal');
    expect(textElement).toBeInTheDocument();
  });
})

