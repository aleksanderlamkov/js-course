class ThemeSwitcher {
  selectors = {
    switchThemeButton: '[data-js-theme-switcher]',
  }

  themes = {
    dark: 'dark',
    light: 'light',
  }

  stateClasses = {
    isDarkTheme: 'is-dark-theme'
  }

  storageKey = 'theme'

  constructor() {
    this.switchThemeButtonElement = document.querySelector(this.selectors.switchThemeButton)
    this.setInitialTheme()
    this.bindEvents()
  }

  getCachedTheme() {
    return localStorage.getItem(this.storageKey)
  }

  setThemeToCache(theme) {
    localStorage.setItem(this.storageKey, theme)
  }

  setInitialTheme() {
    const isDarkThemeCached = this.getCachedTheme() === this.themes.dark

    document.documentElement.classList.toggle(
      this.stateClasses.isDarkTheme,
      isDarkThemeCached
    )
  }

  onClick() {
    const isDarkThemeCached = this.getCachedTheme() === this.themes.dark

    this.setThemeToCache(isDarkThemeCached ? this.themes.light : this.themes.dark)

    document.documentElement.classList.toggle(this.stateClasses.isDarkTheme)
  }

  bindEvents() {
    this.switchThemeButtonElement.addEventListener('click', () => this.onClick())
  }
}

new ThemeSwitcher()