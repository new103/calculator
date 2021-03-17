const calculator = document.querySelector('.calculator');
const keys = document.querySelector('.keys');

keys.addEventListener('click', (e) => {
  if (e.target.matches('button')) {
    const key = e.target;
    const operation = key.dataset.operation
    // console.log(key)
    // console.log(operation);
    if (!operation) {
      console.log('number key')
    }

    if (
      operation === 'add' ||
      operation === 'sub' ||
      operation === 'mul' ||
      operation === 'div'
    ) {
      console.log('operation key')
    }

    if (operation === 'decimal') {
      console.log('decimal key')
    }

    if (operation === 'clear') {
      console.log('clear')
    }

    if (operation === 'calculate') {
      console.log('calculate')
    }
  }

})

// const key = e.target;
// console.log(key.matches('.koza'))

// const action = key.dataset.operation;
// console.log(action)

// if (!action) {
//   // console.log('number key')
// }