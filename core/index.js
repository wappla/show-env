import bootstrap from './theme/bootstrap'
import defaultTheme from './theme/default'
import tailwind, {
    dark as tailwindDark,
    light as tailwindLight,
} from './theme/tailwind'
import * as constants from './constants'

export const changeFavicon = (newIcon) => {
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link')
    link.type = 'image/x-icon'
    link.rel = 'shortcut icon'
    link.href = newIcon
    document.getElementsByTagName('head')[0].appendChild(link)
}

export const changeTitle = (env, {
    type,
    divider = '-',
}) => {
    const { title } = document

    switch (type) {
        case constants.REPLACE:
            return env
        case constants.APPEND:
            return `${title} ${divider} ${env}`
        case constants.PREPEND:
        default:
            return `${env} ${divider} ${title}`
    }
}

export const getTheme = (theme) => {
    switch (theme) {
        case constants.BOOTSTRAP:
            return bootstrap
        case constants.TAILWIND:
            return tailwind
        case constants.TAILWIND_DARK:
            return tailwindDark
        case constants.TAILWIND_LIGHT:
            return tailwindLight
        case constants.DEFAULT:
        default:
            return defaultTheme
    }
}

export const getColor = (env, theme) => theme[env]
