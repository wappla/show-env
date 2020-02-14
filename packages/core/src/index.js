import bootstrap from './theme/bootstrap'
import defaultTheme from './theme/default'
import tailwind, {
    dark as tailwindDark,
    light as tailwindLight,
} from './theme/tailwind'
import * as constants from './constants'

export * from './constants'

export const setFavicon = (newIcon) => {
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link')
    link.type = 'image/x-icon'
    link.rel = 'shortcut icon'
    link.href = newIcon
    document.getElementsByTagName('head')[0].appendChild(link)
}

const getTitle = (env, title, type, divider) => {
    switch (type) {
        case constants.TITLE_ACTIONS.replace:
            return env
        case constants.TITLE_ACTIONS.append:
            return `${title} ${divider} ${env}`
        case constants.TITLE_ACTIONS.prepend:
        default:
            return `${env} ${divider} ${title}`
    }
}

export const setTitle = (env, {
    type,
    divider = '-',
}) => {
    const { title } = document
    const newTitle = getTitle(env, title, type, divider)
    document.title = newTitle
}

const themes = {
    [constants.THEMES.bootstrap]: bootstrap,
    [constants.THEMES.tailwind]: tailwind,
    [constants.THEMES.tailwindDark]: tailwindDark,
    [constants.THEMES.tailwindLight]: tailwindLight,
    [constants.THEMES.defaultTheme]: defaultTheme,
}

export const getTheme = (theme) => themes[theme]

export const getColor = (env, theme) => theme[env]
