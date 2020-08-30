const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let i = 0;

function init() {
  document.body.addEventListener('keydown', (e) =>  {
    let key = e.key

    if (key === codes[i]) {
      i++;
      if (i === codes.length) {
      alert('Hurray')
      }
    } else {
      i = 0
    }
  })
}