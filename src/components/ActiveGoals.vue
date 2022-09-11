<template>
    <div>
        <h2>Active Goals</h2>
    <div>
        <input type="text" ref="goal">
        <button @click="setGoal">Set Goal</button>
        <error-alert v-if="inputIsInvalid">
            <h2>Input is Invalid</h2>
            <p>Please enter at least a few characters.</p>
            <button @click="confirmError">Okay</button>
        </error-alert>
    </div>
    </div>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue';

export default {
    components:{
        ErrorAlert
    },
    data(){
        return{
            inputIsInvalid: false
        }
    },
    methods:{
        setGoal(){
            const enteredValue = this.$refs.goal.value;
            if(enteredValue ==='')
            this.inputIsInvalid = true;
        },
        confirmError(){
            this.inputIsInvalid = false;
        }
    }
}
</script>