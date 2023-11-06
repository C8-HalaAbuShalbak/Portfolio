import React from 'react'

const Footer = () => {
  return (
<footer className=" bottom-0 mt-12 text-white  md:h-38 w-screen justify-between bg-indigo-800/50 p-3 content-center">
        
         
 
      
          <ul className="flex flex-row justify-evenly align-middle">
          <a href="tel:00962798967357"><img src=".\images.png"className="w-13 h-14 animate-pulse rounded-md"/> </a>
            <a href='https://github.com/HalaAbuShalbak'><img className="w-13 h-14 animate-pulse rounded-md" src=".\GitHub-Mark-ea2971cee799.png"/></a>
            <a href='mailto:halaj.abushalbak@gmail.com'>
              <img src=".\download.jpg" className="w-13 h-14 animate-pulse rounded-md"/>
            </a>
            <a href='https://drive.google.com/file/d/1znNnwkk2DIZkAl0CsiElhbmf-7bRO0Vx/view?usp=sharing'>
            <img src='.\resume.png' className="w-13 h-14 animate-pulse rounded-md"/>
            </a>
            <a href="https://www.linkedin.com/in/hala-joudehabushalbak/"> <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"className="w-13 h-14 animate-pulse rounded-md"/> </a>
          </ul>
     
      </footer>
     

  )
}

export default Footer