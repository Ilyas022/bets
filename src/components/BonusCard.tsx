import logo from '../assets/img/logo.png'
import fireIcon from '../assets/icons/fireIcon.svg'
import starIcon from '../assets/icons/starIcon.svg'
import presentIcon from '../assets/icons/presentIcon.svg'
import rocketIcon from '../assets/icons/rocketIcon.svg'
import mcIcon from '../assets/icons/mcIcon.svg'
import discoverIcon from '../assets/icons/discoverIcon.svg'
import aeIcon from '../assets/icons/aeIcon.svg'
import maestroIcon from '../assets/icons/maestroIcon.svg'
import upIcon from '../assets/icons/upIcon.svg'
import jcbIcon from '../assets/icons/jcbIcon.svg'
import downArrowIcon from '../assets/icons/downArrowIcon.svg'
import likeIcon from '../assets/icons/likeIcon.svg'
import disLikeIcon from '../assets/icons/disLikeIcon.svg'
import Button from './Button'
import { useState } from 'react'
import { useResponsive } from '../hooks/responsive'

interface IBonusCard {
  headerIcon?: string
}

const BonusCard: React.FC<IBonusCard> = ({ headerIcon }: IBonusCard): JSX.Element => {
  const [isCardOpened, setCardOpened] = useState<boolean>(false)
  const [isDesktop] = useResponsive('DESKTOP')

  console.log(isDesktop)

  return (
    <div
      className={
        `relative py-[15px] min-[471px]:pt-[25px] bg-bgLight rounded-[15px] text-[#72768D]` +
        (isCardOpened ? ' rounded-br-none rounded-bl-none' : '')
      }
    >
      {headerIcon ? (
        <img
          className="min-[471px]:w-[221px] h-[32px] min-[471px]:h-[42px] absolute max-[470px]:w-[141px] top-0 max-[470px]:right-[70px] min-[471px]:left-1/2 min-[471px]:-translate-x-1/2"
          src={headerIcon}
          alt=""
        />
      ) : null}
      <div className="flex justify-between  max-[350px]:px-[10px] px-[15px] pb-[23px] relative after:block after:h-[2px] after:w-full after:absolute after:bottom-0 after:left-0 after:bg-[#EBECF599] max-[470px]:text-sm text-lg font-medium text-[#313446]">
        <div className="flex items-center">
          <p className="max-[350px]:mr-[5px] mr-[14px]">1</p>
          <img className="w-[25px] h-[25px] max-[350px]:mr-0 mr-[10px]" src={fireIcon} alt="fire" />
          <p>BWIN</p>
        </div>
        <div className="flex">
          <p className="mr-[10px]">5.0</p>
          <img className="w-5 h-5" src={starIcon} alt="star" />
          <img className="hidden min-[560px]:block w-5 h-5" src={starIcon} alt="star" />
          <img className="hidden min-[560px]:block w-5 h-5" src={starIcon} alt="star" />
          <img className="hidden min-[560px]:block w-5 h-5" src={starIcon} alt="star" />
          <img className="hidden min-[560px]:block w-5 h-5" src={starIcon} alt="star" />
        </div>
      </div>
      <div
        className={
          'mt-[15px]  max-[350px]:px-[10px] px-[15px] text-sm flex justify-between gap-y-4 flex-wrap items-center' +
          (isCardOpened ? ' mb-[15px]' : '')
        }
      >
        <div className="mr-3 grow-0 flex  max-[350px]:gap-[10px] max-[350px]:mr-0 gap-[15px]">
          <img
            className="max-[490px]:w-[72px] max-[490px]:h-[60px] w-[148px] h-[125px]"
            src={logo}
            alt="logo"
          />
          <div className="flex flex-col max-[490px]:gap-0 min-[490px]:gap-[10px] grow-0">
            <div className="max-[490px]:hidden min-[491px]:flex items-center">
              <img className="w-[17px] h-[17px] mr-[5px]" src={presentIcon} alt="present" />
              <p className="font-bold">Welcome bonus</p>
            </div>
            <h2 className="font-bold max-[490px]:text-lg text-2xl text-[#313446]">
              100% Up to 500 $
            </h2>
            <p className="max-[490px]:text-xs min-[490px]:text-md min-[490px]:max-w-[264px]">
              Lorem ipsum dolor sit amet consectetur adipiscing elit lacus tempor, vulputate id
              fames pulvinar curabitur faucibus.
            </p>
          </div>
        </div>

        <div className="max-[690px]:flex max-[690px]:flex-row-reverse min-[690px]:flex-col min-[690px]:w-[185px] min-[690px]:flex-shrink-0 min-[690px]:mr-3 whitespace-nowrap max-[689px]:gap-x-[25px]  max-[350px]:text-xs">
          <div>
            <div className="flex items-center gap-[10px] min-[690px]:mb-[15px]">
              <img className="h-[17px] w-[17px]" src={rocketIcon} alt="rocket" />
              <p>Best odds</p>
            </div>
            <div className="flex items-center gap-[10px] min-[690px]:mb-[15px]">
              <img className="h-[17px] w-[17px]" src={rocketIcon} alt="rocket" />
              <p>Casino</p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-[10px] min-[690px]:mb-[15px]">
              <img className="h-[17px] w-[17px]" src={rocketIcon} alt="rocket" />
              <p>200+ Paymenth Method</p>
            </div>
            <div className="flex items-center gap-[10px] min-[690px]:mb-[15px]">
              <img className="h-[17px] w-[17px]" src={rocketIcon} alt="rocket" />
              <p>Fast Payouts</p>
            </div>
          </div>
        </div>

        <div className="min-[1025px]:mr-3 max-[1024px]:order-4 max-[1024px]:w-full max-[1024px]:flex max-[1024px]:gap-[15px] max-[1024px]:flex-col-reverse max-[1024px]:justify-center">
          {(!isDesktop && isCardOpened) || isDesktop ? (
            <div className="flex self-center gap-x-5 gap-y-[15px] flex-wrap min-[1025px]:w-[272px] min-[1025px]:mb-[22px]">
              <div className="h-[34px] w-[53px] bg-[#EBECF5A6] flex items-center justify-center rounded-[5px]">
                <img className="max-w-[33px] max-h-[20px]" src={mcIcon} alt="master card" />
              </div>
              <div className="h-[34px] w-[53px] bg-[#EBECF5A6] flex items-center justify-center rounded-[5px]">
                <img className="max-w-[33px] max-h-[20px]" src={discoverIcon} alt="discover" />
              </div>
              <div className="h-[34px] w-[53px] bg-[#EBECF5A6] flex items-center justify-center rounded-[5px]">
                <img className="max-w-[33px] max-h-[20px]" src={aeIcon} alt="american express" />
              </div>
              <div className="h-[34px] w-[53px] bg-[#EBECF5A6] flex items-center justify-center rounded-[5px]">
                <img className="max-w-[33px] max-h-[20px]" src={maestroIcon} alt="maestro" />
              </div>
              <div className="h-[34px] w-[53px] bg-[#EBECF5A6] flex items-center justify-center rounded-[5px]">
                <img className="max-w-[33px] max-h-[20px]" src={upIcon} alt="union pay" />
              </div>
              <div className="h-[34px] w-[53px] bg-[#EBECF5A6] flex items-center justify-center rounded-[5px]">
                <img className="max-w-[33px] max-h-[20px]" src={jcbIcon} alt="jcb" />
              </div>
              <div className="h-[34px] w-[53px] bg-[#EBECF5A6] flex items-center justify-center rounded-[5px]">
                <img className="max-w-[33px] max-h-[20px]" src={aeIcon} alt="american express" />
              </div>
              <div className="h-[34px] w-[53px] bg-[#EBECF5A6] flex items-center justify-center rounded-[5px]">
                <img className="max-w-[33px] max-h-[20px]" src={maestroIcon} alt="maestro" />
              </div>
            </div>
          ) : null}
          <button
            className="flex w-full justify-center items-center relative text-[#A6AAC3] cursor-pointer"
            onClick={() => setCardOpened((prev) => !prev)}
          >
            <span className="w-full h-[2px] bg-[#A6AAC3]"></span>
            <div className="flex gap-[5px] mx-3 shrink-0">
              <p className="text-center whitespace-nowrap">More info</p>
              <img className="w-[15px] h-[15px]" src={downArrowIcon} alt="" />
            </div>
            <span className="w-full h-[2px] bg-[#A6AAC3]"></span>
          </button>
        </div>

        <div className="flex flex-col gap-[15px] whitespace-nowrap max-[1024px]:order-3 max-[1153px]:flex-row-reverse max-[1153px]:w-full max-[1153px]:justify-center">
          <Button text="Claim bonus" color="green" />
          <Button text="Read Review" />
        </div>
      </div>
      {isCardOpened ? (
        <div className="max-[1024px]:flex-col max-[1024px]:gap-[25px] max-[1024px]:items-center flex p-[15px] xl:text-clip rounded-br-[10px] rounded-bl-[10px] text-sm bg-[#F1F3FD] border-t border-solid border-[#EBECF5]">
          <p className="min-[1025px]:w-[446px] min-[1025px]:mr-5 leading-[25px]">
            Potenti placerat in tempor aliquet ut porta fringilla inceptos, massa senectus lacus
            volutpat morbi felis ultrices, cras nullam commodo nulla litora phasellus ornare. Lorem
            ipsum dolor proin id fames pulvinar curabitur faucibus. Potenti placerat in tempor
            aliquet ut porta fringilla inceptos, massa senectus lacus volutpat morbi felis ultrices,
            cras nullam commodo nulla litora phasellus ornare. Lorem ipsum dolor proin id fames
            pulvinar curabitur faucibus.
          </p>
          <div className="min-[1025px]:flex min-[1025px]:w-[404px] flex-col gap-[15px] border-2 border-solid borde-[#EBECF5] rounded-[15px] p-[15px] min-[1025px]:mr-[15px]">
            <div className="flex items-center gap-[5px]">
              <img className="w-[25px] h-[25px]" src={likeIcon} alt="like" />
              <p>Lorem ipsum dolor sit amet consectetur adipiscing</p>
            </div>
            <div className="flex items-center gap-[5px]">
              <img className="w-[25px] h-[25px]" src={likeIcon} alt="like" />
              <p>Lorem ipsum adipiscing</p>
            </div>
            <div className="flex items-center gap-[5px]">
              <img className="w-[25px] h-[25px]" src={likeIcon} alt="like" />
              <p>Lorem ipsum dolor sit amet adipiscing.</p>
            </div>
            <div className="flex items-center gap-[5px]">
              <img className="w-[25px] h-[25px]" src={likeIcon} alt="like" />
              <p>Lorem ipsum dolor sit amet consectetur adipiscing</p>
            </div>
          </div>
          <div className="flex min-[1025px]:w-[404px] flex-col gap-[15px] border-2 border-solid borde-[#EBECF5] rounded-[15px] p-[15px]">
            <div className="flex items-center gap-[5px]">
              <img className="w-[25px] h-[25px]" src={disLikeIcon} alt="like" />
              <p>Lorem ipsum dolor sit amet consectetur adipiscing</p>
            </div>
            <div className="flex items-center gap-[5px]">
              <img className="w-[25px] h-[25px]" src={disLikeIcon} alt="like" />
              <p>Lorem ipsum dolor sit amet consectetur adipiscing</p>
            </div>
            <div className="flex items-center gap-[5px]">
              <img className="w-[25px] h-[25px]" src={disLikeIcon} alt="like" />
              <p>Lorem ipsum dolor sit amet consectetur adipiscing</p>
            </div>
            <div className="flex items-center gap-[5px]">
              <img className="w-[25px] h-[25px]" src={disLikeIcon} alt="like" />
              <p>Lorem ipsum dolor sit amet consectetur adipiscing</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default BonusCard
