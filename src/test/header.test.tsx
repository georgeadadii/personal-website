import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import Header from '@/components/header'

// Mock next-themes
vi.mock('next-themes', () => ({
  useTheme: () => ({
    theme: 'light',
    setTheme: vi.fn(),
  }),
}))

describe('Header', () => {
  it('renders navigation links', () => {
    render(<Header />)

    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(<Header />)

    expect(screen.getByLabelText('GitHub')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
  })
})
