// Solver.ts

import Puzzle from "./Puzzle";

class Solver extends Puzzle {
  AStar = () => {
    let gScore: number = 0;

    let queue: any = [[this.puzzle, gScore, this.manhattan(this.puzzle), ""]];

    interface Dict {
      [key: string]: boolean;
    }
    let closeSet: Dict = {};
    while (queue.length !== 0) {
      // eslint-disable-next-line
      let [currentPz, gScore, hScore, step] = queue.shift();
      closeSet[JSON.stringify(currentPz)] = true;
      let nextChilds = this.generateChildNodes(currentPz, step);
      for (let i = 0; i < nextChilds.length; i++) {
        if (
          JSON.stringify(nextChilds[i][0]) === JSON.stringify(this.pzSolved)
        ) {
          return nextChilds[i][1];
        } else if (closeSet[JSON.stringify(nextChilds[i][0])] !== true) {
          queue.push([
            nextChilds[i][0],
            gScore + 1,

            this.manhattan(nextChilds[i][0]),

            nextChilds[i][1],
          ]);
        }
      }
      queue.sort((a: number[], b: number[]) => a[2] - b[2]);
    }
  };
}

export default Solver;
