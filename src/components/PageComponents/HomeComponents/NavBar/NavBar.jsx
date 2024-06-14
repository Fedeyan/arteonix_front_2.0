import React from 'react'
import Styles from './NavBar.module.css'
import NavBarSection from './NavBarSection/NavBarSection'
import { FaBriefcase, FaHome, FaLightbulb,  FaUser } from 'react-icons/fa'
import { FaMessage,  FaTicket } from 'react-icons/fa6'
import { MdWebStories } from 'react-icons/md'
import { HiSpeakerphone } from 'react-icons/hi'
import { FiHelpCircle, FiLogOut } from 'react-icons/fi'



const NavBar = () => {



  return (
    <nav className={Styles.container}>
      {
        sections && Array.isArray(sections) && sections.map((sectionData, index) => {
          return <>
            <NavBarSection showDivider={index !== sections.length - 1} title={sectionData.title} itemsData={sectionData.itemsData} key={index} />
          </>
        })
      }
    </nav>
  )
}

const sections = [
  {
    itemsData: [
      {
        id: 1, Icon: FaHome, text: "Inicio"
      },
      {
        id: 2, Icon: FaUser, text: "Perfil"
      }]
  },

  {
    title: "Social",
    itemsData: [
      {
        id: 3, Icon: FaMessage, text: "Mensajes"
      },
      {
        id: 4, Icon: MdWebStories, text: "Historias"
      },
      {
        id: 4, Icon: FaTicket, text: "Eventos"
      },
      {
        id: 4, Icon: FaLightbulb, text: "Explorar"
      },

    ]
  },


  {
    title: "Negocios",
    itemsData: [

      {
        id: 4, Icon: FaBriefcase, text: "Mis encargos"
      },
      {
        id: 4, Icon: HiSpeakerphone, text: "Promocionarme"
      },

    ]
  },
  {
    title: "Comunidad",
    itemsData: [

      {
        id: 4, text: "Grupo de dibujo", image: "https://previews.123rf.com/images/tanyastock/tanyastock1508/tanyastock150801384/43181965-icono-de-l%C3%A1piz-dibujo-signo-herramienta-equipo-de-estudio-icono-de-contorno-lineal-sobre-fondo.jpg"
      },
      {
        id: 4, text: "Grupo de PixelArt", image: "https://imgb.ifunny.co/images/adcffe66c803e2445dfd2e230b0ef7fcab8e79175f014df6336c72f45b95c9fe_1.jpg"
      },

    ]
  },
  {
    itemsData: [


      {
        id: 4, text: "Ayuda y soporte", Icon: FiHelpCircle
      },
      {
        id: 4, text: "Cerrar sesión", Icon: FiLogOut
      },

    ]
  }
]

export default NavBar