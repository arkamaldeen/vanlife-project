import { redirect } from "react-router-dom"

export async function requireAuth(request) {
    const isLoggedIn = JSON.parse(localStorage.getItem('loggedin'));
    const pathname = new URL(request.url).pathname

    if (!isLoggedIn) {
        throw redirect(
            `/login?message=You must log in first.&redirectTo=${pathname}`
            )
    }

    // const response = redirect('/login?message=You must log in first')
    
    // if (!isLoggedIn) {
    //     return Object.defineProperty(response, 'body', { value: true })
    // }

    return null
    
}