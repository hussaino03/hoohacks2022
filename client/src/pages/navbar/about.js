import React from 'react';
import './about.css';

const About = () => {
  return (
    <div>
    <header className='masthead'>
    <h1 className='masthead-heading'>GrowWithMe</h1>
  </header>
  <section className="introduction-section">
      <h1>Introduction</h1>
      <p>I am a construction business owner, part time marketer, and soon to be web developer.</p>
      <p>I love the internet, technology, and building beautiful things.</p>
  </section>
  <section className="location-section">
      <h1>Where I'm From</h1>
      <p>I'm originally from Toronto, Ontario. </p>
  </section>
  <section className="questions-section">
      <h1>More About Me</h1>
      <h2>What are your favorite hobbies?</h2>
      <p>My favorite hobby is building things on the internet like ecommerce sites and email marketing campaigns.</p>
      <h2>What's your dream job?</h2>
      <p>My dream job is similar to my current job except I would like to be building software instead of buildings.</p>
      <h2>Where do you live?</h2>
      <p>I live on a rural acreage, but I'm close to Ottawa and Montreal.</p>
      <h2>Why do you want to be a web developer?</h2>
      <p>Because programming is awesome and programming for the internet is even more awesome.</p>
  </section>
  
  <footer
          className="d-flex flex-wrap justify-content-between align-items-center p-3 my-4 mx-4 border-top border-bottom"
        >
          <p className="col-md-4 mb-0 text-muted">&copy; 2022 Hoohacks 2022</p>

          

          <ul className="nav col-md-4 justify-content-end" id="fadeshow">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 active">Home</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                Calendar
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">Login</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">Logout</a>
            </li>
          </ul>
        </footer>
  </div>
  );
};
  
export default About;