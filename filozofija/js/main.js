//get year
const year = document.getElementById('year');

let date = new Date;
year.innerHTML = date.getFullYear();

// hover effect

const fil = document.getElementById('fil');
const log = document.getElementById('log');
const img = document.getElementById('cover');
const img2 = document.getElementById('cover-2');

fil.addEventListener('mouseenter', zoom);
fil.addEventListener('mouseleave', out);
log.addEventListener('mouseenter', ins);
log.addEventListener('mouseleave', outs);

function zoom() {
  img2.style["-webkit-filter"] = 'grayscale(100%)';
  img2.style.filter = 'grayscale(100%)';
  img.style.opacity = '0.9';
}

function out() {
  img2.style["-webkit-filter"] = 'grayscale(0%)';
  img2.style.filter = 'grayscale(0%)';
  img.style.opacity = '0.7';
}

function ins() {
  img.style["-webkit-filter"] = 'grayscale(100%)';
  img.style.filter = 'grayscale(100%)';
  img2.style.opacity = '0.9';
}

function outs() {
  img.style["-webkit-filter"] = 'grayscale(0%)';
  img.style.filter = 'grayscale(0%)';
  img2.style.opacity = '0.7';
}