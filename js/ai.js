function getBestMove(grid, runs, debug) {
		var bestScore = 0; 
		var bestMove = -1;

		for (var i=0;i<4;i++) {
			// score move position
			var score = multiRandomRun(grid, i, runs);
			
			if (score >= bestScore) {
				bestScore = score;
				bestMove = i;
			}
			
			if (debug) {
				console.log('Move ' + i + " - " + score);
			}
		}
		if(!grid.movesAvailable()) console.log('bug2');		
		// assert move found		
		if (bestMove == -1) {
			console.log('ERROR...'); 
			errorGrid = grid.clone();
		} 
		
		return {move: bestMove, score: bestScore};
}



function multiRandomRun(grid, move, runs) {
	var total = 0.0;
	var min = 1000000;
	var max = 0;

	
	for (var i=0 ; i < runs ; i++) {
		s = randomRun(grid, move);
		if (s == -1) return -1;
			
		total += s;
		if (s < min) min = s;
		if (s > max) max = s;
	}
	var avg = total / runs;

//	return max;
//	return min;
	return avg;
//	return avg+max;
}

function randomRun(grid, move) {	
	var g = grid.clone();
	var score = 0;
	var res = moveAndAddRandomTiles(g, move);
	if (!res.moved) {
		return -1; // can't start
	}	
	score += res.score;

	// run til we can't
	while (true) {
		if (!g.movesAvailable()) break;
		
		var res = g.move(Math.floor(Math.random() * 4));
		if (!res.moved) continue;
		
		score += res.score;
		g.addRandomTile();
	}
	// grid done.
	return score;
}

function moveAndAddRandomTiles(grid, direction) {
	var res = grid.move(direction);
	if (res.moved) grid.addRandomTile();
	return res;
}

// performs a search and returns the best move
function AI_getBest(grid) {
    return getBestMove(grid, 100);  
}
