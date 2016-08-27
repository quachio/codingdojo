// Bubble Sort
function bubbleSort(arr, n) {
    console.log(arr);

    var len = arr.length;
    for (var i = len -  1; i >= 0; i--) {
        for (var j = 1; j <= i; j++) {
            if (arr[j - 1] > arr[j]) {
                var temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
            }
        }
        console.log(arr);
    }


    //return arr;
}

bubbleSort([15, 1, 20, 5, 3], 3);


// [15, 1, 20, 5, 3], 2
// 0    1  2   3  4

function test(arr, n) {
    var nthLargest;
    for(var i = 0; i < arr.length; i++) {
        nthLargest = arr[i] > arr[i + 1] ? arr[i] : arr[i + 1];
    }
    console.log(nthLargest);
}

test([15, 1, 20, 5, 3], 0);



// // Bubble Sort
// function bubbleSort(arr){
//    var len = arr.length;
//    for (var i = len-1; i>=0; i--){
//      for(var j = 1; j<=i; j++){
//        if(arr[j-1]>arr[j]){
//            var temp = arr[j-1];
//            arr[j-1] = arr[j];
//            arr[j] = temp;
//         }
//      }
//    }
//    return arr;
// }
