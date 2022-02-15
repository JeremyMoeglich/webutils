<script lang="ts">
	import { notes } from '$lib/stores';
</script>

<div class="alignment">
	<div class="main_content">
		<slot />
	</div>
	<div class="sidebar" />
	<div class="sidebar-spacer" />
</div>

<style>
	.alignment {
		display: flex;
		justify-content: space-between;
		width: 100%;
		height: 100%;
	}
	.sidebar {
		position: fixed;
		right: 0px;
		width: 90px;
		height: 100vh;
		background-color: rgb(104, 104, 104);
	}
	.sidebar-spacer {
		width: 100px;
		height: 100vh;
	}
	:global(body) {
		font-family: Arial, Helvetica, sans-serif;
		margin: 0px;
		padding: 0px;
		background-color: rgb(27, 27, 27);
		background: linear-gradient(rgb(51, 15, 15), rgb(17, 15, 43));
	}
	.main_content {
		width: 100%;
		height: 100%;
	}
	:global(button) {
		padding: 5px;
		border-radius: 3px;
		border-width: 2px;
		box-shadow: 0px 0px 3px black;
		margin: 2px;
		color: white;
		background-color: rgb(13, 63, 61);
	}
	:global(*) {
		box-sizing: border-box;
	}
</style>
