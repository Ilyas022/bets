import TeamItem from '../components/TeamItem'

const TablePage: React.FC = (): JSX.Element => {
  return (
    <main className="font-rubik">
      <div className="max-w-[994px] overflow-auto mx-auto text-sm font-montserrat">
        <table className="w-full border-[#F5F5F5] border-solid border min-w-[500px]">
          <thead>
            <tr className="bg-[#F5F5F5]">
              <td className="w-2/3 min-w-[100px]" align="left">
                <div className="pl-2 py-1">Team</div>
              </td>
              <td>
                <div className="px-2 text-center min-w-[30px]">M</div>
              </td>
              <td>
                <div className="px-2 text-center min-w-[30px]">W</div>
              </td>
              <td>
                <div className="px-2 text-center min-w-[30px]">L</div>
              </td>
              <td>
                <div className="px-2 text-center min-w-[30px]">D</div>
              </td>
              <td>
                <div className="px-2 text-center min-w-[30px]">NR</div>
              </td>
              <td align="center" className="min-w-[30px]">
                PTS
              </td>
              <td align="center" className="min-w-[170px]">
                Series Form
              </td>
            </tr>
          </thead>
          <tbody>
            <TeamItem />
            <TeamItem />
            <TeamItem />
            <TeamItem />
          </tbody>
        </table>
      </div>
    </main>
  )
}

export default TablePage
