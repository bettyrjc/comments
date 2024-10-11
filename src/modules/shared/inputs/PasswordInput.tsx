import React, { InputHTMLAttributes, forwardRef, useState } from 'react';

import clsx from 'clsx';


type ExposedNativeInputProps = 'placeholder' | 'value' | 'disabled' | 'readOnly' | 'onFocus';

export type InputProps = {
  disabled?: boolean;
  fullWidth?: boolean;
  isInvalid?: boolean;
  error?: string | any;
  label?: string;
} & Pick<InputHTMLAttributes<HTMLInputElement>, ExposedNativeInputProps>;

const PasswordInput = forwardRef<HTMLInputElement, InputProps>(function InputWithRef(
  { fullWidth = false, isInvalid, placeholder, disabled, label, error, ...props },

  ref
) {
  const [hiddenPassword, setHiddenPassword] = useState(true);

  return (
    <div className='mb-4'>
      {!!label && <label className={
        clsx(
          'ml-1 text-sm',
          disabled ? 'text-gray-300' : 'text-gray-800',
          error && 'text-red-500'
        )
      }>{label}</label>}
      <div
        className={clsx(
          'flex flex-row items-center rounded-md border-2 bg-white hover:border-primary',
          (isInvalid || error) && 'border-red-500',
          !isInvalid && 'border-gray-300'
        )}
      >
        <input
          type={hiddenPassword ? 'password' : 'text'}
          ref={ref}
          className={clsx('w-full rounded py-2 pl-4 outline-none focus:outline-none', fullWidth && 'w-full')}
          {...props}
          placeholder={placeholder || '********'}
        />

        <div className="flex items-center justify-center w-14">
          <div className="cursor-pointer" onClick={() => setHiddenPassword(!hiddenPassword)}>
            {hiddenPassword && <span>👁️</span>}
            {!hiddenPassword && <span >🙈</span>}
          </div>
        </div>
      </div>
      {!!error && <div className="my-1 ml-1 text-xs text-red-500">{error}</div>}
    </div>


  );
});

export default PasswordInput;
