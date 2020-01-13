import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {

  new Vue({
    el: "#app",
    data: {
      items: [
        {task: "organize kitchen cabinets", priority: "low", isComplete: false},
        {task: "water plants", priority: "medium", isComplete: false},
        {task: "find credit card", priority: "high", isComplete: true}
      ],
      newItem: {task: "", isComplete: false}
    },

    methods: {
      addNewItem: function(){
        this.items.push(this.newItem);
        this.newItem = {task: "", isComplete: false}
      },

      // setPriorityLevel: function(priority){
      //   is
      // },

      completeTask: function(index){
        this.items[index].isComplete = true;
      }
    }
  });
});
