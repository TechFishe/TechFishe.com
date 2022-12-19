<script lang="ts">
    export let title:string = "No title :(", important:boolean = false;
</script>

<div class:snap-always="{important === true}" class="grid justify-items-center pb-2 px-1 snap-start snap-normal">
    {#if important === true}
        <h1 class="text-3xl tracking-wider font-semibold">{title}</h1>
        {:else}
            <h2 class="text-2xl font-semibold tracking-wide">{title}</h2>
    {/if}
    <slot />
</div>