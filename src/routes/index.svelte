<script>
	import { parse_molecular_formular } from '$lib/chemistry/molecular_formular/parser';
	let value = '';
</script>

<input type="text" bind:value />
{JSON.stringify(parse_molecular_formular(value))}
