const text = document.getElementById('text');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
    console.log('ボタンをクリックしました');
  }, 2000);
});

console.log(text);