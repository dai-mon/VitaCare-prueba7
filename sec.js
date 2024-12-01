
document.addEventListener('DOMContentLoaded', () => {
   // Obtener el toggle y el elemento html
const darkModeToggle = document.getElementById('darkModeToggle');
const html = document.documentElement; // <html>

// Cargar la preferencia de modo oscuro guardada
const savedDarkMode = localStorage.getItem('darkMode') === 'true';
if (savedDarkMode) {
    html.classList.add('dark-mode');
    darkModeToggle.checked = true;
}

// Activar/desactivar el modo oscuro cuando el checkbox cambie
darkModeToggle.addEventListener('change', () => {
    html.classList.toggle('dark-mode');
    // Guardar la preferencia en el localStorage
    localStorage.setItem('darkMode', html.classList.contains('dark-mode'));
});


    // Bottom Navigation
    const bottomNavItems = document.querySelectorAll('.bottom-nav-item');
    const sections = document.querySelectorAll('.section');

    bottomNavItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetSectionId = item.getAttribute('data-target');

            // Remove active from all nav items and sections
            bottomNavItems.forEach(navItem => navItem.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));

            // Add active to clicked nav item and corresponding section
            item.classList.add('active');
            document.getElementById(targetSectionId).classList.add('active');
        });
    });

    // Mood Tracking
    const moodCards = document.querySelectorAll('.mood-card');
    const moodHistory = document.getElementById('moodHistory');

    moodCards.forEach(card => {
        card.addEventListener('click', () => {
            const mood = card.textContent.trim();
            const moodEntry = document.createElement('div');
            moodEntry.textContent = `${new Date().toLocaleDateString()} - ${mood}`;
            moodHistory.appendChild(moodEntry);
        });
    });

    // Font Size Control
    const fontSizeButtons = document.querySelectorAll('.font-size-btn');

    // Load saved font size preference
    const savedFontSize = localStorage.getItem('fontSize') || 'medium';
    html.classList.add(`font-${savedFontSize}`);

    fontSizeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const size = btn.getAttribute('data-size');

            // Remove existing font classes
            html.classList.remove('font-small', 'font-medium', 'font-large');
            html.classList.add(`font-${size}`);

            // Update active button
            fontSizeButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Save preference
            localStorage.setItem('fontSize', size);
        });
    });

    // Notification Toggle
    const notificationToggle = document.getElementById('notificationsToggle');
    const savedNotificationPreference = localStorage.getItem('notifications') === 'true';

    notificationToggle.checked = savedNotificationPreference;

    notificationToggle.addEventListener('change', () => {
        localStorage.setItem('notifications', notificationToggle.checked);
    });
});
// Referencias
const glucoseInput = document.getElementById('glucoseLevel');
const checkMenuButton = document.getElementById('checkMenu');
const menuMessage = document.getElementById('menuMessage');
const mealRecommendations = document.getElementById('mealRecommendations');
const menuRecommendations = document.getElementById('menuRecommendations');

// Estado de glucosa (se mostrará en color)
const glucoseStatus = document.createElement('h3');
glucoseStatus.id = 'glucoseStatus';
glucoseStatus.textContent = 'Estado de Glucosa: ';
glucoseStatus.style.color = 'gray'; // Color inicial
menuRecommendations.insertBefore(glucoseStatus, menuMessage);

