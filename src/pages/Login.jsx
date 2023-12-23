
import { useState } from 'react';

export default function Login() {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    function handleChange(event) {
        const { name, value } = event.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(formData)
    }

    return (
        <section>
            <div className="login--container">
                <h1>Sign in to your account</h1>
                <form onSubmit={handleSubmit} className="login--form">
                    <input
                        name="email"
                        onChange={handleChange}
                        type="email"
                        placeholder="Email address"
                        value={formData.email}
                    />
                    <input
                        name="password"
                        onChange={handleChange}
                        type="password"
                        placeholder="Password"
                        value={formData.password}
                    />
                    <button>Log in</button>
                </form>
            </div>
        </section>
    )
}