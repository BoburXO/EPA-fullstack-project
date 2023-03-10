import React, { useState } from "react";
import Card from "../../components/Card/Card";
import MainHeader from "../../components/mainHeader/MainHeader";
import Input from "../../components/Input/Input";
import Footer from "../../components/Footer/Footer";
import progressIcon from "../../assets/images/main/progress.svg";
import infoIcon from "../../assets/images/main/info.svg";
import "./Form1.css";
import { useNavigate } from "react-router-dom";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import axios from "axios";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import Tooltip from "@mui/material/Tooltip";

const Form1 = ({ setOpen }) => {
  const notify = () => toast("Oops! Something get wrong! Please again...");
  const [loginToken, setLoginToken] = useState(
    window.localStorage.getItem("login_token")
  );
  const navigate = useNavigate();
  // form1 start
  const [chooseTheDirection, setChooseTheDirection] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [placeResidence, setPlaceResidence] = useState("");
  const [fullNameOwner, setFullNameOwner] = useState("");
  const [ownewDateDeath, setOwnerDateDeath] = useState("");
  const [deathCertificate, setDeathCertificate] = useState("");
  const [vin, setVin] = useState("");
  const [modelCar, setModelCar] = useState("");
  const [yearIssue, setYearIssue] = useState("");
  const [notarilaPlace, setNotarialPlace] = useState("");
  const [image, setImage] = useState(null);
  const [status, setStatus] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    
    formData.append("status", status);
    formData.append("choose_the_direction_of_assessment", chooseTheDirection);
    formData.append("last_name", lastName);
    formData.append("first_name", firstName);
    formData.append("patronymic", secondName);
    formData.append("email", email);
    formData.append("phone_number", phone);
    formData.append("place_residence", placeResidence);
    formData.append("full_name_owner", fullNameOwner);
    formData.append("owner_date_death", ownewDateDeath);
    formData.append("death_certificate", deathCertificate);
    formData.append("vin", vin);
    formData.append("model_car", modelCar);
    formData.append("year_issue", yearIssue);
    formData.append("notarial_place", notarilaPlace);
    formData.append("img", image);
    try {
      const res = axios({
        url: "http://epa.yarbek.uz/api/create/order/",
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${loginToken}`,
        },
        data: formData,
      }).then((res) => {
        if (res.data.status === 1) {
          window.localStorage.getItem("login_token");
          navigate("/form2");
        }
        if (res.data.status !== 1) {
          navigate("/");
          setOpen(true);
          notify();
        }
        notify();
      });
    } catch (err) {
      notify(err);
    }
  };

  const onLastName = (value) => {
    console.log(value);
    setLastName(value);
  };

  const onFirstName = (value) => {
    console.log(value);
    setFirstName(value);
  };

  const onSecondName = (value) => {
    console.log(value);
    setSecondName(value);
  };

  const onEmail = (value) => {
    console.log(value);
    setEmail(value);
  };

  const onPhone = (value) => {
    console.log(value);
    setPhone(value);
  };

  const onPlaceResidence = (value) => {
    console.log(value);
    setPlaceResidence(value);
  };

  const onOwnerFullName = (value) => {
    console.log(value);
    setFullNameOwner(value);
  };

  const onOwnerDateDeath = (value) => {
    console.log(value);
    setOwnerDateDeath(value);
  };

  const onDeathCertificate = (value) => {
    console.log(value);
    setDeathCertificate(value);
  };

  const onVin = (value) => {
    console.log(value);
    setVin(value);
  };

  const onModalCar = (value) => {
    console.log(value);
    setModelCar(value);
  };

  const onYearIssue = (value) => {
    console.log(value);
    setYearIssue(value);
  };

  const onNotarialPlace = (value) => {
    console.log(value);
    setNotarialPlace(value);
  };

  useEffect(() => {
    if (!localStorage.getItem("login_token")) {
      navigate("/");
    }
  }, [loginToken]);

  return (
    <>
      {!localStorage.getItem("login_token") ? (
        <MainHeader />
      ) : (
        <ProfileHeader />
      )}
      <main className="main">
        <section className="form1">
          <div className="container form1-container">
            <Card>
              <div className="card-important">
                <h3 className="card-important-title">?????? ???????????????????? ??????????:</h3>
                <div className="card-important-wrapper">
                  <img src={infoIcon} alt="Info" />
                  <p className="card-important-wrapper-desc">
                    ?????????????? ?????????????????????????? ????????????????
                  </p>
                </div>
              </div>
            </Card>
            <form className="process process-wrapper">
              <div className="procces-header">
                <img
                  src={progressIcon}
                  alt=""
                  className="process-header-image"
                />
                <div className="process-header-infos">
                  <h2 className="header-title">?????? 1 ???? 4. ?????????? ????????????????????</h2>
                  <p className="header-desc">
                    ?????????????????? ?????????? ???????????????????? ?????? ?????????????????? ?????????????????????? ????????????.
                  </p>
                </div>
              </div>
              <div className="process-rating">
                <h3 className="rating-title">???????????????? ?????????????????????? ????????????</h3>
                <div className="rating-radios">
                  <div className="radio-wrapper">
                    <input
                      type="radio"
                      id="inheritance"
                      name="radios"
                      value={1}
                      onChange={(e) => {
                        setChooseTheDirection(e.target.value);
                      }}
                    />
                    <label htmlFor="inheritance" className="radio-label">
                      ?????? ?????????????????? ????????????????????
                    </label>
                  </div>
                  <div className="radio-wrapper">
                    <input
                      type="radio"
                      id="devide"
                      name="radios"
                      value={2}
                      onChange={(e) => setChooseTheDirection(e.target.value)}
                    />
                    <label htmlFor="devide" className="radio-label">
                      ?????? ?????????????? ??????????????????
                    </label>
                  </div>
                  <div className="radio-wrapper">
                    <input
                      type="radio"
                      id="money"
                      name="radios"
                      value={3}
                      onChange={(e) => setChooseTheDirection(e.target.value)}
                    />
                    <label htmlFor="money" className="radio-label">
                      ?????? ??????????????????
                    </label>
                  </div>
                </div>
              </div>
              <div className="process-info">
                <div className="customer-info">
                  <h3 className="customer-info-title">
                    ???????????????????? ?? ??????????????????
                  </h3>
                  <div className="coustomer-inputs">
                    <div className="inputs-top">
                      <Input
                        labelName={"??????????????"}
                        inputType={"text"}
                        inputId={"userLastName"}
                        placeholder={"????????????"}
                        descValue={"uft_pole_name"}
                        question={false}
                        onGetValue={onLastName}
                        value={lastName}
                      />
                      <Input
                        labelName={"??????"}
                        inputType={"text"}
                        inputId={"userFirstName"}
                        placeholder={"????????????"}
                        descValue={"uft_pole_name"}
                        question={false}
                        onGetValue={onFirstName}
                        value={firstName}
                      />
                      <Input
                        labelName={"????????????????"}
                        inputType={"text"}
                        inputId={"userMiddleName"}
                        placeholder={"??????????????????????????"}
                        descValue={"uft_pole_name"}
                        question={false}
                        onGetValue={onSecondName}
                        value={secondName}
                      />
                    </div>
                    <div className="inputs-top">
                      <Input
                        labelName={"Email"}
                        inputType={"email"}
                        inputId={"userEmail"}
                        placeholder={"example@gmail.com"}
                        descValue={"uft_pole_name"}
                        question={true}
                        onGetValue={onEmail}
                        value={email}
                      />
                      <Input
                        labelName={"?????????? ????????????????"}
                        inputType={"tel"}
                        inputId={"UserPhoneNumber"}
                        placeholder={"+7 (900) 000-00-00"}
                        descValue={"???????? ?????????? ???????????????? ?????? ????????????????????????"}
                        question={false}
                        onGetValue={onPhone}
                        value={phone}
                      />
                      <Input
                        labelName={"?????????? ????????????????????"}
                        inputType={"text"}
                        inputId={"userPlace"}
                        placeholder={"????????????, ???????????????? ??????????????"}
                        descValue={"uft_pole_name"}
                        question={true}
                        onGetValue={onPlaceResidence}
                        value={placeResidence}
                      />
                    </div>
                  </div>
                </div>
                <span className="hr"></span>
                <div className="owner-info">
                  <h3 className="owner-info-title">
                    ???????????????????? ?? ????????????????????????
                  </h3>
                  <div className="owner-inputs">
                    <Input
                      labelName={"?????? ????????????????????????"}
                      inputType={"text"}
                      inputId={"ownerFullName"}
                      placeholder={"???????????? ???????? ????????????????"}
                      descValue={"uft_pole_name"}
                      question={true}
                      onGetValue={onOwnerFullName}
                      value={fullNameOwner}
                    />
                    <Input
                      labelName={"???????? ???????????? ????????????????????????"}
                      inputType={"date"}
                      inputId={"ownerDeathDate"}
                      placeholder={"22/12/2020"}
                      descValue={"uft_pole_name"}
                      question={false}
                      onGetValue={onOwnerDateDeath}
                      value={ownewDateDeath}
                    />
                    <Input
                      labelName={"?????????????????????????? ?? ???????????? ???"}
                      inputType={"text"}
                      inputId={"ownerDeathDate"}
                      placeholder={"???? ???550657"}
                      descValue={"uft_pole_name"}
                      question={false}
                      onGetValue={onDeathCertificate}
                      value={deathCertificate}
                    />
                  </div>
                </div>
                <span className="hr"></span>
                <span className="hr"></span>
                <div className="yourself">
                  <h3 className="yourself-title">?????????????????? ????????????????????????????</h3>

                  <div className="yourself-inputs">
                    <Input
                      labelName={"VIN"}
                      inputType={"text"}
                      inputId={"carVIN"}
                      placeholder={"4567890987NG"}
                      descValue={"uft_pole_name"}
                      question={true}
                      onGetValue={onVin}
                      value={vin}
                    />
                    <Input
                      labelName={"?????????? ?? ???????????? ????????????????????"}
                      inputType={"text"}
                      inputId={"carModel"}
                      placeholder={"????????????: ?????? (LADA) Priora"}
                      descValue={"uft_pole_name"}
                      question={true}
                      onGetValue={onModalCar}
                      value={modelCar}
                    />
                    <Input
                      labelName={"?????? ??????????????"}
                      inputType={"date"}
                      inputId={"carYear"}
                      placeholder={"1950"}
                      descValue={"uft_pole_name"}
                      question={true}
                      onGetValue={onYearIssue}
                      value={yearIssue}
                    />
                    <Input
                      labelName={"?????????? ???????????????????????? ????????????????"}
                      inputType={"text"}
                      inputId={"carNotarius"}
                      placeholder={"????????????, ???????????????? ??????????????"}
                      descValue={"uft_pole_name"}
                      question={true}
                      onGetValue={onNotarialPlace}
                      value={notarilaPlace}
                    />
                    <label>Photo Your Password ???</label>
                    <input
                      onChange={(e) => {
                        setImage(e.target.files[0]);
                      }}
                      required
                      type="file"
                      className="file__image__input"
                    />
                  </div>
                </div>
              </div>
              <div className="checkbox__btn_parent">
                <Tooltip title="???????? ???????? ???????????????? ????????????????????????!">
                  <div className="status__parent__div">
                    <input
                      className="status__radio"
                      type="checkbox"
                      value={1}
                      onChange={(e) => setStatus(e.target.value)}
                    />
                    <label className="status__label" htmlFor="#">
                      ?? ???????????????? ?????? ?????????????? ?????????????????????????????????? ????????????????????
                    </label>
                  </div>
                </Tooltip>
                <button
                  disabled={!status}
                  onClick={onSubmit}
                  type="submit"
                  className="form-btn"
                >
                  ??????????
                </button>
              </div>
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Form1;
