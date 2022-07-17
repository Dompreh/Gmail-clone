import React from "react";
import "./Sidebar.css";
import { Button, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import InboxIcon from "@mui/icons-material/Inbox";
import StarIcon from "@mui/icons-material/Star";
import SidebarOptions from "./SidebarOptions";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import NearMeIcon from "@mui/icons-material/NearMe";
import NoteIcon from "@mui/icons-material/Note";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";
import DuoIcon from "@mui/icons-material/Duo";
import PhoneIcon from "@mui/icons-material/Phone";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice";

function Sidebar() {
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar_compose"
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>

      <SidebarOptions
        Icon={InboxIcon}
        title="Inbox"
        number={15}
        selected={true}
      />
      <SidebarOptions Icon={StarIcon} title="Starred" number={11} />
      <SidebarOptions Icon={AccessTimeIcon} title="Snoozed" number={11} />
      <SidebarOptions Icon={NearMeIcon} title="Sent" number={27} />
      <SidebarOptions Icon={NoteIcon} title="Drafts" number={4} />
      <SidebarOptions Icon={ExpandMoreIcon} title="More" number={2} />

      <div className="sidebar_footer">
        <div className="sidebar_footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
