import { Container , Navbar , Offcanvas } from "react-bootstrap";
import { motion } from "framer-motion";

import style from 'styles/Navbar.module.css';
import NavLink from './NavLink';
import { useEffect, useState } from "react";

export default function NavigationBar() {
    const Year = new Date().getFullYear();
    const [sticky, setSticky] = useState<Boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 100) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <Navbar 
            key = "md" 
            expand="md"
            fixed="top"
            className = {`py-3 ${sticky? style.dark__nav : "bg-transparent"}`}
        >
            <Container>
                <Navbar.Brand href="/">
                    <h4 className = {`text-white fw-900 my-auto`}>
                        <span className='text-white bg-primary rounded px-2 me-1'>SI</span>POMAS.
                    </h4>
                </Navbar.Brand>
                
                <motion.div
                    whileHover={{ scale: 1 }}
                    whileTap={{ scale: 0.7 }}
                    style={{ border: 'none', backgroundColor: 'transparent' }}
                >
                    <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" 
                        style = {{
                            border : 'none' ,
                            background : 'none' ,
                            outline : 'none' ,
                            boxShadow : 'none' ,
                            color : '#000' ,
                        }}
                    />
                </motion.div>

                <Navbar.Offcanvas 
                    id = 'offcanvasNavbar-expand-lg' 
                    aria-labelledby = 'offcanvasNavbarLabel-expand-lg' 
                    placement = "end"
                    className = {style.mobile_navbar}
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id = 'offcanvasNavbarLabel-expand-lg'>
                            <h4 className = 'fw-900'>
                                <span className='text-white bg-primary'>SI</span>POMAS.
                            </h4>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    
                    <Offcanvas.Body>
                        <NavLink props = { sticky ? style.active_scroll : style.active }   />

                        <div className = "d-sm-none d-block text-center fixed-bottom p-3">
                            <small className = "text-muted">
                                &copy; { Year } Sipomas.
                            </small>
                        </div>
                    </Offcanvas.Body>

                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}