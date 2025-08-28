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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid()


    // TODO 2 - Create Platforms
createPlatform(200,650,200,20,"purple");

createPlatform(600,600,150,20,"purple");

createPlatform(600,470,150,20,"purple");

createPlatform(900,400,100,20,"purple");

createPlatform(700,300,50,10,"purple");

createPlatform(400,300,100,10,"purple");

createPlatform(100,300,25,10,"purple");



    // TODO 3 - Create Collectables
    createCollectable("database",230,150);

    createCollectable("diamond",700,430);

    createCollectable("steve",700,260);


    
    // TODO 4 - Create Cannons
    createCannon("top",700,800);

    createCannon("right",200,300);

    createCannon("right",750,100);

    

    

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
