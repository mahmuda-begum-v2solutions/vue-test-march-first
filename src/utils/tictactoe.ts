export class TicTacToe {
  board: (string | null)[][]
  winner: string | null = null
  player: 'X' | 'O' = 'X'

  constructor() {
    this.board = Array.from({length: 3}, ()=> Array(3).fill(null))
    // this.board = [
    //   [null, null, null],
    //   [null, null, null],
    //   [null, null, null],
    // ]
  }

  checkWinner() {
    //rows
    for (const row of this.board) {
      const [a, b, c] = row
      if (a && a === b && b === c) {
        this.winner = a
        return
      }
    }

    //columns
    const columns = [0, 1, 2]
    for (const col of columns) {
      const a = this.board[0][col]
      const b = this.board[1][col]
      const c = this.board[2][col]

      if (a && a === b && b === c) {
        this.winner = a
        return
      }
    }

    // Check top-left to bottom-right diagonal
    const d1 = this.board[0][0]
    const d2 = this.board[1][1]
    const d3 = this.board[2][2]

    if(d1 && d1 === d2 && d2 === d3){
        this.winner = d1
        return
    }

    // Check top-right to bottom-left diagonal
    const e1 = this.board[0][2];
    const e2 = this.board[1][1];
    const e3 = this.board[2][0];
    if (e1 && e1 === e2 && e2 === e3) {
      this.winner = e1;
      return;
    }

     // No winner found
     this.winner = null;
  }

  makeMove(row: number, col: number): boolean {
    if(this.winner || this.board[row][col] !== null){
        return false
    }
    this.board[row][col] = this.player
    this.checkWinner()

    if(!this.winner){
        this.player = this.player === 'X' ? 'O' : 'X'
    }
    return true
  }
}
