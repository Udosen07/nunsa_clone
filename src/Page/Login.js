import classes from "./Login.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login(){
  
    const [type, setType] = useState("password");
    const [icon, setIcon] = useState(<FontAwesomeIcon icon={faEye} />);

    const handleToggle=()=> {
        if(type === "password"){
            setType("text");
            setIcon(<FontAwesomeIcon icon={faEye} />);
        }else{
            setType("password");
            setIcon(<FontAwesomeIcon icon={faEyeSlash} /> )
        }
            
        
    }
    


    return(
        <div className={classes.loginForm}>
       <Link to="/" className={classes.hlink}><h2 className={classes.home}><FontAwesomeIcon icon={faChevronLeft} /> Home</h2></Link>
       
        <div className={classes.card}>
        <img src="https://nunsaunical.com.ng/static/media/NunsalogoBg.1cc5a13a00b38d885974.png" alt="nunsa-logo"className={classes.logo} ></img>
        <form className={`${classes.form}`} >
            <div className={classes.control}>
                <label htmlFor="title">Email Address</label>
                <input type="text" className={classes.emailInput}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="password">Password</label>
                <input type={type} className={classes.passwordInput}/>
                <span onClick={handleToggle} className={classes.toggleIcon}>{icon}</span>
                <h5>min. 8 characters</h5>
            </div>
            <div className={classes.actions}>
                    <button>Login</button>
                </div>
            </form>
            <div className={classes.footer}>
            <p className={classes.forgotten}>Forgotten password?</p>
            <hr/>
            <h2 className={classes.or}>or</h2>
            <div className={classes.actions2}>
                    <button>Signup</button>
                </div>
            </div>
            </div>

            </div>
    );
}

export default Login;