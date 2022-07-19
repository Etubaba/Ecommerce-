import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [request, setRequest] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (firstName !== '' && email !== '') {
      const posts = {
        name: firstName,
        email: email,
        comment: request,
      };


      axios.post('https://apifindprosper.verce.app/contact', posts)
        .then(res => {
          if (res.data.msg) {
            alert(`${res.data.msg}`)
          } else {
            alert(`e no work`)
          }
        }).catch(err => console.log(err))

      // fetch("https://apifindprosper.verce.app/contact", {
      //   method: "POST",

      //   body: JSON.stringify(posts),
      // })
      //   .then((res) => res.json())
      //   .then((data) => alert(data.msg));
    }
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        top: "17vh",
      }}
    >
      <div className="firstcon">
        <div className="mcon">
          <hr />
          <h1>Contact</h1>
        </div>

        <div className="contact_img">
          <img src="./Images/wave1.png" alt="Contact page" />
        </div>
      </div>
      <div className="contact_content">
        <div className="get_title">
          <h1>Get in Touch</h1>
          <hr />
        </div>

        <div className="call_content">
          <div className="double">
            <div style={{ flexDirection: "column" }}>
              <p style={{ marginBottom: "4vh", marginRight: "4vw" }}>
                Are you looking for a particular shoes And you cant fine it?{" "}
                <br /> or you want to customize your shoes? <br />
                Please contact us using the avenues below
              </p>
              <div>
                <InstagramIcon />
                <FacebookIcon />
                <TwitterIcon />
              </div>
            </div>
            <hr />
            <div
              style={{
                flexDirection: "column",
                marginRight: "10vw",
                alignContent: "space-around",
              }}
            >
              <div style={{ marginBottom: "4vh" }}>
                <LocalPhoneIcon />
                <p>08133886084</p>
              </div>
              <div>
                <EmailOutlinedIcon />
                <p>example@gmail.com</p>
              </div>
            </div>
          </div>

          <Paper
            style={{
              backgroundColor: "#2B3039",
              height: "45vh",
              width: "40vw",
              padding: "20px",
              position: "relative",
              top: "-25vh",
            }}
          >
            <form onSubmit={handleSubmit}>
              <TextField
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                id="standard-basic"
                label="First Name"
                variant="standard"
                style={{ marginRight: "4vw" }}
              />

              <TextField
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="standard-basic"
                label="Email"
                style={{ marginBottom: "5vh", width: "20vw" }}
                variant="standard"
              />{" "}
              <br />
              <TextareaAutosize
                value={request}
                onChange={(e) => setRequest(e.target.value)}
                aria-label="minimum height"
                minRows={3}
                placeholder="Enter request here"
                style={{
                  width: "20vw",
                  backgroundColor: "#2B3039",
                  marginBottom: "4vh",
                }}
              />
              <br />
              <Button
                type="submit"
                variant="contained"

              >
                Submit
              </Button>
            </form>
          </Paper>
        </div>
      </div>
    </div>
  );
};
export default Contact;
