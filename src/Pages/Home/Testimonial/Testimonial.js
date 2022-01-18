import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import 'swiper/modules/effect-fade/effect-fade';
import "swiper/modules/navigation/navigation";
import "swiper/modules/pagination/pagination";
import { Container, Card } from 'react-bootstrap';
import './Testimonial.css';

const Testimonial = () => {
    const [testimonial, setTestimonial] = useState([]);
    useEffect(() => {
        fetch('testimaonial.json')
            .then(res => res.json())
            .then(data => setTestimonial(data))
    }, []);

    return (
        <div className='py-5'>
            <Container>
                <div className='pb-5 text-center'>
                    <h2>Testimonial</h2>
                </div>
                <Swiper
                    breakpoints={{
                        // when window width is >= 640px
                        640: {
                            width: 640,
                            slidesPerView: 2,
                        },
                        // when window width is >= 768px
                        768: {
                            width: 768,
                            slidesPerView: 2,
                        },
                    }}
                    loop={true}
                    speed={1300}
                    spaceBetween={50}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                        testimonial.map(testimonial => <SwiperSlide key={testimonial?._id}>
                            <Card className='text-center py-4'>
                                <div className='pt-4'>
                                    <Card.Img className='testimonial-img' variant="top" src={testimonial?.image} />
                                </div>
                                <Card.Body>
                                    <Card.Title>{testimonial?.name}</Card.Title>
                                    <Card.Text className='pt-3'>
                                        {testimonial?.description}
                                    </Card.Text>
                                </Card.Body>
                                <div className='text-warning'>
                                    <i className="fas fa-star me-1"></i>
                                    <i className="fas fa-star me-1"></i>
                                    <i className="fas fa-star me-1"></i>
                                    <i className="fas fa-star me-1"></i>
                                    <i className="fas fa-star me-1"></i>
                                </div>
                            </Card>
                        </SwiperSlide>)
                    }

                </Swiper>
            </Container>
        </div>
    );
};

export default Testimonial;