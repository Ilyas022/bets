import ResultIcon from './ResultIcon'

import innocentFlag from '../assets/img/innocentFlag.png'
import dehliFlag from '../assets/img/dehliFlag.png'
import shriFlag from '../assets/img/shriFlag.png'

import tArrowIcon from '../assets/icons/tArrowIcon.svg'
import { useState } from 'react'
import { useResponsive } from '../hooks/responsive'

const TeamItem: React.FC = (): JSX.Element => {
  const [isInfoOpened, setInfoOpened] = useState<boolean>(false)
  const [isMobile] = useResponsive('MOBILE')

  return (
    <>
      <tr className="bg-[#005283] text-white">
        <td>
          <button
            className="pl-2 py-2 flex items-center max-[500px]:gap-4 gap-10 whitespace-nowrap"
            onClick={() => setInfoOpened((prev) => !prev)}
          >
            <div className="flex items-center gap-2">
              <img className="w-6 h-6" src={innocentFlag} alt="" />
              <p>{isMobile ? 'Innocent Kaia'.slice(0, 3) : 'Innocent Kaia'}</p>
            </div>
            <img
              className={`w-[14px] h-2` + (!isInfoOpened ? ' rotate-180' : '')}
              src={tArrowIcon}
              alt=""
            />
          </button>
        </td>
        <td align="center">25</td>
        <td align="center">13</td>
        <td align="center">7</td>
        <td align="center">1</td>
        <td align="center">3</td>
        <td align="center">4</td>
        <td align="center">
          <div className="flex justify-center items-center gap-1 px-6">
            <ResultIcon state="lose" />
            <ResultIcon state="win" />
            <ResultIcon state="lose" />
            <ResultIcon state="win" />
            <ResultIcon state="draw" />
          </div>
        </td>
      </tr>
      {isInfoOpened ? (
        <tr>
          <td colSpan={8}>
            <table className="w-full">
              <thead className="font-medium">
                <tr className="bg-[#DEECFA]">
                  <td align="left" className="min-w-[100px]">
                    <div className="pl-2 py-1">Opponent</div>
                  </td>
                  <td align="left" className="min-w-[100px]">
                    Date
                  </td>
                  <td align="left" className="min-w-[250px]">
                    Result
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[#F5F5F5]">
                  <td>
                    <div className="pl-2 py-2 flex items-center gap-2 whitespace-nowrap">
                      <img className="w-6 h-6" src={dehliFlag} alt="dehli" />
                      <p>{isMobile ? 'Dehli Capitals'.slice(0, 3) : 'Dehli Capitals'}</p>
                    </div>
                  </td>
                  <td>04 Nov</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <ResultIcon state="lose" />
                      <p>New Zealand won by 35 runs</p>
                    </div>
                  </td>
                </tr>
                <tr className="bg-[#F5F5F5]">
                  <td className="w-1/3">
                    <div className="pl-2 py-2 flex items-center gap-2">
                      <img className="w-6 h-6" src={shriFlag} alt="shree lanka" />
                      <p>{isMobile ? 'Shree Lanka'.slice(0, 3) : 'Shree Lanka'}</p>
                    </div>
                  </td>
                  <td>04 Nov</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <ResultIcon state="win" />
                      <p>New Zealand won by 35 runs</p>
                    </div>
                  </td>
                </tr>
                <tr className="bg-[#F5F5F5]">
                  <td>
                    <div className="pl-2 py-2 flex items-center gap-2">
                      <img className="w-6 h-6" src={dehliFlag} alt="dehli" />
                      <p>{isMobile ? 'Dehli Capitals'.slice(0, 3) : 'Dehli Capitals'}</p>
                    </div>
                  </td>
                  <td>04 Nov</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <ResultIcon state="lose" />
                      <p>New Zealand won by 35 runs</p>
                    </div>
                  </td>
                </tr>
                <tr className="bg-[#F5F5F5]">
                  <td>
                    <div className="pl-2 py-2 flex items-center gap-2">
                      <img className="w-6 h-6" src={shriFlag} alt="dehli" />
                      <p>{isMobile ? 'Shree Lanka'.slice(0, 3) : 'Shree Lanka'}</p>
                    </div>
                  </td>
                  <td>04 Nov</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <ResultIcon state="win" />
                      <p>New Zealand won by 35 runs</p>
                    </div>
                  </td>
                </tr>
                <tr className="bg-[#F5F5F5]">
                  <td>
                    <div className="pl-2 py-2 flex items-center gap-2">
                      <img className="w-6 h-6" src={shriFlag} alt="dehli" />
                      <p>{isMobile ? 'Shree Lanka'.slice(0, 3) : 'Shree Lanka'}</p>
                    </div>
                  </td>
                  <td>04 Nov</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <ResultIcon state="draw" />
                      <p>New Zealand won by 35 runs</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      ) : null}
    </>
  )
}

export default TeamItem
