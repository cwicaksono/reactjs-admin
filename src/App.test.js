import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import Home from './components/Home';
import Dashboard from './components/Dashboard';
import About from './components/About';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/dashboard/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders home page', () => {
	const { getByText } = render(<Home />);
    const linkElement = getByText(/home/i);
    expect(linkElement).toBeInTheDocument();
})

test('renders dashboard page', () => {
	const { getByText } = render(<Dashboard />);
    const linkElement = getByText(/dashboard/i);
    expect(linkElement).toBeInTheDocument();
})

test('renders about page', () => {
	const { getByText } = render(<About />);
    const linkElement = getByText(/about/i);
    expect(linkElement).toBeInTheDocument();
})
