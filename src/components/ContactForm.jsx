import React, { useState } from 'react'
import { MdMessage } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";



const ContactForm = () => {
    
    const [name, setName] = useState("Tushar")
    const [email, setEmail] = useState("tusharkathuria@gmail.com")
    const [text, setText] = useState("Hello World")
    
    
    
    const onSubmit=(event)=>{
        event.preventDefault()
        
        setName(event.target[0].value)
        setEmail(event.target[1].value)
        setText(event.target[2].value)

    }




    return (
        <section className='con'>
            <div className="contact_form">
                <div className='but1' >
                    <button className="btn1"><MdMessage />VIA SUPPORT CHAT</button>
                    <button className="btn1"><IoCallSharp />VIA CALL</button>
                </div>
                <div className='but'>
                    <button className='btn2'><MdOutlineMessage />VIA EMAIL FORM</button>
                </div>
                <form className='but' onSubmit={onSubmit} >
                    <div className="form_container">
                        <label htmlFor="name">Name</label>
                        <input type="text" name='name' />
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email"  />
                        <label htmlFor="text">Message</label>
                        <textarea name="text" cols="10" rows="6"></textarea>
                    </div>
                    <button  className='btn1' style={{marginLeft:"270px"}}>Submit</button>
                <div>
                    {
                        name + "" + email + ""+ text
                    }
                </div>
                </form>

            </div>
            <div className='contact_image'>
                <img src="\images\Service 24_7-pana 1.svg" alt="" />
            </div>

        </section>
    )
}

export default ContactForm
