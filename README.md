# 2048 AI - Using no hard-coded knowledge about the game.

AI for the game [2048](https://github.com/gabrielecirulli/2048).

See it in action [here](http://ronzil.github.io/2048-AI/). 

After seeing several AI projects for the game, I was interested in creating an AI that does not contain any hard-coded knowledge about the game (like scoring functions, hueristics etc). Instead the AI should "find out for itself" without me, the programmer having to know anything about game stratagy.

The implemented algorithm chooses which move to play like this: For each possible move, play it and then continue to play **random moves** until the game is finished. This is done many times and the move that returns the highest avarage score is chosen.

The success of the AI is surprising as a random-walk game usually finishes quite quickly, yet chosing the highest yielding move results in very good game play. Using only 100 runs per move the AI reaches the desired 

For more detail on how it works, [check out my answer on stackoverflow](http://stackoverflow.com/a/22389702/1056032).