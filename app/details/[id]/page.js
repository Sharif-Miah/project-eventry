import EventDetails from '@/components/details/EventDetails';
import EventVenue from '@/components/details/EventVenue';
import Hero from '@/components/details/Hero';
import { getEventById } from '@/db/queries';

const EventDetailsPage = async ({ params: { id } }) => {
  const eventInfo = await getEventById(id);

  return (
    <>
      <Hero eventInfo={eventInfo} />
      <section className='container'>
        <div className='grid grid-cols-5 gap-12 my-12'>
          <EventDetails
            details={eventInfo?.details}
            swgs={eventInfo?.swags}
          />
          <EventVenue location={eventInfo?.location} />
        </div>
      </section>
    </>
  );
};

export default EventDetailsPage;
