import { NavLink } from 'react-router-dom'

const Components: React.FC = (): JSX.Element => {
  return (
    <header className="bg-blue-400 mb-10">
      <div className="max-w-[1344px] mx-auto p-3 flex items-center justify-center gap-5">
        <NavLink
          className={({ isActive }: { isActive: boolean }) =>
            (isActive ? 'bg-red-500' : '') + ' px-3 py-1 bg-primary/70 text-white rounded-lg'
          }
          to={'/'}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }: { isActive: boolean }) =>
            (isActive ? 'bg-red-500' : '') + ' px-3 py-1 bg-primary/70 text-white rounded-lg'
          }
          to={'/pari'}
        >
          PariMatch
        </NavLink>
        <NavLink
          className={({ isActive }: { isActive: boolean }) =>
            (isActive ? 'bg-red-500' : '') + ' px-3 py-1 bg-primary/70 text-white rounded-lg'
          }
          to={'/table'}
        >
          Table
        </NavLink>
      </div>
    </header>
  )
}

export default Components
