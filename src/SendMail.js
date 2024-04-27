// import React from "react";
// import "./SendMail.css";
// import   CloseIcon from "@mui/icons-material/Close";
// import { Button } from "@mui/material";
// import { useForm } from "react-hook-form";
// import {useDispatch} from "react-redux"
// import {closeSendMessage} from "./features/mailSlice";
// import {db} from "./firebase";
// // import { initializeApp } from "firebase/app"; 
// // import { getFirestore, FieldValue } from "firebase/firestore";
// import firebase from "firebase/compat/app";




// function SendMail() {
//     const { register, handleSubmit, watch, formState:{errors}} = useForm();
//     const dispatch = useDispatch();



//     const onSubmit = (formData) => {
//         console.log(formData);
//         db.collection("emails").add({
//           to:formData.to,
//           Subject:formData.Subject,
//           message:formData.message,
//           timestamp:firebase.firestore.FieldValue.serverTimestamp(),
//         })

//         dispatch(closeSendMessage());
//     };



//   return (
//     <div className="sendMail">
//         <div className="sendMail__header">
//             <h3>New Message</h3> 
//             <CloseIcon onClick={() =>dispatch(closeSendMessage())}    className="sendMail__close"/>
//         </div>
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <input  placeholder="To" type="text"  {...register("to", {required:true})}   /> 
//             {errors.to && <span className="sendMail__errors">This field is required</span>}
//             <input  placeholder="Subject" type="text" {...register("Subject",{ required : true})}/>
//             {errors.Subject && <span className="sendMail__errors">This field is required</span>}
//             <input placeholder="Message..." type="text" className="sendMail__message" {...register ("message",{ required : true})}/>
//             {errors.message && <span className="sendMail__errors">This field is required</span>}
       

//         <div className="sendMail__options">
//           <Button className="sendMail__send"
//           variant="contained"
//           color="primary"
//           type="submit"
           
           
           
//            > Send</Button>

//         </div>
//         </form>


      
//     </div>
//   )
// }

// export default SendMail;



import React from "react";
import "./SendMail.css";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import { db } from "./firebase";
import firebase from "firebase/compat/app";
// import "firebase/compat/firestore"; // Import firestore explicitly

function SendMail() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (formData) => {
    console.log(formData);
    db.collection('emails').add({
      to: formData.to,
      Subject: formData.Subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    dispatch(closeSendMessage());
  };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon
          onClick={() => dispatch(closeSendMessage())}
          className="sendMail__close"
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="To"
          type="text"
          {...register("to", { required: true })}
        />
        {errors.to && (
          <span className="sendMail__errors">This field is required</span>
        )}
        <input
          placeholder="Subject"
          type="text"
          {...register("Subject", { required: true })}
        />
        {errors.Subject && (
          <span className="sendMail__errors">This field is required</span>
        )}
        <input
          placeholder="Message..."
          type="text"
          className="sendMail__message"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <span className="sendMail__errors">This field is required</span>
        )}

        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;





















