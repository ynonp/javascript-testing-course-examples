export function saveScore(gameInfo) {
  localStorage.setItem(`score-${gameInfo.gameId}`, gameInfo.score);
}


