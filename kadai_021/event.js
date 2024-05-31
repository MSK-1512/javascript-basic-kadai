const clickBtn = document.getElementById('btn');

clickBtn.addEventListener('click', () => {
    const text = document.getElementById('text');
    setTimeout( () =>{
        text.textContent = 'ボタンをクリックしました';
    }, 2000);
});