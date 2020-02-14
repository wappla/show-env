import React, { useState } from 'react'
import Button from './Button'

const App = () => {
    const [theme, setTheme] = useState('default')
    const [env, setEnv] = useState('default')

    return (
        <div className="container">
            <h1>Show env - React</h1>

            <div className="theme">
                <p>You can choose from several themes based on color palettes from popular frameworks.</p>
                <p>If you don&apos;t like these you can set your own colors</p>
                <Button
                    className="default"
                    onClick={() => setTheme('default')}
                >
                    Default
                </Button>
                <Button
                    className="bootstrap"
                    onClick={() => setTheme('bootstrap')}
                >
                    Bootstrap
                </Button>
                <Button
                    className="tailwind"
                    onClick={() => setTheme('tailwind')}
                >
                    Tailwind default
                </Button>
                <Button
                    className="tailwind-light"
                    onClick={() => setTheme('tailwind-light')}
                >
                    Tailwind light
                </Button>
                <Button
                    className="tailwind-dark"
                    onClick={() => setTheme('tailwind-dark')}
                >
                    Tailwind dark
                </Button>
            </div>

            <div className="env">
                <p>Change environment</p>
                <Button
                    className="js-change-environment development"
                    onClick={() => setEnv('development')}
                >
                    Development

                </Button>
                <Button
                    className="js-change-environment staging"
                    onClick={() => setEnv('staging')}
                >
                    Staging

                </Button>
                <Button
                    className="js-change-environment production"
                    onClick={() => setEnv('production')}
                >
                    Production

                </Button>
            </div>
        </div>
    )
}

export default App
