import { useRouter } from 'next/router';
import { Nav } from 'react-bootstrap';

import { motion } from 'framer-motion';

import style from 'styles/Navbar.module.css';

export default function NavLink({ props } : any) {
    const router = useRouter();

    const Path = {
        home : "/",
        clubs : "/clubs/1",
        divisions : "/Divisions",
        faq : "/Faq"
    }

    const pathName = {
        home : "Home",
        divisions : "Divisions",
        clubs : "SIC Clubs",
        faq : "FAQ"
    }

    return (
        <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link
                href = "/"
                className = {`pe-4 ps-3 ${props} text-white`}
                id = 'nav-link'
            >
                Home
            </Nav.Link>
            <Nav.Link
                href = "/auth"
                className = {`pe-4 ps-3 text-white`}
                id = 'nav-link'
            >
                Sipomas
            </Nav.Link>
            <Nav.Link
                href = "auth/login"
                className = {`btn ms-lg-3 px-4 text-white`}
                id = 'nav-link'
            >
                Login
            </Nav.Link>
            
            <Nav.Link
                href = "auth/register"
                className = {`text-center btn btn-outline-primary ms-lg-3 px-4 text-white`}
                id = 'nav-link'
            >
                Register
            </Nav.Link>
        </Nav>
    )
}