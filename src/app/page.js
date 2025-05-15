import Navbar from "@/components/navbar"

export default function Home({nama}) {
  return (<>
<Navbar/>
   <section className="w-full flex pl-5 lg:pr-1 xs:pr-0 relative " id="home">
      <div className="flex flex-wrap items-center h-130 lg:w-170 xs:w-80">
        <h1 className="lg:text-7xl xs:text-3xl text-white font-inter text-left lg:w-170 xs:w-80 mt-19">Welcome To My Portfolio</h1>
        <hr className="border-white w-3/4"></hr>
        <p className="w-full text-white text-lg font-inter">Young People Who Have Big Visions 🚀🧸</p>
        <div className="w-full">

        <button className="rounded-md border-white border-1 text-white px-8 py-3 w-50 inline-block font-bold hover:bg-white hover:text-black hover:cursor-pointer">Project</button>
        </div>
      </div>
      <div className="flex justify-end w-full lg:relative  ">
        <img src="/ejp.jpg" className="lg:h-140 opacity-60 object-cover lg:w-100  xs:h-80 xs:w-50 " ></img>
      
      </div>
   </section>
  
  <section id="about" className="text-white w-full mt-4 p-3 lg:h-160">
      <h1 className="text-center text-3xl font-monster">Tentang Saya</h1>
      <div className="w-full flex lg:flex-nowrap xs:flex-wrap  justify-between mx-2 mt-15">
        <div className="w-100 ">
            <h1 className="w-full font-semibold text-2xl">Biodata</h1>
            <p className="mt-4 leading-7">
             Saya Muhammmad Fadhil Akbar, Dipanggil Fadhil,  Saya Lahir Pada Tanggal 4 November 2009,
              Saat Ini Saya Masih Menduduki Bangku SMP, Tinggi Badan Saya 167 Cm, Berat Badan 48 Kg,
              Hobi Saya Coding, Saya Telah Belajar Coding Selama 8 Bulan 
            </p>
            
         
        </div>
          <div className="w-100 xs:mt-9 lg:mt-0">
               <div className="w-full  flex flex-wrap lg:justify-center">
                    <h2 className="text-2xl font-semibold w-full lg:text-center xs:text-left">Skill</h2>
                       <ul className="list-disc  mt-3 pl-7">
              <li>HTML & CSS Basic</li>
              <li>Javascript Basic</li>
              <li>Tailwindcss</li>
              <li>ReactJS Basic</li>
              <li>NodeJS Basic</li>
              
            </ul>
                 </div>
          </div>
         
        <div className="w-100 xs:mt-9 lg:mt-0"> 
            <div className="flex flex-wrap">
                 <div className="w-full">
                  <h1 className="text-2xl font-semibold">Visi Misi</h1>
                  <h2 className="text-lg font-semibold mt-4">Visi</h2>
                  <p>
                    Visi saya ingin berkontribusi dengan perkembangan teknologi di Indonesia ,
                    saya ingin mengembangkan sesuatu yang berdampak besar bagi seluruh manusia , baik dalam skala
                    nasional maupun internasional
                  </p>
                  <h2 className="mt-4 text-lg">Misi</h2>
                  <p>
                    Misi saya adalah selalu meningkatkan kemampuan yang saya punya , dan selalu berkarya dengan 
                    membuat project project sederhana  
                  </p>
                 </div>
                
            </div>
        </div>
      </div>
  </section>


  


  <section id="project" className="w-full px-2 text-white mt-9 font-inter">
     <h1 className="text-2xl text-center">Proyek</h1>
     <div className="flex  flex-wrap px-2 mt-7">
      <div className="w-150 rounded-md">
        <img src="/project1.png " className="w-full rounded-md"></img>
        <h2 className="text-2xl font-monster">Catatan Belanja</h2>
        <p className="font-inter text-sm  mt-2">
          User dapat mencatat apa saja yang ingin
          ia beli , user dapat menginputkan nama barang, jumlah barang, dan harga barang.
          Data yang dimasukkan user akan disimpan ke localstorage agar jika direfresh halaman
          datanya tidak hilang
        </p>
        <a className="px-4 py-1 ring-white ring-2 rounded-md mt-4 inline-block w-70 text-center hover:cursor-pointer active:bg-white active:text-black" href="https://fadhilsal.github.io/Catatan-belanja/">Lihat</a>
      </div>
      <div className="w-150 rounded-md mt-7">
        <img src="/project2.png " className="w-full rounded-md h-100"></img>
        <h2 className="text-lg font-monster">Amimoy E-Commerce</h2>
        <p className="font-inter text-sm  mt-2">
          Saat ini fiturnya cuma tambahkan product ke keranjang dan cari barang melalui
          input dan menu jenis barang. Saat ini tujuan saya membuat ini hanya sebagai bahan
          riset dan pembelajaran .  Sudah tersedia beberapa produk yang telah terpajang 
        
        </p>
        <a className="px-4 py-1 ring-white ring-2 rounded-md mt-4 inline-block w-70 text-center hover:cursor-pointer active:bg-white active:text-black" href="https://fadhilsal.github.io/Amimoy/">Lihat</a>
      </div>
      <div className="w-150 rounded-md mt-7">
        <img src="/image.png " className="w-full rounded-md h-100"></img>
        <h2 className="text-lg font-monster">Amimoy Dashboard</h2>
        <p className="font-inter text-sm text-red-300  mt-2">
          Masih dalam tahap pengembangan !!
        
        </p>
        <a className="px-4 py-1 ring-red-400 ring-2 rounded-md mt-4 inline-block w-70 text-center hover:cursor-pointer active:bg-white active:text-black text-red-300">Lihat</a>
      </div>
     </div>

  </section>
  <div className="xs:fixed bottom-9 -right-2 lg:hidden">
    <a href="https://wa.me/6283821496415"> <img src="/whatsapp.png" className="w-35 h-20 hover:opacity-70 hover:cursor-pointer" /></a>
   
    <h2 className="bg-white text-center rounded-xl text-xs w-20 mx-auto">Hubungi Saya</h2>
    </div>




    <footer className="w-full mt-16 bg-black text-white font-monster p-3 h-80"> 
      <h1 className="w-full text-center text-2xl">Mari berkolaborasi!</h1>
        <h1 className="text-xl mr-2 mt-4">Kontak Saya</h1>
        <div className="flex items-center">
      
          <img src="/email2.png" className="w-14 h-16"/>
          <p>muhammadfadhilsalasiah@gmail.com</p>
     
        </div>
         <div className="flex items-center">
      
          <img src="/telephone.png" className="w-14 h-16"/>
          <p>+62 838-2149-6415</p>
   
        </div>

        <div className="w-full mt-12" >
           <h1 className="text-xs opacity-30 w-full text-center">@Muhammad Fadhil Akbar,2025</h1>
        </div>
    </footer>
  </>
  )
}

