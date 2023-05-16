import classes from "./OffCanvas.module.css"
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";


function OffCanvas(props) {
    
    function cancelHandler() {
        props.onCancel();
    }

    const top100Films = [
        { title: "Damon" },
        { title: "Gojou"},
        { title: "David"},
        { title: "Edidiong"},
        { title: "Anita"},
        { title: "Oppai"},
      ];
    

    return (
        <div className={classes.OffCanvas}>
            <div className={classes.menu}>
            <img src="https://www.investopedia.com/thmb/3_niAKi-hqxEto4981WaCes0ZYM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/penfed-credit-union_3x1-4f974162685b43b3b4fa8cc5b00ddb30.png" className={classes.offCanvasLogo}></img>
            <FontAwesomeIcon icon={faXmark} beat className={classes.close} onClick={cancelHandler}/>
            </div>
            <Stack spacing={2} className={classes.textField}>
            <Autocomplete
              freeSolo
              id="free-solo-2-demo"
              disableClearable
              options={top100Films.map((option) => option.title)}
              renderInput={(params) => (
                <TextField 
                  {...params}
                  label="Search input"
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                  }}
                />
              )}
            />
          </Stack>
            <ul className={classes.listsItem}>
            <li className={classes.listsItems}><FontAwesomeIcon icon={faPenToSquare} className={classes.leftIcon} /> <span className={classes.offText}>CHECKING & SAVINGS </span><FontAwesomeIcon icon={faAngleRight} className={classes.rightIcon}/></li>
                <li className={classes.listsItems}><FontAwesomeIcon icon={faCreditCard} /><span  className={classes.offText}>CREDIT CARDS</span><FontAwesomeIcon icon={faAngleRight} className={classes.rightIcon}/></li>
                <li className={classes.listsItems}><FontAwesomeIcon icon={faCar} /><span className={classes.offText}>AUTO</span> <FontAwesomeIcon icon={faAngleRight} className={classes.rightIcon}/></li>
                <li className={classes.listsItems}><FontAwesomeIcon icon={faHouse} /><span className={classes.offText}>MORTGAGE & HOME</span><FontAwesomeIcon icon={faAngleRight} className={classes.rightIcon}/></li>
                <li className={classes.listsItems}><FontAwesomeIcon icon={faBuildingColumns} /><span className={classes.offText}>LOANS</span> <FontAwesomeIcon icon={faAngleRight} className={classes.rightIcon}/></li>
                <li className={classes.listsItems}><FontAwesomeIcon icon={faLightbulb} /><span className={classes.offText}>LEARN</span> <FontAwesomeIcon icon={faAngleRight} className={classes.rightIcon}/></li>
            </ul>
            <div className={classes.offCanvasGrid}>
                <div>
                <ul>
                    <li>PARTNERS</li>
                    <li>WEALTHS</li>
                    <li>BRANCHES & ATM</li>
                </ul>
                </div>
                <div>
                <ul>
                    <li>MEMBER DISCOUNTS</li>
                    <li>FOUNDATION</li>
                    <li>ABOUT</li>
                </ul>
                </div>
            </div>
            <Button className={classes.offCanvasBtn}>LOGIN</Button>
        </div>
    )

}

export default OffCanvas;