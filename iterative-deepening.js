export default class IterativeDeepening {
    static search(root, goal){
        let limit = 0;
        let result = IterativeDeepening.depthFirstSearch(root, goal, limit + 1);
        while(!result){
            ++limit;
            result = IterativeDeepening.depthFirstSearch(root, goal, limit + 1);
        }
        return result;
    }

    static depthFirstSearch(root, goal, limit, current = null, visited = []) {
        if (visited.length === 0) {
            visited.push(root);
        }

        if (!current) {
            current = root;
            current.step = 0;
            current.prev = null;
            current.isRoot = true;
        }

        if(current.step > limit){
            return IterativeDeepening.depthFirstSearch(root, goal, limit, current.prev, visited);
        }

        if (IterativeDeepening.isEqual(current.data, goal)) {
            return IterativeDeepening.constructPath(current);
        }

        const successors = IterativeDeepening.getSuccessors({data: current});
        const lastSuccessor = successors.at(-1);
        if (IterativeDeepening.isVisited(lastSuccessor.data, visited)){
            return current.isRoot ?null: IterativeDeepening.depthFirstSearch(root, goal, limit, current.prev, visited);
        }
        for (let i = 0; i < successors.length; ++i) {
            const successor = successors[i];
            if (!IterativeDeepening.isVisited(successor.data, visited)) {
                visited.push(successor);

                successor.prev = current
                return IterativeDeepening.depthFirstSearch(root, goal, limit, successor, visited);
            }
        }

        // go backwards
        return IterativeDeepening.depthFirstSearch(root, goal, limit, current.prev, visited);
    }

    static isVisited(node, visited){
        for(let i = 0; i < visited.length; i++){
            if(IterativeDeepening.isEqual(node, visited[i])){
                return true;
            }
        }
        return false;
    }

    static constructPath(node){
        const path = []; 
        let current = node;
        while (current.prev != null){
            path.push(current.data);
            current =  current.prev;
        }
        path.push(current.data);
        return path.reverse();
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