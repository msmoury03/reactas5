import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
            <div class="container-fluid ">
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                       
                        

                        <h2 class="nav-item mx-5 ">
                            <Link class="nav-link active" aria-current="page" to=''>Home</Link>
                        </h2>

                        <h2 class="nav-item mx-5">
                            <Link class="nav-link" to='student'>Student</Link>
                        </h2>

                        <h2 class="nav-item mx-5">
                            <Link class="nav-link" to='contact'>Contact Us</Link>
                        </h2>

                        




                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Header
