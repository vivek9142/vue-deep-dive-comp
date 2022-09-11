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


In Vue.js version two, you were required to have one root level element per template,
and then, in there, you could have as many sibling elements as you wanted to.

In Vue three, this changed, and now, you can have as many top-level elements as you want.
So if you don't need a wrapping element for semantic or styling reasons, there is no reason 
to keep one around. This is a feature called fragments. You are allowed to have multiple 
top-level elements now.