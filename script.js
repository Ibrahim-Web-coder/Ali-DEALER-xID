// Open WhatsApp chat when the contact box is clicked
function openWhatsApp() {
  const phoneNumber = "923197647047"; // No '+' in wa.me URLs
  const message = encodeURIComponent("Hello, I’m interested in buying Free Fire Things.");
  const url = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(url, "_blank");
}
