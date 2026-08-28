$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(200, 0, 0)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();
   

    // TODO 2 - Create Platforms
    createBadPlatform(300, 500, 15, 150);
    createPlatform(50, 650, 450, 15);
    createPlatform(150, 580, 20, 20);
    createPlatform(400, 530, 20, 20);
    createBadPlatform(500, 430, 15, 200);
    createBadPlatform(0, 700, 1400, 70);
   createPlatform(600, 480, 20, 20);
   createBadPlatform(670, 370, 20, 200);
   createPlatform(750, 400, 20, 20);
   createPlatform(1250, 670, 150,15);
   createBadPlatform(1250,530,15, 140);
   createBadPlatform(1335, 530, 150, 15);
  createPlatform(1000, 450, 15, 15);

   // TODO 3 - Create Collectables
    createCollectable("diamond", 350 , 600, 0.8, 0.7);
    createCollectable("diamond", 750, 350, 0.8, 0.7 );
    createCollectable("diamond", 1350,600, 0.8, 0.7);
    
    // TODO 4 - Create Cannons
    createCannon("right", 620, 850);
    createCannon("top", 1250, 850);
    createCannon("left",300, 850);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
