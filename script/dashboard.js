const bar = document.getElementById('note_pop');
const title = document.getElementById('title');
const description = document.getElementById('description');
const noteEle = document.querySelector('.note')

description.addEventListener('focus', () => {
    title.style.display = 'block';
    bar.style.display = 'block';
    noteEle.classList.add('after_focus');
});
document.addEventListener('click', (event) => {
    // Check if the click is outside the input container
    if (!event.target.closest('.after_focus')) {
        bar.style.display = 'none';
        title.style.display = 'none';
        noteEle.classList.remove('after_focus');
    }
});