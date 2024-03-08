import React from "react";
import { useState } from "react";
import Img from "../src/Video/contactUs.png"
import { Link } from 'react-router-dom'
import "./contact.css"
import { toast } from "react-toastify";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
function Contact(){
    const [userData, setUserData]=useState({
        firstName:"",
        address:"",
        contact:"",
        email:"",
        cattle:"",
        massege:""
    });

    let name,value;
    const postUserData =(event)=>{
      name=event.target.name;
      value=event.target.value;

      setUserData({...userData,[name]:value});
     };
     const {firstName,address,contact,email}=userData;
     const submitData =async(event)=>{
        event.preventDefault();
        const res= await fetch(import.meta.env.VITE_CONTACT,
         {
        method :"POST",
        headers : {
            "content-Type":"application/json",
        },
        body : JSON.stringify({
            firstName,address,contact,email
        })
       });
       if(firstName===""||address===""||contact===""||email===""){
        return toast.error("Please fill the All field")
       }
       if(res){
        setUserData({
            firstName:"",
            address:"",
            contact:"",
            email:"",
            cattle :"",
            massege:""
        }) ,
        toast.success("Data is Submited");
       }
        
       else{
        alert("please fill the data")
       }
       }
    return(
        <>
        <Navbar/>
        <section className=" main" >
            <div className="Div1">
                <img src={Img} alt="Image is not load " />
            </div>
            <div className="Div2 text-emerald-400">
                <center className=" text-amber-700 ">Contact Us</center>
                <form  method="POST">
                <div className="my-2.5 ">
                <label htmlFor="First Name">First Name :</label>
                <input 
                type="text"
                placeholder="Enter Your first Name"
                value={userData.firstName}
                onChange={postUserData}
                name="firstName" 
                className="firstName"/>
                </div>
                <div className="my-2.5">
                <label htmlFor="address">Address : </label>
                <input type="text"
                className="lastname" 
                placeholder="Enter Your Address"
                value={userData.address}
                onChange={postUserData}  
                name="address"/></div>
                <div className="my-2.5">
                <label htmlFor="contact">contact Number :</label>
                <input 
                type="text" 
                className="contact" 
                placeholder="Enter Your Contact Number"
                value={userData.contact}
                onChange={postUserData}  
                name="contact"/></div>
                
                <div className="my-2.5">
                <label htmlFor="cattle">Cattle :</label>
                <input 
                type="text" 
                className="contact" 
                placeholder="Enter Yo"
                value={userData.cattle}
                onChange={postUserData}  
                name="cattle"/></div>

                <div className="my-2.5">
                <label htmlFor="email">Email :</label>
                <input type="text" 
                className="email" 
                placeholder="Enter Your Email"
                value={userData.email}
                onChange={postUserData}  
                name="email"/></div>
                
                <div className="my-2.5">
                <label htmlFor="massege">Massege :</label>
                <textarea name="massege" className="textArea" id="" cols="20" rows="5" placeholder="Enter your massege"></textarea></div>
                
                </form>
                <Link to={'/'}><div className="submit bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... "><button onClick={submitData}>Submit</button></div></Link> 
            </div>
        </section>
        <Footer/>
        </>
    )
}
export default  Contact;