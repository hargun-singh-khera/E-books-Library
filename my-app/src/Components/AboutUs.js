import React from "react";

const AboutUs = () => {
    return(
        <>
            <section id="about-us">
                <div className="container col-xxl-8 px-4 py-5">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                        <div className="col-10 col-sm-8 col-lg-6">
                            <img src="https://i.ibb.co/B4kd3tc/About-us-page.gif" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                        </div>
                        <div className="col-lg-6">
                            <h1 className="display-5 fw-bold lh-1 mb-3" >About Us</h1>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod odio placeat quasi aliquam provident enim sunt possimus modi id nisi magnam, autem, asperiores laborum iure et temporibus totam dolores minima fugiat consequuntur commodi a blanditiis, beatae aut! Molestias, pariatur exercitationem!</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUs;