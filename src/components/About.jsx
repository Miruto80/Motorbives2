// src/components/About.jsx
import React from 'react';
import Title from './Title';
import AboutBox from './About/AboutBox.jsx';
import { useLanguage } from '../context/useLanguage.js'; 

export default function About() {
  const { language } = useLanguage(); 

 
  const texts = {
    en: {
      title: 'About Us',
      subtitle: 'Built on family values, honesty, and real experience in the automotive industry.',
      whoWeAreTitle: 'Who We Are',
      whoWeAreContent: `Motor Vibes LLC is a family-owned business founded and operated by a mother and father, proud parents of two beautiful children.

Although the dealership is only one year old, its founders bring many years of experience in the car and box truck industry, allowing them to open Motor Vibes with a clear vision: to do things right from day one.

As an immigrant family, we understand firsthand the challenges many American and immigrant families face when purchasing a vehicle or investing in one for their business.`,
      hereForYouTitle: 'Here For You',
      hereForYouContent: `At Motor Vibes, we are here to help you—no matter your situation.

We work with all types of customers, but we specialize in those looking for business opportunities through box trucks and cargo vans.

We take the time to listen, advise, and explain every step of the process. We don’t make false promises, we don’t sell low-quality vehicles, and we don’t work with excessive mileage. That’s non-negotiable for us.`,
      missionTitle: 'Our Mission',
      missionContent: `Our mission is to sell the right way—not just sell fast.

We want every customer to leave with:
- one less problem,
- a new opportunity,
- and peace of mind knowing they made the right decision.

Our goal is to grow while creating a strong community where every customer feels part of the Motor Vibes family and the values that represent us.`,
    },
    es: {
      title: 'Acerca de Nosotros',
      subtitle: 'Construido sobre valores familiares, honestidad y experiencia real en la industria automotriz.',
      whoWeAreTitle: 'Quiénes Somos',
      whoWeAreContent: `Motor Vibes LLC es un negocio familiar fundado y operado por una madre y un padre, orgullosos padres de dos hermosos hijos.

Aunque el concesionario tiene solo un año, sus fundadores aportan muchos años de experiencia en la industria de automóviles y camiones de caja, lo que les permite abrir Motor Vibes con una visión clara: hacer las cosas bien desde el primer día.

Como familia inmigrante, entendemos de primera mano los desafíos que enfrentan muchas familias estadounidenses e inmigrantes al comprar un vehículo o invertir en uno para su negocio.`,
      hereForYouTitle: 'Aquí Para Ti',
      hereForYouContent: `En Motor Vibes, estamos aquí para ayudarte, sin importar tu situación.

Trabajamos con todo tipo de clientes, pero nos especializamos en aquellos que buscan oportunidades de negocio a través de camiones de caja y furgonetas de carga.

Tomamos el tiempo para escuchar, asesorar y explicar cada paso del proceso. No hacemos promesas falsas, no vendemos vehículos de baja calidad y no trabajamos con kilometraje excesivo. Eso es innegociable para nosotros.`,
      missionTitle: 'Nuestra Misión',
      missionContent: `Nuestra misión es vender de la manera correcta, no solo vender rápido.

Queremos que cada cliente se vaya con:
- un problema menos,
- una nueva oportunidad,
- y tranquilidad sabiendo que tomó la decisión correcta.

Nuestro objetivo es crecer mientras creamos una comunidad fuerte donde cada cliente se sienta parte de la familia Motor Vibes y los valores que nos representan.`,
    },
  };

  const currentTexts = texts[language] || texts.en; 

  return (
    <section className="container my-5">
      <Title text={currentTexts.title} />
      <p className="text-center text-white mt-2 mb-4">
        {currentTexts.subtitle}
      </p>

      <div className="row g-4 mt-4">
        {/* QUIÉNES SOMOS */}
        <div className="col-lg-4 col-md-6">
          <AboutBox
            title={<><i className="fa-solid fa-house me-2" aria-hidden="true"></i>{currentTexts.whoWeAreTitle}</>}
            bgColor="#0f0f0f"
            textColor={'#fff'}
            content={currentTexts.whoWeAreContent}
          />
        </div>

        {/* ESTAMOS AQUÍ PARA TI */}
        <div className="col-lg-4 col-md-6">
          <AboutBox
            title={<><i className="fa-solid fa-handshake me-2" aria-hidden="true"></i>{currentTexts.hereForYouTitle}</>}
            bgColor='linear-gradient(135deg, #8b8356 0%, #e6cc72 30%, #d1b257 65%, #8b8356 100%)'
            textColor={'#111'}
            content={currentTexts.hereForYouContent}
          />
        </div>

        {/* MISIÓN */}
        <div className="col-lg-4 col-md-12">
          <AboutBox
            title={<><i className="fa-solid fa-bullseye me-2" aria-hidden="true"></i>{currentTexts.missionTitle}</>}
            bgColor="#0f0f0f"
            textColor={'#fff'}
            content={currentTexts.missionContent}
          />
        </div>
      </div>
    </section>
  );
}