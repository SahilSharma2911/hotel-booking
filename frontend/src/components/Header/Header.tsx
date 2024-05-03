import { Link } from 'react-router-dom'
import { useAppContext } from '../../contexts/AppContext'
import SignOutButton from '../SignOutButton/SignOutButton';

const Header = () => {

  const { isLoggedIn } = useAppContext();

  return (
    <div className='bg-blue-800 py-6 w-full'>
      <div className="px-[10rem] flex justify-between">
        <span className='text-3xl text-white font-bold tracking-tight'>
          <Link to='/'>Holidays.com</Link>
        </span>
        <span className='flex space-x-5'>
          {isLoggedIn ? <>
            <Link to="/my-booking" className='flex items-center text-white px-3 font-bold hover:bg-blue-600'>My Bookings</Link>
            <Link to="/my-hotels" className='flex items-center text-white px-3 font-bold hover:bg-blue-600'>My Hotels</Link>
            <SignOutButton />
          </> :
            <Link to='/sign-in' className='flex items-center bg-white text-blue-600 px-3 font-bold hover:bg-gray-100 hover:text-green-500'>Sign In</Link>
          }
        </span>
      </div>
    </div>
  )
}

export default Header
