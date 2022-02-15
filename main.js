import { testStates,resetTiles , goalState} from './puzzle.js';
import BreadthFirst from './breadth-first.js';
import IterativeDeepening from './iterative-deepening.js';
import PuzzleAnimator from './animation.js';

//console.log(new BreadthFirst().time(testStates[0]))

document.querySelectorAll('.animation-control').forEach(btn => {
    btn.addEventListener('click', () => {
        const instruction = btn.classList[1];
        animator[instruction]();
    });
});

document.querySelectorAll('.state-control').forEach(btn => {
    btn.addEventListener('click', () => {
        const stateRequest = btn.classList[1]

        if (stateRequest === 'reset') {
            animator.resetPuzzle();
            return;
        }

        if (stateRequest === 'prev' && currentStateIdx > 0) {
            --currentStateIdx;
        }

        if (stateRequest === 'next' && currentStateIdx < puzzleStates.length) {
            ++currentStateIdx;
        }

        const newState = new BreadthFirst().time(puzzleStates[currentStateIdx]);
        animator.newPuzzle(newState);
    });
});
IterativeDeepening.depthFirstSearch(testStates[0], goalState)
// const paths = new BreadthFirst().time(testStates[0]);
// console.log(paths);
// paths.forEach((path,i) => {
//     console.log(path);
//     setTimeout(() => {
//         resetTiles(path)
//     }, i*500);
// });

// console.time('Breadth First Search');
// testStates.forEach((puzz, i) => {
    // console.time('A* search');
    // let paths = AStar.search(puzzleStates[i], goalState);
    // console.timeEnd('A* search');
    // console.log(paths);

//     console.time('Breadth First Search');
//     let paths = new BreadthFirst().time(puzz);
//     console.log(paths);
//     console.timeEnd('Breadth First Search');
//     console.log(window.performance.memory);
// })

// console.timeEnd('Breadth First Search');
// console.log(window.performance.memory);