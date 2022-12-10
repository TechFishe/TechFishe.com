<script>
    import BaseSection from '../../../../lib/containers/baseSection.svelte';
    import Main from '../../../../lib/containers/main.svelte';
    import { page } from '../../../../store.js';
    page.set("OnHelp")

    export const prerender = true;
</script>

<svelte:head>
    <title>TechFishe.com | Python Vars</title>
</svelte:head>

<Main>
    <BaseSection title="Python: Vars" important={true}>
        <p>After reading this page you will become a pro at using vars in Python</p>
    </BaseSection>

    <BaseSection title="Intro">
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
</Main>

<style>
    .rightItem1{ @apply col-span-3 border-l p-1 }
</style>
