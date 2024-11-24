import React, { useState } from 'react';
import TestimonialCard from './TestimonialCard';
import Slider from 'react-slick';
import { Box } from '@mui/material';
import avatar1 from '../assets/icons/avatar/1.png';  
import avatar2 from '../assets/icons/avatar/2.png';  
import avatar3 from '../assets/icons/avatar/3.png';  
import avatar4 from '../assets/icons/avatar/4.png';  

const AutoScrollingTestimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const reviews = [
    {
      name: 'Jane Doe',
      role: 'Full Stack Developer',
      text: 'A great place to learn Python! I have completed the Python Django Full Stack Web Development course here and am fully satisfied with the training. The trainers are very helpful. It’s the best place to develop your career.',
      avatar: avatar1,
    },
    {
      name: 'John Smith',
      role: 'Backend Developer',
      text: 'The training sessions were very interactive and insightful. I learned a lot about web development and APIs. Highly recommend this place!',
      avatar: avatar2,
    },
    {
      name: 'Alice Johnson',
      role: 'Frontend Engineer',
      text: 'Amazing platform to learn and grow! The instructors were very helpful and knowledgeable, and I loved the hands-on projects.',
      avatar: avatar3,
    },
    {
      name: 'Robert Brown',
      role: 'Software Engineer',
      text: 'A fantastic learning experience! The mentors were very supportive, and I gained a lot of practical knowledge in full-stack development.',
      avatar: avatar4,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setActiveSlide(next),
  };

  return (
    <Box sx={{ maxWidth: '100%', margin: 'auto', position: 'relative' }}>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <TestimonialCard
            key={index}
            review={review}
            isActive={activeSlide === index}
            totalSlides={reviews.length}
          />
        ))}
      </Slider>
    </Box>
  );
};

export default AutoScrollingTestimonials;
