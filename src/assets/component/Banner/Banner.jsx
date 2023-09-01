// This is the banner/Hero part of this page.
// There are left side and right side.
// left side =====>Brand name only
// right side ========>Some text and button

import { Container } from "react-bootstrap";
import './Banner.css';


const Banner = () => {
    return (
        <Container fluid className="banner m-0 p-0 d-flex justify-content-start align-items-center">
            {/* left side of the banner */}
            <section className="left-side-banner">
                <img src="https://i.ibb.co/NK2T8tP/logo-removebg-preview.png" alt="" />

            </section>




            {/* right side of the banner */}
            <section className="right-side-banner d-flex flex-column justify-content-start align-items-start ">
                <p className="text-brown">Bar Soaps</p>
                <h1 className="text-brown">A body care classic, reimagined </h1>

                <article className="text-brown">
                    Breathing new life into the humble bar soap are Nurture, Polish and Refresh—three additions to the range, each imparting a unique constellation of benefits.
                </article>


                <button>Discover Bar Soaps </button>

            </section>

        </Container>
    );
};

export default Banner;