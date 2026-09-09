
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Nav() {
  const user = useSelector((state) => state.myuser.user);
  return (
    <nav className="navbar navbar-expand-lg bg-black">
      {" "}
      <div className="container-fluid">
        {" "}
        {/* Logo */}{" "}
        <Link className="navbar-brand text-white fw-bold" to="/">
          {" "}
          BAZAR.COM{" "}
        </Link>{" "}
        {/* Mobile Button */}{" "}
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {" "}
          <span className="navbar-toggler-icon"></span>{" "}
        </button>{" "}
        <div className="collapse navbar-collapse" id="navbarNav">
          {" "}
          {/* Center Menu */}{" "}
          <ul className="navbar-nav mx-auto text-center">
            {" "}
            <li className="nav-item mx-2">
              {" "}
              <Link className="nav-link text-white" to="/">
                {" "}
                HOME{" "}
              </Link>{" "}
            </li>{" "}
            <li className="nav-item mx-2">
              {" "}
              <Link className="nav-link text-white" to="/Cart">
                {" "}
                CART{" "}
              </Link>{" "}
            </li>{" "}
            <li className="nav-item mx-2">
              {" "}
              <Link className="nav-link text-white" to="/Pricing">
                {" "}
                PRICING{" "}
              </Link>{" "}
            </li>{" "}
          </ul>{" "}
          {/* Right Side */}{" "}
          <div className="d-flex gap-2">
            {" "}
            <Link to="/register">
              {" "}
              <button className="btn btn-success"> Register </button>{" "}
            </Link>{" "}
            {user.token ? (
              <Link to="/logout">
                {" "}
                <button className="btn btn-danger"> Logout </button>{" "}
              </Link>
            ) : (
              <Link to="/login">
                {" "}
                <button className="btn btn-primary"> Login </button>{" "}
              </Link>
            )}{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </nav>
  );
}
export default Nav;
