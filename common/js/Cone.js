'use strict';

// Visualize the cone on the screen
class Cone {

  constructor(positions = [0, 0, 0], dimension = 5) {
    this.alias = 'cone';

    this.wireframe = false;
    this.dimension = dimension;
    this.positions = positions;
    this.OriginalVertices = [0.0, 3.0, 0.0, 1.0, 0.0, 0.0, 0.9238795325112867, 0.0, 0.3826834323650898, 0.7071067811865476, 0.0, 0.7071067811865476, 0.38268343236508984, 0.0, 0.9238795325112867, 6.123233995736766e-17, 0.0, 1.0, -0.3826834323650897, 0.0, 0.9238795325112867, -0.7071067811865475, 0.0, 0.7071067811865476, -0.9238795325112867, 0.0, 0.3826834323650899, -1.0, 0.0, 1.2246467991473532e-16, -0.9238795325112868, 0.0, -0.38268343236508967, -0.7071067811865477, 0.0, -0.7071067811865475, -0.38268343236509034, 0.0, -0.9238795325112865, -1.8369701987210297e-16, 0.0, -1.0, 0.38268343236509, 0.0, -0.9238795325112866, 0.7071067811865474, 0.0, -0.7071067811865477, 0.9238795325112865, 0.0, -0.3826834323650904];

    this.vertices = this.calculateVertices(this.positions);
    this.indices = [0, 1, 2, 0, 2, 3, 0, 3, 4, 0, 4, 5, 0, 5, 6, 0, 6, 7, 0, 7, 8, 0, 8, 9, 0, 9, 10, 0, 10, 11, 0, 11, 12, 0, 12, 13, 0, 13, 14, 0, 14, 15, 0, 15, 16, 0, 16, 1].reverse();

    this.diffuse = [1.0,0.664,0.0,1.0];

    
  }

  calculateVertices(positions) {
    let translatedVertices = [];
    for (let i = 0; i < this.OriginalVertices.length; i++) {
        if (i % 3 === 0) {
            translatedVertices.push(this.OriginalVertices[i] + positions[0]); // Adjust x-coordinate
        } else if (i % 3 === 1) {
            translatedVertices.push(this.OriginalVertices[i] + positions[1]); // Adjust y-coordinate
        } else {
            translatedVertices.push(this.OriginalVertices[i] + positions[2]); // Adjust z-coordinate
        }
    }
    return translatedVertices;
  }
}

