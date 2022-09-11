<template>
    <div>
        <slot></slot>   
    </div>
</template>
/*
now in between comp we need to have any content we want
if we take it as props  and try to use it like prop.
it will not work

instead it's this slots feature which I mentioned. Vue has a 
special syntax for this exact scenario where you want to use 
your own component as a wrapper around dynamic content.
So around different kinds of HTML content and for that,
you simply go to your component that should be the wrapper.
You don't use props in there but instead you use a special element,
the slot element like this

goto userinfo you'll see the basecard wraps the content
and slot displays dynamic content on screen
 */

<script>
export default {
    props:['']
}
</script>

<style >
section {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>