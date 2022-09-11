<template>
    <div>
        <!-- checking if  slots.eader is not undefined we can print it else nothing is printed-->
        <header v-if="$slots.header">
            <slot name="header">
                <!-- <h2>The Default</h2> -->
            </slot> 
        </header>  
        <slot></slot>
    </div>
</template>
/*
you can't provide default slot content. So, with that I don't mean that you have a default 
and unnamed slot where content will go that doesn't target a different name,
but I mean that if you have a slot, which receives no content,

that this slot can then render some default content, for example, here in the header,
we can add default content by adding content between our slots tags here.
Let's say h2 tag here where I say The Default, just to show how this works.

It does make a lot of sense for this specific component, but you definitely can have 
components where some default content might make sense. Now, if you add such an element,
if you add content between your slots tags, by default this will not be visible right now
because all the places where I use the base card do provide content for the header slot.
Both the badge list, as well as the user info component, both provide content for the header.

But let's say the badge list wouldn't have it's v-slot header template here.
So, it doesn't provide any content for the header slot.
If you remove that, you see now The Default in that component,

but if we comment on the data inside the slot header we will see it inside dom doing nothing 
You can utilize another cool feature here. In the component where you define slots,
you get a special property provided by vue. We can see it if I add the mounted lifecycle here.
Let's then console log,this dollar sign slots.  And it holds information
about the slot data this component receives for its different slots.


In the places where you use the component that offers slots. So, in our case,
in badge list and user info, we do provide slot content with this template
and the v-slots directive, just as for v-bind and v-on, there's a shorthand for v-slot.

You can absolutely write it like this, but you can also replace it with a hash symbol.
So, hash header also means the same as v-slot colon header.

*/

<script>
export default {
    mounted(){
        // console.log(this.$slots);
        //we can access to header here in slots 
        console.log(this.$slots.header); //undefined and another having content in it
        // we can check for undefined if it is undefined we can skip it
    }
}
</script>

<style scoped>
header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>