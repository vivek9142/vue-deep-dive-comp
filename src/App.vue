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
So if I define a section h2 style here in the Badgelist.vue file
This does not, important, this does not mean that this styling would only affect this 
template.Instead, indeed, it affects all files.

if you have styles in individual components, it often would be nice if you could scope
these styles to those components to ensure that they really only affect the template
of the component in which you define them, and vue supports this,
there is a scoped attribute which you can add to that style tag. And if you do add it,
that tells vue that the styles defined in here should only affect the template that lives 
in the same file, and no other component, no child component,
no sibling component, nothing else in your app.

goto userinfo.vue
*/
<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>