import type { Handle } from '@sveltejs/kit';
import { updateState } from '$lib/store/loading';

export const handle: Handle = async ({ event, resolve }) => {
	console.log('hooks called...');
	updateState(true); // update store
	const response = await resolve(event);
	return response;
};
