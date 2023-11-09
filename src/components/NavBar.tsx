'use client'
import Link from 'next/link';
import React from 'react';
import { usePathname  } from 'next/navigation';
import { useIsClient } from '@/context/isClient';

const NavBar = () => {
    const isClient = useIsClient();
    const pathname  = usePathname();
    const isButtonActive = (route:string) => {
      return pathname === route ? 'bg-buttonbeige' : '';
    }   

    if (isClient) changeBgColorOnScroll();
    
    return (
      <div id="backgroundColorNav" className='w-auto rounded-full my-5 relative top-0 link-transition backdrop-blur-sm'>
        <ul className="flex flex-wrap text-md font-semibold text-center text-secondary w-auto p-3">
          <li className="sm:mr-1 md:mr-2">
            <Link href={'/'}>
              <button 
                className={`inline-block px-5 py-2 font-semibold text-secondary hover:bg-buttonbeige rounded-full link-transition ${isButtonActive('/')}`} aria-current={pathname === '/' ? 'page' : undefined}
              >
                About
              </button>
            </Link>
          </li>
          <li className="sm:mr-1 md:mr-2">
            <Link href={'/projects'}>
              <button 
                className={`inline-block px-5 py-2 font-semibold text-secondary hover:bg-buttonbeige rounded-full link-transition ${isButtonActive('/projects')}`} aria-current={pathname === '/projects' ? 'page' : undefined}
              >
                Projects
              </button>
            </Link>
          </li>
          <li className="sm:mr-1 md:mr-2">
            <Link href={'/contact'}>
              <button 
                className={`inline-block px-5 py-2 font-semibold text-secondary hover:bg-buttonbeige rounded-full link-transition ${isButtonActive('/contact')}`} aria-current={pathname === '/contact' ? 'page' : undefined}
              >
                Contact
              </button>
            </Link>
          </li>
        </ul>
      </div>
    );
}
 
export default NavBar;

function changeBgColorOnScroll() {
  window.addEventListener('scroll', () => {
    const verticalScrollPx = window.scrollY;
    const backgroundColorNav = document.getElementById('backgroundColorNav')
    if (verticalScrollPx < 50 && backgroundColorNav) {
      backgroundColorNav.style.backgroundColor = 'transparent'
    } else if (backgroundColorNav && verticalScrollPx > 51) {
      backgroundColorNav.style.backgroundColor = 'hsla(45, 17%, 95%, .5)'
    } 
  });
}
