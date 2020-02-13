import React from 'react'
import { DEFAULT } from '../../core/constants'
import { getTheme, getColor } from '../../core/index'

const EnvBar = ({
    env,
    theme: themeName = DEFAULT,
}) => {
    const theme = getTheme(themeName)
    const color = getColor(env, theme)

    const style = {
        position: 'fixed',
        'z-index': 9000,
        top: 0,
        left: 0,
        width: '100%',
        height: '50px',
        backgroundColor: color,
    }

    return (
        <div style={style} />
    )
}

export default EnvBar
