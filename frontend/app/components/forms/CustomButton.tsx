interface CustomButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
}
const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  onClick,
  className,
}) => {
  return (
    <div
      onClick={onClick}
      className={`w-full text-center py-4 bg-yupvac hover:bg-yupvacDark text-white rounded-xl transition cursor-pointer ${className}`}
    >
      {label}
    </div>
  );
};

export default CustomButton;
