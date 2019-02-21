const COOKIE = document.cookie;

export function cookieToObject(cookie = COOKIE) {
  const cookieStringArray = cookie.replace(/ /g, "").split(';');
  const cookieObj = {};

  cookieStringArray.forEach(item => {
    if (item.indexOf('=') > 0) {
      const array = item.split('=');
      Object.defineProperty(cookieObj, array[0], {
        value: array[1],
        enumerable: true
      });
    }
  })

  return cookieObj;
}

export function objectToCookie(cookieObj = {}) {
  const cookieString = Object.keys(cookieObj).reduce((cookie, key) => {
    const value = cookieObj[key];
    const item = `${key.toString()}=${value.toString()}; `;

    return cookie + item;
  }, '');

  return cookieString;
}
