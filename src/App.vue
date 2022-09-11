<template>
  <div>
    <the-header></the-header>
    <!-- <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goals>
      <template #default="slotProps">
        <h2>{{slotProps.item}}</h2>
        <p>{{slotProps.anotherProp}}</p>
      </template>
    </course-goals> -->
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>

    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>

  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
// import BadgeList from "./components/BadgeList.vue";
// import UserInfo from "./components/UserInfo.vue";
// import CourseGoals from './components/CourseGoals.vue';
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue';

export default {
  components:{
    'the-header':TheHeader,
    // BadgeList, 
    // UserInfo,
    // CourseGoals,
    ActiveGoals,
    ManageGoals
  },
  data() {
    return {
      selectedComponent:'active-goals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods:{
    setSelectedComponent(cmp){
      this.selectedComponent = cmp;
    }
  }
};
</script>


<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>

Here is an additional thing you should know about dynamic components.
Let's say in Manage Goals, we had an input field. it would be realistic that we have one 
component or multiple components where the user is able to enter something
and that we then load this component dynamically with component.

Now here's the problem we'll face with that. In Manage Goals we have the input field, 
but if I enter a goal here and then before I save it, I decide to go back to Active Goals
and then I come back to Manage Goals. You see what I entered is lost.
And the reason for that is that when we switch our components,
the old component is really destroyed and removed from the DOM. And that of course means
that anything we entered here into this input field is lost if we switch away
because the input field is removed from the DOM. And when we go back to Manage Goals,
a brand new input field is added again.

Now this is maybe not what you want and Vue has a solution for that as well.
It has another built in component, the keep-alive component. And you can wrap that around 
your dynamic component. So keep-alive works together with this component component,
with this dynamic component concept.

Keep-alive allows you to tell Vue that components should not be removed and deleted entirely
but that instead their state should be saved. That they should be cached behind the scenes.