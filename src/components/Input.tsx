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
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  type,
  required,
  register,
  errors,
  disabled,
  placeholder,
}) => {
  return (
    <div className="input">
      <label className="input__label" htmlFor={id}>
        {label}
      </label>
      <div className="input__wrapper">
        <input
          className={clsx(
            "input__field",
            errors[id] && "input__field--error",
            disabled && "input__field--disabled"
          )}
          id={id}
          type={type}
          autoComplete={id}
          disabled={disabled}
          placeholder={placeholder}
          {...register(id, { required })}
        />
      </div>
    </div>
  );
};
export default Input;