// Función para obtener recomendaciones
function getRecommendations() {
    const glucoseLevel = parseFloat(glucoseInput.value);

    // Validación del input
    if (isNaN(glucoseLevel)) {
        glucoseStatus.textContent = 'Introduce un nivel válido.';
        glucoseStatus.style.color = 'gray';
        menuMessage.textContent = '';
        mealRecommendations.innerHTML = '';
        return;
    }

    let statusText = '';
    let statusColor = '';
    let recommendations = {
        desayuno: '',
        comida: '',
        cena: '',
        snack: ''
    };

    // Evaluar el nivel de glucosa
if (glucoseLevel < 70) {
    statusText = 'Estado de Glucosa: Muy Bajo';
    statusColor = 'red';
    menuMessage.textContent = 'Tu nivel de glucosa es muy bajo. Es importante actuar rápidamente. Consulta a tu médico si los síntomas persisten.';
    recommendations = {
        desayuno: '🍞 Pan blanco con mermelada y un vaso pequeño de agua con azúcar.',
        comida: '🍲 Sopa de fideos con caldo de pollo y un plátano.',
        cena: '🍚 Avena con leche y un poco de miel.',
        snack: '🍎 Manzana o un puñado de uvas.'
    };
} else if (glucoseLevel >= 70 && glucoseLevel <= 90) {
    statusText = 'Estado de Glucosa: Bajo';
    statusColor = 'blue';
    menuMessage.textContent = 'Tu nivel de glucosa está bajo. Intenta mantenerte en un rango más estable.';
    recommendations = {
        desayuno: '🥖 Pan integral con mermelada y un vaso de agua con limón.',
        comida: '🍲 Sopa de verduras y una pieza de pollo a la plancha.',
        cena: '🍚 Arroz integral con vegetales al vapor.',
        snack: '🍏 Una manzana o unas almendras.'
    };
} else if (glucoseLevel >= 90 && glucoseLevel <= 140) {
    statusText = 'Estado de Glucosa: Estable';
    statusColor = 'green';
    menuMessage.textContent = 'Tu nivel de glucosa está estable. Mantén una dieta balanceada.';
    recommendations = {
        desayuno: '🍳 Tortilla de huevo con jitomate y un par de tostadas integrales.',
        comida: '🍚 Arroz con frijoles y una pieza de pollo a la plancha.',
        cena: '🥗 Verduras cocidas con una tortilla y queso fresco.',
        snack: '🥜 Un puñado de cacahuates o yogur natural.'
    };
} else if (glucoseLevel > 140 && glucoseLevel <= 180) {
    statusText = 'Estado de Glucosa: Moderado';
    statusColor = 'yellowgreen';
    menuMessage.textContent = 'Tu nivel de glucosa está moderado. Evita carbohidratos simples y azúcares.';
    recommendations = {
        desayuno: '🍳 Claras de huevo con nopales y un par de tortillas.',
        comida: '🥣 Sopa de verduras con lentejas.',
        cena: '🥗 Ensalada de lechuga, pepino y zanahoria con limón.',
        snack: '🥕 Jícama o zanahorias crudas.'
    };
} else if (glucoseLevel > 180 && glucoseLevel <= 250) {
    statusText = 'Estado de Glucosa: Alto';
    statusColor = 'orange';
    menuMessage.textContent = 'Tu nivel de glucosa está alto. Evita carbohidratos y azúcares.';
    recommendations = {
        desayuno: '🍳 Claras de huevo con espinacas y un par de tortillas de maíz.',
        comida: '🥗 Sopa de verduras con pechuga de pollo a la plancha.',
        cena: '🥗 Ensalada con lechuga, pepino y aderezo bajo en grasa.',
        snack: '🥒 Pepinos o zanahorias en rodajas.'
    };
} else {
    statusText = 'Estado de Glucosa: Muy Alto';
    statusColor = 'red';
    menuMessage.textContent = 'Tu nivel de glucosa es muy alto. Es importante buscar atención médica inmediatamente.';
    recommendations = {
        desayuno: '🥑 Aguacate con tomate y un vaso de agua.',
        comida: '🥣 Sopa de verduras con arroz integral.',
        cena: '🥗 Ensalada de espinacas con limón y pechuga de pollo.',
        snack: '🥒 Pepinos o zanahorias crudas.'
    };
}

    // Mostrar estado de glucosa con color
    glucoseStatus.textContent = statusText;
    glucoseStatus.style.color = statusColor;

    // Mostrar recomendaciones
    mealRecommendations.innerHTML = `
        <li><strong>Desayuno:</strong> ${recommendations.desayuno}</li>
        <li><strong>Comida:</strong> ${recommendations.comida}</li>
        <li><strong>Cena:</strong> ${recommendations.cena}</li>
        <li><strong>Snack:</strong> ${recommendations.snack}</li>
    `;
}

// Evento para el botón de "Obtener Recomendaciones"
checkMenuButton.addEventListener('click', getRecommendations);

// Captura de elementos
const checkButton = document.getElementById("checksalud");
const healthLevelInput = document.getElementById("healthlevel");
const healthMessage = document.getElementById("healthMessage");
const healthRecommendations = document.getElementById("healthRecommendations");

