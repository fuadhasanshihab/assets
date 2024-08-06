const productsData = {
  '456': {
    name: 'Business Card PLP',
    details: 'Format: PLP',
    code: 'FHS456',
    price: '50',
    dCount: '9',
    prePrice: '৳100',
    discount: '-৳50',
    prePriceText: 'Subtotal',
    discountText: 'Discount (50%)',
    link: 'https://fuadhasanshihab.blogspot.com/2023/12/business-card-plp.html',
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjR8K5ng_VUu0MGouzAPtBalZX1GbM2UQhb6m1Ed3Wd1jcvYG94AplXPHYyvU1gmsn-_Y2QziioOKB8OrGIdfVxy-40fkUTuGmA9enUSpo6xXgmJ6OS6lM40PcGm-Rs8dPWPfHRp7pNRB3b43njq8MrrOaWMP-Wrzfo6ideCyzDlLRF94oJZQZ1hdDC5HZq/s1600/business_card_thumb_fhs.png',
    form: 'https://docs.google.com/forms/d/e/1FAIpQLScWNZ2hGcTXJs7eF0Ysu5WuZOb904W6zN8Gvnqx6YIcgkazSg/viewform?embedded=true&usp=pp_url&entry.358930372=FHS3749&entry.723714736=DEMO+PRODUCT+NAME&entry.1724040677=500&entry.472063648=https://fuadhasanshihab.blogspot.com/2024/01/demo.html',
    formBank: 'https://docs.google.com/forms/d/e/1FAIpQLSf7NzwO8tSYj9k-lO7iKs3CKy4-m5nEudf5DVlEggk9d15HnQ/viewform?usp=pp_url&entry.358930372=FHS3749&entry.723714736=DEMO+PRODUCT+NAME&entry.1724040677=500&entry.472063648=https://fuadhasanshihab.blogspot.com/2024/01/demo.html'
  },
  '466': {
    name: 'QR Code Business Card PLP',
    details: 'Format: PLP',
    code: 'FHS466',
    price: '50',
    dCount: '2',
    prePrice: '৳100',
    discount: '-৳50',
    prePriceText: 'Subtotal',
    discountText: 'Discount (50%)',
    link: 'https://fuadhasanshihab.blogspot.com/2024/03/qr-code-business-card-plp.html',
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj1UKIibWT5os7LHqxIXym763oyqtPRkteS7YeBeAoV9dn_PLpmEPsLOfaYIW0luiMG3lmx7Qwfy5pFH2zgRE7ng5Uybk1d6WTz1KnnR9tpKdJb6PviumyQYfYio6OHwmPFPSW-jKL0wmgbx2zskAXTFbW2THSk6y9Af_4_-gYzN2_aZNI7dZDziaU5Ex6a/s1600/QR%20Business%20Card.jpg',
    form: 'https://docs.google.com/forms/d/e/1FAIpQLScWNZ2hGcTXJs7eF0Ysu5WuZOb904W6zN8Gvnqx6YIcgkazSg/viewform?embedded=true&usp=pp_url&entry.358930372=FHS3749&entry.723714736=DEMO+PRODUCT+NAME&entry.1724040677=500&entry.472063648=https://fuadhasanshihab.blogspot.com/2024/01/demo.html',
    formBank: 'https://docs.google.com/forms/d/e/1FAIpQLSf7NzwO8tSYj9k-lO7iKs3CKy4-m5nEudf5DVlEggk9d15HnQ/viewform?usp=pp_url&entry.358930372=FHS3749&entry.723714736=DEMO+PRODUCT+NAME&entry.1724040677=500&entry.472063648=https://fuadhasanshihab.blogspot.com/2024/01/demo.html'
  },
};

function updatefhsCounter() {
      for (const productId in productsData) {
        const divId = 'fhsCount' + productId;
        const divElement = document.getElementById(divId);
        if (divElement) {
          divElement.innerHTML = productsData[productId].dCount;
        }
      }
    }
document.addEventListener('DOMContentLoaded', updatefhsCounter);
