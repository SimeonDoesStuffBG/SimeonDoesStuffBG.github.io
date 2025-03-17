class Task {
  constructor(name) {
    this.name = name;
    this.t = 0;
  }

  get hours(){
    return Math.floor(this.t/60);
  }

  set hours(h){
    this.t = this.t%60;
    this.t+=h*60;
  }

  get minutes(){
    return this.t%60;
  }

  set minutes(m){
    this.t -= this.t%60;
    this.t+=m;
  }

  get time(){
    return this.t;
  }
}

