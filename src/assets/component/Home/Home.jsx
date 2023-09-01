// This is the home page.

import { Container } from 'react-bootstrap';
import './Home.css';
import BeforeNavbar from '../BeforeNavbar/BeforeNavbar';
import CustomNavbar from '../CustomNavbar/CustomNavbar';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <Container fluid className='px-0'>
            {/* This container stays at the top of the page. Before the Navbar. */}
            {/* first one */}
            <BeforeNavbar 
            bgColor='#c2c2af'
            normalText='Trained Aesop consultations are available to provide bespoke skin care advise.'//text without link
            linkedText='Book a video consultation'//text that is linked
            textColor='#4e334b'
            linkedTextColor='#252525'
            linkedTextFontWeight='500'
            ></BeforeNavbar>

            {/* second one */}
            <BeforeNavbar
            bgColor='#252525'
            normalText=''
            linkedText='Click and Collect is now available at Hong Kong stores. Enjoy complimentary shipping on orders over HK$400    +'
            textColor='#c2c2af'
            linkedTextColor='#fffef2'
            linkedTextFontWeight='400'
            ></BeforeNavbar>


            {/* Navbar */}
            <CustomNavbar></CustomNavbar>



            {/* Banner section */}
            <Banner></Banner>
            
        </Container>
    );
};

export default Home;