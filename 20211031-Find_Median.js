// Codewars

function median(array) {
    //code here
        let sorted = array.sort((a, b) => b - a);
        let mid = sorted.length / 2;
        let medianVal = 0;
        if (sorted.length % 2 === 0) {
            medianVal = (sorted[mid] + sorted[mid - 1]) / 2;
            return medianVal;
        }
                  medianVal = sorted[Math.floor(mid)];
            return medianVal;

    }

let arr = [33,99,100,30,29,50];
console.log(median(arr))

let arr1 = [2, 1, 3];
console.log(median(arr))
