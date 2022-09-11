<template>
    <div>
        <header>
            <slot name="header"></slot> 
        </header>  
        <slot></slot>
    </div>
</template>
/*
you can add names to slots with the name, attribute on the slot element.
And here we could give this a name of header,It can be anything,doesn't have to be the 
wrapping elements' name. 

You don't have to name all slots. If you leave one unnamed slot, that will be the default 
slot, but you must only have one unnamed slot. And now you can assign the content to the 
different slots, for example in UserInfo, we could now go to our header here
and now here I want to tell Vue that this content, the h3 tag and the base tag
should go to the header slot and for that you wrap it with a template tag,
which is a default HTML element and on that template tag, which holds the content that 
should go into your name slot,

you add a special directive, the v-slot directive. The v-slot directive can be used to let 
Vue know where certain content should go to. Now, you will let Vue know where the content 
should go to by adding an argument to this directive,which you do by adding a colon,
and then the name of your slot. 

Now I have a named slot with a name of header here and therefore we can add header as an 
argument here.And this tells Vue that the content inside of the template will go to this 
named slot. Now as a side note, the template is a default HTML tag, which doesn't render 
anything to the screen though, which is why we use it as a container here.

Now, if you then have content left, which is not in a template with the slot,
that content will automatically go to the default slot.
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