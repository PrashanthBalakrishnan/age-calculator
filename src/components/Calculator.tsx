import Input from "./Input";
import { FieldValues, SubmitHandler, set, useForm } from "react-hook-form";
import iconArrow from "../assets/icon-arrow.svg";

import { useState } from "react";
const Calculator = () => {
  const [validDay, setValidDay] = useState(true);
  const [validMonth, setValidMonth] = useState(true);
  const [validYear, setValidYear] = useState(true);

  const [age, setAge] = useState({ years: "--", months: "--", days: "--" });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      day: "",
      month: "",
      year: "",
    },
  });

  // Validates and Calculates the age
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setValidDay(false);
    setValidMonth(false);
    setValidYear(false);
    const { day, month, year } = data;
    const birthYear = year;
    const birthMonth = month - 1;
    const birthDay = day;

    const date = new Date();
    const today = new Date();
    const birthDateObj = new Date(birthYear, birthMonth, birthDay);
    const dayInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const currentYear = date.getFullYear();

    //Check leap year
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      dayInMonth[1] = 29;
    }
    // YEAR
    if (currentYear - year < 0 || year > new Date().getFullYear() - 1) {
      setValidYear(false);
      setAge({ years: "--", months: "--", days: "--" });
      return;
    } else {
      setValidYear(true);
    }

    // MONTH
    if (month < 1 || month > 12) {
      setValidMonth(false);
      setAge({ years: "--", months: "--", days: "--" });
      return;
    } else {
      setValidMonth(true);
    }

    // DAY
    if (day < 1 || day > dayInMonth[month - 1]) {
      setValidDay(false);
      setAge({ years: "--", months: "--", days: "--" });
      return;
    } else {
      setValidDay(true);
    }

    const ageInMs = today.getTime() - birthDateObj.getTime();
    const ageDate = new Date(ageInMs);
    const years = String(ageDate.getUTCFullYear() - 1970);
    const months = String(ageDate.getUTCMonth());
    const days = String(ageDate.getUTCDate() - 1);

    setAge({ years, months, days });
  };

  return (
    <div className="calculator">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__item">
          <Input
            id="day"
            label="Day"
            placeholder="DD"
            type="number"
            register={register}
            errors={errors}
            errorMessage="Must be a valid day"
            isValid={validDay}
          />
          <Input
            id="month"
            label="Month"
            placeholder="MM"
            type="number"
            register={register}
            errors={errors}
            errorMessage="Must be a valid month"
            isValid={validMonth}
          />
          <Input
            id="year"
            label="Year"
            placeholder="YYYY"
            type="number"
            register={register}
            errors={errors}
            errorMessage="Must be in the past"
            isValid={validYear}
          />
        </div>
        <div className="form__line">
          <button className="form__button" type="submit">
            <img src={iconArrow} alt="arrow pointing down" />
          </button>
        </div>
      </form>
      <div className="result">
        <div className="result__container">
          <span className="result__num">{age.years}</span>
          <span className="result__name">years</span>
        </div>
        <div className="result__container">
          <span className="result__num">{age.months}</span>
          <span className="result__name">months</span>
        </div>
        <div className="result__container">
          <span className="result__num">{age.days}</span>
          <span className="result__name">days</span>
        </div>
      </div>
    </div>
  );
};
export default Calculator;
