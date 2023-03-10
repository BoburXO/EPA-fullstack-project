import React, { useState } from "react";
import "../MainAside/mainAside.css";
import phone from "../../assets/images/main/phone-contact.png";
import Input from "../Input/Input";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const MainAside = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const notify = () => toast("We will contact you soon!");
  const notok = () => toast("Oops! Something get wrong!");

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://epa.yarbek.uz/api/fill/aplications/", {
        name: name,
        phone_number: phoneNumber,
      })
      .then((res) => {
        console.log(res);
        if (res.data.status === 1) {
          notify();
        }
        if (res.data.status !== 1) {
          notok();
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setName("");
    setPhoneNumber("");
  };
  const onName = (value) => {
    setName(value);
  };

  const onPhoneNumber = (value) => {
    setPhoneNumber(value);
  };

  return (
    <>
      <div className="main_aside">
        <div className="main_aside_container">
          <div className="main_aside_parent">
            <h1>НУЖНА ПОМОЩЬ ИЛИ ОСТАЛИСЬ ВОПРОСЫ?</h1>
            <div className="main_aside_form">
              <div className="main_aside_form_left">
                <p className="main_p">
                  Заполните форму и наш менеджер свяжется с вами <br /> для
                  бесплатной консультации по интересующим вопросам.
                </p>
                <form className="main_form_div" onSubmit={onSubmit}>
                  <div className="main_input_left">
                    <Input
                      labelName={"Имя"}
                      inputType={"text"}
                      inputId={"userName"}
                      placeholder={"Иван"}
                      descValue={"uft_pole_name"}
                      question={false}
                      value={name}
                      onGetValue={onName}
                    />
                  </div>
                  <div className="main_input_right">
                    <Input
                      labelName={"Номер телефона"}
                      inputType={"tel"}
                      inputId={"userPhone"}
                      placeholder={"+7 (900) 000-00-00"}
                      descValue={"uft_pole_name"}
                      question={false}
                      value={phoneNumber}
                      onGetValue={onPhoneNumber}
                    />
                  </div>
                  <button disabled={!phoneNumber}>Отправить</button>
                  <Toaster
                    toastOptions={{
                      style: {
                        background: "#073ba1",
                        padding: "16px",
                        color: "#fff",
                      },
                    }}
                  />
                </form>
                <div className="main_aside_button">
                  <p>
                    Нажимая на кнопку, вы соглашаетесь на обработку <br />{" "}
                    персональных данных.
                  </p>
                </div>
              </div>
              <div className="main_aside_form_right">
                <img src={phone} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainAside;
