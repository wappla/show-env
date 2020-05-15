import createEnvBar, { setTitle, setFavicon } from '@show-env/vanilla'

window.onload = () => {
    let bar
    let env = 'development'
    let theme = 'default'

    const removeBar = () => {
        // Remove bar if already exists
        if (typeof bar !== 'undefined') {
            bar.parentElement.removeChild(bar)
            // bar.remove()
        }
    }

    const change = async (newEnv, newTheme) => {
        env = newEnv
        theme = newTheme
        // Update bar
        removeBar()
        bar = await createEnvBar({ env, theme })
        // Update title
        setTitle(env, { type: 'replace' })
        // Update favicon
        setFavicon(`assets/favicons/favicon-${env}.ico`)
    }

    // Create initial bar
    change(env, theme)

    // Theme handler
    const changeTheme = (e) => {
        const newTheme = e.target.getAttribute('data-theme')
        change(env, newTheme)
    }

    // Env handler
    const changeThemeButtons = document.getElementsByClassName('js-change-theme')
    const themeButtonsArr = Array.from(changeThemeButtons)
    themeButtonsArr.forEach((button) => {
        button.addEventListener('click', changeTheme)
    })

    // Change env
    const changeEnv = (e) => {
        const newEnv = e.target.getAttribute('data-env')
        change(newEnv, theme)
    }

    // Env handler
    const changeEnvButtons = document.getElementsByClassName('js-change-environment')
    const envButtonsArr = Array.from(changeEnvButtons)
    envButtonsArr.forEach((button) => {
        button.addEventListener('click', changeEnv)
    })
}
