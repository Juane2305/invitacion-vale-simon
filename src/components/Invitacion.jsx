import cancion from "/song.mp3";
import Countdown from "./Countdown";
import Lugares from "./Lugares";
import GoogleCalendarButton from "./GoogleCalendarButton";
import DressCode from "./DressCode";
import DatosBancarios from "./DatosBancarios";
import Asistencia from "./Asistencia";
import Footer from "./Footer";
import TextoFinal from "./TextoFinal";
import MusicScreen from "./MusicScreen";
import { useLocation } from "react-router-dom";

const Invitacion = () => {

  const location = useLocation();
  const isFiesta = location.pathname === "/fiesta";


  const targetDate = new Date("2025-11-15T16:30:00-03:00");

  const colorPrincipal = "#d0bcab";

  return (
    <div className="w-full relative font-quicksand overflow-hidden">

      {/* Música */}
        <div className="absolute">
          <MusicScreen cancion={cancion} />
        </div>

      {/* Fondo y contenido principal */}
      <div className="relative flex flex-col items-center justify-center h-screen w-full text-center bg-black">
        <div className="block absolute inset-0 md:hidden">
          <img src="https://res.cloudinary.com/dfschbyq2/image/upload/v1756475472/2_1_iuo4td.jpg" alt="Iniciales" className="absolute inset-0 w-full h-full object-cover opacity-60" />
        </div>
        <div className="md:block absolute inset-0 hidden">
          <img src="https://res.cloudinary.com/dfschbyq2/image/upload/v1756759362/Disen%CC%83o_sin_ti%CC%81tulo_56_gp1cg7.jpg" alt="Iniciales" className="absolute inset-0 w-full h-full object-cover  opacity-60" />
        </div>
        {/* <div
          className="hidden md:block absolute text-gray-500 font-tangerine text-[10rem] md:text-[17rem]"
          style={{
            opacity: 0.1,
            transform: "translateY(-50%)",
            top: "50%",
          }}
        >
          F M
        </div> */}

        {/* Texto superior */}
        <p className="z-10 text-xl uppercase tracking-widest mb-10 font-cormorant text-white ">
          ¡Nos Casamos!
        </p>

        {/* Nombres completos */}
        <h1 className="z-10 text-5xl md:text-7xl text-white  italic font-cormorant">
          Valentina & Simón
        </h1>

        {/* Fecha */}
        <p className="z-10 mt-15 text-xl font-cormorant text-white ">
          1 5 . 1 1 . 2 0 2 5
        </p>
      </div>

      {/* Plantilla dinámica */}
      <div>
        {/* Contador */}
          <section
            id="contador"
            className="bg-beige w-full flex flex-col items-center justify-center gap-y-5 py-10 font-thin"
          >
            <Countdown
              containerClasses={
                "w-full flex flex-col justify-center items-center gap-y-5"
              }
              targetDate={targetDate}
            />
          </section>
        <section id="lugares" className="relative text-center">
          <Lugares
            iglesia="Iglesia Nuestra Señora del Tránsito"
            hora_iglesia="16:30 hs"
            salon="Quinta Doña Elvira"
            hora_civil="18:30 hs"
          />
          
        </section>
        {!isFiesta? (
          <div className="bg-[#a8ad9a] mt-10 text-center text-white relative">
            <GoogleCalendarButton
              titleCalendar="Casamiento de Valentina y Simon"
              fechaComienzo="20251115T163000"
              fechaFin="20251116T000000"
              salon="Iglesia Nuestra Señora del Tránsito"
              imgClass="text-white"
              buttonClass="bg-white text-gray-800 hover:bg-transparent hover:text-white border-2 border-white py-3 px-6 rounded-full font-semibold transform transition-transform duration-300 ease-in-out"
            />
          </div>)
          : (
            <div className="bg-[#a8ad9a] mt-10 text-center text-white relative">
            <GoogleCalendarButton
              titleCalendar="Casamiento de Valentina y Simon"
              fechaComienzo="20251115T223000"
              fechaFin="20251116T050000"
              salon="Quinta Doña Elvira, Maipú"
              imgClass="text-white"
              buttonClass="bg-white text-gray-800 hover:bg-transparent hover:text-white border-2 border-white py-3 px-6 rounded-full font-semibold transform transition-transform duration-300 ease-in-out"
            />
          </div>
          )  
        }
          <div className="relative">
            <DressCode dress_code="Formal" />
          </div>
          {!isFiesta && (
            <DatosBancarios
              texto="Si deseás hacernos un regalo te dejamos nuestros datos"
              claseContenedor=" text-white"
              textSize="text-lg"
              background={{ backgroundColor: colorPrincipal }}
              claseBotonModal={{
                backgroundColor: 'white',
                borderColor: '#a8ad9a',
              }}
              styleBorderModal={{ borderColor: '#a8ad9a' }}
              cbu="2850406740095228990938"
              alias="MUELLE.BRUJO.BOTA"
              banco="Banco Macro"
              nombre="GUERRA SIMON SANCHEZ"
            />
          )}
          {!isFiesta? (
            <Asistencia
              clase="py-10 bg-fondo-banner"
              claseButton="border-2 py-3 px-6 rounded-full border-gray-800 font-semibold hover:border-gray-700 hover:bg-white hover:text-gray:800"
              linkAsistencia="https://docs.google.com/forms/d/e/1FAIpQLSexV2P3CTplkvCHYLfzcIcQiDTEZwF0r_nRCQEuQ6a3bf8CPA/viewform?usp=header"
            />
          )
          :
          (
            <Asistencia
            clase="py-10 bg-fondo-banner"
            claseButton="border-2 py-3 px-6 rounded-full border-gray-800 font-semibold hover:border-gray-700 hover:bg-white hover:text-gray:800"
            linkAsistencia="https://docs.google.com/forms/d/e/1FAIpQLScGgF7oxHRdrpfe2vW8t_RWcuIXlPr3JH3qVOaNq46_drwBqA/viewform?usp=header"
          />
          )}
        <TextoFinal textoFinal="¡Gracias por venir!" />
        <Footer />
      </div>
    </div>
  );
};

export default Invitacion;
