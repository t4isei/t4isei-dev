import { Icon } from '@iconify/react';
import Link from 'next/link';

import { LinkIcon } from './LinkIcon';
import links from '../data/links.json';

export function Header() {
  return (
    <header className='mx-5 my-5 flex justify-between sm:mx-12'>
      <Link href='/' className='pointer hover:animate-pulse'>
        <h1 className='text-xl font-bold'>t4isei</h1>
      </Link>
      <ul className='flex items-center gap-3 sm:gap-6'>
        <li>
          <Link href='/toys'>
            <h2 className='hover:animate-wiggle-x font-bold'>toys</h2>
          </Link>
        </li>
        <li>
          <Link href='/blogs'>
            <h2 className='hover:animate-wiggle-x font-bold'>blogs</h2>
          </Link>
        </li>
        <li>
          <LinkIcon url={links.github}>
            <Icon
              icon='ri:github-fill'
              className='hover:animate-wiggle-x text-2xl'
            />
          </LinkIcon>
        </li>
        <li>
          <LinkIcon url={links.twitter}>
            <Icon
              icon='ri:twitter-x-fill'
              className='hover:animate-wiggle-x text-2xl'
            />
          </LinkIcon>
        </li>
      </ul>
    </header>
  );
}
