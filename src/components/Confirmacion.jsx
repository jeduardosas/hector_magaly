import React from 'react'

const Confirmacion = () => {
  return (
    <>
      <div className='confirmar-title'>
        <img src="/img/icons/confirmar.svg" alt="icon-confirm" />
        <h2>Confirmación de Asistencia</h2>
      </div>

      <div className="confirmar-card  sombra">
        <div className="confirmar-border centrar">
          <div className="confirmar-whats">
            <img src="/img/icons/whats.svg" alt="" />
            <p>WhatsApp</p>
          </div>
          <button><a target="_blank" href="https://api.whatsapp.com/send?phone=527331331234&text=¡Hola!👋%0AQuiero%20confirmar%20mi%20asistencia%0Aa%20la%20Boda%20de%20Héctor%20y%20Magaly%20💒🤵🏻👰🏻">CONFIRMAR</a></button>
        </div>
      </div>
    </>
  )
}

export default Confirmacion