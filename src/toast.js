class Toast {
  constructor({ position, colour, id, message, duration, speed }) {
    this.position = position;
    this.colour = colour;
    this.id = id;
    this.message = message;
    this.duration = duration;
    this.speed = speed;
    this.generateToast();
  }

  generateToast() {
    const divToAppend = document.createElement('div');
    divToAppend.innerHTML = this.message;
    divToAppend.classList.add('toast');
    divToAppend.classList.add(this.position);
    divToAppend.id = this.id;
    divToAppend.style.backgroundColor = this.colour;
    document.querySelector('body').appendChild(divToAppend)
    // TODO: Figure out speed of appearance problem?
  }

  fireToast() {
    const element = document.getElementById(this.id);
    console.log(element.classList.contains('bottom'));
    if (element.classList.contains('bottom')) {
      element.classList.add('animateEnterBottom');
      setTimeout(() => {
        element.classList.add('animateExitBottom');
      }, this.duration);
      setTimeout(() => {
        element.classList.remove('animateEnterBottom');
        element.classList.remove('animateExitBottom');
      }, (1000 + this.duration) * 2);
    } else {
      element.classList.add('animateEnterTop');
      setTimeout(() => {
        element.classList.add('animateExitTop');
      }, this.duration);
      setTimeout(() => {
        element.classList.remove('animateEnterTop');
        element.classList.remove('animateExitTop');
      }, (1000 + this.duration) * 2);
    }
  }

  get returnNode() {
    return this.node;
  }
}