export default function ({ app }) {
  app.i18n.onLanguageSwitched = (oldLocale, newLocale) => {
    console.log(oldLocale, newLocale);
    var nav;
    nav = document.querySelector('.nav-container');
    nav.classList.remove('show');
  }
}
