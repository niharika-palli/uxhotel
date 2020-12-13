import React from 'react';

export const Aboutcomp =(props) => {
  return (
    <div>
      {/* ======= About Section ======= */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-title" data-aos="zoom-out">
            <h2>About</h2>
            <p>{props.content.string_3}</p>
          </div>
          <div className="row content" data-aos="fade-up">
            <div className="col-lg-6">
              <p>
               {props.content.string_1}
        </p>
              <ul>
                <li><i className="ri-check-double-line" />{props.content.string_5}</li>
                <li><i className="ri-check-double-line" />{props.content.string_6}</li>
                <li><i className="ri-check-double-line" /> {props.content.string_7}</li>
              </ul>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
              <p>
                {props.content.string_4}
        </p>
              <a href="#" className="btn-learn-more">Learn More</a>
            </div>
          </div>
        </div>
      </section>{/* End About Section */}

    </div>
  )
}
