import clsx from "clsx";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  label: string;
  placeholder?: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
  errorMessage?: string;
  isValid?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  type,
  register,
  errors,
  disabled,
  placeholder,
  isValid,
  errorMessage,
}) => {
  return (
    <div className="input">
      <label
        className={clsx("input__label", !isValid && "invalid")}
        htmlFor={id}
      >
        {label}
      </label>
      <div className="input__wrapper">
        <input
          className={clsx("input__field", !isValid && "input__field--error")}
          id={id}
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          {...register(id, {
            required: "This field is required",
          })}
        />
      </div>

      {errors[id] ? (
        <p className="input__error">This field is required</p>
      ) : !isValid ? (
        <p className="input__error">{errorMessage}</p>
      ) : null}
    </div>
  );
};
export default Input;
