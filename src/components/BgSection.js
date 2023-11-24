import React from 'react'
import classes from "./BgSection.module.css"
import { Link } from "react-router-dom";


const BgSection = ({text, button}) => {
  return (
    <div className="bgImage">
       <div className={classes.bgSection}>
          <h2>{text}</h2>
          {
            button ?  <button type="button">
            <Link className="bgBtn" to="/Login">
              {button}
            </Link>
          </button> : ""
          }
        </div>
        </div>
  )
}

export default BgSection;
