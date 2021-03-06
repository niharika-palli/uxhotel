import React from 'react';

export const Hero = (props) => {
  return (
    <div>

      {/* ======= Hero Section ======= */}
      <section id="hero" className="d-flex flex-column justify-content-end align-items-center">
        <div id="heroCarousel" className="container carousel carousel-fade" data-ride="carousel">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <div className="carousel-container">
              <h2 className="animate__animated animate__fadeInDown">Welcome to <span>Our World</span></h2>
              <p className="animate__animated fanimate__adeInUp">{props.content.str1}</p>
              <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
            </div>
          </div>
          {/* Slide 2 */}
          <div className="carousel-item">
            <div className="carousel-container">
              <h2 className="animate__animated animate__fadeInDown">{props.content.str3}</h2>
              <p className="animate__animated animate__fadeInUp">{props.content.str2}</p>
              <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
            </div>
          </div>
          {/* Slide 3 */}
          <div className="carousel-item">
            <div className="carousel-container">
              <h2 className="animate__animated animate__fadeInDown">{props.content.str5}</h2>
              <p className="animate__animated animate__fadeInUp">{props.content.str4}</p>
              <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
            </div>
          </div>
          <a className="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon bx bx-chevron-left" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon bx bx-chevron-right" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
        <svg className="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28 " preserveAspectRatio="none">
          <defs>
            <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z">
            </path></defs>
          <g className="wave1">
            <use xlinkHref="#wave-path" x={50} y={3} fill="rgba(255,255,255, .1)">
            </use></g>
          <g className="wave2">
            <use xlinkHref="#wave-path" x={50} y={0} fill="rgba(255,255,255, .2)">
            </use></g>
          <g className="wave3">
            <use xlinkHref="#wave-path" x={50} y={9} fill="#fff">
            </use></g>
        </svg>
      </section>{/* End Hero */}

    </div>
  )
}
