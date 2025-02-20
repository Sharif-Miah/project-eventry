import { replaceMongoIdInArray } from '@/utils/data-utils';

import { eventModel } from '@/models/models-events';

async function getAllEvents() {
  const allEvents = await eventModel.find().lean();
  return replaceMongoIdInArray(allEvents);
}

export { getAllEvents };
