import { Arima } from 'next/font/google';
import ModeToggle from '../theme';

const arima = Arima({ subsets: ['latin'], weight: '400' })

export default function Navbar() {
  return (
    <div className='flex justify-between px-6 py-4 border-b '>
      <a href='/' className={`text-3xl ${arima.className}`}>Expense Tracker</a>
      <div className='flex gap-4'>
        <ModeToggle />
        <button className="bg-blue-button px-2 py-1 rounded-sm cursor-not-allowed text-white">Sign in</button>
      </div>
    </div>
  )
}
