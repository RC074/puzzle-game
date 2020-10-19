class Puzzle {
  size: 8 | 15;
  puzzle: number[][];
  pzSolved: number[][];

  constructor(size: 8 | 15, puzzle: number[][], pzSolved: number[][]) {
    this.size = size;
    this.puzzle = puzzle;
    this.pzSolved = pzSolved;
  }

  findTile = (tile: number, pz: number[][]) => {
    for (let y = 0; y < this.size; y++) {
      for (let x = 0; x < this.size; x++) {
        if (pz[y][x] === tile) return [y, x];
      }
    }
    return [-1, -1];
  };

  generateChildNodes = (puzzle: number[][], prevMoves: string) => {
    let tb = {
      8: 2,
      15: 3,
    };
    let childNodes = [];
    let [y, x] = this.findTile(0, puzzle);
    if (x > 0) {
      // left
      let newNode = JSON.parse(JSON.stringify(puzzle));
      [newNode[y][x - 1], newNode[y][x]] = [newNode[y][x], newNode[y][x - 1]];
      childNodes.push([newNode, prevMoves + "l"]);
    }
    if (x < tb[this.size]) {
      let newNode = JSON.parse(JSON.stringify(puzzle));
      [newNode[y][x + 1], newNode[y][x]] = [newNode[y][x], newNode[y][x + 1]];
      childNodes.push([newNode, prevMoves + "r"]);
    }
    if (y > 0) {
      let newNode = JSON.parse(JSON.stringify(puzzle));
      [newNode[y - 1][x], newNode[y][x]] = [newNode[y][x], newNode[y - 1][x]];
      childNodes.push([newNode, prevMoves + "u"]);
    }
    if (y < tb[this.size]) {
      let newNode = JSON.parse(JSON.stringify(puzzle));
      [newNode[y + 1][x], newNode[y][x]] = [newNode[y][x], newNode[y + 1][x]];
      childNodes.push([newNode, prevMoves + "d"]);
    }
    return childNodes;
  };

  manhattan = (puzzle: number[][]) => {
    let score = 0;
    for (let val = 0; val <= this.size; val++) {
      let c_pos = this.findTile(val, puzzle);
      let f_pos = this.findTile(val, this.pzSolved);
      let y_d = Math.abs(c_pos[0] - f_pos[0]);
      let x_d = Math.abs(c_pos[1] - f_pos[1]);
      score += x_d + y_d;
    }
    return score;
  };
}

export default Puzzle;
