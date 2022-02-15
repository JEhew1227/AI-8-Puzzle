export default class IterativeDeepening {
    static depthFirstSearch(root, goal, current = null, visited = []) {
        if (visited.length === 0) {
            visited.push(root);
        }

        if (!current) {
            current = root;
            current.prev = null;
        }

        if (IterativeDeepening.isEqual(current.data, goal)) {
            return IterativeDeepening.constructPath(current);
        }

        const successors = IterativeDeepening.getSuccessors({data: current});
        console.log(current);
        console.log(successors);
        return
        for (let i = 0; i < successors.length; ++i) {
            const successor = successors[i];
            // if (!) {
            //     visited.push(successor);

            //     successor.prev = current
            //     return IterativeDeepening.depthFirstSearch(root, goal, successor, visited);
            // }
        }

        // go backwards
        return IterativeDeepening.depthFirstSearch(root, goal, current.prev, visited);
    }

    static isEqual(arr1, arr2) {
        if(arr1 == null || arr2 == null){
            return false;
        }

        if(arr1.length !== arr2.length){
            return false;
        }

        for (let i = 0; i < arr1.length; ++i) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }
        return true;
    }

    static getSuccessors(node) {
        const spaceIdx = node.data.indexOf(0);
        const successors = [];

        this.getPossibleMoves(spaceIdx).forEach(move =>{
            const state = [...node.data];
            const indexSwitch = spaceIdx + move;

            state[spaceIdx] = state[indexSwitch];
            state[indexSwitch] = 0;

            if(!IterativeDeepening.isEqual(state, node.data.prev)){
                successors.push(state);
            }
        })
        return successors;
    }

    static getPossibleMoves(spaceIdx) {
        const moves = [];

        if (spaceIdx >= 3 && spaceIdx <= 8) {
            moves.push(-3);
        }

        if (spaceIdx !== 2 && spaceIdx !== 5 && spaceIdx !== 8) {
            moves.push(1);
        }

        if (spaceIdx >= 0 && spaceIdx <= 5) {
            moves.push(3);
        }

        if (spaceIdx !== 0 && spaceIdx !== 3 && spaceIdx !== 6) {
            moves.push(-1);
        }

        return moves;
    }
}