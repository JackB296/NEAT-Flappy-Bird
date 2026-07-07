class NeuralNetwork {
  constructor(inputSize, outputSize) {
    this.inputSize = inputSize;
    this.outputSize = outputSize;
    this.weights = [];
    this.xavierInitialization();
  }

  xavierInitialization() {
    const variance = 2 / (this.inputSize + this.outputSize);
    const standardDeviation = Math.sqrt(variance);

    // last column of each row is the bias weight; center the range on 0
    this.weights = Array.from({ length: this.outputSize }, () =>
      Array.from({ length: this.inputSize + 1 }, () => (Math.random() * 2 - 1) * standardDeviation)
    );
  }

  predict(inputs) {
    const outputs = [];

    for (let i = 0; i < this.outputSize; i++) {
      let sum = this.weights[i][this.inputSize]; // bias
      for (let j = 0; j < this.inputSize; j++) {
        sum += inputs[j] * this.weights[i][j];
      }
      outputs.push(this.activationFunction(sum));
    }

    return outputs;
  }
  
  activationFunction(x) {
    // sigmoid activation function
    return 1 / (1 + Math.exp(-x));
  }

  crossover(parent, crossoverRate) {
    const child = new NeuralNetwork(this.inputSize, this.outputSize);

    for (let i = 0; i < this.outputSize; i++) {
      for (let j = 0; j < this.inputSize + 1; j++) {
        // include the bias weight (last column)
        if (Math.random() < crossoverRate) {
          child.weights[i][j] = parent.weights[i][j];
        } else {
          child.weights[i][j] = this.weights[i][j];
        }
      }
    }

    return child;
  }
  
  mutate(mutationRate) {
    for (let i = 0; i < this.outputSize; i++) {
      for (let j = 0; j < this.inputSize + 1; j++) {
        // include the bias weight (last column)
        if (Math.random() < mutationRate) {
          // randomly change the weight
          this.weights[i][j] += Math.random() * 2 - 1;
        }
      }
    }
  }

  isCompatible(otherNetwork) {
    let distance = 0;
    for (let i = 0; i < this.outputSize; i++) {
      for (let j = 0; j < this.inputSize + 1; j++) {
        const weightDiff = this.weights[i][j] - otherNetwork.weights[i][j];
        distance += weightDiff * weightDiff;
      }
    }
    distance = Math.sqrt(distance);
    
    // you can adjust the compatibility threshold as needed
    const compatibilityThreshold = 0.3;
    return distance < compatibilityThreshold;
  }

}
