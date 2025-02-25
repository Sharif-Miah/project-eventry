'use server';

import {
  createUser,
  findUserByCredentials,
  updateGoing,
  updateInterest,
} from '@/db/queries';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

async function registerUser(formData) {
  const user = Object.fromEntries(formData);
  const created = await createUser(user);
  redirect('/login');
}

async function performLogin(formData) {
  try {
    const credential = {};
    credential.email = formData.get('email');
    credential.password = formData.get('password');
    const found = await findUserByCredentials(credential);
    return found;
  } catch (err) {
    throw err;
  }
}

async function addInterestedEvent(eventId, authId) {
  try {
    await updateInterest(eventId, authId);
  } catch (error) {
    throw error;
  }
  revalidatePath('/');
}

async function addGoingEvent(eventId, user) {
  try {
    await updateGoing(eventId, user?.id);
  } catch (error) {
    throw error;
  }

  revalidatePath('/');
  redirect('/');
}

export { registerUser, performLogin, addInterestedEvent, addGoingEvent };
