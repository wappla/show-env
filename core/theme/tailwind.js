import { PRODUCTION, STAGING, DEVELOPMENT } from '../constants'

const red400 = '#FC8181'
const red500 = '#F56565'
const red600 = '#E53E3E'

const orange400 = '#F6AD55'
const orange500 = '#ED8936'
const orange600 = '#DD6B20'

const green400 = '#68D391'
const green500 = '#48BB78'
const green600 = '#38A169'

export const dark = {
    [PRODUCTION]: red400,
    [STAGING]: orange400,
    [DEVELOPMENT]: green400,
}

export const light = {
    [PRODUCTION]: red600,
    [STAGING]: orange600,
    [DEVELOPMENT]: green600,
}

export default {
    [PRODUCTION]: red500,
    [STAGING]: orange500,
    [DEVELOPMENT]: green500,
}
