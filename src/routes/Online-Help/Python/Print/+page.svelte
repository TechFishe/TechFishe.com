<script lang="ts">
    import BaseSection from '$lib/containers/baseSection.svelte';
    import CodeBox from '$lib/containers/codeBox.svelte';
    import MultiCodeBox from '$lib/containers/multiCodeBox.svelte';
    import Main from '$lib/containers/main.svelte';

    import { isOpen } from '../../../../store.js';

    export const prerender = true;
</script>

<svelte:head>
    <title>TechFishe.com | Python Print</title>
</svelte:head>

<Main>
    <BaseSection title="Python: Print" important={true}>
        <p class="pDefault">After reading this page you will become a pro at using the print function in Python</p>
    </BaseSection>
    
    <BaseSection title="Intro">
        <p class="pDefault">The built-in Python print function is a function who's sole purpose is to write a new line to the terminal every time it's called. How it works is a lot less important, rather this page will teach you how to use it like a pro.
            <br>The print function can take a max of 5 arguments when called, however only the first is required.
        </p>
        <div class="grid-cols-5 grid-rows-6 defaultGrid">
            <span class="leftItem topItem">Arguments:</span>
            <span class="rightItem1 topItem">What they do:</span>
            <span class="leftItem border-t">object(s)</span>
            <span class="rightItem1 border-t gridBorder">Any object, and as many as you like. Will be converted to string before printed</span>
            <span class="leftItem">sep='separator'</span>
            <span class="rightItem1 gridBorder">Optional. Specify how to separate the objects, if there is more than one. Default is ' '</span>
            <span class="leftItem">end='end'</span>
            <span class="rightItem1 gridBorder">Optional. Specify what to print at the end. Default is '\n' (line feed)</span>
            <span class="leftItem">file</span>
            <span class="rightItem1 gridBorder">Optional. An object with a write method. Default is sys.stdout</span>
            <span class="leftItem">flush</span>
            <span class="rightItem1 gridBorder">Optional. A Boolean, specifying if the output is flushed (True) or buffered (False). Default is False</span>
        </div>
        <div class="grid justify-items-center">
            <p class="pDefault">Let me explain these further. As you can see, the only required argument is the object(s) argument. This will be where your strings or numbers go like this:</p>
            <CodeBox text='print("Hello world!");'>
                <p class="italic text-sky-400">print</p>
                <p class="italic text-pink-500">(</p>
                <p class="text-emerald-400">"Hello world!"</p>
                <p class="italic text-pink-500">)</p>
            </CodeBox>
            <p class="py-1">And when you chain multiple objects together in one print statement you use the "+" or "," character like this:</p>
            <div class="flex space-x-4 items-center">
                <CodeBox>
                    <p class="italic text-sky-400">print</p>
                    <p class="italic text-pink-500">(</p>
                    <p class="text-emerald-400">"Hello "</p>
                    <p class="italic text-sky-400">&nbsp;+&nbsp;</p>
                    <p class="text-emerald-400">"World"</p>
                    <p class="italic text-pink-500">)</p>
                </CodeBox>
                <p>Or</p>
                <CodeBox>
                    <p class="italic text-sky-400">print</p>
                    <p class="italic text-pink-500">(</p>
                    <p class="text-emerald-400">"Hello "</p>
                    <p class="italic text-sky-400">,&nbsp;</p>
                    <p class="text-emerald-400">"World"</p>
                    <p class="italic text-pink-500">)</p>
                </CodeBox>
            </div>
            <p class="py-1">Look, that wasn't so bad</p>
        </div>
    </BaseSection>

    <BaseSection title="Typecasting">
        <p class="pDefault">Ok we need to talk about type casting in Python really quick because it sucks. So in Python when you print something you need to be using objects of the same type (strings, numbers, booleans, etc).
            <br>So when you use the print function one thing you can do to print a string and a number together is to typecast the number into a string like this:
        </p>
        <CodeBox text='print("I am " + str(12))'>
            <p class="italic text-sky-400">print</p>
            <p class="text-pink-500">(</p>
            <p class="text-emerald-400">"I am "</p>
            <p class="italic text-sky-400">&nbsp;+&nbsp;str</p>
            <p class="text-pink-500">(</p>
            <p class="text-emerald-400">12</p>
            <p class="text-pink-500">)</p>
            <p class="text-pink-500">)</p>
        </CodeBox>
        <p class="p-1">This also works with variables and converting them to strings. Here's the three different type cast commands:</p>
        <div class="grid-cols-7 defaultGrid">
            <span class="leftItem topItem">Typecasting:</span>
            <span class="rightItem2 topItem gridBorder">What they do:</span>
            <span class="leftItem border-t">str()</span>
            <span class="rightItem2 border-t gridBorder">Constructs a string from a wide variety of data types, including strings, integer literals and float literals</span>
            <span class="leftItem">int()</span>
            <span class="rightItem2 gridBorder">Constructs an integer number from an integer literal, a float literal (by removing all decimals), or a string literal (providing the string represents a whole number)</span>
            <span class="leftItem">float()</span>
            <span class="rightItem2 gridBorder">Constructs a float number from an integer literal, a float literal or a string literal (providing the string represents a float or an integer)</span>
        </div>
        <div class="flex space-x-4 pt-2 items-center">
            <CodeBox text='print(6 + int("6"))'>
                <p class="italic text-sky-400">print</p>
                <p class="text-pink-500">(</p>
                <p class="text-emerald-400">6</p>
                <p class="italic text-sky-400">&nbsp;+&nbsp;int</p>
                <p class="text-pink-500">(</p>
                <p class="text-emerald-400">"6"</p>
                <p class="text-pink-500">)</p>
                <p class="text-pink-500">)</p>
            </CodeBox>
            <p>Or</p>
            <CodeBox text='print(6 + int("6.8"))'>
                <p class="italic text-sky-400">print</p>
                <p class="text-pink-500">(</p>
                <p class="text-emerald-400">6</p>
                <p class="italic text-sky-400">&nbsp;+&nbsp;int</p>
                <p class="text-pink-500">(</p>
                <p class="text-emerald-400">"6.8"</p>
                <p class="text-pink-500">)</p>
                <p class="text-pink-500">)</p>
            </CodeBox>
        </div>
        <p class="pDefault">Both of these will equal 12, even though in the second one is adding a float with an integer. This is because when you typecast to an integer Python will remove all decimal points so it is just a whole number.
            <br>If you need to add decimals, typecast to a float instead like this:
        </p>
        <div class="flex space-x-4 pt-2 items-center">
            <CodeBox text='print(6 + float("6"))'>
                <p class="italic text-sky-400">print</p>
                <p class="text-pink-500">(</p>
                <p class="text-emerald-400">6</p>
                <p class="italic text-sky-400">&nbsp;+&nbsp;float</p>
                <p class="text-pink-500">(</p>
                <p class="text-emerald-400">"6"</p>
                <p class="text-pink-500">)</p>
                <p class="text-pink-500">)</p>
            </CodeBox>
            <p>Or</p>
            <CodeBox text='print(6 + float("6.8"))'>
                <p class="italic text-sky-400">print</p>
                <p class="text-pink-500">(</p>
                <p class="text-emerald-400">6</p>
                <p class="italic text-sky-400">&nbsp;+&nbsp;float</p>
                <p class="text-pink-500">(</p>
                <p class="text-emerald-400">"6.8"</p>
                <p class="text-pink-500">)</p>
                <p class="text-pink-500">)</p>
            </CodeBox>
        </div>
        <p class="pDefault">Now the second one will be 12.8, however the first one will be 12.0 even though it doesn't have any decimal values that we would ever care about.
            <br>You could just use these methods of use the print command and get along just fine, but when you start using a lot more variables you'll wish you had a better way to add them without adding another + sign.
        </p>
    </BaseSection>

    <BaseSection title="F-strings">
        <p class="pDefault">Forget all your troubles by using Python F-strings if you plan on using variables. Python F-strings allow you to imbed your variables right into the string without using a million + symbols. Let me show you!</p>
        <div class="flex space-x-4">
            <MultiCodeBox>
                <div class="flex">
                    <p class="text-gray-300 dark:text-gray-600">text</p>
                    <p class="text-sky-400">&nbsp;=&nbsp;</p>
                    <p class="text-emerald-400">"World!"</p>
                </div>
                <div class="flex">
                    <p class="italic text-sky-400">print</p>
                    <p class="text-pink-500">(</p>
                    <p class="italic text-amber-500">f</p>
                    <p class="text-emerald-400">"Hello&nbsp;</p>
                    <p class="text-amber-500">&#10100;</p>
                    <p class="text-gray-300 dark:text-gray-600">text</p>
                    <p class="text-amber-500">&#10101;</p>
                    <p class="text-emerald-400">"</p>
                    <p class="text-pink-500">)</p>
                </div>
            </MultiCodeBox>
            <p class="self-center">Or</p>
            <MultiCodeBox>
                <div class="flex">
                    <p class="text-gray-300 dark:text-gray-600">text</p>
                    <p class="text-sky-400">&nbsp;=&nbsp;</p>
                    <p class="text-emerald-400">"World!"</p>
                </div>
                <div class="flex">
                    <p class="italic text-sky-400">print</p>
                    <p class="text-pink-500">(</p>
                    <p class="text-emerald-400">"Hello&nbsp;"</p>
                    <p class="italic text-sky-400">&nbsp;+&nbsp;str</p>
                    <p class="text-pink-500">(</p>
                    <p class="text-gray-300 dark:text-gray-600">text</p>
                    <p class="text-pink-500">)</p>
                    <p class="text-pink-500">)</p>
                </div>
            </MultiCodeBox>
        </div>
        <p class="pDefault">Both of these will produce the same thing at the end of the day, but when you're using many, many variables in something like a terminal game you will want to use the f-string.
            <br>Ok, now we gotta talk about the next two arguments you can use and then we can be pretty much done. I'm not going to talk about the last two arguments because I never use them and I don't think you'll ever have to.
        </p>
    </BaseSection>

    <BaseSection title="The Final 2 Arguments">
        <p class="pDefault">The final 2 argument that we care about today are the sep and end arguments. These argument are added after all your text with a comma and then the sep and/or end keyword followed by an =''. Like this:</p>
        <CodeBox text='print("Hello world", sep=",", end="!")'>
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
        </CodeBox>
        <p class="pDefault">What this code will do is replace every space between words with a comma and end the line with an "!". The way these can be optional is because they have default values built in to the function.
            <br>The default value for the sep keyword is " " or a space. The default for the end keyword is a "\n". What's that you ask?
        </p>
    </BaseSection>

    <BaseSection title="Special Characters">
        <p class="pDefault">Special characters are characters that let you do fun things like new lines and add tabs right in the print function without having a million spaces or print functions. Here they are:</p>
        <div class="grid-cols-3 grid-rows-5 defaultGrid">
            <span class="leftItem topItem">Special character:</span>
            <span class="rightItem3 topItem gridBorder">What they do:</span>
            <span class="leftItem border-t">\n</span>
            <span class="rightItem3 border-t gridBorder">Will tell the terminal to start a new line</span>
            <span class="leftItem">\t</span>
            <span class="rightItem3 gridBorder">Adds 5 spaces into your output</span>
            <span class="leftItem">\\</span>
            <span class="rightItem3 gridBorder">Adds a backslash into your output</span>
            <span class="leftItem">\"</span>
            <span class="rightItem3 gridBorder">Adds a qoute or double qoutes into your outputs</span>
        </div>
        <p class="pDefault">As I'm sure you've noticed, all of these special characters begin with a backslash "\" which is why we need a special character for that so Python doesn't get confused.
            <br>This is also why we need a special character for a qoute or double qoute, so we don't confuse Python into thinking we have nothing else to output. Here's some examples to look at:
        </p>
        <div class:sm:flex="{$isOpen === false}" class:wideBox="{$isOpen === true}" class="space-x-4 items-center">
            <CodeBox text='print("Hello \n World!")'>
                <p class="italic text-sky-400">print</p>
                <p class="text-pink-500">(</p>
                <p class="text-emerald-400">"Hello&nbsp;</p>
                <p class="italic text-sky-400">\n</p>
                <p class="text-emerald-400">&nbsp;World!"</p>
                <p class="text-pink-500">)</p>
            </CodeBox>
            <CodeBox text='print("Hello \t World!")'>
                <p class="italic text-sky-400">print</p>
                <p class="text-pink-500">(</p>
                <p class="text-emerald-400">"Hello&nbsp;</p>
                <p class="italic text-sky-400">\t</p>
                <p class="text-emerald-400">&nbsp;World!"</p>
                <p class="text-pink-500">)</p>
            </CodeBox>
            <CodeBox text='print("This is a backslash: \\")'>
                <p class="italic text-sky-400">print</p>
                <p class="text-pink-500">(</p>
                <p class="text-emerald-400">"This is a backslash:&nbsp;</p>
                <p class="italic text-sky-400">\\</p>
                <p class="text-emerald-400">"</p>
                <p class="text-pink-500">)</p>
            </CodeBox>
            <CodeBox text='print("Hello \"World!\"")'>
                <p class="italic text-sky-400">print</p>
                <p class="text-pink-500">(</p>
                <p class="text-emerald-400">"Hello&nbsp;</p>
                <p class="italic text-sky-400">\"</p>
                <p class="text-emerald-400">World!</p>
                <p class="italic text-sky-400">\"</p>
                <p class="text-emerald-400">"</p>
                <p class="text-pink-500">)</p>
            </CodeBox>
        </div>
    </BaseSection>

    <BaseSection title="Closing Words">
        <p class="pDefault">Now you should be a pro at using the Python print function and should be able to help your fellow python devs on their journey to becoming better programmers.
            <br>I hope this article helped you out a little bit, if it did please share it with other people. If you have problems with it please share your thoughts with me, I'd love to make this better for you guys.
        </p>
    </BaseSection>
</Main>

<style>
    .rightItem1{ @apply col-span-4 border-l p-1 }
    .rightItem2{ @apply col-span-6 border-l p-1 }
    .rightItem3{ @apply col-span-2 border-l p-1 }

    .wideBox{ @apply 2xl:flex grid lg:grid-cols-2 grid-cols-1 lg:grid-rows-2 grid-rows-1 }
</style>