// Función para dar recomendaciones
checkButton.addEventListener("click", () => {
    const glucoseLevel = parseFloat(healthLevelInput.value);
    glucoseStatus.textContent = 'Estado de Glucosa: ';
    glucoseStatus.style.color = 'gray'; // Color inicial

    // Limpiar mensajes previos
healthRecommendations.innerHTML = "";

if (isNaN(glucoseLevel) || glucoseLevel <= 0) {
    healthMessage.textContent = "Por favor, introduce un nivel válido.";
    healthMessage.style.color = "grey";
    healthMessage.style.fontSize = "1.em"; // Hace el texto más grande
    healthMessage.style.fontWeight = "bold"; // Lo pone en negritas
    return;
}

if (glucoseLevel < 70) {
    healthMessage.textContent = "Tu nivel de glucosa es muy bajo.";
    healthMessage.style.color = "red";
    healthMessage.style.fontSize = "1.4em"; // Hace el texto más grande
    healthMessage.style.fontWeight = "bold"; // Lo pone en negritas
    healthRecommendations.innerHTML = `
        <li>🍊 Consume un jugo de naranja o una cucharada de miel inmediatamente.</li>
        <li>🛏️ Acuéstate y descansa durante 10-15 minutos.</li>
        <li>📞 Si los síntomas persisten, busca atención médica de inmediato.</li>
    `;
} else if (glucoseLevel >= 70 && glucoseLevel <= 90) {
    healthMessage.textContent = "Tu nivel de glucosa es bajo.";
    healthMessage.style.color = "blue";
    healthMessage.style.fontSize = "1.4em"; // Hace el texto más grande
    healthMessage.style.fontWeight = "bold"; // Lo pone en negritas
    healthRecommendations.innerHTML = `
        <li>🥗 Mantén una dieta equilibrada con comidas pequeñas y frecuentes.</li>
        <li>🚶‍♂️ Realiza ejercicio moderado al menos 30 minutos al día.</li>
        <li>💧 Hidrátate bien bebiendo agua regularmente.</li>
    `;
} else if (glucoseLevel >= 90 && glucoseLevel <= 130) {
    healthMessage.textContent = "Tu nivel de glucosa es estable.";
    healthMessage.style.color = "green";
    healthMessage.style.fontSize = "1.4em"; // Hace el texto más grande
    healthMessage.style.fontWeight = "bold"; // Lo pone en negritas
    healthRecommendations.innerHTML = `
        <li>🥗 Mantén una dieta balanceada y controla las porciones.</li>
        <li>🚶‍♂️ Haz ejercicio moderado al menos 30 minutos al día.</li>
        <li>💧 Bebe al menos 8 vasos de agua al día para mantenerte hidratado.</li>
    `;
} else if (glucoseLevel >= 130 && glucoseLevel <= 180) {
    healthMessage.textContent = "Tu nivel de glucosa es moderado.";
    healthMessage.style.color = "yellowgreen";
    healthMessage.style.fontSize = "1.4em"; // Hace el texto más grande
    healthMessage.style.fontWeight = "bold"; // Lo pone en negritas
    healthRecommendations.innerHTML = `
        <li>🥗 Evita alimentos altos en carbohidratos simples y azúcares.</li>
        <li>🚶‍♂️ Realiza ejercicio cardiovascular de 30 minutos al día.</li>
        <li>🩺 Consulta con tu médico para ajustar tu plan de control de glucosa.</li>
    `;
} else if (glucoseLevel >= 180 && glucoseLevel <= 250) {
    healthMessage.textContent = "Tu nivel de glucosa es alto.";
    healthMessage.style.color = "orange";
    healthMessage.style.fontSize = "1.4em"; // Hace el texto más grande
    healthMessage.style.fontWeight = "bold"; // Lo pone en negritas
    healthRecommendations.innerHTML = `
        <li>🥗 Disminuye el consumo de carbohidratos refinados y alimentos azucarados.</li>
        <li>🩺 Programa una consulta médica para ajustar tu tratamiento.</li>
        <li>💧 Mantente hidratado para ayudar a regular los niveles.</li>
    `;
} else {
    healthMessage.textContent = "Tu nivel de glucosa es muy alto.";
    healthMessage.style.color = "red";
    healthMessage.style.fontSize = "1.4em"; // Hace el texto más grande
    healthMessage.style.fontWeight = "bold"; // Lo pone en negritas
    healthRecommendations.innerHTML = `
        <li>🚨 Busca atención médica inmediata para evitar complicaciones.</li>
        <li>💧 Bebe agua constantemente para evitar la deshidratación.</li>
        <li>🥤 Evita el consumo de alimentos con alto contenido de azúcar y carbohidratos.</li>
    `;
}
});

