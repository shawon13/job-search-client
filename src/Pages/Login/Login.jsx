import { Container } from '@mui/material';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const { loginUser, googleLogin } = useAuth()
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        loginUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                form.reset()
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    const handleGoogle = () => {
        googleLogin()
    }
    return (
        <section className='py-20'>
            <Container maxWidth='lg'>
                <div className="text-center lg:text-left mb-8">
                    <h1 className="text-5xl font-bold text-center">Login to Your Account</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl mx-auto">
                    <form onSubmit={handleLogin} className="card-body pb-0">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-neutral">Login</button>
                        </div>
                        <p className='text-center'>You are new to website? <Link to='register'>Register</Link></p>
                    </form>
                    <div className="card-body pt-0">
                        <p className='text-center font-bold text-xl'>OR</p>
                        <button onClick={handleGoogle} className=' border-black border rounded w-full justify-center font-medium text-xl py-2 flex items-center'><FcGoogle className='mr-2.5' />Google</button>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Login;