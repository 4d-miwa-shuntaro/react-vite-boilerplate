import { useState } from 'react'
import reactLogo from '~/assets/react.svg'
import s from './index.module.scss'
import clsx from 'clsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={s.App}>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className={s.logo} alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className={clsx(s.logo, s.react)} alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className={s.card}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className={s.read}>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
