window.onload = () => {
  const first = new Toast({
    position: 'top',
    colour: 'lightblue',
    message: 'You have succesfully submitted the data!',
    id: 'toast1',
    duration: 2000,
    speed: 2000,
  })
  const second = new Toast({
    position: 'bottom',
    colour: 'lightblue',
    message: 'You have succesfully submitted the data!',
    id: 'toast2',
    duration: 2000,
    speed: 2000,
  })
  document.querySelector('body').appendChild(first.returnNode);
  document.querySelector('body').appendChild(second.returnNode);
  const firstButton = document.getElementById('firstButton');
  firstButton.addEventListener('click', () => {
    first.fireToast();
  });
  const secondButton = document.getElementById('secondButton');
  secondButton.addEventListener('click', () => {
    second.fireToast();
  });
};


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
    this.node = divToAppend;
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
