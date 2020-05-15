import "core-js/stable";
import "regenerator-runtime/runtime";

import {
    DEFAULT,
    getTheme,
    getColor,
} from '@show-env/core'

// TODO: expose only needed methods from core
export * from '@show-env/core'

const createEnvBar = async ({
    env,
    theme: themeName = DEFAULT,
    zIndex = 100,
    height = '5px',
}) => new Promise((resolve) => {
    const theme = getTheme(themeName)
    const backgroundColor = getColor(env, theme)

    const bar = document.createElement('div')
    bar.style.cssText = `
        position: fixed;
        z-index: ${zIndex};
        top: 0;
        left: 0;
        width: 100%;
        height: ${height};
        background-color: ${backgroundColor};
    `

    // Append bar to body on load
    const onLoad = () => {
        document.body.appendChild(bar)
        resolve(bar)
    }

    // Wait for document to be ready
    if (document.readyState === 'complete') {
        onLoad()
    } else {
        window.onload = onLoad
    }
})

export default createEnvBar
