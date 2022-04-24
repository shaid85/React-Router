import React from 'react'
import aboutpic from './images/user.jpg'

const About = () => {
  return (
    <>
    <div className="py-5 mt-5 border-bottom">
      <div className="container pt-md-1 pb-md-4">
        <div className="row">
          <div className="col-xl-5 d-lg-flex justify-content-xl-start">
            <div id="carbonads"><span><span className="carbon-wrap">
            <img src={aboutpic} alt="About Pic" />
            </span></span></div>
          </div>      
          <div className="col-xl-7 ">
            <h1 className="bd-title mt-0">About Me</h1>
            <p className="bd-lead">Quickly get a project started with any of our examples ranging from using parts of the framework to custom components and layouts.</p>             
            <div className="d-flex flex-column flex-sm-row mb-sm-0 mb-4">
              <a href="#" className="btn btn-lg btn-primary">Download examples</a>
              <a href="#" className="btn btn-lg btn-info mt-3 mt-sm-0 ms-sm-3">Download source code</a>
            </div>             
          </div>

        </div>
      </div>
    </div> 

    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold">Centered hero</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">Secondary</button>
        </div>
      </div>
    </div>  

    </>
  )
}

export default About