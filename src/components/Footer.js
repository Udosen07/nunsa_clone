import classes from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={`container-fluid ${classes.bg}`}>
    <div className="container">
      <div className={classes.header}>
      <img src="https://nunsaunical.com.ng/static/media/NunsalogoBg.1cc5a13a00b38d885974.png"
              alt="nunsalogo" className={classes.navLogo}/>
        <h4 className={classes.footerTitle}>Nigerian Universities Nursing Student's Association (NUNSA), University Of Calabar (UNICAL) Chapter</h4>
        <div className={classes.line}></div>
      </div>
    <div className={classes.footerSection}>
    <div className={classes.gridContainer}>
        <div>
            <h3 className={classes.gridTitle}>Contact Us</h3>
            <div className={classes.gridline}></div>
            <p className={classes.gridPara}>Contact us by giving us a call or using any of the social media handles below or send us a mail at <i class="fa-regular fa-envelope"></i></p>
        <div className={classes.icons}>
            <i class="fa-solid fa-phone"></i>
            <i class="fa-brands fa-facebook icn"></i>
            <i class="fa-brands fa-instagram icn"></i>
            <i class="fa-brands fa-whatsapp"></i>
            <i class="fa-brands fa-twitter icn"></i>
        </div>
        </div>

        <div>
            <h3 className={classes.gridTitle}>About Us</h3>
            <div className={classes.gridline}></div>
            <p className={classes.gridPara}>The Nigerian Universities Nursing Students' Association (NUNSA), University of Calabar (UNICAL) Chapter, is a dynamic and student-run academic organization dedicated to promoting academic excellence and advancing the nursing profession. Proudly affiliated with NUNSA NATIONAL . . .</p>
        </div>

    </div>
        <hr/>

    <p className={classes.credits}>Designed by klef</p>
    <p className={classes.copy}> &copy; Copyright - <span className={classes.copySpan}>NUNSA UNICAL</span>. All rights reserved.</p>
    </div>
    </div>
    </div>
  )
}

export default Footer
