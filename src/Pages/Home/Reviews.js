import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import ReviewCard from './ReviewCard';

const Reviews = () => {
  const reviews = [
    {
      name: 'Winson Harry',
      location: 'California',
      img: people1,
      review:
        'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
    },
    {
      name: 'Elizabeth Olsen',
      location: 'Washington DC',
      img: people2,
      review:
        'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
    },
    {
      name: 'Maisha Tisha',
      location: 'Chittagong',
      img: people3,
      review:
        'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
    },
  ];
  return (
    <section className='container mx-auto my-20'>
      <div className='flex justify-between'>
        <div>
          <h3 className='text-secondary text-xl font-bold mt-3 mb-2'>
            Testimonials
          </h3>
          <h2 className='text-accent text-4xl'>What Our Patients Say</h2>
        </div>
        <div>
          <img src={quote} alt='' className='w-48 h-40' />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 my-16'>
        {reviews.map((r, index) => (
          <ReviewCard key={index} r={r} />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
