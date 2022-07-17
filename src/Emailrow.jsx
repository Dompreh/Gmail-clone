import { Checkbox, IconButton } from "@mui/material";
import React from "react";
import "./Emailrow.css";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";
import { useHistory } from "react-router-dom";
import firebase from "firebase";
import { selectMail } from "./features/mailSlice";
import { useDispatch } from "react-redux";

function Emailrow({ id, title, subject, description, timestamp, time }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        timestamp,
        time,
      })
    );
    history.push("/mail");
  };
  return (
    <div onClick={openMail} className="emailrow">
      <div className="emailrow_options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon  className="email_important" />
        </IconButton>
      </div>
      <h3 className="emailrow_title">{title} </h3>
      <div className="emailrow_message">
        <h4>
          {subject} <span className="emailrow_desc">-{description}</span>
        </h4>
      </div>

      <p className="emailrow_time">{time}</p>
      <p className="emailrow_time">{timestamp}</p>
    </div>
  );
}

export default Emailrow;
