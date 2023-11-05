import React from 'react'

const Footer = () => {
  return (
<footer className="  bottom-0  z-40 text-white grid grid-cols-1 md:grid-cols-4 md:h-38 w-screen justify-between bg-indigo-800 p-3">
        <section
          id="skills"
          className=" md:col-start-1 md:col-end-4 md:grid grid-cols-3 gap-1"
        >
          <div >
            <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />
            <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" />
            <img src="https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white" />
          </div>
          <div>
            <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=black&color=F7DF1E" />
            <img src="https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=red&color=F7DF1E" />
            <img src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
            <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white" />
          </div>
          <div>
          <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/>
 <img src= "https://img.shields.io/badge/Trello-0052CC?style=for-the-badge&logo=trello&logoColor=white"/>
 <img src="https://img.shields.io/badge/Canva-%2300C4CC.svg?&style=for-the-badge&logo=Canva&logoColor=white"/>
          </div>
        </section>
        <section id="links" className=" flex md:justify-center">
          <ul className="flex flex-col">
            <li className="flex "><img className="w-[30px] h-[30px]" src=".\GitHub-Mark-ea2971cee799.png"/>github</li>
            <li>📧 halaj.abushalbak@gmail.com</li>
            <li>resume</li>
            <li><a href="https://www.linkedin.com/in/hala-joudehabushalbak/"> <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /> hala-joudehabushalbak</a></li>
          </ul>
        </section>
      </footer>
     

  )
}

export default Footer