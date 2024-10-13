import {router} from '@inertiajs/vue3'

function logout() {
    if(confirm('Log out?'))
        router.post('/logout')
}

export {logout}
