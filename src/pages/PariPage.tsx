import pariLogo from '../assets/icons/pariLogo.svg'
import starIcon from '../assets/icons/starIcon.svg'
import windowsIcon from '../assets/icons/windowsIcon.svg'
import crossIcon from '../assets/icons/crossIcon.svg'
import checkIcon from '../assets/icons/checkIcon.svg'
import androidIcon from '../assets/icons/androidIcon.svg'
import appleIcon from '../assets/icons/appleIcon.svg'
import rocketIcon from '../assets/icons/rocketIcon.svg'
import presentIcon from '../assets/icons/presentIcon.svg'

import figuresBg from '../assets/icons/figuresBg.svg'

import mcIcon from '../assets/icons/mcIcon.svg'
import discoverIcon from '../assets/icons/discoverIcon.svg'
import aeIcon from '../assets/icons/aeIcon.svg'
import maestroIcon from '../assets/icons/maestroIcon.svg'
import upIcon from '../assets/icons/upIcon.svg'
import jcbIcon from '../assets/icons/jcbIcon.svg'
import Button from '../components/Button'

import calendarIcon from '../assets/icons/calendarIcon.svg'
import shieldIcon from '../assets/icons/shieldIcon.svg'
import phoneIcon from '../assets/icons/phoneIcon.svg'
import locationIcon from '../assets/icons/locationIcon.svg'
import serverIcon from '../assets/icons/serverIcon.svg'

import userImg from '../assets/img/userImg.png'

