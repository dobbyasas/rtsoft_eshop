import { useState } from 'react';

import Header from '../../components/Header/Header';
import SideBar from '../../components/Sidebar/Sidebar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.scss';

function Login() {
    const [isSidebarShown, setIsSidebarShown] = useState(false);

    return (
        <>
            <Header
                isSidebarShown={isSidebarShown}
                setIsSidebarShown={setIsSidebarShown}
            />
            <SideBar
                isSidebarShown={isSidebarShown}
                setIsSidebarShown={setIsSidebarShown}
            />
            <div className={`Login ${isSidebarShown ? 'blur' : ''}`}>
                <div
                    className="container bg-custom text-white"
                    style={{
                        background: '#07944a',
                        borderRadius: '20px',
                        width: '300px',
                        transform: 'translate(-50%, -50%)',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                    }}
                >
                    <div className="p-3">
                        <div id="login">
                            <form>
                                <h2 className="text-center">Login</h2>
                                <div className="form-group">
                                    <ion-icon name="mail-outline"></ion-icon>
                                    <input
                                        type="email"
                                        className="form-control bg-transparent text-white border-bottom border-white"
                                        required
                                    />
                                    <label>Email</label>
                                </div>
                                <div className="form-group">
                                    <ion-icon name="lock-closed-outline"></ion-icon>
                                    <input
                                        type="password"
                                        className="form-control bg-transparent text-white border-bottom border-white"
                                        required
                                    />
                                    <label>Password</label>
                                </div>
                                <div className="form-group form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                    />
                                    <label className="form-check-label">
                                        Remember Me{' '}
                                        <a href="#" className="text-white">
                                            Forget Password
                                        </a>
                                    </label>
                                </div>
                                <button
                                    className="btn btn-light w-100"
                                    style={{ color: '#07944a' }}
                                >
                                    Log in
                                </button>
                                <div className="pt-3">
                                    <p>
                                        Dont have an account?
                                        <a
                                            href="register.html"
                                            className="text-white"
                                        >
                                            Register
                                        </a>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
