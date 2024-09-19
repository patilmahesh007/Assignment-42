import React, { useEffect } from "react";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/nav";
import "./about-us.css"
import { Toaster, toast } from "react-hot-toast";

function About() {
  useEffect(() => {
    toast.success("Welcome to About Us!");
  }, []);


  const Style = {
    color: 'blue',
    backgroundColor: 'lightgray',
   
  };
  return (
    <>
      <Navbar />
      <div>
        <h1 style={{ color: 'crimson', backgroundColor: 'yellow' }}> Inline CSS</h1>
        <br />
        <h1 style={Style}> Internal CSS</h1>
        <br />
        <h1 className="external-css"> External CSS</h1>
      </div>
      <Footer />
    </>
  );
}

export default About;
