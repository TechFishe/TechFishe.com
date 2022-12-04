<script lang="ts">
    export let title:string = "No title :(", yPos:string = "top-[100rem]";
</script>

<div class="absolute {yPos} grid justify-items-center pb-2 snap-start snap-always">
    <h2 class="text-2xl font-semibold tracking-wide">{title}</h2>
    <slot />
</div>