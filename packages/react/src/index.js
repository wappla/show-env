import React from 'react'
import {
    DEFAULT,
    getTheme,
    getColor,
} from '@show-env/core'

// TODO: expose only needed methods from core
export * from '@show-env/core'

const EnvBar = ({
    env,
    theme: themeName = DEFAULT,
    zIndex = 100,
    height = '5px',
}) => {
    const theme = getTheme(themeName)
    const backgroundColor = getColor(env, theme)

    const style = {
        position: 'fixed',
        zIndex,
        top: 0,
        left: 0,
        width: '100%',
        height,
        backgroundColor,
    }

    return (
        <div style={style} />
    )
}

export default EnvBar
