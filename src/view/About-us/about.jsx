import React, { useEffect } from "react";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/nav";
import { Toaster, toast } from "react-hot-toast";

function About() {
  useEffect(() => {
    toast.success("Welcome to About Us!");
  }, []);

  return (
    <>
      <Navbar />
      <Toaster />
      <Footer />
    </>
  );
}

export default About;
