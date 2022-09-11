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

    <!-- if you have more and more components between which you wanna circle
        using v-if all the time and repeating that v-if code all the time,
        is pretty annoying. That's why Vue has an alternative way of doing that.
        with dynamic components -->

    <!-- <active-goals v-if="selectedComponent === 'active-goals'"></active-goals>
    <manage-goals v-if="selectedComponent === 'manage-goals'"></manage-goals> -->

    <!-- in this case point at selectedComponent, which holds our component HTML tags as 
    values. It's active-goals initially, and in our method here, in the end we switch 
    between active-goals and manage-goals. Which are our component tags. And with that we're 
    telling Vue, that component should basically swap itself for v-if active-goals or 
    manage-goals. Whatever is currently stored in selectedComponent. -->

    <component :is="selectedComponent"></component>

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

Vue has this concept of dynamic components and here's where this could be handy.
Let's say we're building a component that has various tabs, so various buttons in the end,
which we can press to show a different component so that we either see Active Goals or Manage 
Goals, but not both at the same time.