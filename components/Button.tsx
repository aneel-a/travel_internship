import Image from "next/image";

type ButtonProps = {
  type: 'button' | 'submit'; // type is required
  title: string;
  variant: string;
  full?: boolean;
  icon?: string; // Optional prop for icon
  onClick?: () => void; // Optional onClick handler
}

const Button = ({ type, title, variant, full, icon, onClick }: ButtonProps) => {
  return (
    <button
      className={`flexCenter gap-3 rounded-full border ${variant} ${full ? 'w-full' : ''}`}
      type={type}
      onClick={onClick} // Pass the onClick prop here
    >
      {icon && (
        <Image src={icon} alt="icon" width={20} height={20} className="inline-block" />
      )}
      <label className="text-base lg:text-sm whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  )
}

export default Button;
