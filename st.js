let imgLo,
  imgCo,
  imgAl,
  dimg = 'https://lh6.googleusercontent.com/d/',
  dmusic = 'https://drive.google.com/uc?export=view&id='
let dvideo = 'https://drive.google.com/uc?export=view&id='
let sB = '/'
let sL = '<'
let adsS = ''
let aPage = ''
let adsC = ''
let videoS = ''
let anaS = ''
let anaC = ''
window.location.hostname != 'fuadhasanshihab.github.io' &&
  ((window.location.href = 'https://fuadhasanshihab.blogspot.com'),
  (document.body.innerHTML = '<h1>fhs.com</h1>'))
function qS(_0x55c5f5) {
  const _0xa641ba = (function () {
      const _0x331bcd = _0x1a69a4
      let _0x276d85 = true
      return function (_0x195414, _0x93b631) {
        const _0x5de06f = _0x276d85
          ? function () {
              if (_0x93b631) {
                const _0x33ab10 = _0x93b631.apply(_0x195414, arguments)
                return (_0x93b631 = null), _0x33ab10
              }
            }
          : function () {}
        return (_0x276d85 = false), _0x5de06f
      }
    })(),
    _0x91ae38 = _0xa641ba(this, function () {
      return _0x91ae38
        .toString()
        .search('(((.+)+)+)+$')
        .toString()
        .constructor(_0x91ae38)
        .search('(((.+)+)+)+$')
    })
  return _0x91ae38(), document.querySelector(_0x55c5f5)
}
function alertM(_0x46d331, _0x5405c5) {
  let _0x4dd9eb = qS('.ms-con')
  _0x4dd9eb.classList.add('active')
  _0x4dd9eb.querySelector('.ms-text').innerHTML = _0x46d331
  setTimeout(() => {
    qS('.ms-con').classList.remove('active')
  }, _0x5405c5)
}
const getId = (_0x3da809) =>
  (results = /[?&]id=([^&#]*)/.exec(_0x3da809)) ? results[1] : null
function getImg(_0x4af663 = 0, _0x266f82 = 0, _0x2e7aa2 = 0) {
  qS('.u-img').classList.toggle('active')
  imgLo = _0x4af663
  imgCo = _0x266f82
  imgAl = _0x2e7aa2
}
function insertImg() {
  let _0x3c6375 = document.querySelector('#upload-frame'),
    _0x528e38 = _0x3c6375.contentDocument || _0x3c6375.contentWindow.document,
    _0x3679d9 = _0x528e38.querySelector('#file-link').value
  if (imgCo == 1) {
    imgLo.value = dimg + '' + _0x3679d9
  } else {
    imgCo == 2 && (imgLo.value = dmusic + '' + _0x3679d9)
  }
  if (imgCo.value == 'Image') {
    imgLo.value = dimg + '' + _0x3679d9
  } else {
    imgCo.value == 'Video' && (imgLo.value = dvideo + '' + _0x3679d9)
  }
  imgAl &&
    _0x528e38.querySelector('.img-alt').value &&
    (imgAl.value = _0x528e38.querySelector('.img-alt').value)
  qS('.u-img').classList.toggle('active')
}
function tSet() {
  qS('.container aside').classList.toggle('active')
}
function dCon() {
  qS('.d-con').classList.toggle('active')
}
let uniqueId = 0,
  trackId = ''
function addPage(_0x14ff2b) {
  uniqueId++
  _0x14ff2b.insertAdjacentHTML(
    'afterend',
    '\n        <form style="background: linear-gradient(45deg, #ce4fce 40%,rgba(0,0,0,0) 40%), radial-gradient(farthest-corner at 60% 80%, #c7fae6 70%,#5fcf5f 50%);"\n       data-0="20" data-1="" data-2="" data-3="45" data-4="#ce4fce" data-5="40" data-6="40" data-7="60" data-8="80" data-9="#c7fae6" data-10="70" data-11="60" data-12="#5fef5f" data-13="Image" data-14="" data-15="" data-16="fade-in" data-17="show" data-18="#ffffff" data-19="0" data-20="0" data-21="0" data-22="5" data-23="5" data-24="5" data-25="5" data-26="10" data-27="10" data-28="0" data-29="0" data-30="fade-in" data-31="2" data-32="0.5" data-33="0" data-34="solid" data-35="#ffffff"\n        data-cbg="background-color:#fff" data-blink="" data-iorv=""\n        class="aCon" onsubmit="addPage(this);return false">\n\n        <div class="quiz-lower" contenteditable="true">\n        <div style="text-align:center;">Enter Your Text Here.</div>\n        </div>\n        <div class="addpage a">\n        <label title="New Page" id="p' +
      uniqueId +
      '"><span class="material-symbols-rounded">add</span><input class="hidden" type="submit"></label>\n        </div>\n        <div class="addpage c">\n        <label title="Delete Page" id="pd' +
      uniqueId +
      '" onclick="dePa(this)"><span class="material-symbols-rounded">delete</span></label>\n        </div>\n        <div class="addpage b">\n        <label title="Page Setting" id="' +
      uniqueId +
      '" onclick="checkData(this);"><span class="material-symbols-rounded">settings</span></label>\n        </div>\n        <img class="hidden" id="bimg" src="">\n        <video class="hidden" id="bvideo" preload="auto" controls poster="https://stories.3schools.in/img/b.png"><source src=""></video>\n        </form>\n        '
  )
  _0x14ff2b.querySelector('.a').style.display = 'none'
}
function savP() {
  let _0x4a95f1 = document.querySelectorAll('form.aCon'),
    _0x3e1032 = []
  _0x4a95f1.forEach((_0x7366db) => {
    _0x3e1032.push(_0x7366db.outerHTML)
  })
  localStorage.setItem('wsp-v1-1', _0x3e1032.join(''))
}
localStorage.getItem('wsp-v1-1')
  ? (qS('.fs-page').insertAdjacentHTML(
      'afterend',
      localStorage.getItem('wsp-v1-1')
    ),
    (uniqueId = document.querySelectorAll('form.aCon').length))
  : addPage(qS('.fs-page'))
function dePa(_0x1d13e5) {
  alertM(' Successfully removed', 2500)
  _0x1d13e5.parentElement.parentElement.remove()
  qS('#a-code').removeAttribute(
    'data-' + _0x1d13e5.parentElement.parentElement.querySelector('.b label').id
  )
  let _0x4e9fa1 = document.querySelectorAll('.aCon')
  _0x4e9fa1[_0x4e9fa1.length - 1].querySelector('.a').style.display = 'block'
}
function checkData(_0x14a90e) {
  trackId = _0x14a90e.parentElement.parentElement
  qS('.p-set').classList.toggle('active')
  let _0x53e786 = document.querySelectorAll('.aCon'),
    _0x26058a = document.querySelectorAll('#page-s .s-arr'),
    _0x1b831 = []
  _0x26058a.forEach((_0x2598dd) => {
    _0x1b831.push(_0x2598dd)
  })
  for (let _0x466ca7 = 0; _0x466ca7 < _0x26058a.length; _0x466ca7++) {
    _0x1b831[_0x466ca7].value = trackId.dataset[_0x466ca7]
  }
}
function liveChange() {
  let _0x1ae454 = document.querySelectorAll('.aCon')
  let _0x626d1c = document.querySelectorAll('#page-s .s-arr'),
    _0x19b8e4 = []
  _0x626d1c.forEach((_0x425f73) => {
    _0x19b8e4.push(_0x425f73.value)
  })
  for (let _0xaa44fd = 0; _0xaa44fd < _0x626d1c.length; _0xaa44fd++) {
    trackId.dataset[_0xaa44fd] = _0x19b8e4[_0xaa44fd]
  }
  _0x19b8e4[17] == 'show'
    ? (trackId.dataset.cbg = 'background-color:' + _0x626d1c[18].value)
    : (trackId.dataset.cbg = 'background-color:transparent')
  _0x19b8e4[2]
    ? (trackId.dataset.blink =
        '<amp-story-page-outlink layout="nodisplay" theme="light"><a href="' +
        _0x19b8e4[2] +
        '">' +
        _0x19b8e4[1] +
        '</a></amp-story-page-outlink>')
    : (trackId.dataset.blink = '')
  if (_0x19b8e4[14]) {
    _0x19b8e4[13] == 'Image'
      ? ((trackId.dataset.iorv =
          '<amp-story-grid-layer template="fill"><amp-img animate-in="' +
          _0x19b8e4[16] +
          '" animate-in-delay="0s" animate-in-duration="1s" src="' +
          _0x19b8e4[14] +
          '" width="720" height="1280" layout="responsive" alt="' +
          _0x19b8e4[15] +
          '"></amp-img></amp-story-grid-layer>'),
        trackId.querySelector('img').classList.remove('hidden'),
        (trackId.querySelector('img').src = _0x19b8e4[14]),
        trackId.querySelector('video').classList.add('hidden'))
      : ((trackId.dataset.iorv =
          '<amp-story-grid-layer template="fill"><amp-video animate-in="' +
          _0x19b8e4[16] +
          '" animate-in-delay="0s" animate-in-duration="1s" autoplay loop width="720" height="1280" poster="https://lh3.googleusercontent.com/d/' +
          getId(_0x19b8e4[14]) +
          '" layout="responsive" alt="' +
          _0x19b8e4[15] +
          '"><source type="video/mp4" src="' +
          _0x19b8e4[14] +
          '"></amp-video></amp-story-grid-layer>'),
        trackId.querySelector('img').classList.add('hidden'),
        trackId.querySelector('video').classList.remove('hidden'))
  } else {
    trackId.dataset.iorv = ''
    trackId.querySelector('img').classList.add('hidden')
    trackId.querySelector('video').classList.add('hidden')
  }
  trackId.style =
    'background: linear-gradient(' +
    _0x19b8e4[3] +
    'deg, ' +
    _0x19b8e4[4] +
    ' ' +
    _0x19b8e4[5] +
    '%,rgba(0,0,0,0) ' +
    _0x19b8e4[6] +
    '%), radial-gradient(farthest-corner at ' +
    _0x19b8e4[7] +
    '% ' +
    _0x19b8e4[8] +
    '%, ' +
    _0x19b8e4[9] +
    ' ' +
    _0x19b8e4[10] +
    '%,' +
    _0x19b8e4[12] +
    ' ' +
    _0x19b8e4[11] +
    '%);'
  trackId.querySelector('.quiz-lower').style =
    trackId.dataset.cbg +
    ';margin:0px ' +
    _0x19b8e4[20] +
    'px ' +
    _0x19b8e4[21] +
    'px ' +
    _0x19b8e4[19] +
    'px;padding:' +
    _0x19b8e4[24] +
    'px ' +
    _0x19b8e4[23] +
    'px ' +
    _0x19b8e4[25] +
    'px ' +
    _0x19b8e4[22] +
    'px;border-radius:' +
    _0x19b8e4[26] +
    'px ' +
    _0x19b8e4[27] +
    'px ' +
    _0x19b8e4[29] +
    'px ' +
    _0x19b8e4[28] +
    'px;border:' +
    _0x19b8e4[33] +
    'px ' +
    _0x19b8e4[34] +
    ' ' +
    _0x19b8e4[35]
  let _0x3dda19 = document.querySelectorAll('.s-container .s-arr')
  if (_0x3dda19[4].value) {
    anaS =
      '<script async custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"><' +
      sB +
      'script>'
    anaC =
      '<amp-analytics type="gtag" data-credentials="include"><script type="application/json">{"vars" : {"gtag_id": "' +
      _0x3dda19[4].value +
      '","config" : {"' +
      _0x3dda19[4].value +
      '": { "groups": "default" }}}}<' +
      sB +
      'script><' +
      sB +
      'amp-analytics>'
  } else {
    anaS = ''
    ansC = ''
  }
  _0x3dda19[2].value
    ? ((adsS =
        '<script async custom-element="amp-story-auto-ads" src="https://cdn.ampproject.org/v0/amp-story-auto-ads-0.1.js"><' +
        sB +
        'script>'),
      (adsC =
        '<amp-story-auto-ads><script type="application/json">{"ad-attributes": {"type": "adsense","data-ad-client": "' +
        _0x3dda19[2].value +
        '","data-ad-slot": "' +
        _0x3dda19[3].value +
        '"} }<' +
        sB +
        'script></amp-story-auto-ads>'))
    : ((adsS = ''), (adsC = ''))
}
function createStory() {
  let _0x8b22e = document.querySelectorAll('form.aCon')
  let _0x53e3d8 = '',
    _0xb70ebc = ''
  videoS = ''
  qS('.b-music').value &&
    (_0x53e3d8 = 'background-audio="' + qS('.b-music').value + '"')
  _0x8b22e.forEach((_0x5d7f29) => {
    _0x5d7f29.querySelector('#bvideo').className != 'hidden' &&
      (videoS =
        '<script async custom-element="amp-video" src="https://cdn.ampproject.org/v0/amp-video-1.0.js"><' +
        sB +
        'script>')
    _0xb70ebc +=
      '<amp-story-page class="relative" id="quiz-page' +
      _0x5d7f29.querySelector('.b label').id +
      '" auto-advance-after="' +
      _0x5d7f29.dataset[0] +
      's" style="background:' +
      _0x5d7f29.style.background +
      ';">' +
      _0x5d7f29.dataset.iorv +
      '<amp-story-grid-layer template="fill"><div><div class="box"><div animate-in="' +
      _0x5d7f29.dataset[30] +
      '" animate-in-delay="' +
      _0x5d7f29.dataset[32] +
      's" animate-in-duration="' +
      _0x5d7f29.dataset[31] +
      's" style="' +
      _0x5d7f29.dataset.cbg +
      ';margin:0px ' +
      _0x5d7f29.dataset[20] +
      'px ' +
      _0x5d7f29.dataset[21] +
      'px ' +
      _0x5d7f29.dataset[19] +
      'px;padding:' +
      _0x5d7f29.dataset[24] +
      'px ' +
      _0x5d7f29.dataset[23] +
      'px ' +
      _0x5d7f29.dataset[25] +
      'px ' +
      _0x5d7f29.dataset[22] +
      'px;border-radius:' +
      _0x5d7f29.dataset[26] +
      'px ' +
      _0x5d7f29.dataset[27] +
      'px ' +
      _0x5d7f29.dataset[29] +
      'px ' +
      _0x5d7f29.dataset[28] +
      'px;border:' +
      _0x5d7f29.dataset[33] +
      'px ' +
      _0x5d7f29.dataset[34] +
      ' ' +
      _0x5d7f29.dataset[35] +
      '">' +
      _0x5d7f29.querySelector('.quiz-lower').innerHTML +
      '</div></div><noscript><img alt="' +
      qS('#p-t').value.replace(/"/g, "'") +
      '" src="' +
      qS('.p-img').value +
      '" /></noscript></div></amp-story-grid-layer>' +
      _0x5d7f29.dataset.blink +
      '</amp-story-page> '
  })
  let _0x1bea1a =
    '\n      <meta name="amp-story-generator-name" content="3schools Make Stories" />\n      <meta name="amp-story-generator-version" content="10"/>\n      ' +
    adsS +
    anaS +
    videoS +
    "\n      <style amp-custom>\n      amp-story {font-family: 'Poppins',sans-serif; }\n      .relative {\n      position: relative;\n      }\n      .box{\n      position: absolute;\n      bottom: 0px;\n      width: 100%;\n      }\n      </style> </head> <body>\n      <amp-story standalone title=\"" +
    qS('#p-t').value.replace(/"/g, "'") +
    '" publisher="' +
    qS('.pn').value +
    '" publisher-logo-src="' +
    qS('.pl').value +
    '" ' +
    _0x53e3d8 +
    ' poster-portrait-src="' +
    qS('.p-img').value +
    '">\n      ' +
    _0xb70ebc +
    '\n      ' +
    anaC +
    '\n      ' +
    adsC +
    '\n      <' +
    sB +
    'amp-story>\n      <' +
    sB +
    'body>\n      '
  qS('#a-code').value = _0x1bea1a
    .replace(/<\/font>/g, '</span>')
    .replace(/<font color="/g, '<span style="color:')
}
function sLS() {
  let _0x2512c0 = [],
    _0x505e72 = document.querySelectorAll('.s-container .s-arr')
  _0x505e72.forEach((_0x37c43f) => {
    _0x2512c0.push(_0x37c43f.value)
  })
  localStorage.setItem('ws-v1-1', JSON.stringify(_0x2512c0))
}
function fetchD() {
  const _0x214c05 = (function () {
      let _0x4ebf8e = true
      return function (_0x403e1d, _0x357fbc) {
        const _0x468033 = _0x4ebf8e
          ? function () {
              if (_0x357fbc) {
                const _0x5457a2 = _0x357fbc.apply(_0x403e1d, arguments)
                return (_0x357fbc = null), _0x5457a2
              }
            }
          : function () {}
        return (_0x4ebf8e = false), _0x468033
      }
    })(),
    _0x275ea7 = _0x214c05(this, function () {
      let _0x4d2c11
      try {
        const _0xf40240 = Function(
          'return (function() {}.constructor("return this")( ));'
        )
        _0x4d2c11 = _0xf40240()
      } catch (_0x3f5009) {
        _0x4d2c11 = window
      }
      const _0x39b12b = (_0x4d2c11.console = _0x4d2c11.console || {})
      const _0x42c40b = [
        'log',
        'warn',
        'info',
        'error',
        'exception',
        'table',
        'trace',
      ]
      for (let _0x2a5118 = 0; _0x2a5118 < _0x42c40b.length; _0x2a5118++) {
        const _0x9d5400 = _0x214c05.constructor.prototype.bind(_0x214c05),
          _0x25c853 = _0x42c40b[_0x2a5118],
          _0x1f19d2 = _0x39b12b[_0x25c853] || _0x9d5400
        _0x9d5400['__proto__'] = _0x214c05.bind(_0x214c05)
        _0x9d5400.toString = _0x1f19d2.toString.bind(_0x1f19d2)
        _0x39b12b[_0x25c853] = _0x9d5400
      }
    })
  _0x275ea7()
  let _0x378b3c = document.querySelectorAll('.s-container .s-arr')
  let _0x58b7d1 = JSON.parse(localStorage.getItem('ws-v1-1'))
  if (_0x58b7d1) {
    for (let _0x376d17 = 0; _0x376d17 < _0x378b3c.length; ++_0x376d17) {
      _0x378b3c[_0x376d17].value = _0x58b7d1[_0x376d17]
    }
  }
}
fetchD()
function pre() {
  createStory()
  w = window.open()
  w.document.write(
    "\n      <!doctype html><html \u26A1 lang=\"en'>&lt;head&gt;\n      <title>Example</title>\n      <meta charset=\"utf-8\">\n      <link rel=\"canonical\" href=\"https://your-website.link/example.html\"/>\n      <meta name=\"viewport\" content=\"width=device-width,minimum-scale=1,initial-scale=1\">\n      <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>\n      <script async src=\"https://cdn.ampproject.org/v0.js\"></script>\n      <script async custom-element=\"amp-story\" src=\"https://cdn.ampproject.org/v0/amp-story-1.0.js\"></script>\n      <link href=\"https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap\" rel=\"stylesheet\"/>\n      <link href='https://app.3schools.in/logo.png' rel='icon' sizes='192x192' type='image/png' />\n      <link href='https://app.3schools.in/logo.png' rel='icon' type='image/x-icon' />\n      <link href='https://app.3schools.in/logo.png' rel='icon' sizes='32x32' type='image/png' />\n      \n      " +
      qS('#a-code').value +
      '</html>\n      '
  )
}
