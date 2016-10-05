import HighScore from 'logic/highscore';

describe('High Score Tests', function() {
  afterAll(HighScore.clear);

  describe('#save', function() {
    beforeEach(HighScore.clear);

    it('should add new player/score value to HS', function() {
      const hs = new HighScore();

      hs.addScore('joe', 4);

      expect(hs.getTopScore().length).toEqual(1);
      expect(hs.getTopScore()[0].player).toEqual('joe');
      expect(hs.getTopScore()[0].rounds).toEqual(4);
    });

    it('should not keep over 10 best records', function() {
      const hs = new HighScore();

      for (let i=0; i < HighScore.MAX_SIZE; i++) {
        hs.addScore('jane', 2);        
      }

      hs.addScore('joe', 5);

      expect(hs.getTopScore()).not.toContain({ player: 'joe', rounds: 5 });
      expect(hs.getTopScore().length).toEqual(HighScore.MAX_SIZE);
    });

    it('should order score from low to high round count', function() {
      const hs = new HighScore();

      hs.addScore('joe', 5);
      hs.addScore('jane', 3);
      hs.addScore('Bill', 4);

      expect(hs.getTopScore()).toEqual([
        { player: 'jane', rounds: 3 },
        { player: 'Bill', rounds: 4 },
        { player: 'joe',  rounds: 5 },
      ]);
    });
  });

  describe('#ctor', function() {
    it('should read initial value back from local storage', function() {
      HighScore.clear();
      const hs1 = new HighScore();
      hs1.addScore('jane', 2);

      const hs2 = new HighScore();
      expect(hs2.getTopScore()).toEqual([
        { player: 'jane', rounds: 2 },
      ]);
    });
  });

});

