interface TextProps {
    children: React.ReactNode;
    className?: string;
};

const Text: React.FC<TextProps> = ({ children, className }) => {
    return (
        <p className={`font-normal text-base leading-9 ${className}`}>{children}</p>
    );
};

export default Text;