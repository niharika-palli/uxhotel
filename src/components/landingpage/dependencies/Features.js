import React from 'react'

export const Features =(props) => {
  return (
    <div>
      {/* ======= Features Section ======= */}
      <section id="features" className="features">
        <div className="container">
          <ul className="nav nav-tabs row d-flex">
            <li className="nav-item col-3" data-aos="zoom-in">
              <a className="nav-link active show" data-toggle="tab" href="#tab-1">
                <i className="ri-gps-line" />
                <h4 className="d-none d-lg-block">{props.content.word7}</h4>
              </a>
            </li>
            <li className="nav-item col-3" data-aos="zoom-in" data-aos-delay={100}>
              <a className="nav-link" data-toggle="tab" href="#tab-2">
                <i className="ri-body-scan-line" />
                <h4 className="d-none d-lg-block">{props.content.word8}</h4>
              </a>
            </li>
            <li className="nav-item col-3" data-aos="zoom-in" data-aos-delay={200}>
              <a className="nav-link" data-toggle="tab" href="#tab-3">
                <i className="ri-sun-line" />
                <h4 className="d-none d-lg-block">{props.content.word9}</h4>
              </a>
            </li>
            <li className="nav-item col-3" data-aos="zoom-in" data-aos-delay={300}>
              <a className="nav-link" data-toggle="tab" href="#tab-4">
                <i className="ri-store-line" />
                <h4 className="d-none d-lg-block">{props.content.word6}</h4>
              </a>
            </li>
          </ul>
          <div className="tab-content" data-aos="fade-up">
            <div className="tab-pane active show" id="tab-1">
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                  <h3>{props.content.word1}</h3>
                  <p className="font-italic">
                    {props.content.word2}
            </p>
                  <ul>
                    <li><i className="ri-check-double-line" /> {props.content.word10}</li>
                    <li><i className="ri-check-double-line" /> {props.content.word11}</li>
                    <li><i className="ri-check-double-line" /> {props.content.word4}</li>
                  </ul>
                  <p>
                    {props.content.word3}
            </p>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center">
                  <img src="assets/img/features-1.png" alt className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="tab-pane" id="tab-2">
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                  <h3>{props.content.word12}</h3>
                  <p>
                    {props.content.word5}
            </p>
                  <p className="font-italic">
                    {props.content.word13}
            </p>
                  <ul>
                    <li><i className="ri-check-double-line" /> {props.content.word14}</li>
                    <li><i className="ri-check-double-line" /> {props.content.word15}</li>
                    <li><i className="ri-check-double-line" /> {props.content.word16}</li>
                    <li><i className="ri-check-double-line" /> {props.content.word17}</li>
                  </ul>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center">
                  <img src="assets/img/features-2.png" alt className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="tab-pane" id="tab-3">
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                  <h3>{props.content.word18}</h3>
                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum
            </p>
                  <ul>
                    <li><i className="ri-check-double-line" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    <li><i className="ri-check-double-line" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                    <li><i className="ri-check-double-line" /> Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.</li>
                  </ul>
                  <p className="font-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
            </p>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center">
                  <img src="assets/img/features-3.png" alt className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="tab-pane" id="tab-4">
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                  <h3>Omnis fugiat ea explicabo sunt dolorum asperiores sequi inventore rerum</h3>
                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum
            </p>
                  <p className="font-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
            </p>
                  <ul>
                    <li><i className="ri-check-double-line" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    <li><i className="ri-check-double-line" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                    <li><i className="ri-check-double-line" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                  </ul>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center">
                  <img src="assets/img/features-4.png" alt className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{/* End Features Section */}

    </div>
  )
}


