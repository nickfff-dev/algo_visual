function selectionSortAlgo(array, size)
{
    for(let i = 0; i < size -1; i++){
        let min_idx = i;
        let min_item = array[i];
        for(let j = i + 1; j < size; j++){
            if(array[j] < min_item)
                {
                    min_idx = j;
                    min_item = array[j];
                }
        }
        array[min_idx] = array[i];
        array[i] = min_item;
    }
    return array;
}

module.exports  = {selectionSortAlgo};