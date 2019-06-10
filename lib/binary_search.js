function binarySearch(array, target) {
  if ( array.length <= 0 ) return false;

  let mid = Math.floor(array.length / 2);

  let midEl = array[mid];

  if (target === midEl) {
    return true;
  }

  if (target < midEl) {
    return binarySearch(array.slice(0, mid), target);
  } else {
    return binarySearch(array.slice(mid + 1), target);
  }
}

function binarySearchIndex(array, target) {
  if ( array.length === 0 ) return -1;

  let mid = Math.floor(array.length / 2);

  let midEl = array[mid];
  if (target === midEl) {
    return mid;
  }

  if ( target < midEl ) {
    return binarySearchIndex(array.slice(0, mid), target);
  } else {
    let slice = binarySearchIndex(array.slice(mid + 1), target);
    return slice === -1 ? -1 : slice + mid + 1;
  }
    
}


module.exports = {
    binarySearch,
    binarySearchIndex
};

