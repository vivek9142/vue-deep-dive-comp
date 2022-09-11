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