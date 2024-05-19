import Navbar from '@/components/Navbar/Navbar'
import Home from '@/components/Home/Home'
import Projects from '@/components/Projects/Projects'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'

export default function Page() {
  return (
    <div className="bg-[#F5EEC8] h-full">
      <Navbar />
      <Home />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}