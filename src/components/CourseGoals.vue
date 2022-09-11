<template>
    <ul>
        <li v-for="goal in goals" :key="goal">
            <slot :item="goal" another-prop="scoped slots"></slot>
        </li>
    </ul>
</template>

<script>
export default {
    data(){
        return {
            goals: ['Finish the Course', 'Learn Vue']
        }
    }
}
</script>

we could have this component which has the CourseGoals data
which maybe also has more logic related to that and which then takes care about
rendering those Course Goals to the screen. But there's one thing which you might wanna make
customizable. And that is the content of every list item. With that I mean,
if you just have the text in the list item, if you maybe have an h2 tag in there,
maybe multiple elements. So maybe you want to make that customizable.

Yes I can pass in my markup in App.vue inside coursegoals comp, but I have a big problem. 
I don't have access to the individual  goal for which this list item is getting rendered. 
This goal variable is only available here inside of Course Goals, but the markup which should 
be output in here is getting passed in from App.vue here. And here I don't have access to 
these goals or goal variables, which I'm using in Course Goals.

And for this specific scenario where you wanna to build something like that,
Vue has another feature. It has scoped slots. 

The concept of scoped slots is about letting you pass data from inside the component where 
you defined a slot to the component where you pass the markup for the slot.
And you do that by going to the component where you have the data and where you define the 
slot, and then on the slot you can add a prop. 