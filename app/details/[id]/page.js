import EventDetails from '@/components/details/EventDetails';
import EventVenue from '@/components/details/EventVenue';
import Hero from '@/components/details/Hero';

const DetailsPage = () => {
  return (
    <>
      <Hero />
      <section className='container'>
        <div className='grid grid-cols-5 gap-12 my-12'>
          <EventDetails />
          <EventVenue />
        </div>
      </section>
    </>
  );
};

export default DetailsPage;
