import { writable } from 'svelte/store';
import { IMENULIST } from '../core/interfaces/menus';

const initialize: IMENULIST[] = [];
export const menus = writable(initialize);
export const updateMenu = (menu: IMENULIST): void => {
	menus.update((menus) => ({ ...menus, ...menu }));
};
export const updateMenuV2 = (menu: IMENULIST): void => {
	menus.update((menus: IMENULIST[]) => ([...menus, menu]));
};
