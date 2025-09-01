import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoCopyOutline } from "react-icons/io5";

export const Modal = ({
  claseBotonModal,
  claseModal,
  borderModal,
  cbu,
  alias,
  banco,
  nombre,
  moneda_extranjera,
  tipo_cuenta,
  numero_cuenta,
  titular_extranjera,
  banco_extranjera,
  styleModal,
  styleBorderModal,
}) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const copiarTexto = (texto) => {
    navigator.clipboard.writeText(texto)
      .then(() => {
        alert(`¡Copiado al portapapeles!`);
      })
      .catch(() => {
        alert('Error al copiar. Intenta de nuevo.');
      });
  };

  return (
    <>
      <button
        className="bg-white text-gray-800 hover:bg-transparent hover:text-white border-2 border-white py-3 px-6 rounded-full font-semibold transform transition-transform duration-300 ease-in-out mt-5 cursor-pointer"
        data-aos='fade-up'
        onClick={() => setIsOpen(true)}
      >
        Ver Datos Bancarios
      </button>

      <div className={`fixed inset-0 ${claseModal} bg-black/70 flex justify-center items-center z-50 transition-opacity duration-500 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} style={styleModal}>
        <div className={`bg-white p-10 rounded-lg flex flex-col justify-center items-center border-4 ${borderModal} transform transition-transform duration-500 ease-in-out ${isOpen ? 'scale-100' : 'scale-95'}`} style={styleBorderModal}>
          <div className="flex flex-col justify-center text-center space-y-7 text-gray-900 w-full max-w-md ">
            <h2 className="font-bold text-2xl">Datos Bancarios</h2>
            {moneda_extranjera && moneda_extranjera.trim() !== "" && (
            <h3 className="text-xl font-semibold mb-4">Datos en Pesos</h3>
            )}
            <div className="w-full space-y-4 text-left text-gray-800">
              <p className="text-lg flex justify-between items-center">
                <span><span className="font-semibold">Nombre del titular:</span> {nombre}</span>
              </p>

              <p className="text-lg flex justify-between items-center">
                <span><span className="font-semibold">CBU:</span> {cbu}</span>
                <button onClick={() => copiarTexto(cbu)}>
                  <IoCopyOutline className="ml-2 text-[#a8ad9a]" />
                </button>
              </p>

              <p className="text-lg flex justify-between items-center">
                <span><span className="font-semibold">Alias:</span> {alias}</span>
                <button onClick={() => copiarTexto(alias)}>
                  <IoCopyOutline  className="ml-2 text-[#a8ad9a]" />
                </button>
              </p>

              <p className="text-lg flex justify-between items-center">
                <span><span className="font-semibold">Banco:</span> {banco}</span>
              </p>
            </div>
            {moneda_extranjera && moneda_extranjera.trim() !== "" && (
              <div className="w-full mt-8">
                <hr className="border-t-2 border-gray-300 mb-4" />
                <h3 className="text-xl font-semibold mb-4">Datos en {moneda_extranjera}</h3>
                <div className="text-left space-y-4 text-gray-800">
                  <p className="text-lg flex justify-between items-center">
                    <span><span className="font-semibold">{tipo_cuenta}: </span>{numero_cuenta}</span>
                    <button onClick={() => copiarTexto(numero_cuenta)}>
                      <IoCopyOutline  className="ml-2 text-[#a8ad9a]" />
                    </button>
                  </p>

                  <p className="text-lg flex justify-between items-center">
                    <span><span className="font-semibold">Titular:</span> {titular_extranjera}</span>
                  </p>

                  <p className="text-lg flex justify-between items-center">
                    <span><span className="font-semibold">Banco:</span> {banco_extranjera}</span>
                  </p>
                </div>
              </div>
            )}

            <button
              className={`py-4 rounded-lg text-gray-700 font-bold hover:bg-transparent hover:transition hover:text-gray-900 border-4 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg`} style={claseBotonModal}
              onClick={() => setIsOpen(false)}
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};