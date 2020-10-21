import Puzzle from "./Puzzle";

class Generator extends Puzzle {
  private puzzleG: number[][] = [[]];

  constructor(size: 8 | 15) {
    super(size, [[]]);
  }

  makeFrom = () => {
    if (this.size === 8) {
      this.puzzleG = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 0],
      ];
    } else {
      this.puzzleG = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 0],
      ];
    }
  };

  make = () => {
    this.makeFrom();
    interface Dict {
      [key: string]: boolean;
    }
    let prevStates: Dict = {};
    for (let i = 0; i < Math.floor(Math.random() * 50) + 10; i++) {
      let newMoves = this.generateChildNodes(this.puzzleG, "");
      for (let j = 0; j < newMoves.length; j++) {
        if (prevStates[JSON.stringify(newMoves[j][0])] !== true) {
          this.puzzleG = newMoves[j][0];
          prevStates[JSON.stringify(newMoves[j][0])] = true;
          break;
        }
      }
    }
    return this.puzzleG;
  };
}

export default Generator;
