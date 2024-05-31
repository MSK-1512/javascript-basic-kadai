const clickBtn = document.getElementById('btn');

clickBtn.addEventListener('click', () => {
    const text = document.getElementById('text');
    text.textContent = 'ボタンをクリックしました';
});