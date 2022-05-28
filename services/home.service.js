import Router from 'next/router'
import { get } from './api.service'


export const getUser = () => {
    return get('https://reqres.in/api/users')
}

