import React, { useState } from "react";
import "../../Pages/email/Email.css";
import logo from "../../assets/images/main/logo.svg";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input/Input";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Email = () => {
  const navigate = useNavigate();
  const notify = () => toast("Oops! Something get wrong! Please again...");

  const [email, setEmail] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://epa.yarbek.uz/api/email/", {
        email: email,
      })
      .then((res) => {
        const mes = res.data.msg.toLowerCase();
        if (mes == "sended success") {
          window.localStorage.setItem("email", email);
          navigate("/emailcode");
        }
        notify();
      })
      .catch((err) => {
        console.log(err);
      });
    setEmail("");
  };

  const onEmail = (value) => {
    console.log(value);
    setEmail(value);
  };

  return (
    <>
      <div className="email_form_container">
        <div className="email_form_card">
          <div className="email_form_img">
            <img src={logo} alt="Logo" />
          </div>
          <div className="email_form_label">
            <h1>Сброс пароля</h1>
            <p>Введите ваш email для восстановления доступа</p>
          </div>
          <form action="#" className="email_form" onSubmit={onSubmit}>
            <Input
              labelName={"Email"}
              inputType={"email"}
              inputId={"userEmail"}
              placeholder={"example@gmail.com"}
              descValue={"uft_pole_name"}
              question={false}
              value={email}
              onGetValue={onEmail}
            />
            <input
              type="submit"
              value={"Далее"}
              className="email_form_btn"
              disabled={!email}
            />
            <Toaster
              toastOptions={{
                style: {
                  background: "#073ba1",
                  padding: "16px",
                  color: "#fff",
                },
              }}
            />
            <span
              className="email_form_navigate"
              onClick={() => navigate("/password")}
            >
              Сброс пароля по номеру телефона
            </span>
          </form>
        </div>
      </div>
    </>
  );
};

export default Email;
