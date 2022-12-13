<script>
    import { page } from '$app/stores';
    import Main from "$lib/containers/main.svelte";
    import BaseSection from "$lib/containers/baseSection.svelte";
</script>

<svelte:head>
    <title>TechFishe.com | Error :(</title>
</svelte:head>

<Main>
    <BaseSection title="Error :(" important={true}>
        <p class="pDefault">I'm sorry, but there was an error somewhere along the way. Please make sure you have the right URL entered and try again.
            <br>If the problems persist please contact me <a href="mailto:barkej226148@prescott.k12.wi.us" target="_blank" rel="noopener noreferrer" class="textLink hover:text-fuchsia-500">here</a> and I'll try and fix it soon :)
        </p>
    </BaseSection>
    <BaseSection title="Error code:">
        <p class="pDefault">{$page.error?.message}</p>
    </BaseSection>
</Main>