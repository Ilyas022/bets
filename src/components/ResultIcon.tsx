interface IResultIcon {
  state: 'lose' | 'win' | 'draw'
}

const ResultIcon: React.FC<IResultIcon> = ({ state }: IResultIcon): JSX.Element => {
  const colorVariants = {
    win: 'bg-[#4EC757]',
    lose: 'bg-[#DB0202]',
    draw: 'bg-[#9B9B9B]',
  }

  const text = state === 'win' ? 'W' : state === 'lose' ? 'L' : 'N'

  return (
    <div
      className={`${colorVariants[state]} flex items-center justify-center w-5 h-5 rounded-full text-xs text-white`}
    >
      {text}
    </div>
  )
}

export default ResultIcon
