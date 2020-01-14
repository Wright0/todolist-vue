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
      newItem: {task: "", priority: "", isComplete: false},
      listItemClass: 'list-item'
    },

    methods: {
      addNewItem: function(){
        this.items.push(this.newItem);
        this.newItem = {task: "", priority: "", isComplete: false}
      },

      toggleCompletionStatus: function(index){
        this.items[index].isComplete = ! this.items[index].isComplete
      }
    }
  });
});
