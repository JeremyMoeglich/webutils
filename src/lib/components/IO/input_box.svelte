<script lang="ts">
	import {
		drop_data,
		get_by_priority,
		get_drag_content,
		optional_drop_data,
		set_drag_content
	} from '$lib/utils/drag';
	import DragComponent from './drag_component.svelte';
	import LockDrag from './lock_drag.svelte';
	export let data: drop_data;
	export let note = '';
	export let exec: () => void = () => {};
	export let priority: Array<keyof optional_drop_data> = [];
	$: {
		data.text = get_by_priority(data, priority).toString();
		data.optional = {};
	}
	function key(event: KeyboardEvent) {
		console.log(event.key);
		if (event.key === 'Enter') {
			exec();
		}
	}
</script>

<LockDrag>
	<div class="alignment">
		{#if note}<p>{note}:</p>{/if}
		<div class="field">
			<input
				type="text"
				bind:value={data.text}
				on:keypress={key}
				on:drop|preventDefault={(event) => (data = get_drag_content(event))}
			/>
			<button
				class="copy"
				on:click={async () => {
					await navigator.clipboard.writeText(data.text);
				}}
			>
				<DragComponent bind:drag_data={data}
					><img src="/images/widget_icons/copy.svg" alt="" /></DragComponent
				>
			</button>
		</div>
	</div>
</LockDrag>

<style lang="scss">
	.alignment {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: fit-content;
		gap: 4px;
		margin: 6px;
		flex-wrap: wrap;
		p {
			margin: 0px;
			width: 20px;
			min-width: fit-content;
		}
		.field {
			position: relative;
			width: 130px;
			box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.438);
			input {
				width: 100%;
				height: 100%;
			}
			height: 20px;
			.copy {
				position: absolute;
				display: flex;
				justify-content: center;
				align-items: center;
				width: 15%;
				border-width: 0px;
				padding: 0px;
				background-color: rgb(194, 194, 194);
				height: 100%;
				margin: 0px;
				border-radius: 0px;
				right: 0px;
				top: 0px;
				img {
					width: 80%;
				}
				box-shadow: -2px 0px 3px -1px rgba(0, 0, 0, 0.466);
				&:hover {
					background-color: rgb(145, 161, 182);
				}
			}
		}
	}
</style>
