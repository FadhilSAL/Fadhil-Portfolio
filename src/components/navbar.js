export default function Navbar(){

    return(
    <nav className="font-inter w-full bg-neutral-800 px-3 py-4 flex justify-between">
            <h1 className="text-white ml-3">Fadhil Akbar</h1>
          <ul className=" text-white w-120 justify-around  lg:flex xs:hidden" >
            <li><a href="#home">Beranda</a></li>
            <li><a href="#about">Tentang Saya</a></li>
            <li><a>Project </a></li>
            <li><a>Hubungi</a></li>
    
          </ul>

        </nav>
    )
}

