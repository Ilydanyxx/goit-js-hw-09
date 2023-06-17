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
const delay = Number(document.querySelector('input[name="delay"]').value);
const step = Number(document.querySelector('input[name="step"]').value);
const amount = Number(document.querySelector('input[name="amount"]').value);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  for (let i = 0; i < amount; i++) {
  createPromise(i, delay)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });

  delay += step;
}

})





