


window.addEventListener('scroll', () => {
    console.log("SCROLLING")
    const lines = document.querySelectorAll('.line');
    const viewportHeight = window.innerHeight;

    lines.forEach(line => {
        const rect = line.getBoundingClientRect();
        const lineCenter = rect.top + rect.height / 2;

        // Expanded range around the viewport's vertical center
        const upperThreshold = viewportHeight / 2 - 150; // Increase this for a larger sensing area above center
        const lowerThreshold = viewportHeight / 2 + 150; // Increase this for a larger sensing area below center

        if (lineCenter >= upperThreshold && lineCenter <= lowerThreshold) {
            line.classList.add('active');
        } else {
            line.classList.remove('active');
        }
    });
});

function firstRun(){
    console.log("SCROLLING")
    const lines = document.querySelectorAll('.line');
    const viewportHeight = window.innerHeight;

    lines.forEach(line => {
        const rect = line.getBoundingClientRect();
        const lineCenter = (rect.height / 2) + rect.top;

        // Expanded range around the viewport's vertical center
        const upperThreshold = viewportHeight / 2 - 200; // Increase this for a larger sensing area above center
        const lowerThreshold = viewportHeight / 2 + 0; // Increase this for a larger sensing area below center
        console.log("test")
        if (lineCenter >= upperThreshold && lineCenter <= lowerThreshold) {
            line.classList.add('active');
        } else {
            line.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    firstRun() 
});

function createGrid() {
    const spacing = 96; // Approximately 1 inch at 96dpi
    const gridContainer = document.getElementById('grid-container');
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Clear existing grid lines
    gridContainer.innerHTML = '';

    // Create horizontal lines
    for (let y = 0; y <= height; y += spacing) {
      const line = document.createElement('div');
      line.className = 'grid-line horizontal';
      line.style.top = `${y}px`;
      gridContainer.appendChild(line);
    }

    // Create vertical lines
    for (let x = 0; x <= width; x += spacing) {
      const line = document.createElement('div');
      line.className = 'grid-line vertical';
      line.style.left = `${x}px`;
      gridContainer.appendChild(line);
    }
  }

  // Handle resizing
  window.addEventListener('resize', createGrid);

  // Initial grid setup
  createGrid();