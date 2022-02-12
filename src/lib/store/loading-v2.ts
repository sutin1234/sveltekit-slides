import { writable } from 'svelte/store';

const newLoading = () => {
	const { subscribe, update, set } = writable({
		status: 'IDLE', // IDLE, LOADING, NAVIGATING
		message: ''
	});

	const setNavigating = (isNavigating: boolean) => {
		update(() => {
			return {
				status: isNavigating ? 'NAVIGATING' : 'IDLE',
				message: ''
			};
		});
	};
	const setLoading = (isLoading: boolean, message?: string) => {
		update(() => {
			return {
				status: isLoading ? 'LOADING' : 'IDLE',
				message: isLoading ? message : ''
			};
		});
	};
	return { subscribe, update, set, setNavigating, setLoading };
};
export const loading = newLoading();
