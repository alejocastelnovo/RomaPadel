import React from "react";

export const WhatsAppButton = ({ size = 'lg', isNavbar = false }) => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "543425375314";
    const message = "Quiero reservar un turno, que horarios hay disponibles?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const buttonStyle = {
    backgroundColor: '#25D366',
    color: 'white',
    ...(isNavbar && {
      padding: '6px 12px',
      fontSize: '14px',
      lineHeight: '20px',
      marginTop: '10px',
      marginBottom: '10px',
      height: '34px'
    })
  };

  return (
    <button 
      onClick={handleWhatsAppClick}
      className={`btn btn-custom ${isNavbar ? 'navbar-btn' : `btn-${size}`}`}
      style={buttonStyle}
    >
      <i className="fa fa-whatsapp" style={{ margin: '3px' }}></i>
      {isNavbar ? 'Reservar' : 'Reservar por WhatsApp'}
    </button>
  );
};