class Result {
    static moneyWinInGame(resultRB, resultG, bid) {
        if (resultRB) return 2 * bid;
       else if (resultG) return 60 * bid;
       else {return}
    }

    static checkWinner(draw, result) {
        if(draw === result) return true;
        else return false;
    }
}