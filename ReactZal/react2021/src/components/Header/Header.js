import React from "react";
import styles from "../../common/styles/Headers.module.scss";
import { Link } from "react-router-dom";
import { Typography, Button } from "@mui/material";
import { connect } from "react-redux";
import axios from 'axios'

function Header(props) {
  const currentUser = JSON.parse(window.localStorage.getItem("user"));

const getProductsFromAPI = async()=>{
  try {
    const res = await axios.get('http://localhost:9000/products')
    props.setInitialProductList(res.data)
  }catch (err){
    console.log(err);
  }

}

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.signedUserInfo}>
        <Typography sx={{ m: 2 }} variant="h5">
          Zalogowany:{" "}
          {`${currentUser.userfirstName} ${currentUser.userLastName}`}
        </Typography>
        <Button variant="contained" onClick={getProductsFromAPI}>Załaduj lotniska</Button>
        <Link to="/">
          <Button variant="contained" color="error">
            Wyloguj
          </Button>
        </Link>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setInitialProductList: (value) =>
      dispatch({ type: "SET_INITIAL_PRODUCTS_LIST", value: value }),
  };
};

export default connect(null, mapDispatchToProps)(Header);


