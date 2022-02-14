const testStates = [ 
    [ 7,1,8,6,5,4,0,2,3 ],
    [ 1,5,8,3,4,2,0,6,7 ],
    [ 3,4,6,5,0,8,1,2,7 ],
    [ 0,6,2,5,4,1,7,8,3 ],
    [ 7,4,6,1,8,5,2,0,3 ],
    [ 7,8,6,5,1,0,4,3,2 ],
    [ 5,3,6,2,4,8,7,1,0 ],
    [ 4,3,2,1,6,8,7,5,0 ],
    [ 4,7,6,1,3,0,8,5,2 ],
    [ 6,1,2,5,8,7,4,3,0 ],
];
     
const goalState = [ 1,2,3,4,5,6,7,8,0 ];

function resetTiles(tiles = null) {
    if (tiles == null) return
    const display = tiles;
    document.querySelectorAll(".box").forEach((box, i) => box.innerText = display[i] || '');
}

export {
    testStates,
    goalState,
    resetTiles,
}

