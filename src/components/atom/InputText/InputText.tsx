
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
            className={`border-b-2 border-gray-200 bg-transparent order-none focus:outline-none py-[14px] pr-4  placeholder-black ${className}`}
            value={Value}
            required={required}
            type={type}
            onChange={onChange}
        />
    );
}

export default InputText;