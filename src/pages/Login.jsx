
import { useLoaderData, useActionData, Form, redirect, useNavigation } from 'react-router-dom';
import { loginUser } from '../api';

export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}

export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    const pathname = new URL(request.url)
        .searchParams.get("redirectTo") || "/host"

    try {
        const data = await loginUser({ email, password })
        localStorage.setItem('loggedin', JSON.stringify(true));

        //we can use 
        //return redirect ("/host") but as we are using miragejs which leads to problem with react router v6 we have to do it In this manner for now.
        // const redirecting = redirect(pathname)
        // return Object.defineProperty(redirecting, 'body', { value: true })
        return redirect(pathname)
    }
    catch (error) {
        return error.message
    }

}

export default function Login() {

    const loginMessage = useLoaderData()
    const error = useActionData();
    const status = useNavigation().state

    return (
        <section>
            <div className="login--container">
                <h1>Sign in to your account</h1>
                {loginMessage && <h4>{loginMessage}</h4>}
                {error && <h4>{error}</h4>}
                <Form
                    method="post"
                    className="login--form"
                    replace
                >
                    <input
                        name="email"
                        type="email"
                        placeholder="Email address"
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                    />
                    <button disabled={status === "submitting" ? true : false}>
                        {status === "submitting"
                            ? "Logging in..."
                            : "Log in"
                        }</button>
                </Form>
            </div>
        </section>
    )
}