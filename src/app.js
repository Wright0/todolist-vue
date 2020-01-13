import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {

  new Vue({
    el: "#app",
    data: {
      items: [
        {task: "wash kitchen", isComplete: false},
        {task: "find credit card", isComplete: false}
      ],
      newItem: {task: "", isComplete: false}
    },

    // methods: {
    //
    // }
  });
});
