const buttons = document.querySelectorAll('.button');  // (querySelectorAll) se pure buttons ka access milega 
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);

  button.addEventListener('click', function (e) {   // (addEventListener) ye ek even hai ('click') matlab click karne par 
    console.log(e);
    console.log(e.target);  // target se ye pata chalega kon se color par click kiye hai 

    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }

    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }

    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }

    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});
