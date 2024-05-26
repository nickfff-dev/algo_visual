
export const ACTIVE_NODE_COLOR = '#ff7c43';
export const ColorRange = {
    low: '#2f4b7c',
    mid: '#665191',
    high: '#a05195',
};

export const Size = {
    width: 0,
    height: 0,
};

export const SortingAlgo = {
    BUBBLE: 'Bubble Sort',
    MERGE: 'Merge Sort',
    QUICK: 'Quick Sort',
    SELECTION: 'Selection Sort',
    INSERTION: 'Insertion Sort',
};



export const loadingStatus = {
    LOADING: "LOADING",
    IDLE: "IDLE",
    ERROR: "ERROR",
}
export const nodeStatus = {
    NORMAL: "NORMAL",
    VISITED: "VISITED",
    ACTIVE: "ACTIVE",
}

export const nodeBase = {
    id: '',
    value: 0,
    status: nodeStatus.NORMAL,
}

export const node = {
    ...nodeBase,
    time: new Date().getTime(),
}

export const Bar = {
    ...Size,
    ...nodeBase,
    x: 0,
    y: 0,
    color: ColorRange.low,
};

export const DSAType = {
    ARRAY: 'array',
    BIN_TREE: 'linked_list',
};