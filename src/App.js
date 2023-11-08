import { Header } from "./components/header/Header"
import { Nav } from "./components/nav/Nav"
import { About } from "./components/about/About"
import { Portfolio } from "./components/portfolio/Portfolio"
import { History } from "./components/history/History"
// import { Testimonials } from "./components/testimonials/Testimonials"
import { Contacts } from "./components/contact/Contacts"
// import { Skills } from "./components/expirience/Skills"
import { Footer } from "./components/footer/Footer"
import "./index.css"

export default function App() {
    return (
        <div>
            <Header />
            <Nav />
            <About />
            <History />
            {/* <Skills /> */}
            <Portfolio />
            {/* <Testimonials /> */}
            <Contacts />
            <Footer />
        </div>
    )
}
