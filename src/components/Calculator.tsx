import Input from "./Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import iconArrow from "../assets/icon-arrow.svg";
const Calculator = () => {
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

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
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
            disabled={false}
          />
          <Input
            id="month"
            label="Month"
            placeholder="MM"
            type="number"
            register={register}
            errors={errors}
            disabled={false}
          />
          <Input
            id="year"
            label="Year"
            placeholder="YYYY"
            type="number"
            register={register}
            errors={errors}
            disabled={false}
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
          <span className="result__num">10</span>
          <span className="result__name">years</span>
        </div>
        <div className="result__container">
          <span className="result__num">3</span>
          <span className="result__name">months</span>
        </div>
        <div className="result__container">
          <span className="result__num">10</span>
          <span className="result__name">days</span>
        </div>
      </div>
    </div>
  );
};
export default Calculator;
