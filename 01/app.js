let btn = document.querySelector('button');

function btnClick() {
  console.log('clicked');
};

// btn.onclick = btnClick;
btn.addEventListener('click', btnClick);
