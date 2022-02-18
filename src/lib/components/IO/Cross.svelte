<script lang="ts">
    export let exec: () => void = () => {};
</script>

<button on:click={exec}>
    X
</button>

<style>
    button {
        background-color: transparent;
        border-color: transparent;
        box-shadow: 0px 0px transparent;
        color: black;
        font-size: large;
        padding: 0px;
    }
</style>