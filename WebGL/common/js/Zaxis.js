'use strict';

// Visualize the axis on the screen
class Zaxis {

  constructor(dimension = 10) {
    this.alias = 'Zaxis';
    this.wireframe = true;
    this.indices = [0, 1, 2, 3, 4, 5];
    this.dimension = dimension;
    this.build(this.dimension)
    this.diffuse = [0.0, 0.0, 1.0, 0.5];
  }

  build(dimension) {
    if (dimension) {
      this.dimension = dimension;
    }

    this.vertices = [
        0.0, 0.0, 0.0,
        0.0, 0.0, 0.0,
        0.0, 0.0, 0.0,
        0.0, 0.0, 0.0,
        0.0, 0.0, 0.0,
        0.0, 0.0, dimension
      ];
    
  }

}

