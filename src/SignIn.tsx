import React from 'react';

const Signin: React.FC = () => {
    const handleSignIn = () => {
        console.log('Sign-in button clicked');
    };

    return (
        <div className="background">
            <div className="bg">
                <img src="/bgg.png" alt="Background" /> {/* Ensure the path to the image is correct */}
            </div>
            <div className="content">
                <div className="login-container">
                    <h2>Email</h2>
                    <div className="input-box">
                        <span className="icon">📧</span>
                        <input type="email" placeholder="Enter your email" />
                    </div>

                    <h2>Password</h2>
                    <div className="input-box">
                        <span className="icon">🔒</span>
                        <input type="password" placeholder="Enter your password" />
                    </div>

                    <button className="login-button" onClick={handleSignIn}>
                        Sign in
                    </button>

                    <p className="signup-text">
                        You don’t have an account?{" "}
                        <a href="/signup" className="signup-link">
                            Sign Up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signin;
