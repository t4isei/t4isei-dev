import Image from 'next/image';

import { SectionTitle } from '@/components/SectionTitle';
import { books } from '@/data/books';
import { movies } from '@/data/movies';
import { plants } from '@/data/plants';

import profileImage from '../../public/images/profile.png';

export default function Home() {
  return (
    <div className='animate-fade-in'>
      <div className='flex flex-col items-center gap-4'>
        <div className='tablet:size-40 size-32 rounded-full'>
          <Image
            src={profileImage}
            width={1125}
            height={1125}
            alt='profile image'
            placeholder='blur'
            className='tablet:size-40 hover:animate-spin-slowest size-32 rounded-full object-cover'
          />
        </div>
        <h1 className='text-2xl font-bold'>Taisei Hasegawa</h1>
      </div>
      <div className='mt-10 flex flex-col gap-5'>
        <section>
          <SectionTitle>about</SectionTitle>
          <p>I work as a software engineer.</p>
        </section>
        <section>
          <SectionTitle>career</SectionTitle>
          <div className='mb-3'>
            <p className='font-bold'>Software Engineer</p>
            <p>Frontend development for a mail service.</p>
          </div>
          <div className='mb-3'>
            <p className='font-bold'>Software Engineer</p>
            <p>Development of a AI chat service.</p>
          </div>
          <div>
            <p className='font-bold'>Software Engineer (Part-time)</p>
            <p>Development of a web application for asteroid discovery.</p>
          </div>
        </section>
        <section>
          <SectionTitle>roommate</SectionTitle>
          <div>
            {plants.map((plant, index) => {
              const searchUrl = `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(plant.name)}`;
              const isLast = index === plants.length - 1;
              return (
                <span key={plant.name}>
                  <a
                    href={searchUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='underline underline-offset-2 hover:animate-pulse'
                  >
                    {plant.name}
                  </a>
                  {!isLast && ' / '}
                </span>
              );
            })}
          </div>
        </section>
        <section>
          <SectionTitle>fav</SectionTitle>
          <span>🎬</span>
          <p>
            {movies
              .map((movie) => `${movie.title} - ${movie.director}`)
              .join(' / ')}
          </p>
          <span>📚</span>
          <p className=''>
            {books.map((book) => `${book.title} - ${book.author}`).join(' / ')}
          </p>
        </section>
      </div>
    </div>
  );
}
