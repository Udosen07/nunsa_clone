import Container from "react-bootstrap/Container";
import classes from "./MainNav.module.css";
import OffCanvas from '../components/OffCanvas';
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


function MainNav(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  
  return (
    <div className={classes.navBar}>
    
      <Container>
        <img
          src="https://www.investopedia.com/thmb/3_niAKi-hqxEto4981WaCes0ZYM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/penfed-credit-union_3x1-4f974162685b43b3b4fa8cc5b00ddb30.png"
          className={classes.navImage}
          alt="Pedimage"
        />

        <div className={classes.navRightSection}>
          
         <span><Button className={classes.navBtn}><Link to="/Login" className={classes.navBtnLink}>LOGIN</Link></Button></span> 

          <span className={classes.navIcon}>
            <FontAwesomeIcon
              icon={faBars}
              onClick={handleShow}
              className={classes.bars}
            />
          </span>
        </div>
      </Container>

      {show && <OffCanvas onCancel={handleClose}/>}
    </div>
  );
}

export default MainNav;
