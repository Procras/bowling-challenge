  describe('The BowlingGame', function() {

    it('can create game', function() {
      var game = new BowlingGame();
    });

    it('can roll gutter game', function() {
      var game = new BowlingGame();
      for ( i = 0; i < 20; i++) {
        game.roll(0);
      }
      expect(game.score()).toBe(0);
    });
  });
