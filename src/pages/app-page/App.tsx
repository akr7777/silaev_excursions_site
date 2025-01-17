import { Header } from '../header/header'
import { WellcomeWidget } from '../../widgets/wellcome-widget/wellcome'
import { Contacts } from '../contacts/contacts'
import { Outlet } from 'react-router'

function App() {
  return (
    <>
      <Header />
      <WellcomeWidget />
      <main>
        <Outlet />
        <Contacts />
      </main>
    </>
  )
}

export default App
