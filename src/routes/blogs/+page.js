import { error } from '@sveltejs/kit';
import supabase from '$lib/db';

export async function load() {
    let { data, status } = await supabase.from('blogs').select('*');
    if(status === 200 && data){
        console.log('load func +page.js >>> ', data)
        return data
    }
    throw error(404, 'Not found');
}