import React from 'react'
import './LandingPage.css'
import web from '../images/web.png';
import mobile from '../images/mobile.png'





function LandingPage() {
  return (
    <body>
        <section class="hero_section">
         <div class="text_container">
           <h2><span class="lg-text">Hi,</span> I am John Doe</h2>
           <h1 class="lg-text">FULL STACK DEVELOPER</h1>
         </div>
        </section>
        <section class="black_box">
          <h2>WORK, I CAN DO FOR <span>YOU</span></h2>
        </section>   
        <section className='work'>
          <div className="grid-item">
            <div className="card">
              <div className="image-container">
                <img src={web} alt="image" />
              </div>
              <div className="card-content">
                <h3>Web Development</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
                quibusdam ex quaerat quasi nostrum tempore.
                </p>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div className="card">
              <div className="image-container">
                <img src={mobile} alt="image" />
              </div>
              <div className="card-content">
                <h3>App Development</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
                quibusdam ex quaerat quasi nostrum tempore.
                </p>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div className="card">
              <div className="image-container">
                <img src={web} alt="image" />
              </div>
              <div className="card-content">
                <h3>UI UX design</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
                quibusdam ex quaerat quasi nostrum tempore.
                </p>
              </div>
            </div>
          </div>
        </section> 
        <section className='bottom-section'>
          <div className="contact">
            <h2>Contact me</h2>
            <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi dolor,
            esse quasi doloremque temporibus quis.
            </p>
            <p>dosomecoding@example.test</p>
          </div>
          <div className="about">
            <h2>About Me</h2>
            <p>
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi dolor,
             esse quasi doloremque temporibus quis.
            </p>
            <p>
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi dolor,
             esse quasi doloremque temporibus quis.
            </p>
          </div>
        </section>
        <footer>Project By do some coding</footer>
    </body>
  )
}

export default LandingPage
