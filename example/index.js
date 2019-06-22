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
  const firstButton = document.getElementById('firstButton');
  firstButton.addEventListener('click', () => {
    first.fireToast();
  });
  const secondButton = document.getElementById('secondButton');
  secondButton.addEventListener('click', () => {
    second.fireToast();
  });
};
