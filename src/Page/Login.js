import classes from "./Login.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

function Login(){
    return(
        <>
       <h2 className={classes.home}><FontAwesomeIcon icon={faChevronLeft} /> Home</h2>
       <img src="https://www.investopedia.com/thmb/3_niAKi-hqxEto4981WaCes0ZYM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/penfed-credit-union_3x1-4f974162685b43b3b4fa8cc5b00ddb30.png"className={classes.logo} ></img>
        <div className={classes.card}>
        <form className={`${classes.form}`} >
            <div className={classes.control}>
                <label htmlFor="title">Email Address</label>
                <input type="text"  />
            </div>
            <div className={classes.control}>
                <label htmlFor="image">Password</label>
                <input type="password"/>
            </div>
            <div className={classes.actions}>
                    <button>Submit</button>
                </div>
            </form>
            </div>

            </>
    );
}

export default Login;