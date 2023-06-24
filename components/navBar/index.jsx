import { Arima } from 'next/font/google';
import ModeToggle from '../theme';

const inter = Arima({ subsets: ['latin'], weight: '400' })

export default function Navbar() {
  return (
    <div className='flex justify-between px-6 py-4 bg-slate-100 border-b '>
      <h2 className={`text-2xl text-black ${inter.className}`}>Expense Tracker</h2>
      <div className='flex gap-4'>
        <ModeToggle />
        <button className="bg-blue-button px-2 py-1 rounded-sm cursor-not-allowed text-white">Sign in</button>
      </div>
    </div>
  )
}
