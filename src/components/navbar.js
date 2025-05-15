'use client'
export default function Navbar(){

    return(
    <nav className="font-inter w-full bg-neutral-800 px-3 py-4 flex justify-between">
            <h1 className="text-white ml-3">Fadhil Akbar</h1>
          <ul className=" text-white w-120 justify-around  lg:flex xs:hidden " >
            <li><a href="#home">Beranda</a></li>
            <li><a href="#about">Tentang Saya</a></li>
            <li><a>Proyek</a></li>
            <li><a>Hubungi</a></li>
    
          </ul>
     <button className=" flex flex-wrap w-9   h-8 mr-3 lg:hidden hover:cursor-pointer ring-white pt-1 px-1 rounded-md" id="button-nav" onClick={navmenu} >
         <span className="line-menu h-[1px]"></span>
          <span className="line-menu h-[1px]"></span>
           <span className="line-menu h-[1px]"></span>
     </button>
     <div className="absolute top-15 w-100 h-60  right-0 z-999 lg:hidden">
      <div className="absolute right-0 hidden" id="nav-menu">
        <ul className=" text-white w-120 justify-around  lg:flex flex-wrap bg-neutral-800 h-70    flex " >
            <li className="w-full "><a href="#home" className="menu-list ">Beranda</a></li>
            <li className="w-full"><a href="#about" className="menu-list">Tentang Saya</a></li>
            <li className="w-full"><a href="#project" className="menu-list">Proyek</a></li>
            <li className="w-full"><a href="#contact" className="menu-list">Hubungi</a></li>
    
          </ul>
      </div>
     </div>
        </nav>
    )
}


function navmenu(){
  const menu  =  document.getElementById('nav-menu');
  const button = document.getElementById('button-nav');
  button.classList.toggle('ring-2')
  menu.classList.toggle('hidden');
}
