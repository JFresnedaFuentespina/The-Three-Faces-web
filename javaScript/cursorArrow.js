const cursor = document.getElementById('custom-arrow');
const html = document.documentElement;

let hasDetectedInput = false;

function activateCustomCursor() {
    if (hasDetectedInput) return;
    hasDetectedInput = true;

    // Tell CSS we are using a mouse
    html.classList.add('using-mouse');
    
    // Start tracking movement
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Handle Hovering for the Double Sword
    document.addEventListener('mouseover', (e) => {
        if (e.target.closest('input, a, textarea, button')) {
            cursor.classList.remove('sword');
            cursor.classList.add('doubleSword');
        }
    });

    document.addEventListener('mouseout', (e) => {
        if (e.target.closest('input, a, textarea, button')) {
            cursor.classList.remove('doubleSword');
            cursor.classList.add('sword');
        }
    });
}

// Check: If the user moves the mouse, activate the sword
window.addEventListener('mousemove', activateCustomCursor, { once: true });

// Check: If the user touches the screen, disable the custom cursor
window.addEventListener('touchstart', () => {
    hasDetectedInput = true; // Prevents activateCustomCursor from ever running
    if (cursor) cursor.remove();
    html.classList.remove('using-mouse');
}, { once: true });