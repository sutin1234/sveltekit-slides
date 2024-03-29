import { error } from '@sveltejs/kit';
import supabase from '$lib/db';

export const prerender = true;

export async function load() {
	let { data, status } = await supabase.from('blogs').select('*');
	if (status === 200 && data) {
		return { blogs: data };
	}
	throw error(404, 'Not found');
}
