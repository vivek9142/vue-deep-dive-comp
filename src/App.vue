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


Let me stick to this active goals component And let's say here, we have a button.
Where I have a text of set goal,and when this button is clicked, I wanna save my goal.

I get my alert here. This works, but in most applications,
you probably don't wanna show an alert like this. This built in alert is not really nice to 
look at, it probably doesn't fit the styling of the rest of your application,
and therefore, this is maybe not what you wanna do. Instead, maybe you want to build your 
own alert, your own model. So your own overlay dialogue, which you wanna show.
And that's exactly what I'll do here.

I'll build my ErrorAlert.vue component here.


So we don't need to pass data around with custom events, which the error alert emits here.
Instead, we can handle everything here in the component where the error is generated and 
yet hand off the styling and the markup off that dialogue to a totally different component.
Which is a really nice way of splitting responsibility.