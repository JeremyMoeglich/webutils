<script lang="ts">
	import { search_molecular_form } from '$lib/chemistry/molecular_formular/find_molecular_form';
	import { calculate_molar_mass } from '$lib/chemistry/molecular_formular/molar_mass';
	import { parse_molecular_formular } from '$lib/chemistry/molecular_formular/parser';
	import { notes } from '$lib/stores/notes';
	let value = '';
	let search_value = '';
</script>

{JSON.stringify($notes)}

<div class="parser">
	<p>
		Parser: <input type="text" bind:value />
	</p>
	{calculate_molar_mass(value)}
	<button
		on:click={() => {
			search_value = value;
		}}>Search</button
	>
</div>

<p>
	Element Search: <input type="text" bind:value={search_value} />
</p>
<ul>
	{#each search_molecular_form(search_value) as match}
		<div class="match">
			<div on:click={() => ($notes = [...$notes, { text: match.molecular_form_string }])}>
				{#if match.name === match.molecular_form_string}
					<li>{match.real_name} - {match.molecular_form_string}</li>
				{:else}
					<li>{match.name} - {match.molecular_form_string}</li>
				{/if}
			</div>
			<button
				on:click={() => {
					value = match.molecular_form_string;
				}}>Use</button
			>
		</div>
	{/each}
</ul>

<style lang="scss">
	ul {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}
	.match {
		display: flex;
		gap: 7px;
	}
	.parser {
		display: flex;
		gap: 7px;
		align-items: center;
		button {
			height: 30px;
		}
	}
</style>
