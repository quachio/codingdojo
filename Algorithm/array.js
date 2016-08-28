function pushToFront(arr, v) {
    for (var i = arr.length; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[i] = v;
    console.log(arr);
}

pushToFront([1, 3, 4], 4);

function pushToBack(arr, v) {
    arr[arr.length] = v;
    console.log(arr);
}

pushToBack([1, 3, 4], 4);


function removeMiddle(arr) {
    console.log(arr);

    if (arr.length % 2 !== 1) {
        return null;
    }

    var middleIndex = Math.floor(arr.length / 2);
    for (var i = middleIndex; i < arr.length - 1; i++) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        console.log(arr);
    }
    arr.pop();
    console.log(arr);
}

removeMiddle([5, 7, 1, 8, 9]);

function minToFront(arr) {

    var lowest = arr[0];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < lowest) {
            lowest = arr[i];
        }
    }
    // console.log(lowest);

    var indexOfMin = 0;

    while (lowest != arr[indexOfMin]) {
        indexOfMin++;
    }

    // console.log(indexOfMin);
    // console.log(arr);


    for (i = indexOfMin; i > 0; i--) {
        var temp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = temp;
        console.log(arr);
    }





}


minToFront([4, 2, 1, 3, 5]);

function shuffle(arr) {
    console.log(arr);

    var min = 0;
    var max = arr.length;

    for (var i = 0; i < arr.length; i++) {
        var randomLoc1 = Math.floor(Math.random() * (max - min)) + min;
        var randomLoc2 = Math.floor(Math.random() * (max - min)) + min;

        var temp = arr[randomLoc1];
        arr[randomLoc1] = arr[randomLoc2];
        arr[randomLoc2] = temp;

    }
    console.log(arr);

}

shuffle([1, 2, 3, 4, 5, 6, 7]);

function removeRange(arr, start, end) {
    console.log(arr);
    for (var i = 0; i <= end - start; i++) {
        for (var k = start; k < arr.length - 1; k++) {
            var temp = arr[k];
            arr[k] = arr[k + 1];
            arr[k + 1] = temp;
        }
        arr.pop();
        console.log(arr);
    }
}

removeRange([20, 30, 40, 50, 60, 70], 2, 4);


function intermediateSum(arr) {
    console.log(arr);
    var sum = 0;
    var counter = 0;

    for (var i = 0; i < arr.length; i++) {
        if (counter < 10) {
            counter++;
            sum += arr[i];
        } else {
            for (var k = arr.length; k > counter; k--) {
                arr[k] = arr[k - 1];
            }
            arr[counter] = sum;
            counter = 0;
            sum = 0;
        }
    }
    arr[arr.length] = sum;
    console.log(arr);
}

intermediateSum([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]);

function isCreditCardValid(digitArr) {

    console.log(digitArr, digitArr.length);

    if (digitArr.length < 13 || digitArr.length > 19) {
        console.log(false, "Invalid Credit Card Nub");
        return false;
    }

    var lastDigit = digitArr.pop();
    var sum = 0;
    console.log(lastDigit, "lastDigit");

    for (var i = digitArr.length - 1; i >= 0; i--) {

        if (i % 2 === 1) {
            digitArr[i] *= 2;
            if (digitArr[i] > 9) {
                digitArr[i] -= 9;
            }
        }

        sum += digitArr[i];

    }
    console.log(digitArr);

    console.log(sum);
    console.log(lastDigit);
    sum += lastDigit;
    console.log(sum);

    if (sum % 10 === 0) {
        console.log(sum);
        console.log(true);
        return true;
    } else {
        console.log(false);
        return false;
    }



}

// isCreditCardValid([4, 9, 8, 0, 1, 0, 2, 9, 7, 8, 4, 1, 12, 14]);
isCreditCardValid([5,2,2,8,2]);
