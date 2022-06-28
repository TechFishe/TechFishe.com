# [TechFishe.com](https://techfishe-website-d1acf.web.app) :blue_heart: :wave:
This is the source code for my website [TechFishe.com](https://techfishe-website-d1acf.web.app/Home). I made it using [Angular](https://angular.io) & host it using [Firebase](https://firebase.google.com).
This README.md file will walk you through how the directories work, how I added routing, and what some of the different components are. 

>:warning: I am very bad at writing/explaining stuff, so this is probably going to be very bad. I recommend downloading the project on your own machine and looking through the files there to try and understand what is going on.

# Packages
Currently I am using [Angular Material](https://material.angular.io) to do the heavy lifting of the UI. I'm using a custom White-Gray-Auqa color theme but they have some really cool built-in ones. It´s super easy to work with and if you are wanting to quickly make a webiste using Angular/am bad with UIs, I suggest checking them out. **#NotSponored**

# Directories
Here are some importand directories you will want to know about. Most of the stuff outside of the [src](src/) folder is mostly just for Angular and Firebase config. Inside of the src however, their are a lot of files and folders we need to look at. I´ve split them up into different secitons so you can find what you´re looking for.
* ## [src](src/)
    This holds all of the main files for running the website. Some important ones to note are [index.html](src/index.html), [favicon.ico](src/favicon.ico) and [styles.scss](src/styles.scss). Some super important folder to look at are app and assets.
* ### [app](src/app/)
    This is the main folder for the app. It holds all of the code to render out what you see on the web page and routing. Lets have a look through this massive folder.
    #### [Pages](src/app/Pages/)
    This is the folder that holds all of the different routes that can be acessed while viewing the site. Each route is an Angular component that is refferenced in the [app-routing.module.ts](src/app/app-routing.module.ts) file found in the app folder. I´ll give a brief explination of each page folder below.

    Each page has it´s own folder which is named after what the page does in the website. Each folder contains inside of it a .component.html, .component.scss, and a .component.ts file. 
    * The html file is just standard html and will tell Angular what to render when that page is loaded. 
    * The .scss file is the style sheet for that page and will tell Angular what to make the page look like at build time. 
    * The final file is for the logic of the page if you have reactive state. Currently none of the pages have reactive state, so the bulk of this file is useless to use. However, this is the file that is refferenced in the [app-routing.module.ts](src/app/app-routing.module.ts) file, so you can´t delete it.
    #### [Everything else](src/app/)
    Everything outside of the [Pages](src/app/Pages/) folder is for the base of the website. I will go into each file below somewhat in order.

    * The [app-routing.module.ts](src/app/app-routing.module.ts) file is responsible for routing every URL given to a spefic page in the website. If you fail to provide a registered URL you are taken to a custom 404 page with a dummy email listed for tech support. If there is no / or there isn´t anything after it, then you are taken straight to the home page. Each page is imported at the top of the file and then included in the `const Routes` array. Order does matter here as the WildCard must sit at the bottom of the array with the "No /" page going right above it.
    * The  [app.component.html](src/app/app.component.html), [app.component.scss](src/app/app.component.scss), and [app.component.ts](src/app/app.component.ts) are all just like the files found in the Pages folder. The only difference is that everything found in the .html file is displayed along side any page that is loaded. Currently I only use these files for a cute copyright text at the bottom of the screen and the tool bar at the top of the page.
    * Finally there is the [app.module.ts](src/app/app.module.ts) file which is used to load Angular components and gives other components/pages access to them. All components that need to be included are imported at the top of the page and then refferenced in the `@NGModule({imports[]})` array. Components/pages that need access to these components are also imported at the top and refferenced in the `@NgModule({declarations[]})` array. 
    >:warning: If you do not have NGModule imported at the very top of the file, this **WILL NOT WORK**.
* ### [assets](src/assets/)
    The assets folder currently holds all of the images that I need to access for the site. Right now it´s just the bi flag that goes with the copyright text, but any new images should be placed in here. They could technically sit anywhere in the project, but this is just a way to organize them.
    >:crystal_ball: For the future, any new assets like fonts, backgrounds, UI stuff, etc. should be placed in the assets folder with a sub-folder with the name of items that will be refferenced there (example, assets/UI/UI-Stuff-Goes-Here)

    >:blue_book: Please note, anything that will be needed at build time that is in the assets folder like images need to be refferenced like this: `<img src="assets/path-to-item" alt="name">`. This is to ensure that it is included by Angular at build time.
* ### Everything else
    * The [styles.scss](src/styles.scss) holds all the global .scss that will apply to anything in the website. It is important to note that anything in the styles.scss will overrule anything in any other .scss file, so be very careful what goes in there. 
    
    * The [index.html](src/index.html) file will hold all the standard things you will find in any webiste file like it sets the favicon, title, and includes any outside links to things like icons and fonts.
    
    * The rest I don´t really know about :/. All I know is that [main.ts](src/main.ts), [polyfills.ts](src/polyfills.ts), and [test.ts](src/test.ts) are all used in the final build, so I won´t be touching them for a long time.
