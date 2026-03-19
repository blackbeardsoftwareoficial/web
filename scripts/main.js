// ===== SERVICE DATA =====
const services = {
  office: {
    name: 'Microsoft Office',
    category: 'Productividad',
    image: 'images/services/office.png',
    description: 'Suite completa de oficina para documentos, hojas de cálculo y presentaciones. Ideal para trabajo, estudios y proyectos profesionales.',
    programs: ['Word', 'Excel', 'PowerPoint', 'Access', 'Publisher', 'Outlook', 'OneNote'],
    price: '$30.000',
    note: '💡 Toda la suite por un solo precio'
  },
  adobe: {
    name: 'Adobe Creative Cloud',
    category: 'Diseño Gráfico',
    image: 'images/services/adobe.png',
    description: 'Herramientas profesionales de diseño, edición y creación multimedia. La suite más completa para creativos.',
    programs: ['Photoshop', 'Illustrator', 'Premiere Pro', 'After Effects', 'Lightroom', 'InDesign', 'Acrobat Pro', 'Adobe XD', 'Audition'],
    price: '$30.000 c/u',
    note: '💡 Cada programa tiene un costo de $30.000 COP'
  },
  autodesk: {
    name: 'Autodesk',
    category: 'Arquitectura & BIM',
    image: 'images/services/autodesk.png',
    description: 'Software líder para diseño arquitectónico, ingeniería y modelado BIM. Herramientas profesionales para la industria AEC.',
    programs: ['AutoCAD', 'Revit', '3ds Max', 'Maya', 'Inventor', 'Civil 3D', 'Navisworks', 'Fusion 360'],
    price: '$30.000 c/u',
    note: '💡 Cada programa tiene un costo de $30.000 COP'
  },
  sketchup: {
    name: 'SketchUp + V-Ray',
    category: 'Modelado 3D & Render',
    image: 'images/services/sketchup.png',
    description: 'Modelado 3D intuitivo y renderizado fotorrealista para arquitectura y diseño. La combinación perfecta para visualizaciones profesionales.',
    programs: ['SketchUp Pro', 'V-Ray para SketchUp'],
    price: '$30.000 - $60.000',
    note: '💡 SketchUp: $30.000 COP | V-Ray: +$30.000 adicional'
  },
  archicad: {
    name: 'ArchiCAD',
    category: 'Arquitectura BIM',
    image: 'images/services/archicad.png',
    description: 'Software BIM completo para diseño arquitectónico y documentación de proyectos. Desarrollado por Graphisoft.',
    programs: null,
    price: '$30.000',
    note: '💡 Incluye todas las herramientas BIM de Graphisoft'
  },
  otros: {
    name: 'Otros Programas',
    category: 'Consultas',
    image: 'images/services/otros.png',
    description: '¿No encuentras el programa que necesitas? Contáctanos para verificar disponibilidad y precio.',
    programs: null,
    price: 'Consultar',
    note: '💡 El precio varía según el programa solicitado',
    isOther: true
  }
};

// ===== DOM READY =====
document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Close modal on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeModal('service');
      closeModal('privacy');
      closeModal('terms');
    }
  });

  // Close modal on background click
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });
});

// ===== SCROLL TO SECTION =====
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// ===== MODAL FUNCTIONS =====
function openModal(modalType) {
  const modal = document.getElementById(modalType + 'Modal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalType) {
  const modal = document.getElementById(modalType + 'Modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// ===== SERVICE MODAL =====
function openServiceModal(serviceKey) {
  const service = services[serviceKey];
  if (!service) return;

  // Update modal content
  document.getElementById('modalImage').src = service.image;
  document.getElementById('modalImage').alt = service.name;
  document.getElementById('modalTitle').textContent = service.name;
  document.getElementById('modalCategory').textContent = service.category;
  document.getElementById('modalDescription').textContent = service.description;
  
  // Update price
  const priceElement = document.getElementById('modalPrice');
  priceElement.textContent = service.price;
  if (service.isOther) {
    priceElement.classList.remove('gradient-text');
    priceElement.style.color = 'var(--text-secondary)';
  } else {
    priceElement.classList.add('gradient-text');
    priceElement.style.color = '';
  }
  
  // Update note
  document.getElementById('modalNote').textContent = service.note;
  
  // Update programs
  const programsContainer = document.getElementById('modalPrograms');
  if (service.programs && service.programs.length > 0) {
    programsContainer.innerHTML = `
      <h4 class="modal-programs-title">Programas disponibles:</h4>
      <div class="modal-programs-list">
        ${service.programs.map(p => `<span class="modal-program-tag">${p}</span>`).join('')}
      </div>
    `;
  } else {
    programsContainer.innerHTML = '';
  }
  
  // Update WhatsApp link
  const whatsappLink = document.getElementById('modalWhatsapp');
  const message = encodeURIComponent(`Hola, me interesa el servicio de ${service.name}`);
  whatsappLink.href = `https://wa.me/573150999272?text=${message}`;
  
  // Update button text
  document.getElementById('modalBtnText').textContent = `Solicitar ${service.name}`;
  
  // Open modal
  openModal('service');
}
