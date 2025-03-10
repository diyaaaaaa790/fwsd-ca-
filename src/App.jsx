import React from "react";
import TestimonialCard from "./components/TestimonialCard";

const testimonial = [
  {
    name: "Ram",
    review: "The service was amazing, really worth the money",
  },
  {
    name: "Rishabh",
    review: "The service came on time, will definetely try it later",
  },
];
const App = () => {
  return (
    <div className=" my-42">
      <h1 className="text-3xl font-bold underline py-4 text-center">Our Customers</h1>
      <TestimonialCard key={1} name={testimonial[0].name} review={testimonial[0].review} />
      <TestimonialCard key={2} name={testimonial[1].name} review={testimonial[1].review} />

 
    </div>
  );
};

export default App;