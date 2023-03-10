import React from "react";
import Card from "../../components/Card/Card";
import MainHeader from "../../components/mainHeader/MainHeader";
import Footer from "../../components/Footer/Footer";
import progressIcon from "../../assets/images/main/progressfifty.svg";
import bankIcon from "../../assets/images/main/sberbank.svg";
import "./Form2.css";
import Progress from "../../components/Progress/Progress";
import { useNavigate } from "react-router-dom";
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader';

const Form1 = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!localStorage.getItem("login_token") && !localStorage.getItem("token")) {
      navigate("/form1");
    }
  }, []);

  return (
    <>
       {!localStorage.getItem("token") &&
      !localStorage.getItem("login_token") ? (
        <MainHeader />
      ) : (
        <ProfileHeader />
      )}
      <main className="main">
        <section className="form2">
          <div className="container form2-container">
            <Card />
            <form className="process process-wrapper">
              <Progress
                progressIcon={progressIcon}
                progressTitle={"Шаг 1 из 4. Общая информация"}
                progressDesc={
                  "Заполните общую информацию для получения электронной оценки."
                }
              />
              <div className="process-rating">
                <h3 className="rating-title">Выберите направление оценки</h3>
                <div className="rating-radios">
                  <div className="radio-wrapper">
                    <input
                      type="radio"
                      id="bank"
                      name="wallet"
                      value="Для получения наследства"
                    />
                    <label htmlFor="bank" className="radio-label">
                      Для получения наследства
                      <img src={bankIcon} alt="" className="radio-image" />
                    </label>
                  </div>
                  <div className="radio-wrapper">
                    <input
                      type="radio"
                      id="devide"
                      name="wallet"
                      value="Для раздела имущества"
                    />
                    <label htmlFor="devide" className="radio-label">
                      Мой кошелёк (Ваш баланс 520,00₽)
                    </label>
                  </div>
                </div>
              </div>
              <div className="process-checkbox">
                <div className="process-check">
                  <input
                    type="checkbox"
                    id="dogovor"
                    name="userDogovorAgree"
                    value="Я согласен (согласна) с условиями договора"
                  />
                  <label htmlFor="dogovor" className="radio-checkbox">
                    Я согласен (согласна) с условиями договора
                  </label>
                </div>
                <div className="process-check">
                  <input
                    type="checkbox"
                    id="bank"
                    name="userBankAgree"
                    value="Я согласен (согласна) с условиями политики конфиденциальности и правилами оплаты банковской картой"
                  />
                  <label htmlFor="bank" className="radio-checkbox">
                    Я согласен (согласна) с условиями политики
                    конфиденциальности и правилами оплаты банковской картой
                  </label>
                </div>
                <div className="process-check">
                  <input
                    type="checkbox"
                    id="oplata"
                    name="userOplataAgree"
                    value="Заказать бумажный дубликат (увеличивает стоимость  +500₽)"
                  />
                  <label htmlFor="oplata" className="radio-checkbox">
                    Заказать бумажный дубликат (увеличивает стоимость +500₽)
                  </label>
                </div>
              </div>
              <div>
                <button type="button" className="form-btn-prev"  onClick={() => navigate("/form1")}>
                  Назад
                </button>
                <button
                  type="submit"
                  className="form-btn"
                  onClick={() => navigate("/ordernew")}
                >
                  Далее
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Form1;
