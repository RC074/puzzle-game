// Generator.ts

import Puzzle from "./Puzzle";

class Generator extends Puzzle {
  constructor(size: 8) {
    super(size, [[]]);
  }

  shuffle = (arr: number[]) => {
    var j, x, i;
    for (i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = arr[i];
      arr[i] = arr[j];
      arr[j] = x;
    }
    return arr;
  };

  make = () => {
    while (true) {
      let potentialPz = this.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 0]);

      // checks solvability
      let sum = 0;
      for (let i = 0; i < 8; i++) {
        if (potentialPz[i] === 0) continue;
        for (let j = i + 1; j < 9; j++) {
          if (potentialPz[j] === 0) continue;
          if (potentialPz[i] > potentialPz[j]) {
            sum++;
          }
        }
      }
      if (sum % 2 === 0) {
        let pz: number[][] = [];
        for (let i = 0; i < 9; i += 3) {
          let temp = [];
          for (let j = i; j < i + 3; j++) {
            temp.push(potentialPz[j]);
          }
          pz.push(temp);
        }
        return pz;
      }
      continue;
    }
  };
}

export default Generator;
