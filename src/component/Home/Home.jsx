// This is the home page.

import { Container } from 'react-bootstrap';
import './Home.css';
import BeforeNavbar from '../BeforeNavbar/BeforeNavbar';
import CustomNavbar from '../CustomNavbar/CustomNavbar';
import Banner from '../Banner/Banner';
import ExpressionOfCare from '../ExpressionOfCare/ExpressionOfCare';
import { useEffect, useState } from 'react';




const Home = () => {
    const [expressionOfCare, setExpressionOfCare] = useState([]);//to store data of expressionOfCare section's data. This section is after the banner

    // fetching the data of expression of care section.
    useEffect(() => {
        fetch('../../../public/expressionOfCare.json')
            .then(res => res.json())
            .then(data => setExpressionOfCare(data))
    }, [])

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



            {/* This component is after the banner section of homepage */}
            <ExpressionOfCare
            info = {expressionOfCare}
            columnNumber = {4}
            left={5.960264900662252}
            widthOfContainerComponent={100}
            widthOfSliderComponent={130}
            ></ExpressionOfCare>








        </Container>
    );
};

export default Home;