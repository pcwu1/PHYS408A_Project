'use strict';

// Visualize the cone on the screen
class Cube {

  constructor(scale = 100, dimension = 10) {
    this.alias = 'cube';

    this.wireframe = true;
    this.dimension = dimension;


    this.vertices = this.scaleCube(scale);
    this.indices = [
           // Front square
    0, 1, 1, 2, 2, 3, 3, 0,

    // Back square
    4, 5, 5, 6, 6, 7, 7, 4,

    // Connecting lines
    0, 4, 1, 5, 2, 6, 3, 7
    ];

    this.diffuse = [0, 0, 0, 0.5];
  }

  scaleCube(scale) {
    let vertices = [
      -0.5, -0.5,  0.5,  // Bottom left
      0.5, -0.5,  0.5,  // Bottom right
      0.5,  0.5,  0.5,  // Top right
      -0.5,  0.5,  0.5,  // Top left

      // Back face
      -0.5, -0.5, -0.5,  // Bottom left
      0.5, -0.5, -0.5,  // Bottom right
      0.5,  0.5, -0.5,  // Top right
      -0.5,  0.5, -0.5,  // Top left

      // Top face
      -0.5,  0.5,  0.5,  // Front Top left
      0.5,  0.5,  0.5,  // Front Top right
      0.5,  0.5, -0.5,  // Back Top right
      -0.5,  0.5, -0.5,  // Back Top left

      // Bottom face
      -0.5, -0.5,  0.5,  // Front Bottom left
      0.5, -0.5,  0.5,  // Front Bottom right
      0.5, -0.5, -0.5,  // Back Bottom right
      -0.5, -0.5, -0.5,  // Back Bottom left

      // Right face
      0.5, -0.5,  0.5,  // Front Bottom right
      0.5, -0.5, -0.5,  // Back Bottom right
      0.5,  0.5, -0.5,  // Back Top right
      0.5,  0.5,  0.5,  // Front Top right

      // Left face
      -0.5, -0.5,  0.5,  // Front Bottom left
      -0.5, -0.5, -0.5,  // Back Bottom left
      -0.5,  0.5, -0.5,  // Back Top left
      -0.5,  0.5,  0.5   // Front Top left
    ];

    for (let i = 0; i < vertices.length; i++) {
      vertices[i] *= scale;
    }
    return vertices;
  }
}
