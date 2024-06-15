import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import SearchBar from "../components/SearchBar/SearchBar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <Hero />
      <div className="px-[1.5rem] md:px-[4rem] lg:px-[10rem] py-6 md:py-10 ">
        <SearchBar />
      </div>
      <div className="px-[1.5rem] md:px-[4rem] lg:px-[10rem] py-6 md:py-10 flex-1">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout

