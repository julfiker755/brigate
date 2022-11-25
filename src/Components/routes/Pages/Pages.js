import React from 'react';
import About from '../../About/About';
import Banner from '../../Banner/Banner';
import Discover from '../../Discover/Discover';
import Newsletter from '../../Newsletter/Newsletter';
import Service from '../../Service/Service';
import Shop from '../../Shop/Shop';
import Testimonial from '../../Testimonial/Testimonial';

const Pages = () => {
    return (
        <div>
            <Banner />
            <Service />
            <About />
            <Shop />
            <Discover />
            <Testimonial />
            <Newsletter />
        </div>
    );
};

export default Pages;