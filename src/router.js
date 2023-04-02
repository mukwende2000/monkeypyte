const pageTitle = 'Monkeypyte';
const distFilename = 'index.html';
const routes = {
  404: {
    title: `${pageTitle} | not found`,
    template: '/404.html',
  },
  '#': {
    title: `${pageTitle} | Home`,
    template: 'home.html',
  },
  about: {
    title: `${pageTitle} | About us`,
    template: 'about.html',
  },
  login: {
    title: `${pageTitle} | Login`,
    template: 'login.html',
  },
  settings: {
    title: `${pageTitle} | Settings`,
    template: 'settings.html',
  },
  terms: {
    title: `${pageTitle} | Terms of Service`,
    template: 'terms.html',
  },
  privacy: {
    title: `${pageTitle} | Privacy Policy`,
    template: 'privacy.html',
  },
  security: {
    title: `${pageTitle} | Security Policy`,
    template: 'security.html',
  },
};

export default async function locationHandler() {
  let location = window.location.hash.replace('#', '');
  if (location.length < 1) {
    location = '#';
  }
  const route = routes[location] || routes[404];
  const html = await fetch(route.template)
    .then((res) => res.text());
  document.getElementById('app').innerHTML = html;
  document.title = route.title;
}
