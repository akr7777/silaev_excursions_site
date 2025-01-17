import { Header } from '../header/header'
import { ContactsWidget } from '../../widgets/contacts-widget/contacts-widget'
import { Outlet } from 'react-router'

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        <ContactsWidget />
      </main>
    </>
  )
}

export default App
