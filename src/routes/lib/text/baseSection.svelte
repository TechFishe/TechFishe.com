<script lang="ts">
    export let title:string = "No title :(";
</script>

<div class="grid justify-items-center pb-2 snap-start snap-always">
    <h2 class="text-2xl font-semibold tracking-wide">{title}</h2>
    <slot />
</div>