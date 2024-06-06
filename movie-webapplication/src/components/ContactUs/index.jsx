import React, { useEffect, useState } from "react";
import "./contact.css";
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
const Index = () => {

  const[fname,setFname] = useState('');
  const[lname,setLname] = useState('');
  const[email,setEmail] = useState('');
  const[number,setNumber] = useState('');
  const[message,setMessage] = useState('');
  const[error,setError]=useState('')
  const[msg,setMsg] = useState('')

  useEffect(()=>{
    setTimeout(function(){
      setMsg("");
    },15000)
  },[msg])


  const handleInputChange = (e, type) =>{
      switch(type){
        case "fname":
          setError("");
          setFname(e.target.value);
          if(e.target.value === ""){
            setError("First Name is required")
          }
          break;
          case "lname":
            setError("");
            setLname(e.target.value);
            if(e.target.value === ""){
              setError("Last Name is required")
            }
            break;
            case "email":
              setError("");
              setEmail(e.target.value);
              if(e.target.value === ""){
                setError("Email is required")
              }
              break;
              case "number":
                setError("");
                setNumber(e.target.value);
                if(e.target.value === ""){
                  setError("First Name is required")
                }
                break;
                case "message":
                  setError("");
                  setMessage(e.target.value);
                  if(e.target.value === ""){
                    setError("Message is required")
                  }
                  break;
          default:
      }
  }

  const handleSubmit = () =>{
    if(fname!== "" && lname !== "" && email !== "" && number !== "" && message !== "" ){
      var url = "http://localhost/Backend/regsitration.php";
      var headers = {
        "Accept":"application/json",
        "Content-Type":"application/json"
      };
      var Data = {
        fname:fname,
        lname:lname,
        email:email,
        number:number,
        message:message
      }
      fetch(url,{
        method:"POST",
        headers:headers,
        body:JSON.stringify(Data)
      }).then((response)=>response.json())
      .then((response) => {
        setMsg(response[0].result);
      }).catch((err)=>{
        setError(err);
        console.log(err)
      });
      setFname("");
      setLname("");
      setEmail("");
      setNumber("");
      setMessage("");
    }
    else{
      setError("All fields are required")
    }
  }


  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <div className="Contact-Section">
      <div className="Contact-Section-Header">
      <h1>How to Reach Us</h1>
      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>

      </div>
      <div className="Contact-Content-Section">
      <div className="Contact-Left">
      <form action="process_form.php">
      <div className="name-field">
            <div>
              <label>First Name*</label>
              <p>
                {
                  msg !== ""?
                  <span className="success">{msg}</span>:
                  <span className="error">{error}</span>
                }
              </p>
              <input type="text" name="fname" id="fname" value={fname} onChange={(e)=>handleInputChange(e, "fname")} />
            </div>
            <div>
              <label>Last Name*</label>
              <input type="text"  name="lname" id="lname" value={lname} onChange={(e)=>handleInputChange(e, "lname")}/>
            </div>
          </div>
          <label>Email*</label>
          <input type="email" name="email" id="email" value={email} onChange={(e)=>handleInputChange(e, "email")}/>
          <label>Telephone</label>
          <input type="text" name="number" id="number" value={number} onChange={(e)=>handleInputChange(e, "number")}/>
          <label>Message</label>
          <textarea style={{ width: '95%', height: '100px', borderRadius: '5px' }} name="message" id="message" value={message} onChange={(e)=>handleInputChange(e, "message")}/>
          <span>*required field</span>
          <div className="CheckBox">
          <Checkbox {...label} />
            <span>I agree <a href="#">Terms & Conditions</a></span>
          </div>
          <div className="Button">
             
      <Button variant="contained" sx={{ backgroundColor: 'yellow', color: 'black', '&:hover': { backgroundColor: 'darkyellow' } }}  name="send" id="send" type="submit" onClick={handleSubmit}>Contained</Button>
          </div>
        </form>
        </div>
      <div className="Contact-Right">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.3807403172596!2d79.940426!3d6.8448775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25069caa2f53b%3A0xe7eae3a8b1f1214d!2seBEYONDS%20eBusiness%20%26%20Digital%20Solutions!5e0!3m2!1sen!2slk!4v1717599957433!5m2!1sen!2slk"
          width="600"
          height="450"
          style={{border:0}}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      </div>
    </div>
  );
};

export default Index;
