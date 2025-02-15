function createGrid() {
    const spacing = 140; 
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
document.getElementById('x').addEventListener('click', function() {
    console.log("shown");
    const hiddenImg = document.getElementById('hidden-sad-img');
    
    hiddenImg.style.opacity = 1;

    let opacity = 1; 
    let fadeInterval = setInterval(() => {
        opacity -= 0.1; 
        hiddenImg.style.opacity = opacity;
        
        if (opacity <= 0) {
            clearInterval(fadeInterval); 
        }
    }, 100); 
});