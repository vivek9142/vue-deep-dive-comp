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

/*
Now components wants an object, and then we need a key-value pair,
where the key is our custom HTML element. So TheHeader for example, the tag we wanna use
for this element, so to say, and then the value is the imported component config object, 
we're pointing at. And If I do that, and Save this, this still all works.

But now TheHeader is registered locally. And you can actually also write this differently.
This is perfectly fine, but you can also use TheHeader like "the-Header" as a key here,
as a property name and you will still be able to use it like this in your template.
Vue automatically translates this so that you can use the-header in your template
or in case you prefer it, TheHeader like this. And then you can also write it
as a self-closing element if you want to. This self-closing tag is not supported
if you write it with a dash in between, then this self-closing tag will not work
if you write it in this PascallCase it works
*/
export default {
  components:{
    // TheHeader: TheHeader or TheHeader
    'the-header':TheHeader,
    // it can work here in comp as in html as badge-list(open n close tag) or BadgeList(self close)
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

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>