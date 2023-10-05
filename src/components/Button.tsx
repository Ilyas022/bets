interface IButton {
  text: string
  color?: 'green' | 'gray'
}

const Button: React.FC<IButton> = ({ text, color = 'gray' }: IButton): JSX.Element => {
  const colorVariants = {
    green: 'bg-[#53AF1B] text-white',
    gray: 'bg-[#EBECF57D] text-[#6F728C]',
  }

  return (
    <button
      className={`${colorVariants[color]} max-[1153px]:w-full max-[420px]:px-[20px] text-sm font-ubuntuMedium font-medium px-[47px] py-[19px] rounded-[10px]`}
    >
      <span className="relative z-10">{text}</span>
    </button>
  )
}

export default Button
