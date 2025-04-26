import Image from 'next/image';
import Link from 'next/link';
import SignInOut from './auth/SignInOut';
import EvetPng from '@/public/banner.png';

const Navbar = () => {
  return (
    <nav>
      <div className='container flex justify-between items-center py-4'>
        <div className='nav-brand'>
          <Link href='/'>
            <Image
              src={EvetPng}
              alt='Eventry'
              className='h-[45px]'
              width={60}
              height={60}
            />
          </Link>
        </div>

        <ul className='flex gap-4 text-[#9C9C9C]'>
          <li>
            <SignInOut />
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/contact'>Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
