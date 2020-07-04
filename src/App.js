import React from 'react'
// import { BrowserRouter, Route, Switch } from 'react-router-dom'

import HeroBanner from './components/HeroBanner'
import AllProj from './components/projects/AllProj'
import Contact from './components/Contact'

const App = () => {

  const [theme, setTheme] = React.useState('theme--dark')


  const changeTheme = () => {
    if (theme === 'theme--light') {
      setTheme('theme--dark')
    } else {
      setTheme('theme--light')
    }
  }

  // React.useEffect(() => {
  //   if (theme === 'theme--light') {
  //     setTheme('theme--dark')
  //   } else {
  //     setTheme('theme--light')
  //   }
  // },theme)


  return (
    <div className={theme}>
      
      <div className="switcher">
        <input onChange={changeTheme} type="checkbox" className="switcher__input" id="switcher"/>
        <label htmlFor="switcher" className="switcher__label">
          <span className="switcher__control"></span>
          <span className="switcher__mode">Mode</span>
        </label>
      </div>


      <HeroBanner />
      <AllProj 
        theme={theme}/>
      <Contact
        theme={theme} />
    </div>
  )
}

export default App
