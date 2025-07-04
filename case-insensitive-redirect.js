// case-insensitive-redirect.js
(function () {
  const path = window.location.pathname;
  const lowercasePath = path.toLowerCase();
  if (path !== lowercasePath) {
    const search = window.location.search;
    const hash = window.location.hash;
    window.location.replace(lowercasePath + search + hash);
  }
})();
