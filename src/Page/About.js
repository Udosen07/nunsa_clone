import React from 'react'
import MainNav from "../components/MainNav";
import { Link } from "react-router-dom";
import classes from "./About.module.css";
import Footer from "../components/Footer";
import BgSection from "../components/BgSection";
const About = () => {
  return (
    <div>
        <MainNav />
        <BgSection text='ABOUT NUNSA UNICAL'/>
      
      <div className='container'>
      <div className={classes.divs}>
      <h2>ABOUT US</h2>
      <div className={classes.line}></div>
      <p>
      The Nigerian Universities Nursing Students' Association (NUNSA), University of Calabar (UNICAL) Chapter, is a dynamic and student-run academic organization dedicated to promoting academic excellence and advancing the nursing profession. Proudly affiliated with NUNSA NATIONAL, the UNICAL Chapter collaborates with nursing students' associations from various universities across Nigeria to collectively uplift the standards of nursing education and practice.
      <br/>
      <br/>
      NUNSA UNICAL strives to create a nurturing environment for nursing students, fostering their growth and development through a range of engaging activities and initiatives. From insightful workshops and seminars to impactful community outreach programs, the organization is committed to equipping its members with the knowledge and skills necessary to excel in their studies and future careers as nurses.
      <br/>
      <br/>
      With a strong sense of unity and camaraderie among its members, NUNSA UNICAL provides an invaluable platform for networking, knowledge-sharing, and mutual support. By actively participating in the organization's activities, nursing students can expand their horizons and build meaningful connections within the nursing community.
      <br/>
      <br/>
      Whether you're already a proud member of NUNSA UNICAL or considering joining this exceptional organization, your involvement promises to enrich your academic journey and contribute to the advancement of the nursing profession in Nigeria. Together, let's strive for excellence and make a positive impact on the future of nursing.

      </p>
      </div>

      <div className={classes.divs}>
      <h2>ABOUT NUNSA</h2>
      <div className={classes.line}></div>
      <p>
      The purpose of creating NUNSA was to integrate Nursing students across Universities in Nigeria and to allow its members to take their vision and making them a reality. NUNSA allows its members to create an impact at the local, National and International level on many global health topics through carrying out activities.
      <br/>
      <br/>
      The Nigerian Universities Nursing Students’ Association (NUNSA) is the only official pre-professional body that caters for the welfare, academic progress of all Nigerian Universities students studying to be future Nurses across the nation and in Diaspora. Our main aim is to motivate and inspire the pristine learning and practice of Nursing in tandem with global standards. To attain this, we function under the mentorship of the Nursing and Midwifery Council of Nigeria (NMCN), motherly care of National Association of Nigeria Nurses and Midwives (NANNM), the tutelage of International Council of Nurses (ICN), and in affiliation to the West Africa Nursing Students Association (WANSA). 3110339891
      </p>
      <a href='https://nunsa.org.ng/history/' className={classes.read}>
                READ MORE <i className={`${classes.icon} fa-solid  fa-angles-right`}></i>{" "}
              </a>
      </div>

      <div className={`${classes.divs} ${classes.grid}`}>
        <div>
      <h2>OUR EXECUTIVES</h2>
      <div className={classes.line}></div>
      <p>
      The Executive Council assumes a pivotal and multifaceted role in diligently supervising and orchestrating the intricate web of day-to-day activities within the association. Their purview extends across a diverse spectrum of responsibilities that...
      </p>
      <button type="button" className={` ${classes.blogBtn}`}>
            <Link className="bgBtn" to="/Executives">
              Learn More
            </Link>
          </button>
        </div>

        <div>
            <img className={classes.gridImg} alt='nunsa-president' src='https://nunsaunical.com.ng/static/media/one.4d5be3c99fd5bc95b474.jpg'/>
        </div>
      </div>



      </div>

      <Footer/>
    </div>
  )
}

export default About;
