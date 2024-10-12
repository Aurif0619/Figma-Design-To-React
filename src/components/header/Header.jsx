import React from 'react'
import LOGO from "../../assets/logo.png"

const Header = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary mx-5">
                <div class="container-fluid">
                    <img className='logo' src={LOGO} alt="logo" />
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                            <a className="nav-link active text-decoration-underline link-underline-warning fw-bold" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link fw-bold" href="#">Services</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link active fw-bold" aria-current="page" href="#">Contact Us</a>
                            </li>
                        </ul>
                        <li class="list-unstyled me-3">
                                <a class="nav-link active fw-bold" aria-current="page" href="#">Login</a>
                            </li>
                        <button class="btn btn-warning rounded-5 me-5 text-white" type="submit">Book Scooter</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header