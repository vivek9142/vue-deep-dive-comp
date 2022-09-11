<template>
    <div>
        <header>
            <slot name="header"></slot> 
        </header>  
        <slot></slot>
    </div>
</template>
/*
There is a very simple rule when working with slots and when 
sending content into other components slots,nothing changes about what
you learned regarding scoped styles, availability of data and props and so on.

For example, fullName, this prop here, which we have available and UserInfo,
is also still only available here in UserInfo. It's not a available in BaseCard,
even though we are sending this markup to BaseCard. But Vue.js will analyze, compile
and evaluate this template before it sends to content to the other component so to say.
*/

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