const PariPage: React.FC = (): JSX.Element => {
  return (
    <main className="font-rubik">
      <div className="grid max-[700px]:grid-cols-1 max-[950px]:grid-cols-2 grid-cols-[2fr_1fr] min-[1350px]:grid-cols-[991px_314px] gap-[15px] px-3 max-w-[1344px] mx-auto text-sm">
        <div className="grid max-[700px]:col-span-1 max-[1350px]:col-span-2 max-[630px]:gap-y-5 max-[630px]:grid-cols-1 grid-cols-[auto_minmax(auto,_329px)] grid-rows-[auto_auto] bg-gradient-to-b from-[#313446] from-[-19%] to-[#070B1F] to-[97%] rounded-[15px] overflow-hidden">
          <div className="relative max-[500px]:px-[10px] max-[500px]:pt-[10px] px-[20px] pt-[20px] max-[435px]:gap-y-[15px] grid max-[890px]:grid-cols-[150px_auto] max-[400px]:grid-cols-[auto_auto] grid-cols-[217px_auto] grid-rows-[auto_auto] max-[500px]:gap-x-[10px] gap-x-5 min-[631px]:mb-[23px]">
            <div className="max-[400px]:w-[74px] max-[400px]:h-[74px] min-[436px]:row-span-2 flex items-center justify-center max-[890px]:w-[150px] w-[217px] h-[119px] bg-gradient-to-b from-[#313446] from-[14%] to-[#070B1F] to-[150%] rounded-[15px]">
              <img
                className="max-[400px]:w-[52px] max-[400px]:h-[16px] max-[890px]:w-[90px] w-[130px] h-[40px]"
                src={pariLogo}
                alt=""
              />
            </div>
            <div className="flex flex-col gap-[5px]">
              <p className="text-xl font-medium text-[#FFF]">PariMatch</p>
              <div className="flex items-center max-[950px]:order-3">
                <p className="mr-[10px] text-[#FFF]">5.0</p>
                <img className="w-[17px] h-[17px]" src={starIcon} alt="star" />
                <img
                  className="hidden min-[560px]:block w-[17px] h-[17px]"
                  src={starIcon}
                  alt="star"
                />
                <img
                  className="hidden min-[560px]:block w-[17px] h-[17px]"
                  src={starIcon}
                  alt="star"
                />
                <img
                  className="hidden min-[560px]:block w-[17px] h-[17px]"
                  src={starIcon}
                  alt="star"
                />
                <img
                  className="hidden min-[560px]:block w-[17px] h-[17px]"
                  src={starIcon}
                  alt="star"
                />
              </div>
              <p className="text-[#72768D] max-[950px]:order-2 max-[500px]:text-xs max-[420px]:text-[10px]">
                Beting/Casino/Live Games/Fast Game
              </p>
            </div>
            <div className="max-[400px]:col-span-2  min-[1000px]:absolute top-6 -right-[60px] flex items-start gap-5 min-[1000px]:-translate-x-20">
              <div className="flex gap-[10px] items-center">
                <img src={windowsIcon} alt="windows" />
                <img src={crossIcon} alt="cross" />
              </div>
              <div className="flex gap-[10px] items-center">
                <img src={androidIcon} alt="android" />
                <img src={checkIcon} alt="check" />
              </div>
              <div className="flex gap-[10px] items-center">
                <img src={appleIcon} alt="apple" />
                <img src={checkIcon} alt="check" />
              </div>
            </div>
          </div>
          <div className="px-5 order-3">
            <div className="max-[910px]:flex-col flex gap-[15px] max-w-[580px] mb-6">
              <div className="flex flex-col gap-[15px]">
                <div className="flex items-center gap-[10px]">
                  <img className="h-[17px] w-[17px]" src={rocketIcon} alt="" />
                  <p className="text-[#FFFFFFE5]">Lorem ipsum dolor sit consectetur</p>
                </div>
                <div className="flex items-center gap-[10px]">
                  <img className="h-[17px] w-[17px]" src={rocketIcon} alt="" />
                  <p className="text-[#FFFFFFE5]">Lorem ipsum dolor sit consectetur</p>
                </div>
                <div className="flex items-center gap-[10px]">
                  <img className="h-[17px] w-[17px]" src={rocketIcon} alt="" />
                  <p className="text-[#FFFFFFE5]">Lorem ipsum dolor sit consectetur</p>
                </div>
              </div>
              <div className="flex flex-col gap-[15px]">
                <div className="flex items-center gap-[10px]">
                  <img className="h-[17px] w-[17px]" src={rocketIcon} alt="" />
                  <p className="text-[#FFFFFFE5]">Lorem ipsum dolor sit consectetur</p>
                </div>
                <div className="flex items-center gap-[10px] max-[910px]:hidden">
                  <img className="h-[17px] w-[17px]" src={rocketIcon} alt="" />
                  <p className="text-[#FFFFFFE5]">Lorem ipsum dolor sit consectetur</p>
                </div>
                <div className="flex items-center gap-[10px] max-[910px]:hidden">
                  <img className="h-[17px] w-[17px]" src={rocketIcon} alt="" />
                  <p className="text-[#FFFFFFE5]">Lorem ipsum dolor sit consectetur</p>
                </div>
              </div>
            </div>
            <div>
              <div className="max-[1015px]:flex-col flex gap-[10px] pb-[15px]">
                <div className="flex gap-[10px]">
                  <div className="h-[44px] w-[69px] bg-[#31364A8C] flex items-center justify-center rounded-[5px]">
                    <img className="max-w-[33px] max-h-[20px]" src={mcIcon} alt="master card" />
                  </div>
                  <div className="h-[44px] w-[69px] bg-[#31364A8C] flex items-center justify-center rounded-[5px]">
                    <img className="max-w-[33px] max-h-[20px]" src={discoverIcon} alt="discover" />
                  </div>
                  <div className="h-[44px] w-[69px] bg-[#31364A8C] flex items-center justify-center rounded-[5px]">
                    <img
                      className="max-w-[33px] max-h-[20px]"
                      src={aeIcon}
                      alt="american express"
                    />
                  </div>
                  <div className="h-[44px] w-[69px] bg-[#31364A8C] flex items-center justify-center rounded-[5px]">
                    <img className="max-w-[33px] max-h-[20px]" src={maestroIcon} alt="maestro" />
                  </div>
                </div>
                <div className="flex gap-[10px]">
                  <div className="h-[44px] w-[69px] bg-[#31364A8C] flex items-center justify-center rounded-[5px]">
                    <img className="max-w-[33px] max-h-[20px]" src={upIcon} alt="union pay" />
                  </div>
                  <div className="h-[44px] w-[69px] bg-[#31364A8C] flex items-center justify-center rounded-[5px]">
                    <img className="max-w-[33px] max-h-[20px]" src={jcbIcon} alt="jcb" />
                  </div>
                  <div className="h-[44px] w-[69px] bg-[#31364A8C] flex items-center justify-center rounded-[5px]">
                    <img
                      className="max-w-[33px] max-h-[20px]"
                      src={aeIcon}
                      alt="american express"
                    />
                  </div>
                  <div className="h-[44px] w-[69px] bg-[#31364A8C] flex items-center justify-center rounded-[5px]">
                    <img className="max-w-[33px] max-h-[20px]" src={maestroIcon} alt="maestro" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-span-2 order-2 max-[630px]:border max-[630px]:border-solid border-[#7A7E9B33] max-[630px]:mx-[10px] rounded-[15px] min-[631px]:max-w-[329px] bg-gradient-to-b from-[#313446] from-[-11%] min-[631px]:from-[19.86%] to-[#070B1F] to-[111%] min-[631px]:to-[97.93%]">
            <div className="max-[630px]:hidden">
              <img className="h-[89px] w-full object-cover" src={figuresBg} alt="" />
            </div>
            <div className="flex flex-col gap-[10px] p-5">
              <div className="flex items-center">
                <img
                  className="max-[690px]:w-[14px] max-[690px]:h-[14px] w-[17px] h-[17px] mr-[5px]"
                  src={presentIcon}
                  alt="present"
                />
                <p className="font-bold max-[690px]:text-xs text-[#F90]">Welcome bonus</p>
              </div>
              <h2 className="font-bold max-[690px]:text-lg text-2xl text-[#fff]">
                100% Up to 500 $
              </h2>
              <p className="text-xs text-[#72768D]">
                Lorem ipsum dolor sit amet consectetur adipiscing elit lacus tempor quis volutpat
                integer lacinia montes nisl, class quisque leo consequat sed lobortis.
              </p>
              <Button color="green" text="Claim bonus" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[23px] bg-[#F7F8FD] p-5 rounded-[15px] max-[500px]:order-2 max-[1350px]:order-3 max-[350px]:text-[13px]">
          <div className="flex items-start gap-[10px]">
            <img src={calendarIcon} alt="calendar" />
            <div>
              <p className="text-[#313446] font-medium">Foundation</p>
              <p>1994</p>
            </div>
          </div>
          <div className="flex items-start gap-[10px]">
            <img src={shieldIcon} alt="calendar" />
            <div>
              <p className="text-[#313446] font-medium">Licensed</p>
              <p>Curaso GLH-OCCHKTW0706292016</p>
            </div>
          </div>
          <div className="flex items-start gap-[10px]">
            <img src={phoneIcon} alt="calendar" />
            <div>
              <p className="text-[#313446] font-medium">Apps</p>
              <p>IOS, Android, Windows</p>
            </div>
          </div>
          <div className="flex items-start gap-[10px]">
            <img src={locationIcon} alt="calendar" />
            <div>
              <p className="text-[#313446] font-medium">Country</p>
              <p>Europe, Russia, North American</p>
            </div>
          </div>
          <div className="flex items-start gap-[10px]">
            <img src={serverIcon} alt="calendar" />
            <div>
              <p className="text-[#313446] font-medium">Apps</p>
              <p>IOS, Android, Windows</p>
            </div>
          </div>
        </div>
        <div className="bg-[#F7F8FD] p-5 pt-4 max-[500px]:order-3 max-[1350px]:order-2">
          <div className="flex gap-[10px] mb-[7px]">
            <img className="h-[31px] w-[31px] rounded-full bg-[#313446]" src={userImg} alt="" />
            <div>
              <p>Parimatch</p>
              <p>Commnet from Author</p>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit lacus tempor quis volutpat
            integer lacinia montes nisl, class quisque leo consequat sed lobortis proin suscipit
            vulputate id fames pulvinar curabitur faucibus. Lorem ipsum dolor sit amet consectetur
            adipiscing elit lacus tempor quis volutpat integer lacinia montes nisl, class quisque
            leo consequat sed lobortis proin suscipit vulputate id fames pulvinar curabitur
            faucibus. Lorem ipsum dolor sit amet consectetur adipiscing elit lacus tempor quis
            volutpat integer lacinia montes nisl, class quisque leo consequat sed lobortis proin
            suscipit vulputate id fames pulvinar curabitur faucibus.
          </p>
        </div>
      </div>
    </main>
  )
}

export default PariPage
