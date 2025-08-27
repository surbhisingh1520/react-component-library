https://github.com/surbhisingh1520/react-component-liimport React from 'react';

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  variant?: 'filled' | 'outlined' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled,
  invalid,
  variant = 'outlined',
  size = 'md',
}) => {
  const baseStyle = "border rounded px-2 py-1 w-full ";
  const variantStyle =
    variant === 'filled'
      ? 'bg-gray-100 border-gray-300'
      : variant === 'ghost'
      ? 'border-none bg-transparent'
      : 'border-gray-300 bg-white';

  const sizeStyle =
    size === 'sm' ? 'text-sm py-1' : size === 'lg' ? 'text-lg py-3' : 'text-md py-2';

  return (
    <div className="flex flex-col mb-4">
      {label && <label className="mb-1 font-medium">{label}</label>}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`${baseStyle} ${variantStyle} ${sizeStyle} ${
          invalid ? 'border-red-500' : ''
        }`}
      />
      {helperText && <span className="text-gray-500 text-sm mt-1">{helperText}</span>}
      {invalid && errorMessage && <span className="text-red-500 text-sm mt-1">{errorMessage}</span>}
    </div>
  );
};
brary
