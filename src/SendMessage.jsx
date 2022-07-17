import React from "react";
import "./SendMessage.css";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import { db } from "./firebase";
import firebase from "firebase"

function SendMessage() {
  const {register, handleSubmit, watch, errors}= useForm()

  const onHandleSubmit = (formData) =>{
      console.log(formData)
      db.collection('emails').add({
        to:formData.to,
        subject:formData.subject,
        message:formData.message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      dispatch(closeSendMessage())
  }
  const dispatch = useDispatch()
  return (
    <div className="sendmessage">
      <div className="sendmessage_header">
        <h3>New Message</h3>
        <CloseIcon className="sendmessage_close" onClick={()=> dispatch(closeSendMessage())}/>
      </div>

      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <input name='to' placeholder="To" type="email" ref={register({required:true})} />
        <p>{errors.to && <p className="error">To is required</p>}</p>
      
        <input name='subject' placeholder="Subject" type="text" ref={register({required:true})}
        />
        <p>{errors.subject && <p className="error">Subject is required</p>}</p>
        <input
          name='message'
          placeholder="Message..."
          type="text"
          className="sendmessage_input"
          ref={register({required:true})} 
        />
        <p>{errors.message && <p className="error">Message is required</p>}</p>

        <div className="sendmessage_options">
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className="sendmessage_btn"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMessage;
