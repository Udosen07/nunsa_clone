import React from 'react'
import MainNav from "../components/MainNav";
import Footer from "../components/Footer";
import BgSection from "../components/BgSection";
import classes from "./Executives.module.css"

const Executives = () => {
  return (
    <div>
      <MainNav />
      <BgSection text="NUNSA UNICAL EXECUTIVES"/>
      
      <div className='container'>
      <div className={classes.divs}>
      <h2>OUR ROLE</h2>
      <div className={classes.line}></div>
      <p>
      The Executive Council assumes a pivotal and multifaceted role in diligently supervising and orchestrating the intricate web of day-to-day activities within the association. Their purview extends across a diverse spectrum of responsibilities that collectively form the operational backbone of the organization. These responsibilities encompass an array of essential tasks, including but not limited to, orchestrating strategic and impactful publicity campaigns, cultivating and nurturing both internal camaraderie and external liaisons, adeptly managing and streamlining administrative workflows, astutely handling financial matters to ensure fiscal stability, pioneering and executing resourceful fundraising endeavors, fostering and stewarding collaborative partnerships to drive collective goals, and meticulously managing a plethora of communications.
      </p>
      <br/>
      <p>
      This esteemed council is composed of a roster of eminent individuals, each entrusted with a specialized portfolio that synergistically contributes to the association's holistic success. At its helm stands the president, a visionary leader who steers the organization towards its overarching mission. Working in tandem with the president is the vice president, a vital collaborator who lends strategic insight and support to the council's collective vision. The general secretary, a linchpin of efficient operations, expertly coordinates the diverse elements of the association's functioning. Assiduously managing financial matters is the financial secretary, ensuring that fiscal prudence underpins every initiative. The treasurer, a steward of financial health, optimally allocates resources to sustain and elevate the association's endeavors.
      </p>
      <br/>
      <p>
      Simultaneously, the council is fortified by the expertise of a diverse array of directors, each emblematic of a specialized facet of the association's identity. The director of welfare is entrusted with nurturing the well-being and morale of the association's members. The director of socials orchestrates engaging events and activities that foster a sense of community and belonging. Meanwhile, the director of sports galvanizes enthusiasts and athletes alike, promoting physical well-being and healthy competition. The director of health advocates for holistic well-being, ensuring members' physical and mental wellness remains a top priority. Lastly, the director of information adeptly manages communication channels, ensuring that the association's narrative is effectively conveyed to its members and the broader community.
      </p>
      <br />
      <p>
      In summation, the Executive Council's extensive array of responsibilities, represented by a cadre of exceptional individuals, forms the bedrock upon which the association's vitality and success thrive. Their collaborative synergy and unwavering dedication underscore the association's ability to adapt, grow, and flourish in its pursuit of excellence.
      </p>
      </div>
      <div className={classes.divs}>
      <h2>OUR TEAM</h2>
      <div className={classes.line}></div>
      
        <div className={classes.excecutivesGrid}>
          <div>
            <img
              alt="nunsa-president"
              className={classes.exeImg}
              src="https://nunsaunical.com.ng/static/media/one.4d5be3c99fd5bc95b474.jpg"
            />
            <div className={classes.pText}>
              <h3 className={classes.gridTitle}>PRESIDENT</h3>
              <div className={classes.line2}></div>
              <p className={classes.gridName}>Sen. Ezra Madu (Bestie)</p>
              <button className={classes.phoneButton}>
                <a href="tel:+2348105185381">
                  <i class="fa-solid fa-phone"></i> Place a Call
                </a>
              </button>
            </div>
          </div>
          <div>
            <img
              alt="nunsa-v.president"
              className={classes.exeImg}
              src="https://nunsaunical.com.ng/static/media/two.ff33ea4e13210ccb3176.jpg"
            />
            <div className={classes.pText}>
              <h3 className={classes.gridTitle}>V. PRESIDENT</h3>
              <div className={classes.line2}></div>
              <p className={classes.gridName}>Nr. Okem Irene Baba</p>
              <button className={classes.phoneButton}>
                <a href="tel:+2348105185381">
                  <i class="fa-solid fa-phone"></i> Place a Call
                </a>
              </button>
            </div>
          </div>
          <div>
            <img
              alt="nunsa-president"
              className={classes.exeImg}
              src="https://nunsaunical.com.ng/static/media/three.e8502b6ff479f3464b0b.jpg"
            />
            <div className={classes.pText}>
              <h3 className={classes.gridTitle}>GEN. SECRETARY</h3>
              <div className={classes.line2}></div>
              <p className={classes.gridName}>Sen. Etukwu Theophilus</p>
              <button className={classes.phoneButton}>
                <a href="tel:+2348105185381">
                  <i class="fa-solid fa-phone"></i> Place a Call
                </a>
              </button>
            </div>
          </div>
          <div>
            <img
              alt="nunsa-president"
              className={classes.exeImg}
              src="https://nunsaunical.com.ng/static/media/four.c6a94dab85b4d9ec6538.jpg"
            />
            <div className={classes.pText}>
              <h3 className={classes.gridTitle}>FIN. SECRETARY</h3>
              <div className={classes.line2}></div>
              <p className={classes.gridName}>Sen. Etukwu Theophilus</p>
              <button className={classes.phoneButton}>
                <a href="tel:+2348105185381">
                  <i class="fa-solid fa-phone"></i> Place a Call
                </a>
              </button>
            </div>
          </div>

          <div>
            <img
              alt="nunsa-president"
              className={classes.exeImg}
              src="https://nunsaunical.com.ng/static/media/five.59b2af9b6d8b887619ed.jpg"
            />
            <div className={classes.pText}>
              <h3 className={classes.gridTitle}>TREASURER</h3>
              <div className={classes.line2}></div>
              <p className={classes.gridName}>Nr. Ejor Ann Ejik</p>
              <button className={classes.phoneButton}>
                <a href="tel:+2348105185381">
                  <i class="fa-solid fa-phone"></i> Place a Call
                </a>
              </button>
            </div>
          </div>

          <div>
            <img
              alt="nunsa-president"
              className={classes.exeImg}
              src="https://nunsaunical.com.ng/static/media/six.5435a3295c6b55444280.jpg"
            />
            <div className={classes.pText}>
              <h3 className={classes.gridTitle}>DIR. OF WELFARE</h3>
              <div className={classes.line2}></div>
              <p className={classes.gridName}>Hon. Onuoha Amarachi</p>
              <button className={classes.phoneButton}>
                <a href="tel:+2348105185381">
                  <i class="fa-solid fa-phone"></i> Place a Call
                </a>
              </button>
            </div>
          </div>

          <div>
            <img
              alt="nunsa-president"
              className={classes.exeImg}
              src="https://nunsaunical.com.ng/static/media/seven.0e8dc5df5a57d723296b.jpg"
            />
            <div className={classes.pText}>
              <h3 className={classes.gridTitle}>DIR. SOCIALS</h3>
              <div className={classes.line2}></div>
              <p className={classes.gridName}>Nr. Emmanuel Akachukwu</p>
              <button className={classes.phoneButton}>
                <a href="tel:+2348105185381">
                  <i class="fa-solid fa-phone"></i> Place a Call
                </a>
              </button>
            </div>
          </div>
          
          <div>
            <img
              alt="nunsa-president"
              className={classes.exeImg}
              src="https://nunsaunical.com.ng/static/media/eight.a95533a796d8a99c703d.jpg"
            />
            <div className={classes.pText}>
              <h3 className={classes.gridTitle}>DIR. OF SPORTS</h3>
              <div className={classes.line2}></div>
              <p className={classes.gridName}>Hon. Songu Clifford</p>
              <button className={classes.phoneButton}>
                <a href="tel:+2348105185381">
                  <i class="fa-solid fa-phone"></i> Place a Call
                </a>
              </button>
            </div>
          </div>

          <div>
            <img
              alt="nunsa-president"
              className={classes.exeImg}
              src="https://nunsaunical.com.ng/static/media/nine.c1c1fbae8a01d952a0e5.jpg"
            />
            <div className={classes.pText}>
              <h3 className={classes.gridTitle}>DIR. HEALTH</h3>
              <div className={classes.line2}></div>
              <p className={classes.gridName}>Nr. Ndukwe Esther</p>
              <button className={classes.phoneButton}>
                <a href="tel:+2348105185381">
                  <i class="fa-solid fa-phone"></i> Place a Call
                </a>
              </button>
            </div>
          </div>

          <div>
            <img
              alt="nunsa-president"
              className={classes.exeImg}
              src="https://nunsaunical.com.ng/static/media/ten.22a1e9c69eab7ed1102a.jpg"
            />
            <div className={classes.pText}>

              <h3 className={classes.gridTitle}>DIR. OF INFORMATION</h3>
              <div className={classes.line2}></div>
              <p className={classes.gridName}>Comr. Eze Timothy Ekene</p>
              <button className={classes.phoneButton}>
                <a href="tel:+2348105185381">
                  <i class="fa-solid fa-phone"></i> Place a Call
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.line3}></div>
      
      
        <div className={classes.divs}>
          <h2>OUR PATRONS</h2>
          <div className={classes.line}></div>
        
        <p>
        The esteemed NUNSA (Nigerian Universities Nursing Students' Association , University of Calabar Chapter) Patrons play a pivotal role in shaping the academic and social landscape of the students. As visionary mentors and guardians of student interests, the NUNSA Unical Patrons provide invaluable guidance, wisdom, and support to the student body. With their extensive expertise and experience, they serve as beacons of inspiration, instilling a sense of purpose, resilience, and community engagement among the students. These patrons not only contribute to the academic development of the institution but also foster an environment of holistic growth by nurturing leadership skills, promoting cultural diversity, and advocating for the welfare and well-being of every student. Through their dedicated involvement in various academic, cultural, and social initiatives, the NUNSA Unical Patrons exemplify the embodiment of educational excellence, laying the foundation for a brighter future for both the university and its aspiring students.
        </p>
        <div className={classes.patronsGrid}>
          <div>
            <img
              alt="nunsa-president"
              className={classes.exeImg}
              src="https://nunsaunical.com.ng/static/media/first.ab3d5e57bd7f595d2fd8.jpg"
            />
            <h3 className={classes.gridTitle}>HOD. NURSING UNICAL</h3>
            <div className={classes.line2}></div>
            <p className={classes.gridName}>Prof. Regina Ella</p>
          </div>

          <div>
            <img
              alt="nunsa-president"
              className={classes.exeImg}
              src="https://nunsaunical.com.ng/static/media/second.4848d998bd144911020c.jpg"
            />
            <h3 className={classes.gridTitle}>CHAIRMAN STUD. AFFAIRS</h3>
            <div className={classes.line2}></div>
            <p className={classes.gridName}>Dr. Teresa Achi OSaji</p>
          </div>
        </div>
      </div>
      </div>
      

      <Footer />
    </div>
  )
}

export default Executives;
