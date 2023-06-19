function createPromise(position, delay) {
   return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  
}

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const delayed = document.querySelector('input[name="delay"]');
  const step = document.querySelector('input[name="step"]');
  const amount = document.querySelector('input[name="amount"]');
  const delayValue = Number(delayed.value)
  const stepValue = Number(step.value)
  const amountValue = Number(amount.value)
  let current = delayValue;
  for (let i = 1; i <= amountValue; i++) {
  createPromise(i, current)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });

    current += stepValue;
}

})
