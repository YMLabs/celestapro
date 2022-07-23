import React from "react";
import TestimonialCard from "./TestimonialCard";
import Marquee from "react-fast-marquee";

function Testimonials() {
  return (
    <section className="testimonials flex mx-12">
      <Marquee duration={10000} background="#fafafa" height="250px">
        <TestimonialCard
          profilePicLocation="./assets/images/profile-1.jpg"
          customerName="Kim"
          datePosted="2 months ago"
          review="Awesome collection, I like..and mostely sales person are very friendly.and guideing me, which one is best for me thnk u"
        />
        <TestimonialCard
          profilePicLocation="./assets/images/profile-2.jpg"
          customerName="Lee"
          datePosted="3 weeks ago"
          review="They have the best customer service that you can get."
        />
        <TestimonialCard
          profilePicLocation="./assets/images/profile-3.jpg"
          customerName="Chung"
          datePosted="2 weeks ago"
          review="The service was very good at the store. Even I liked the way of taking care of the feedback of a customer after a small purchase.
"
        />
      </Marquee>
    </section>
  );
}

export default Testimonials;
