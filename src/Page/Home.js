import MainNav from "../components/MainNav";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import classes from "./Home.module.css";
import BgSection from "../components/BgSection";
function Home() {
  return (
    <>
       <MainNav />
       <BgSection text='NUNSA UNIVERSITY OF CALABAR CHAPTER' button="Sign up"
          />

      <div className={classes.par}>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAE00lEQVR42uVaWWwcRRAt7ksgbkEAcXinx4shgBC3QIEvEHwACiBAXAIigcgHIgox3p0pQBxCIH5A/HH88ANEAecHEIhbgEIMChFIdrZ7dhMTiLmcQ7k3/TLd0nosrzNHjxPlSSWPx7OvtrqquqprTFPBV8G1QvGoUGFLqOAGSglPBTcKxav159f0Sp5DZaIyPP8wEfG9Wvmgr8KN+mcbou81KSWwAPbzhmsQ3NDh1oio3icUN6DYSjGGJIUblYjPJVcQkn80yn7zFC/Qcpe+ljDCl3w9pQTC0RgjPRncqX9/AtzxwoQ/kCvYUOpr8fHkCL2r+0+woebOI4p/hZJqk89ztlgNng0dngpXuDRkMZT4Ec8lR9Dct8ce4fdd5siL8WpxzZmOiAOTh8+RKyAh7Wq59rqQwR3kcLXOMdvjWneGhH9AR7UxcCYBDhX9GXuldjYVjOqqmgdu6CDHgFeWGNffV/z2HjxoPL6YXMOLgvlG2buFc6vwPXD7MniEXMNv1HxjyBi1bzuICgK4NO/f4O5pcYVKACp8BIUVyZcXVtEVX2kWSFFZ0ApfN0pfLi5kw1cN52tUFrwGX2N2lzXU5gMpJ8CBc0ncNdSvotLQpgNseMGo/KHK19mjALipTGjFr5gq/2ZuLhm+Y7heorKBDlioYKdQvLlP8imZvdHkWdqILeDyVK1KMwGheKk5OzybvcCGL4DDk+GHlAKukn7d7LULjkrtjd8XHm1rh2jWr6YZBLzyvWntn8nQ7jxvcuM7mmnAKyZXNgnJvSkHGZvx2Tze6BnhkxHaQoVDmm+DkeW4VxnuPynTrqMJlp3eevwImgazRvlIKDNDhrdynCbnap5x8Ewh/3uKb00x6+JjNOGIqQVLus2lzpJ8uC/5I6NoGHmS2Qh4EzzdZQeMSbkd85gd5ejrb7RstYTm+uuOkdI6zK6yhlPSE92F/0sVZp7kCzGjmpYYzzTqF1BGIP4TfFv8iBeiJu2WKHgS9yY8I8OnKQ3OjxYdpz+4rYsR2/BMzp3y505OfPHJecuLEl5ZTmkxjVdWFdAere/krKqnTqUEcC9hyHjmij+FDFJOJPMD4TTpmdbAackdLEPbEdwzlSG+Cu4uwCNDnZwIo8mhFfRP1Bv+RGmBOmFbj4nCY6bO5AK6iGSywxh4Bp6AEZOTnZmyAFOWpCHwFBUAbKUIlTTbrxjlE/OMjuaZk19LG/EwFQgUORS7PSmIQvLNtDcDxmC1u3pCBbdQEUC+4H3KxcvmHUIOgJBBsUMyx9syj+Ma9/C3IoduK7A6FVW/gvZl2BGrJ4MHyCFwsINQ4Uju5xG/TQ6BwYXdZt0Y0qxfYhLvLzd5YsetrHbrafClzmZgePdojHnI5QsoLb+QS8AA0yZEWTvfLge1YzHxBD8MIpeY0+aDtaJv45Y7/Bi/UwHoW8mHas5PzWHuy1KmlHjDpRX+a0Ls88RQL9spUfIndgaNHovKgifrl6FxtMmPHS3tPx+g6RSKH8W7RsMzqmvURVQ28JJTqPAz20aY8c1STwUDGGbjHI9DEYYU6Ap6RgbOwBdFHcK0BgvQ0dF+hWdpJuFFfBNCzDZ+KWUIjSAhJ/YWYEU9yfd7UfiGr/iL+JjM/2jZjvN9fB2u1PKBvn4MQ0Da37ELniXfmSwiymEAAAAASUVORK5CYII="
          alt="img"
          className={classes.pImg}
        ></img>
        <h1>
          WELCOME TO <span className={classes.parSpan}>NUNSA UNICAL</span>{" "}
          OFFICIAL WEBSITE
        </h1>
      </div>

      <div className={`container ${classes.gridContainer}`}>
        <div className={`${classes.gridBox} ${classes.gridText}`}>
          <div className={classes.blogHead}>
            <h2>ABOUT US</h2>
            <div className={classes.line}></div>
          </div>
          <p>
            The Nigerian Universities Nursing Students' Association (NUNSA),
            University of Calabar (UNICAL) Chapter, is a dynamic and student-run
            academic organization dedicated to promoting academic excellence and
            advancing the nursing profession. Proudly affiliated with NUNSA
            NATIONAL . . .
          </p>
          <button type="button" className={` ${classes.blogBtn}`}>
            <Link className="bgBtn" to="/About">
              Learn More
            </Link>
          </button>
        </div>

        <div className={classes.gridBox}>
          <img
            className={classes.gridImg}
            src="https://nigerianfinder.com/wp-content/uploads/2021/04/Best-Universities-for-Nursing-in-Nigeria.jpg"
            alt="img"
          ></img>
        </div>
      </div>

      <div className="container">
        <div className={classes.blogHead2}>
          <h2>BLOG POSTS</h2>
          <div className={classes.blogLine}></div>
        </div>
        <button type="button" className={` ${classes.blogBtn2}`}>
          <Link className="bgBtn" to="/Blog">
            View all
          </Link>
        </button>
        <div className={classes.gridContainer}>
          <div className={classes.cardWidth}>
            <div className={classes.cardImgHeight}> 
              <img
                src="https://nunsaunical.com.ng/static/media/Nunsalogo.89125b76dc215012f4eb.jpg"
                
                className={classes.cardImg}
                alt="..."
              />
              </div>
              <div className={classes.cardBody}>
              <h5>Revolutionizing NUNSA UNICAL with a Custom Web App: Embracing the Future</h5>

              <p>
                The President of NUNSA UNICAL and his Executives, recognizing
                the importance of staying technologically up-to-date, took a
                proactive step by commissioning a developer to create a custom
                web application for the association. Understanding that the
                digital ...
              </p>

              <Link className={classes.blogRead} to="/Blog">
                Read More <i class="fa-solid  fa-angles-right"></i>{" "}
              </Link>
              <hr />

              <p className={classes.blogDate}>August 10, 2023</p>
              </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className={classes.blogHead2}>
          <h2>OUR EXCECUTIVES</h2>
          <div className={classes.blogLine2}></div>
        </div>
        <button type="button" className={` ${classes.blogBtn2}`}>
          <Link className="bgBtn" to="/Blog">
            View all
          </Link>
        </button>

        <div className={classes.excecutivesGrid}>
          <div>
            <img
              alt="nunsa-president"
              className={classes.exeImg}
              src="https://nunsaunical.com.ng/static/media/one.4d5be3c99fd5bc95b474.jpg"
            />
            <div className={classes.pText}>
              <h3 className={classes.gridTitle}>PRESIDENT</h3>
              <div className={classes.blogLine2}></div>
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
              <div className={classes.blogLine2}></div>
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
              <div className={classes.blogLine2}></div>
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
              <div className={classes.blogLine2}></div>
              <p className={classes.gridName}>Sen. Etukwu Theophilus</p>
              <button className={classes.phoneButton}>
                <a href="tel:+2348105185381">
                  <i class="fa-solid fa-phone"></i> Place a Call
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className={classes.blogHead2}>
          <h2>OUR PATRONS</h2>
          <div className={classes.blogLine3}></div>
        </div>
        <button type="button" className={` ${classes.blogBtn2}`}>
          <Link className="bgBtn" to="/Blog">
            View all
          </Link>
        </button>

        <div className={classes.patronsGrid}>
          <div>
            <img
              alt="nunsa-president"
              className={classes.exeImg}
              src="https://nunsaunical.com.ng/static/media/first.ab3d5e57bd7f595d2fd8.jpg"
            />
            <h3 className={classes.gridTitle}>HOD. NURSING UNICAL</h3>
            <div className={classes.blogLine3}></div>
            <p className={classes.gridName}>Prof. Regina Ella</p>
          </div>

          <div>
            <img
              alt="nunsa-president"
              className={classes.exeImg}
              src="https://nunsaunical.com.ng/static/media/second.4848d998bd144911020c.jpg"
            />
            <h3 className={classes.gridTitle}>CHAIRMAN STUD. AFFAIRS</h3>
            <div className={classes.blogLine3}></div>
            <p className={classes.gridName}>Dr. Teresa Achi OSaji</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className={classes.blogHead2}>
          <h2>Frequently Asked Questions(FAQs)</h2>
          <div className={classes.blogLine3}></div>
        </div>
        <button type="button" className={` ${classes.blogBtn2}`}>
          <Link className="bgBtn" to="/Blog">
            View all
          </Link>
        </button>
        <p className={classes.underline}>
          Who is eligible to register on NUNSA UNICAL's platform?
        </p>
        <p className={classes.underline}>
          Why was NUNSA UNICAL platform created?
        </p>
      </div>

      <Footer />
    </>
  );
}

export default Home;
