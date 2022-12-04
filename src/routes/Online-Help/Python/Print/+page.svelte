<script>
    import BaseSection from '../../../lib/text/baseSection.svelte';
    import { page } from '../../../store.js';
    page.set("OnHelp")
</script>

<svelte:head>
    <title>Python Print</title>
</svelte:head>

<main class="flex w-screen place-content-center 2xl:max-w-[88.5rem] xl:max-w-[72.5rem] lg:max-w-[56.5rem] md:max-w-[40.5rem] sm:max-w-[32.5rem] px-4 justify-self-center snap-y snap-mandatory">
    <div class="absolute top-16">
        <h1 class="text-center text-3xl font-bold tracking-wide">Python: Print</h1>
        <p class="p-1">After reading this page you will become a pro at using the print function in Python</p>
    </div>
    
    <BaseSection title="Intro" yPos="top-32">
        <p class="multiLineText">The built-in Python print function is a function who's sole purpose is to write a new line to the terminal every time it's called. How it works is a lot less important, rather this page will teach you how to use it like a pro.
            <br>The print function can take a max of 5 arguments when called, however only the first is required.
        </p>
        <div class="grid grid-cols-5 grid-rows-6 rounded-md px-1 shadow-sm bg-gray-700 snap-center snap-normal">
            <span class="leftItem topItem">Arguments:</span>
            <span class="rightItem1 topItem">What they do:</span>
            <span class="leftItem border-t">object(s)</span>
            <span class="rightItem1 border-t">Any object, and as many as you like. Will be converted to string before printed</span>
            <span class="leftItem">sep='separator'</span>
            <span class="rightItem1">Optional. Specify how to separate the objects, if there is more than one. Default is ' '</span>
            <span class="leftItem">end='end'</span>
            <span class="rightItem1">Optional. Specify what to print at the end. Default is '\n' (line feed)</span>
            <span class="leftItem">file</span>
            <span class="rightItem1">Optional. An object with a write method. Default is sys.stdout</span>
            <span class="leftItem">flush</span>
            <span class="rightItem1">Optional. A Boolean, specifying if the output is flushed (True) or buffered (False). Default is False</span>
        </div>
        <div class="grid justify-items-center w-[75rem]">
            <p class="py-1">Let me explain these further. As you can see, the only required argument is the object(s) argument. This will be where your strings or numbers go like this:</p>
            <div class="codeBox">
                <p class="italic text-sky-400">print</p>
                <p class="italic text-pink-500">(</p>
                <p class="text-emerald-400">"Hello world!"</p>
                <p class="italic text-pink-500">)</p>
            </div>
            <p class="py-1">And when you chain multiple objects together in one print statement you use the "+" or "," character like this:</p>
            <div class="flex space-x-4">
                <div class="codeBox">
                    <p class="italic text-sky-400">print</p>
                    <p class="italic text-pink-500">(</p>
                    <p class="text-emerald-400">"Hello "</p>
                    <p class="italic text-sky-400">&nbsp;+&nbsp;</p>
                    <p class="text-emerald-400">"World"</p>
                    <p class="italic text-pink-500">)</p>
                </div>
                <p>Or</p>
                <div class="codeBox">
                    <p class="italic text-sky-400">print</p>
                    <p class="italic text-pink-500">(</p>
                    <p class="text-emerald-400">"Hello "</p>
                    <p class="italic text-sky-400">,&nbsp;</p>
                    <p class="text-emerald-400">"World"</p>
                    <p class="italic text-pink-500">)</p>
                </div>
            </div>
            <p class="py-1">Look, that wasn't so bad</p>
        </div>
    </BaseSection>

    <BaseSection title="Typecasting" yPos="2xl:top-[37rem] md:top-[38rem]">
        <p class="multiLineText">Ok we need to talk about type casting in Python really quick because it sucks. So in Python when you print something you need to be using objects of the same type (strings, numbers, booleans, etc).
            <br>So when you use the print function one thing you can do to print a string and a number together is to typecast the number into a string like this:
        </p>
        <div class="codeBox">
            <p class="italic text-sky-400">print</p>
            <p class="text-pink-500">(</p>
            <p class="text-emerald-400">"I am "</p>
            <p class="italic text-sky-400">&nbsp;+&nbsp;str</p>
            <p class="text-pink-500">(</p>
            <p class="text-emerald-400">12</p>
            <p class="text-pink-500">)</p>
            <p class="text-pink-500">)</p>
        </div>
        <p class="p-1">This also works with variables and converting them to strings. Here's the three different type cast commands:</p>
        <div class="grid grid-cols-7 grid-rows-4 rounded-md px-1 shadow-sm bg-gray-700 snap-center snap-normal">
            <span class="leftItem topItem">Typecasting:</span>
            <span class="rightItem2 topItem">What they do:</span>
            <span class="leftItem border-t">str()</span>
            <span class="rightItem2 border-t">Constructs a string from a wide variety of data types, including strings, integer literals and float literals</span>
            <span class="leftItem">int()</span>
            <span class="rightItem2">Constructs an integer number from an integer literal, a float literal (by removing all decimals), or a string literal (providing the string represents a whole number)</span>
            <span class="leftItem">float()</span>
            <span class="rightItem2">Constructs a float number from an integer literal, a float literal or a string literal (providing the string represents a float or an integer)</span>
        </div>
        <div class="flex space-x-4 pt-2">
            <div class="codeBox">
                <p class="italic text-sky-400">print</p>
                <p class="text-pink-500">(</p>
                <p class="text-emerald-400">6</p>
                <p class="italic text-sky-400">&nbsp;+&nbsp;int</p>
                <p class="text-pink-500">(</p>
                <p class="text-emerald-400">"6"</p>
                <p class="text-pink-500">)</p>
                <p class="text-pink-500">)</p>
            </div>
            <p>Or</p>
            <div class="codeBox">
                <p class="italic text-sky-400">print</p>
                <p class="text-pink-500">(</p>
                <p class="text-emerald-400">6</p>
                <p class="italic text-sky-400">&nbsp;+&nbsp;float</p>
                <p class="text-pink-500">(</p>
                <p class="text-emerald-400">"6.8"</p>
                <p class="text-pink-500">)</p>
                <p class="text-pink-500">)</p>
            </div>
        </div>
        <p class="multiLineText">Both of these will equal 12, even though in the second one is adding a float with an integer. This is because when you typecast to an integer Python will remove all decimal points so it is just a whole number.
            <br>If you need to add decimals, typecast to a float instead like this:
        </p>
        <div class="flex space-x-4 pt-2">
            <div class="codeBox">
                <p class="italic text-sky-400">print</p>
                <p class="text-pink-500">(</p>
                <p class="text-emerald-400">6</p>
                <p class="italic text-sky-400">&nbsp;+&nbsp;float</p>
                <p class="text-pink-500">(</p>
                <p class="text-emerald-400">"6"</p>
                <p class="text-pink-500">)</p>
                <p class="text-pink-500">)</p>
            </div>
            <p>Or</p>
            <div class="codeBox">
                <p class="italic text-sky-400">print</p>
                <p class="text-pink-500">(</p>
                <p class="text-emerald-400">6</p>
                <p class="italic text-sky-400">&nbsp;+&nbsp;float</p>
                <p class="text-pink-500">(</p>
                <p class="text-emerald-400">"6.8"</p>
                <p class="text-pink-500">)</p>
                <p class="text-pink-500">)</p>
            </div>
        </div>
        <p class="multiLineText">Now the second one will be 12.8, however the first one will be 12.0 even though it doesn't have any decimal values that we would ever care about.
            <br>You could just use these methods of use the print command and get along just fine, but when you start using a lot more variables you'll wish you had a better way to add them without adding another + sign.
        </p>
    </BaseSection>

    <BaseSection title="F-strings" yPos="2xl:top-[67rem] md:top-[69rem]">
        <p class="p-1">Forget all your troubles by using Python F-strings if you plan on using variables. Python F-strings allow you to imbed your variables right into the string without using a million + symbols. Let me show you!</p>
        <div class="flex space-x-4 pt-2">
            <div class="bg-gray-900 pb-1 max-w-max pl-3 pr-6 rounded-md flex-col shadow-sm tracking-wider">
                <div class="flex">
                    <p class="text-gray-300">text</p>
                    <p class="text-sky-400">&nbsp;=&nbsp;</p>
                    <p class="text-emerald-400">"World!"</p>
                </div>
                <div class="flex">
                    <p class="italic text-sky-400">print</p>
                    <p class="text-pink-500">(</p>
                    <p class="italic text-amber-500">f</p>
                    <p class="text-emerald-400">"Hello&nbsp;</p>
                    <p class="text-amber-500">&#10100;</p>
                    <p class="text-gray-300">text</p>
                    <p class="text-amber-500">&#10101;</p>
                    <p class="text-emerald-400">"</p>
                    <p class="text-pink-500">)</p>
                </div>
            </div>
            <p class="self-center">Or</p>
            <div class="bg-gray-900 pb-1 max-w-max pl-3 pr-6 rounded-md flex-col shadow-sm tracking-wider">
                <div class="flex">
                    <p class="text-gray-300">text</p>
                    <p class="text-sky-400">&nbsp;=&nbsp;</p>
                    <p class="text-emerald-400">"World!"</p>
                </div>
                <div class="flex">
                    <p class="italic text-sky-400">print</p>
                    <p class="text-pink-500">(</p>
                    <p class="text-emerald-400">"Hello&nbsp;"</p>
                    <p class="italic text-sky-400">&nbsp;+&nbsp;str</p>
                    <p class="text-pink-500">(</p>
                    <p class="text-gray-300">text</p>
                    <p class="text-pink-500">)</p>
                    <p class="text-pink-500">)</p>
                </div>
            </div>
        </div>
        <p class="multiLineText">Both of these will produce the same thing at the end of the day, but when you're using many, many variables in something like a terminal game you will want to use the f-string.
            <br>Ok, now we gotta talk about the next two arguments you can use and then we can be pretty much done. I'm not going to talk about the last two arguments because I never use them and I don't think you'll ever have to.
        </p>
    </BaseSection>

    <BaseSection title="The Final 2 Arguments" yPos="2xl:top-[78.5rem] md:top-[80.5rem]">
        <p class="p-1">The final 2 argument that we care about today are the sep and end arguments. These argument are added after all your text with a comma and then the sep and/or end keyword followed by an =''. Like this:</p>
        <div class="codeBox">
            <p class="italic text-sky-400">print</p>
            <p class="text-pink-500">(</p>
            <p class="text-emerald-400">"Hello World"</p>
            <p class="text-gray-300">,&nbsp;</p>
            <p class="italic text-rose-500">sep</p>
            <p class="text-sky-400">=</p>
            <p class="text-emerald-400">","</p>
            <p class="text-gray-300">,&nbsp;</p>
            <p class="italic text-rose-500">end</p>
            <p class="text-sky-400">=</p>
            <p class="text-emerald-400">"!"</p>
            <p class="text-pink-500">)</p>
        </div>
        <p class="multiLineText">What this code will do is replace every space between words with a comma and end the line with an "!". The way these can be optional is because they have default values built in to the function.
            <br>The default value for the sep keyword is " " or a space. The default for the end keyword is a "\n". What's that you ask?
        </p>
    </BaseSection>

    <BaseSection title="Special Characters" yPos="2xl:top-[87.5rem] md:top-[89.5rem]">
        <p class="p-1">Special characters are characters that let you do fun things like new lines and add tabs right in the print function without having a million spaces or print functions. Here they are:</p>
        <div class="grid grid-cols-3 grid-rows-5 rounded-md px-1 shadow-sm bg-gray-700 snap-center snap-normal">
            <span class="leftItem topItem">Special character:</span>
            <span class="rightItem3 topItem">What they do:</span>
            <span class="leftItem border-t">\n</span>
            <span class="rightItem3 border-t">Will tell the terminal to start a new line</span>
            <span class="leftItem">\t</span>
            <span class="rightItem3">Adds 5 spaces into your output</span>
            <span class="leftItem">\\</span>
            <span class="rightItem3">Adds a backslash into your output</span>
            <span class="leftItem">\"</span>
            <span class="rightItem3">Adds a qoute or double qoutes into your outputs</span>
        </div>
        <p class="multiLineText">As I'm sure you've noticed, all of these special characters begin with a backslash "\" which is why we need a special character for that so Python doesn't get confused.
            <br>This is also why we need a special character for a qoute or double qoute, so we don't confuse Python into thinking we have nothing else to output. Here's some examples to look at:
        </p>
        <div class="flex space-x-4 pt-1">
            <div class="codeBox">
                <p class="italic text-sky-400">print</p>
                <p class="text-pink-500">(</p>
                <p class="text-emerald-400">"Hello&nbsp;</p>
                <p class="italic text-sky-400">\n</p>
                <p class="text-emerald-400">&nbsp;World!"</p>
                <p class="text-pink-500">)</p>
            </div>
            <div class="codeBox">
                <p class="italic text-sky-400">print</p>
                <p class="text-pink-500">(</p>
                <p class="text-emerald-400">"Hello&nbsp;</p>
                <p class="italic text-sky-400">\t</p>
                <p class="text-emerald-400">&nbsp;World!"</p>
                <p class="text-pink-500">)</p>
            </div>
            <div class="codeBox">
                <p class="italic text-sky-400">print</p>
                <p class="text-pink-500">(</p>
                <p class="text-emerald-400">"This is a backslash:&nbsp;</p>
                <p class="italic text-sky-400">\\</p>
                <p class="text-emerald-400">"</p>
                <p class="text-pink-500">)</p>
            </div>
            <div class="codeBox">
                <p class="italic text-sky-400">print</p>
                <p class="text-pink-500">(</p>
                <p class="text-emerald-400">"Hello&nbsp;</p>
                <p class="italic text-sky-400">\"</p>
                <p class="text-emerald-400">World!</p>
                <p class="italic text-sky-400">\"</p>
                <p class="text-emerald-400">"</p>
                <p class="text-pink-500">)</p>
            </div>
        </div>
    </BaseSection>

    <BaseSection title="Closing Words" yPos="2xl:top-[108.75rem] md:top-[110.75rem]">
        <p class="multiLineText">Now you should be a pro at using the Python print function and should be able to help your fellow python devs on their journey to becoming better programmers.
            <br>I hope this article helped you out a little bit, if it did please share it with other people. If you have problems with it please share your thoughts with me, I'd love to make this better for you guys.
        </p>
    </BaseSection>
</main>

<style>
    .topItem{ @apply text-xl font-semibold border-b }
    .leftItem{ @apply col-span-1 border-r p-1 }
    .rightItem1{ @apply col-span-4 border-l p-1 }
    .rightItem2{ @apply col-span-6 border-l p-1 }
    .rightItem3{ @apply col-span-2 border-l p-1}

    .multiLineText{ @apply p-1 text-center }
</style>