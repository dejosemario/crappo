
interface InputTextProps{
    placeholder?: string;
    name?: string;
    className?: String;
    Value?: string;
    required?: boolean;
    type?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

}

const InputText = ({placeholder, name, className, Value, required, type, onChange}: InputTextProps) => {
    return (
        <input
            placeholder={placeholder}
            name={name}
            className={`border border-[#3671E9] focus:outline-none py-[14px] px-4 ${className}`}
            value={Value}
            required={required}
            type={type}
            onChange={onChange}
        />
    );
}

export default InputText;