if (/^(.+\.)?peltorator\.[^./]+$/.test(location.hostname)) {
  //console.log("оно живое")
  function fix1() {
    const navs = document.querySelectorAll('nav .nav-bar-item');
    //console.log(navItems.length);

    if (navs.length >= 2) {
      const bug = navs[1];
      const link = bug.querySelector('a.link');
      if (link) {
        link.href = 'https://службапоконтракту.рф';
        link.textContent = 'Поддержать Россию';
        //console.log("ГОЙДА");
        return true;
      } else {
        //console.log("нет ссылки");
      }
    } else {
      //console.log("бля");
    }

    return false;
  }

  function fix2() {
    const header = document.querySelector('header#header h1 a');

    if (header) {
      header.innerHTML = '';

      const font1 = document.createElement('font');
      font1.textContent = 'pel';
      font1.style.color = 'white';
      font1.style.textShadow =
      '-1px -1px 0 #000, ' +
      '1px -1px 0 #000, ' +
      '-1px  1px 0 #000, ' +
      '1px  1px 0 #000';

      const font2 = document.createElement('font');
      font2.color = '#0032A0';
      font2.textContent = 'tora';

      const font3 = document.createElement('font');
      font3.color = '#DA291C';
      font3.textContent = 'tor';

      header.appendChild(font1);
      header.appendChild(font2);
      header.appendChild(font3);

      //console.log("ГОЙДА 2");
      return true;
    } else {
      //console.log("бля2");
      return false;
    }
  }

  function fix3() {
    const xpath = '/html/body/div[1]/div/div[2]/div[3]/div/div[1]/section[1]/div[2]/div/div/div/div/div/div/div/div/h1/div/span';
    const result = document.evaluate(
      xpath,
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    );
    const span = result.singleNodeValue;
    if (span) {
      span.textContent = 'Существует такое древнерусское междометие “гойда”, означающее призыв к немедленному действию. Как же нам сейчас не хватает таких боевых кличей. Гойда, братья и сестры, гойда! Бойся, старый мир. Бойся, мы идем. Гойда! Гойда!';
      //console.log("ГОЙДА 3");
      return true;
    } else {
      //console.log("бля 3");
      return false;
    }
  }

  let attempts = 0;
  const maxattempt = 20;
  const interval = setInterval(() => {
    const goyda = fix1();
    attempts++;

    if (goyda || attempts >= maxattempt) {
      clearInterval(interval);
      if (!goyda) {
        //console.log("нихуя не получилось");
      }
    }
  }, 500);

  let attempts2 = 0;
  const interval2 = setInterval(() => {
    const goyda2 = fix2();
    attempts2++;

    if (goyda2 || attempts2 >= 20) {
      clearInterval(interval2);
      if (!goyda2) {
        //console.log("нихуя не получилось 2");
      }
    }
  }, 500);

  let attempts3 = 0;
  const interval3 = setInterval(() => {
    const goyda3 = fix3();
    attempts3++;
    if (goyda3 || attempts3 >= 20) {
      clearInterval(interval3);
      //if (!goyda3) console.log("нихуя не получилось 3");
    }
  }, 500);
}
