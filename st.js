let imgLo, imgCo, imgAl;
const dimg = 'https://lh6.googleusercontent.com/d/',
      dmusic = 'https://drive.google.com/uc?export=view&id=',
      dvideo = 'https://drive.google.com/uc?export=view&id=',
      sB = '/',
      sL = '<',
      adsS = '',
      aPage = '',
      adsC = '',
      videoS = '',
      anaS = '',
      anaC = '';

if (window.location.hostname !== 'fuadhasanshihab.github.io') {
  window.location.href = 'https://www.3schools.in';
  document.body.innerHTML = '<h1>3schools.in</h1>';
}

function qS(selector) {
  return document.querySelector(selector);
}

function alertM(message, timeout) {
  const msgContainer = qS('.ms-con');
  msgContainer.classList.add('active');
  msgContainer.querySelector('.ms-text').innerHTML = message;
  
  setTimeout(() => {
    msgContainer.classList.remove('active');
  }, timeout);
}

const getId = (url) => {
  const results = /[?&]id=([^&#]*)/.exec(url);
  return results ? results[1] : null;
};

function getImg(_imgLo = 0, _imgCo = 0, _imgAl = 0) {
  qS('.u-img').classList.toggle('active');
  imgLo = _imgLo;
  imgCo = _imgCo;
  imgAl = _imgAl;
}

function insertImg() {
  const uploadFrame = document.querySelector('#upload-frame');
  const uploadDoc = uploadFrame.contentDocument || uploadFrame.contentWindow.document;
  const fileLink = uploadDoc.querySelector('#file-link').value;

  if (imgCo == 1) {
    imgLo.value = dimg + fileLink;
  } else if (imgCo == 2) {
    imgLo.value = dmusic + fileLink;
  }

  if (imgCo.value === 'Image') {
    imgLo.value = dimg + fileLink;
  } else if (imgCo.value === 'Video') {
    imgLo.value = dvideo + fileLink;
  }

  if (imgAl && uploadDoc.querySelector('.img-alt').value) {
    imgAl.value = uploadDoc.querySelector('.img-alt').value;
  }

  qS('.u-img').classList.toggle('active');
}

function tSet() {
  qS('.container aside').classList.toggle('active');
}

function dCon() {
  qS('.d-con').classList.toggle('active');
}

let uniqueId = 0;
let trackId = '';

function addPage(pageElement) {
  uniqueId++;
  pageElement.insertAdjacentHTML('afterend', `
    <form style="background: linear-gradient(45deg, #ce4fce 40%,rgba(0,0,0,0) 40%), radial-gradient(farthest-corner at 60% 80%, #c7fae6 70%,#5fcf5f 50%);"
      data-0="20" data-1="" data-2="" data-3="45" data-4="#ce4fce" data-5="40" data-6="40" data-7="60" data-8="80" data-9="#c7fae6" 
      data-10="70" data-11="60" data-12="#5fef5f" data-13="Image" data-14="" data-15="" data-16="fade-in" data-17="show" 
      data-18="#ffffff" data-19="0" data-20="0" data-21="0" data-22="5" data-23="5" data-24="5" data-25="5" data-26="10" 
      data-27="10" data-28="0" data-29="0" data-30="fade-in" data-31="2" data-32="0.5" data-33="0" data-34="solid" 
      data-35="#ffffff" data-cbg="background-color:#fff" data-blink="" data-iorv="" class="aCon" onsubmit="addPage(this);return false">
      <div class="quiz-lower" contenteditable="true">
        <div style="text-align:center;">Enter Your Text Here.</div>
      </div>
      <div class="addpage a">
        <label title="New Page" id="p${uniqueId}">
          <span class="material-symbols-rounded">add</span>
          <input class="hidden" type="submit">
        </label>
      </div>
      <div class="addpage c">
        <label title="Delete Page" id="pd${uniqueId}" onclick="dePa(this)">
          <span class="material-symbols-rounded">delete</span>
        </label>
      </div>
      <div class="addpage b">
        <label title="Page Setting" id="${uniqueId}" onclick="checkData(this);">
          <span class="material-symbols-rounded">settings</span>
        </label>
      </div>
      <img class="hidden" id="bimg" src="">
      <video class="hidden" id="bvideo" preload="auto" controls poster="https://stories.3schools.in/img/b.png">
        <source src="">
      </video>
    </form>
  `);
  pageElement.querySelector('.a').style.display = 'none';
}

function savP() {
  const pages = document.querySelectorAll('form.aCon');
  const savedPages = [];

  pages.forEach((page) => {
    savedPages.push(page.outerHTML);
  });

  localStorage.setItem('wsp-v1-1', savedPages.join(''));
}

if (localStorage.getItem('wsp-v1-1')) {
  qS('.fs-page').insertAdjacentHTML('afterend', localStorage.getItem('wsp-v1-1'));
  uniqueId = document.querySelectorAll('form.aCon').length;
} else {
  addPage(qS('.fs-page'));
}

function dePa(deleteButton) {
  alertM('Successfully removed', 2500);
  deleteButton.parentElement.parentElement.remove();
  qS('#a-code').removeAttribute('data-' + deleteButton.parentElement.parentElement.querySelector('.b label').id);
  const pages = document.querySelectorAll('.aCon');
  pages[pages.length - 1].querySelector('.a').style.display = 'block';
}

function checkData(settingsButton) {
  trackId = settingsButton.parentElement.parentElement;
  qS('.p-set').classList.toggle('active');

  const pageSettings = document.querySelectorAll('#page-s .s-arr');
  pageSettings.forEach((setting, index) => {
    setting.value = trackId.dataset[index];
  });
}

function liveChange() {
  const pageSettings = document.querySelectorAll('#page-s .s-arr');
  const values = Array.from(pageSettings).map(setting => setting.value);

  for (let i = 0; i < values.length; i++) {
    trackId.dataset[i] = values[i];
  }

  trackId.style.background = `linear-gradient(${values[3]}deg, ${values[4]} ${values[5]}%,rgba(0,0,0,0) ${values[6]}%), radial-gradient(farthest-corner at ${values[7]}% ${values[8]}%, ${values[9]} ${values[10]}%,${values[12]} ${values[11]}%)`;
}

function createStory() {
  const pages = document.querySelectorAll('form.aCon');
  let ampStoryHTML = '';
  
  pages.forEach((page) => {
    ampStoryHTML += `
      <amp-story-page class="relative" id="quiz-page${page.querySelector('.b label').id}" auto-advance-after="${page.dataset[0]}s" style="background:${page.style.background};">
        ${page.dataset.iorv}
        <amp-story-grid-layer template="fill">
          <div class="box">
            <div animate-in="${page.dataset[30]}" animate-in-delay="${page.dataset[32]}s" animate-in-duration="${page.dataset[31]}s">
              ${page.innerHTML}
            </div>
          </div>
        </amp-story-grid-layer>
      </amp-story-page>
    `;
  });

  document.querySelector('.amp-story-container').innerHTML = ampStoryHTML;
}
