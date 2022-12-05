<script>
    import BaseSection from '../../../lib/text/baseSection.svelte';
    import { page } from '../../../store.js';
    page.set("OnHelp")

    export const prerender = true;
</script>

<svelte:head>
    <title>Python Vars</title>
</svelte:head>

<main class="defaultBox mx-4 snap-y snap-mandatory">
    <div class="absolute top-16">
        <h1 class="text-center text-3xl font-bold tracking-wide">Python: Vars</h1>
        <p>After reading this page you will become a pro at using vars in Python</p>
    </div>

    <BaseSection title="Intro" yPos="top-32">
        <p class="pDefault"> There are a lot of things to know about variables in Python but if you've ever done basic algebra or any other coding langague you should be just fine.
            <br>There are a lot of variable types in Python, but here are the main 4 we care about:
        </p>
        <div class="defaultGrid grid-cols-4 grid-rows-6">
            <span class="topItem leftItem">Data types:</span>
            <span class="topItem rightItem1">What they mean:</span>
            <span class="leftItem border-t">string</span>
            <span class="rightItem1 border-t">Held inside of qoutes or double qoutes, acts like a sentence</span>
        </div>
    </BaseSection>
</main>

<style>
    .rightItem1{ @apply col-span-3 border-l p-1 }
</style>