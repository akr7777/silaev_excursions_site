import { Header } from './pages/header/header'
import { WellcomeWidget } from './widgets/wellcome-widget/wellcome'
import { Events } from './pages/events/events'

import './App.css'
import { Contacts } from './pages/contacts/contacts'

function App() {
  return (
    <>
      <Header />
      <WellcomeWidget />
      <main>
        <Events />
        <Contacts />
      </main>
    </>
  )
}

export default App