// Gráfico de progreso
document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById('progressChart').getContext('2d');
    const progressChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
            datasets: [{
                label: 'Progreso Mensual',
                data: [10, 20, 15, 30, 50, 70],
                borderColor: 'rgba(29, 53, 87, 1)',
                backgroundColor: 'rgba(29, 53, 87, 0.2)',
                tension: 0.4,
                pointRadius: 5,
                pointHoverRadius: 7,
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: 'rgba(29, 53, 87, 1)',
                    }
                },
            },
            scales: {
                x: {
                    ticks: {
                        color: 'rgba(29, 53, 87, 1)',
                    },
                    grid: {
                        color: 'rgba(29, 53, 87, 0.1)',
                    }
                },
                y: {
                    ticks: {
                        color: 'rgba(29, 53, 87, 1)',
                    },
                    grid: {
                        color: 'rgba(29, 53, 87, 0.1)',
                    }
                }
            }
        }
    });
});

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line', // Tipo de gráfico
    data: {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May'],
        datasets: [{
            label: 'Ventas',
            data: [12, 19, 3, 5, 2], // Datos de la gráfica
            borderColor: 'rgba(75, 192, 192, 1)', // Color de la línea
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
// Referencias
const moodCards = document.querySelectorAll('.mood-card');
const moodHistory = document.getElementById('moodHistory');

// Cargar historial desde localStorage
function loadMoodHistory() {
    const savedMoods = JSON.parse(localStorage.getItem('moodHistory')) || [];
    savedMoods.forEach(mood => {
        const listItem = document.createElement('li');
        listItem.textContent = mood;
        moodHistory.appendChild(listItem);
    });
}

// Guardar historial en localStorage
function saveMoodToHistory(mood) {
    const savedMoods = JSON.parse(localStorage.getItem('moodHistory')) || [];
    savedMoods.push(mood);
    localStorage.setItem('moodHistory', JSON.stringify(savedMoods));
}

// Añadir nuevo estado de ánimo
moodCards.forEach(card => {
    card.addEventListener('click', () => {
        const mood = card.dataset.mood;
        const listItem = document.createElement('li');
        listItem.textContent = mood;
        moodHistory.appendChild(listItem);
        saveMoodToHistory(mood);
    });
});

// Ejecutar al cargar la página
loadMoodHistory();

// JavaScript para redirigir a la sección de "Mood"
document.getElementById('logoImage').addEventListener('click', () => {
    document.getElementById('moodSection').scrollIntoView({ behavior: 'smooth' });
});

document.addEventListener('DOMContentLoaded', function () {
    const notificationBtn = document.getElementById('notificationBtn');

    // Verificar si las notificaciones están soportadas
    if ('Notification' in window) {
        // Verificar si ya se ha concedido el permiso
        if (Notification.permission === 'granted') {
            notificationBtn.classList.add('active'); // Cambiar el icono a verde si el permiso está concedido
        } else if (Notification.permission === 'default') {
            // Si el permiso no ha sido concedido ni denegado, solicitar permiso
            notificationBtn.addEventListener('click', function() {
                Notification.requestPermission().then(function(permission) {
                    if (permission === 'granted') {
                        notificationBtn.classList.add('active');
                        alert("¡Permiso de notificación concedido!");
                    } else {
                        alert("Permiso de notificación denegado.");
                    }
                });
            });
        }

        // Cambiar el estado de las notificaciones cuando se hace clic en el botón
        notificationBtn.addEventListener('click', function() {
            if (Notification.permission === 'granted') {
                // Si las notificaciones están activadas, desactivarlas
                notificationBtn.classList.remove('active');
                alert("Las notificaciones están desactivadas.");
            } else {
                // Si no están activadas, pedir permiso
                Notification.requestPermission().then(function(permission) {
                    if (permission === 'granted') {
                        notificationBtn.classList.add('active');
                        alert("¡Permiso de notificación concedido!");
                    } else {
                        alert("Permiso de notificación denegado.");
                    }
                });
            }
        });
    } else {
        console.log('Las notificaciones no son soportadas por este navegador.');
    }
});
