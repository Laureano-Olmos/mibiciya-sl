function showTab(tab) {
  document.querySelectorAll('.form-section').forEach(el => el.classList.remove('active'));
  document.getElementById(tab).classList.add('active');
}

function toggleUrgente(tipo) {
  const horaInput = document.getElementById(`hora${tipo}`);
  const urgenteCheck = document.getElementById(`urgente${tipo}`);
  horaInput.disabled = urgenteCheck.checked;
}

function enviarMensaje(tipo) {
  let mensaje = 'Hola! Quiero solicitar un ' + (tipo === 'envio' ? 'envío' : 'mandado') + ' con Mi Bici Ya.\n';
  if (tipo === 'envio') {
    const nombre = document.getElementById('nombreEnvio').value;
    const origen = document.getElementById('origenEnvio').value;
    const destino = document.getElementById('destinoEnvio').value;
    const urgente = document.getElementById('urgenteEnvio').checked;
    const hora = urgente ? 'Lo necesito con urgencia' : document.getElementById('horaEnvio').value;
    mensaje += `Nombre: ${nombre}\nOrigen: ${origen}\nDestino: ${destino}\nHora: ${hora}`;
  } else {
    const nombre = document.getElementById('nombreMandado').value;
    const direccion = document.getElementById('direccionMandado').value;
    const detalle = document.getElementById('detalleMandado').value;
    const urgente = document.getElementById('urgenteMandado').checked;
    const hora = urgente ? 'Lo necesito con urgencia' : document.getElementById('horaMandado').value;
    mensaje += `Nombre: ${nombre}\nDirección: ${direccion}\nMandado: ${detalle}\nHora: ${hora}`;
  }
  const numero = '5493416171240';
  const url = 'https://wa.me/' + numero + '?text=' + encodeURIComponent(mensaje);
  window.open(url, '_blank');
}

// Mostrar por defecto Envíos
showTab('envios');