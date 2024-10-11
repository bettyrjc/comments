import React, { InputHTMLAttributes, forwardRef, ReactElement, ChangeEvent } from 'react';
import clsx from 'clsx';

type ExposedNativeInputProps =
  | 'placeholder'
  | 'type'
  | 'value'
  | 'disabled'
  | 'readOnly'
  | 'onPaste'
  | 'onKeyDown'
  | 'onKeyPress'
  | 'onChange'
  | 'maxLength'
  | 'min'
  | 'autoComplete';

export type InputProps = {
  disabled?: boolean;
  fullWidth?: boolean;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  isInvalid?: boolean;
  isError?: boolean;
  error?: string | any;
  label?: string;
  placeholder?: string;
  type?: string;
  hint?: string;
  mask?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
} & Pick<InputHTMLAttributes<HTMLInputElement>, ExposedNativeInputProps>;

const Input = forwardRef<HTMLInputElement, InputProps>(function InputWithRef(
  {
    fullWidth = false,
    startIcon,
    disabled,
    endIcon,
    label,
    error,
    placeholder,
    isError,
    isInvalid,
    type = 'text',
    hint,
    ...props
  },
  ref
) {

  return (
    <div className="mb-3">
      {!!label && <label className={
        clsx(
          'ml-1 text-sm',
          disabled ? 'text-gray-300' : 'text-gray-800',
          (error || isError) && 'text-red-500'
        )
      }>{label}</label>}

      <div
        className={clsx(
          'mt-1 flex flex-row items-center rounded-md border-2 bg-white hover:border-primary',
          isInvalid && 'border-red-500',
          !isInvalid && 'border-gray-300',
          disabled && 'border-gray-300 text-gray-300 hover:border-gray-300',
          (error || isError) && 'border-red-500'
        )}
      >
        {!!startIcon && <div className="flex justify-center p-4">{startIcon}</div>}

        <input
          type={type}
          {...props}
          ref={ref}
          placeholder={placeholder}
          className={clsx(
            'w-full rounded-md border-none bg-transparent py-2 placeholder:text-xs placeholder:text-gray-300 focus:outline-none',
            fullWidth && 'w-full',
            !startIcon && 'pl-4',
            !endIcon && 'pr-4'
          )}
        />

        {!!endIcon && !hint && <div className="flex justify-center pr-3 text-xl text-gray-500">{endIcon}</div>}

    
      </div>

      {!!error && <div className="my-1 ml-1 text-xs text-red-500">{error}</div>}
    </div>
  );
});

export default Input;
