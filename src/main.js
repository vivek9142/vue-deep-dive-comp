import { createApp } from "vue";

import App from "./App.vue";
import BaseBadge from "./components/BaseBadge.vue";

const app = createApp(App);

/*
when we register components like this with the component method on our App,
then we are registering those components as so called Global Components.
That means they're available globally in this entire Vue App.
So we can use these components as custom HTML elements anywhere in this App.

if you're registering them all globally, that in the end means Vue needs to load them all
when the application is loaded initially. So the browser needs to download the code
for all those components initially.

we could remove this component registration in main.js, and remove this import here.
And instead go to our App.Vue file, which is where we plan on using this.
And then here in the script section, we can import TheHeader from components TheHeader.Vue.
And now we can also register this component locally in this App component or in this App 
object here in this App options object.
*/
// app.component("the-header", TheHeader);
app.component("base-badge", BaseBadge);
// app.component("badge-list", BadgeList);
// app.component("user-info", UserInfo);

app.mount("#app");
