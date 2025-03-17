const appObj = {
  data() {
    return {
      tasks: [],
      days: 5,
      time:0,
      curTask: "",
    };
  },
  methods: {
    addTask() {
      let newTask = new Task(this.curTask);
      this.tasks.push(newTask);
      this.curTask = "";
    },
    setTime(){
      this.time=this.tasks
          .map(task=>task.time)
          .reduce((acc, cur)=>acc+cur,0); 
    },
    totalMinutesLeft() {
      let totalHours = this.days * 8;
      let totalMins = totalHours * 60;
      return totalMins - this.time;
    },
    hours(){
      return Math.floor(this.time/60);
    },
    hoursLeft() {
      return Math.floor(this.totalMinutesLeft() / 60);
    },
    minutes(){
      return this.time%60;
    },
    minutesLeft() {
      return this.totalMinutesLeft() % 60;
    },
  },
};

const app = Vue.createApp(appObj);

app.mount("main#app");
