import BonusCard from '../components/BonusCard'
import pBonusIcon from '../assets/icons/pBonusIcon.svg'
import oBonusIcon from '../assets/icons/oBonusIcon.svg'

const HomePage: React.FC = (): JSX.Element => {
  return (
    <main className="font-rubik">
      <div className="flex flex-col gap-[15px] px-3 max-[350px]:px-[10px] max-[350px]:py-[15px] py-[22px] max-[428px]:max-w-tabletWidth sm:max-w-[1344px] mx-auto">
        <BonusCard headerIcon={pBonusIcon} />
        <BonusCard headerIcon={oBonusIcon} />
        <BonusCard />
      </div>
    </main>
  )
}

export default HomePage
