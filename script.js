function openStore(url) {
  window.open(url, '_blank');
}

function openWhatsApp() {
  const phoneNumber = "+923197647047";
  const message = "Hello! I’m interested in your services.";
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, '_blank');
}
