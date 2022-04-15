import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import Company from './components/Company'
import Contact from './components/Contact'
import Home from './components/Home'
import Container from './components/layout/Container'
import NewProject from './components/NewProject'

function App() {


  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/company">Company</Link>
        <Link to="/newproject">NewProject</Link>
      </div>
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/newproject" element={<NewProject />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </Router>
  )
}

export default App
