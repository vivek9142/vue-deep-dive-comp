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

visually, everything is all right. But if I inspect this here,
we can see a problem in the HTML mark-up. Here's our dialogue right?
Its below the button input and h2 tag. And its below there, because that's where we added it
in the template of Manage Goals.Now visually as I said everything works but semantically,
and from HTML perspective, having this, element the dialogue,
which actually is treated as overlay to the entire page. Having that nested here,
in our HTML code, is not ideal.It works but for accessibility this could be strange.
You could also run into some styling bugs here

And this is something which is easy to achieve with vue, and a feature called Teleport.
Teleport, is a built in vue component just like component and keep alive.
You can wrap your to-be teleported thing in this case the error alert,
with the built-in Teleport element. Which again is a built-in component vue provides to you.

Now how does Teleport work or what do you with it. Teleport wants one prop, one attribute.
The "to" prop. And here you provide a CSS selector, selecting an HTML element onto your 
entire page, where this content should actually be added to in the HTML mark-up.

So logically, it still belongs to this component you can still interact with methods 
in that component and so on. But it will be rendered somewhere else in the dom's structure.

Go to ActiveGoals.vue

And here for example we could select the body element by just referring to the body tag.
You could also refer to an element by an ID selector like this. You just pass in a regular 
CSS selector here. And here I'll go for the body tag.

But if we inspect this now, we see this dialogue is now at the end of the body section.
And its no longer deeply nested in this div or any other elements. And semantically this 
can be better.