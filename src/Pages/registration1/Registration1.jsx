import React, { useState } from "react";
import "../../Pages/registration1/Registration1.css";
import logo from "../../assets/images/main/logo.svg";
import { Link } from "react-router-dom";
import Input from "../../components/Input/Input";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Registration1 = ({ setOpen }) => {
  const navigate = useNavigate();
  const [userPhone, setUserPhone] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userConfirmPassword, setUserConfirmPassword] = useState("");


  const onUserphone = (value) => {
    setUserPhone(value)
  };

  const onUserEmail = (value) => {
    console.log(value);
    setUserEmail(value);
  };

  const onUserPassword = (value) => {
    console.log(value);
    setUserPassword(value);
  };

  const onUserConfirmPassword = (value) => {
    console.log(value);
    setUserConfirmPassword(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    window.localStorage.setItem("phone_number", userPhone)

    axios
      .post("http://epa.yarbek.uz/api/reg1/", {
        phone_number: userPhone,
        email: userEmail,
        password: userPassword,
        confirm_password: userConfirmPassword,
      })
      
      .then((res) => {
        if(res.data.status === 1){
          window.localStorage.setItem('token', res.data.token);
          console.log(res.data);
          navigate("/registration2");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setUserEmail("");
    setUserPassword("");
    setUserConfirmPassword("");
  };

  return (
    <>
      <div className="registration1_container">
        <div className="registration1_card">
          <div className="reg1_logo_div">
            <img src={logo} alt="Logo" />
          </div>
          <h1>Регистрация профиля</h1>
          <br />
          <form className="reg1_form" onSubmit={onSubmit}>
            <Input
              labelName={"Номер телефона"}
              inputType={"tel"}
              inputId={"userPhone"}
              placeholder={"+7 (900) 000-00-00"}
              value={userPhone}
              descValue={"uft_pole_name"}
              onGetValue={onUserphone}
              question={false}
            />
            <br />
            <Input
              labelName={"Email (необязательно)"}
              inputType={"email"}
              inputId={"userEmail"}
              placeholder={"example@gmail.com"}
              value={userEmail}
              descValue={"uft_pole_name"}
              onGetValue={onUserEmail}
              question={false}
            />
            <br />
            <Input
              labelName={"Пароль"}
              inputType={"password"}
              inputId={"userPassword"}
              value={userPassword}
              descValue={"uft_pole_name"}
              onGetValue={onUserPassword}
              question={false}
            />
            <br />
            <Input
              labelName={"Повторите пароль"}
              inputType={"password"}
              inputId={"userPasswordReturn"}
              value={userConfirmPassword}
              descValue={"uft_pole_name"}
              onGetValue={onUserConfirmPassword}
              question={false}
            />
            <p className="reg1_form_p2">
              Нажимая на кнопку “Зарегистрироваться”, вы соглашаетесь на
              <span className="reg1_form_span2">
                {" "}
                обработку персональных данных.
              </span>
            </p>
            <button className="reg1_form_btn" disabled={!userConfirmPassword}>Сохранить</button>
            <Link to="/"
              className="reg1_form_link"
              onClick={() => setOpen(true)}
            >
              Уже зарегистрированы? Войти
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Registration1;
