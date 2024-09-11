let imgLoader,
  imgType,
  imgAlt,
  defaultImgURL = 'https://lh6.googleusercontent.com/d/',
  defaultMusicURL = 'https://drive.google.com/uc?export=view&id=';
let defaultVideoURL = 'https://drive.google.com/uc?export=view&id=';
let scriptEnd = '/',
  scriptStart = '<',
  adsScriptStart = '',
  analyticsScriptStart = '',
  adsScriptContent = '',
  videoScript = '',
  analyticsScriptContent = '',
  analyticsConfig = '';

if (window.location.hostname !== 'www.3schools.in') {
  window.location.href = 'https://www.3schools.in';
  document.body.innerHTML = '<h1>3schools.in</h1>';
}

function querySelector(selector) {
  return document.querySelector(selector);
}

function showAlert(message, timeout) {
  let messageContainer = querySelector('.ms-con');
  messageContainer.classList.add('active');
  messageContainer.querySelector('.ms-text').innerHTML = message;
  setTimeout(() => {
    querySelector('.ms-con').classList.remove('active');
  }, timeout);
}

const getIdFromUrl = (url) =>
  (results = /[?&]id=([^&#]*)/.exec(url)) ? results[1] : null;

function loadImage(loader = 0, type = 0, alt = 0) {
  querySelector('.u-img').classList.toggle('active');
  imgLoader = loader;
  imgType = type;
  imgAlt = alt;
}

function insertImage() {
  let iframe = document.querySelector('#upload-frame'),
    iframeDoc = iframe.contentDocument || iframe.contentWindow.document,
    fileLink = iframeDoc.querySelector('#file-link').value;

  if (imgType == 1) {
    imgLoader.value = defaultImgURL + fileLink;
  } else if (imgType == 2) {
    imgLoader.value = defaultMusicURL + fileLink;
  }

  if (imgType.value === 'Image') {
    imgLoader.value = defaultImgURL + fileLink;
  } else if (imgType.value === 'Video') {
    imgLoader.value = defaultVideoURL + fileLink;
  }

  if (imgAlt && iframeDoc.querySelector('.img-alt').value) {
    imgAlt.value = iframeDoc.querySelector('.img-alt').value;
  }

  querySelector('.u-img').classList.toggle('active');
}

function toggleSettings() {
  querySelector('.container aside').classList.toggle('active');
}

function toggleContainer() {
  querySelector('.d-con').classList.toggle('active');
}

let uniqueId = 0,
  currentTrackId = '';

function addNewPage(formElement) {
  uniqueId++;
  formElement.insertAdjacentHTML(
    'afterend',
    `<form style="background: linear-gradient(45deg, #ce4fce 40%,rgba(0,0,0,0) 40%), radial-gradient(farthest-corner at 60% 80%, #c7fae6 70%,#5fcf5f 50%);"
     data-0="20" data-1="" data-2="" data-3="45" data-4="#ce4fce" data-5="40" data-6="40" data-7="60" data-8="80" data-9="#c7fae6" data-10="70" data-11="60" data-12="#5fef5f" data-13="Image" data-14="" data-15="" data-16="fade-in" data-17="show" data-18="#ffffff" data-19="0" data-20="0" data-21="0" data-22="5" data-23="5" data-24="5" data-25="5" data-26="10" data-27="10" data-28="0" data-29="0" data-30="fade-in" data-31="2" data-32="0.5" data-33="0" data-34="solid" data-35="#ffffff"
      class="aCon" onsubmit="addNewPage(this);return false">
        <div class="quiz-lower" contenteditable="true">
        <div style="text-align:center;">Enter Your Text Here.</div>
        </div>
        <div class="addpage a">
        <label title="New Page" id="p${uniqueId}"><span class="material-symbols-rounded">add</span><input class="hidden" type="submit"></label>
        </div>
        <div class="addpage c">
        <label title="Delete Page" id="pd${uniqueId}" onclick="deletePage(this)"><span class="material-symbols-rounded">delete</span></label>
        </div>
        <div class="addpage b">
        <label title="Page Setting" id="${uniqueId}" onclick="openPageSettings(this);"><span class="material-symbols-rounded">settings</span></label>
        </div>
        <img class="hidden" id="bimg" src="">
        <video class="hidden" id="bvideo" preload="auto" controls poster="https://stories.3schools.in/img/b.png"><source src=""></video>
    </form>`
  );
  formElement.querySelector('.a').style.display = 'none';
}

function savePages() {
  let formElements = document.querySelectorAll('form.aCon'),
    pagesHTML = [];

  formElements.forEach((form) => {
    pagesHTML.push(form.outerHTML);
  });

  localStorage.setItem('wsp-v1-1', pagesHTML.join(''));
}

if (localStorage.getItem('wsp-v1-1')) {
  querySelector('.fs-page').insertAdjacentHTML(
    'afterend',
    localStorage.getItem('wsp-v1-1')
  );
  uniqueId = document.querySelectorAll('form.aCon').length;
} else {
  addNewPage(querySelector('.fs-page'));
}

function deletePage(button) {
  showAlert('Successfully removed', 2500);
  button.parentElement.parentElement.remove();
  querySelector('#a-code').removeAttribute(
    'data-' + button.parentElement.parentElement.querySelector('.b label').id
  );
  let allForms = document.querySelectorAll('.aCon');
  allForms[allForms.length - 1].querySelector('.a').style.display = 'block';
}

function openPageSettings(button) {
  currentTrackId = button.parentElement.parentElement;
  querySelector('.p-set').classList.toggle('active');

  let allForms = document.querySelectorAll('.aCon'),
    settingsArray = document.querySelectorAll('#page-s .s-arr'),
    dataValues = [];

  settingsArray.forEach((element) => {
    dataValues.push(element);
  });

  for (let i = 0; i < settingsArray.length; i++) {
    dataValues[i].value = currentTrackId.dataset[i];
  }
}

function applyLiveChanges() {
  let allForms = document.querySelectorAll('.aCon'),
    settingsArray = document.querySelectorAll('#page-s .s-arr'),
    newValues = [];

  settingsArray.forEach((element) => {
    newValues.push(element.value);
  });

  for (let i = 0; i < settingsArray.length; i++) {
    currentTrackId.dataset[i] = newValues[i];
  }

  newValues[17] === 'show'
    ? (currentTrackId.dataset.cbg = 'background-color:' + settingsArray[18].value)
    : (currentTrackId.dataset.cbg = 'background-color:transparent');

  newValues[2]
    ? (currentTrackId.dataset.blink = `<amp-story-page-outlink layout="nodisplay" theme="light"><a href="${newValues[2]}">${newValues[1]}</a></amp-story-page-outlink>`)
    : (currentTrackId.dataset.blink = '');

  if (newValues[14]) {
    if (newValues[13] === 'Image') {
      currentTrackId.dataset.iorv = `<amp-story-grid-layer template="fill"><amp-img animate-in="${newValues[16]}" animate-in-delay="0s" animate-in-duration="1s" src="${newValues[14]}" width="720" height="1280" layout="responsive" alt="${newValues[15]}"></amp-img></amp-story-grid-layer>`;
      currentTrackId.querySelector('img').classList.remove('hidden');
      currentTrackId.querySelector('video').classList.add('hidden');
    } else {
      currentTrackId.dataset.iorv = `<amp-story-grid-layer template="fill"><amp-video animate-in="${newValues[16]}" animate-in-delay="0s" animate-in-duration="1s" autoplay loop width="720" height="1280" poster="https://lh3.googleusercontent.com/d/${getIdFromUrl(newValues[14])}" layout="responsive" alt="${newValues[15]}"><source type="video/mp4" src="${newValues[14]}"></amp-video></amp-story-grid-layer>`;
      currentTrackId.querySelector('img').classList.add('hidden');
      currentTrackId.querySelector('video').classList.remove('hidden');
    }
  } else {
    currentTrackId.dataset.iorv = '';
    currentTrackId.querySelector('img').classList.add('hidden');
    currentTrackId.querySelector('video').classList.add('hidden');
  }

  if (newValues[17] === 'show') {
    currentTrackId.style.cssText = `${currentTrackId.dataset.cbg}; border-radius:${newValues[19]}px ${newValues[20]}px ${newValues[21]}px ${newValues[22]}px; padding:${newValues[23]}px ${newValues[24]}px ${newValues[25]}px ${newValues[26]}px; margin:${newValues[27]}px ${newValues[28]}px ${newValues[29]}px ${newValues[30]}px; animation:fade-in ${newValues[31]}s ease-in ${newValues[32]}s both; border:${newValues[33]}px ${newValues[34]} ${newValues[35]};`;
  } else {
    currentTrackId.style.cssText = '';
  }

  querySelector('.p-set').classList.toggle('active');
}

function resetToDefault() {
  localStorage.removeItem('wsp-v1-1');
  location.reload();
}

function openSettingsSection(section) {
  querySelectorAll('.p-con > div').forEach((div) => {
    div.classList.remove('active');
  });
  querySelector(section).classList.add('active');
}
