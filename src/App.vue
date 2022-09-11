<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import BadgeList from "./components/BadgeList.vue";
import UserInfo from "./components/UserInfo.vue";

export default {
  components:{
    'the-header':TheHeader,
    BadgeList, 
    UserInfo
  },
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
};
</script>

/*
BadgeList and UserInfo have in common and that's the section
but actually not just a section but the section and the styling that's being applied
to that section. You might remember in the last lecture,
I copied the styling to ensure that the section has the same style
in both components.

an alternative would have been to simply make section a global style
here in App.vue where the style is not scoped but another alternative would be
to create a standalone component which simply contains the section
with the attached styling and which then is flexible
regarding the content it receives. 

I'm naming it like this because I want to create a certain look which is sometimes referred 
to as a Card Look in the web.Basically this look of having a drop shadow and rounded corners,

goto basecard.vue
*/
<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>