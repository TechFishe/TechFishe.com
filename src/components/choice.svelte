<script lang="ts">
    let choiceMade:boolean = false, wantsRing:boolean;
</script>

<section class="border-t-[#C0BABC]/25 border-2 border-transparent py-3 flex flex-col">
    <h2>Would you like your ring?</h2>
    {#if !choiceMade}
        <section class="flex justify-evenly mt-3 text-white md:w-1/3 w-full self-center">
            <button on:click={() => {wantsRing = true; choiceMade = true;}} class="px-4 py-1 rounded-md bg-green-400 shadow-md shadow-green-400/25">Yes please :)</button>
            <button on:click={() => {wantsRing = false; choiceMade = true;}} class="px-4 py-1 rounded-md bg-red-400 shadow-md shadow-red-400/25">No :(</button>
        </section>
    {/if}
</section>
{#if wantsRing}
    <article class="text-lg indent-2 my-3">
        <h3>YAY!!!!!!!!!!!</h3>
        <p>To find your ring fair maiden, you want to read the following steps closly:</p>
        <ol class="list-decimal list list-inside ml-4 marker:text-[#7FFFD4] mt-2">
            <li>Remove the instrument case from my locker</li>
            <li>Open it up and look around the case until you find a small, black velvet bag.</li>
            <li>Open the bag and take out the ring and slide it onto your finger. Tada!! You now have aqquired a new ring that you can wear during school!</li>
        </ol>
        <p class="italic text-base font-medium">**Please note that I've enchanted the velvet bag with the spell known as Send Nudes! (I couldn't think of a cool spell name, leave me alone) This spell places a curse on the person to open the bag, making them send their boyfriend special pictures when they get home! Mwahahaha!!!**</p>
        <p class="mt-2">I hope your volleyball game went well!! Text me when you get home, I love u 💙💙💙💙 :)))))))</p>
    </article>
    {:else if !wantsRing && choiceMade}
        <p class="text-lg my-3">oh. ok then. i'm sorry :(</p>
{/if}

<style>
    h2{
        font-family: 'Caveat', cursive;
        font-weight: 600;
        text-align: center;
        color: #7FFFD4;
        @apply text-6xl tracking-wider;
    }
    h3{
        font-family: 'Caveat', cursive;
        font-weight: 600;
        color: #7FFFD4;
        @apply text-5xl tracking-wider;
    }
</style>