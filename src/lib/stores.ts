import type { note } from '$lib/types/note';
import { writable } from 'svelte/store';

export const notes = writable<Array<note>>([]);
export const grid_locked = writable<boolean>(false);
