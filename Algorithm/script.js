// /*
//     Aarry: Second-to-Last
//     Return the Second-to-Last element of an array. Given [42, true, 4, "liam", 7]
//     ,return "Liam". If array is too short, return null
//  */
//
// var array1 = [42, true, 4, "Liam", 7];
//
// function sectionToLast(arr) {
//     if(arr.length < 2) {
//         return null;
//     } else {
//         return arr[arr.length -2];
//     }
// }
//
// console.log(sectionToLast([42, true, 4, "Liam", 7]));
//
// // [42, 1, 4, Math.PI, 7]
// function secionLarget(arr) {
//     console.log(arr);
//     if(arr.length < 2) {
//         console.log(arr);
//         return null;
//     } else {
//         // Bubble Sort
//         //var length = arr.length;
//         for(var i = arr.length - 1; i>=0; i--) {
//             for(var j = 1; j<= i; j++) {
//                 if(arr[j-1] > arr[j]) {
//                     var temp = arr[j-1];
//                     arr[j-1] = arr[j];
//                     arr[j] = temp;
//                 }
//             }
//         }
//     }
//     console.log(arr);
//     return arr[arr.length - 2];
// }
//
// console.log(secionLarget([42, 1, 4, Math.PI, 7]));
//
//
//
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
//
//
// function nthToLast(arr, nth) {
//     var position = nth;
//     var index = arr.length - 1;
//     if(nth > arr.length -1) {
//         return null;
//     } else {
//         return arr[arr.length - nth];
//     }
// }
//
// console.log(nthToLast([5, 2, 3, 6, 4, 9, 7], 3));
//
//
// function nthLargest(arr, N) {
//     console.log(arr);
//
//     for(var i = arr.length - 1; i >= 0; i--) {
//         for(var j = 1; j <= i; j++) {
//             if(arr[j - 1] > arr[j]) {
//                 var temp = arr[j-1];
//                 arr[j-1] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//         console.log(arr);
//     }
//     console.log(arr);
//     return arr[arr.length - N];
// }
//
// console.log("hello" + nthLargest([15, 1, 5, 7, 2], 2));
//
// function nthLargestWhile(arr, n) {
//     var i = arr.length - 1;
//     while ( i > 0 ) {
//         console.log(arr);
//         for(var j = 1; j <= i; j++) {
//             if(arr[j-1] > arr[i]) {
//                 var temp = arr[j-1];
//                 arr[j-1] = arr[j];
//                 arr[j] =temp;
//             }
//         }
//         console.log(arr);
//         i--;
//     }
//     return arr[i];
// }
//
// console.log(nthLargestWhile([7, 5, 3, 4, 2], 3));
//
//
// function secondLlarget(arr) {
//     if (arr.length < 2) {
//         return null;
//     } else {
//         var first = arr[0] > arr[1] ? arr[0] : arr[1];
//         var second = arr[1] > arr[1] ? arr[1] : arr[0];
//         for( var i = 2; i < arr.length; i++) {
//             if(arr[i] > first) {
//                 second = first;
//                 first = arr[i];
//             } else if (arr[i] > second) {
//                 second = arr[i];
//             }
//         }
//
//         return second;
//     }
//
//
// }

// 1. Find the max
// 2. Find next largetst
// 3. do #2, n- 1 times

// function checkNthLarget(arr, n) {
//     console.log(arr);

    // if( n > arr.length || n < 1) {
    //     console.log(0);
    //     return 0;
    // }

    // var nthLargest;
    //
    // for (var nth = n; nth - 1 > 0; nth--) {
    //     for (var i = 1; i < arr.length; i++) {
    //         nthLargest = arr[i - 1] > arr[i] ? arr[i - 1] : arr[i];
    //     }
    // }
    //
    // console.log(nthLargest);


    // while( n > arr.length || n < 1 && n - 1 > 0) {
    //     for(var i = 1; i < arr.length; i++){
    //         nthLargest = arr[i - 1] > arr[i] ? arr[i - 1] : arr[i];
    //     }
    //     n--;
    // }
    //
    // console.log(nthLargest);




    //
    // for(var i = 1; i < arr.length; i++) {
    //     if(arr[i]>nthLargest) {
    //         nthLargest = arr[i];
    //     }
    // }


    // while( n - 1 > 0) {
    //
    //     var nextLargest = arr[0];
    //
    //     for(i = 0; i < arr.length; i++) {
    //         if(arr[i] < nthLargest) {
    //             nextLargest = arr[i];
    //             break;
    //         }
    //     }
    //
    //     for(i = 0; i < arr.length; i++) {
    //         if( arr[i] > nextLargest && arr[i] < nthLargest) {
    //             nextLargest = arr[i];
    //         }
    //     }
    //
    //     nthLargest = nextLargest;
    //     n--;
    // }
    //
    // console.log(nthLargest);
    // return nthLargest;

}
//
// checkNthLarget([15, 1, 5, 20, 2], 0);
// checkNthLarget([15, 1, 5, 20, 2], 1);
// checkNthLarget([15, 1, 5, 20, 2], 2);
// checkNthLarget([15, 1, 5, 20, 2], 3);
// checkNthLarget([15, 1, 5, 20, 2], 4);
// checkNthLarget([15, 1, 5, 20, 2], 5);


// // 1. Check if nth > the number of element in the array, check if nth < 0
// // 2. Get the first value of the array and assigned it to nthLargest
// // 3. Go thru the whole array to see if any other element is larger than
// //    the nthLargest, if so assignmed that to the nthLargest
// // 4. Find the se
// function checkNthLargestElement(arr, nth) {
//
//
//     if(nth > arr.length || nth < 1) {
//         return null;
//     }
//
//     var nthLargest = arr[0];
//
//     for(var i = 1; i < arr.length; i++) {
//         if(arr[i] > nthLargest) {
//             nthLargest = arr[i];
//         }
//     }
//
//     console.log(nthLargest);
//
// }
//
//
// checkNthLargestElement([15, 1, 5, 20 ,2], 2);



function sortBubble(arr, n)
{
    var length = arr.length;

    for (var i = arr.length - 1; i >= 0; i--) {
        for (var j = 1; j <= i; j++) {
            if (arr[j - 1] > arr[j]) {
                var temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
            }
        }
    }

    console.log(arr);

}

sortBubble([15, 1, 5, 20, 2], 2) ;
