import similarity from '$lib/utils/similarity';
import { molecular_forms, molecular_forms_common } from './molecular_formular_list';

interface match {
	name: string;
	factor: number;
	molecular_form_string: string;
	real_name: string;
}

export function search_molecular_form(str: string): Array<match> {
	if (!str) {
		return [];
	}
	const similarities: Array<match> = [];
	molecular_forms_common.forEach((v) => {
		[v.commonname, v.name, v.molecular_form].forEach((v2) => {
			const factor = similarity(str, v2);
			similarities.push({
				name: v2,
				factor: factor,
				molecular_form_string: v.molecular_form,
				real_name: v.name
			});
		});
	});
	molecular_forms.forEach((v) => {
		[v.name, v.molecular_form].forEach((v2) => {
			const factor = similarity(str, v2);
			similarities.push({
				name: v2,
				factor: factor,
				molecular_form_string: v.molecular_form,
				real_name: v.name
			});
		});
	});
	return similarities.sort((a, b) => b.factor - a.factor).slice(0, 5);
}
