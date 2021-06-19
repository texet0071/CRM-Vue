import store from '../store'

const locales = {
    'ru-RU': {
        ProfileTitle:'Профиль'
    },
    'en-US': {
        ProfileTitle:'Profile'
    }
}

export default  function localizeFilter(key)  {
    const lacole = store.getters.info.locale || 'ru-RU'
    return locales[locale] [key] || `[Localize error]: key ${key} not found`
}