import { Header } from '../header/header'
import { ContactsWidget } from '../../widgets/contacts-widget/contacts-widget'
import { Outlet } from 'react-router'
import { Footer } from '../footer/footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        <ContactsWidget />
      </main>
      <Footer />
    </>
  )
}

export default App
