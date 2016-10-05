import { saveScore } from '02-direct-global';

describe('#saveScore', function() {
  it('should save gameInfo.score to local storage', function() {
    spyOn(localStorage, 'setItem');
    const gameInfo = { score: 74, gameId: 2 };

    saveScore(gameInfo);

    expect(localStorage.setItem).toHaveBeenCalledWith(jasmine.any(String), gameInfo.score);
  });

  it('should use "score-{gameId}" as the item name', function() {
    spyOn(localStorage, 'setItem');
    const gameInfo = { score: 74, gameId: 2 };

    saveScore(gameInfo);

    expect(localStorage.setItem).toHaveBeenCalledWith(`score-${gameInfo.gameId}`, jasmine.any(Number));
  });
});
