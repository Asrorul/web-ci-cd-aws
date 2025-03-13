import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
  it('renders the website name', () => {
    render(<Header />);
    expect(screen.getByText('MyWebsite')).toBeInTheDocument();
  });

  it('renders all navigation links', () => {
    render(<Header />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Features')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('has correct navigation href attributes', () => {
    render(<Header />);
    expect(screen.getByText('Home').getAttribute('href')).toBe('#home');
    expect(screen.getByText('Features').getAttribute('href')).toBe('#features');
    expect(screen.getByText('Contact').getAttribute('href')).toBe('#contact');
  });
});
