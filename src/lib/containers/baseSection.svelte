<script lang="ts">
    export let title:string = "No title :(", important:boolean = false;
</script>

<div class:snap-always="{important === true}" class="grid justify-items-center pb-2 px-1 snap-start snap-normal">
    <h2 class:imp={important === true} class="text-2xl font-semibold tracking-wide">{title}</h2>
    <slot />
</div>

<style>
    .imp{ @apply text-3xl tracking-wider }
</style>