// Print hello world
console.log("Hello World !");

/*
Multi-line comment
*/

var name = "Hugo";
console.log(name);

var list = [5, 98, 87, 45, 23];

// Find max 
function maximum(list) {
    var max = list[0];
    for (var i=1; i<list.length; i++) {
        if (list[i] > max) {
            max = list[i];
        }
    }
    return max;
}
console.log(maximum(list));

// Sort
function sort(list) {
    for (var i=0; i<list.length; i++) {
        for (var j=i+1; j<list.length; j++) {
            if (list[i] > list[j]) {
                var temp = list[i];
                list[i] = list[j];
                list[j] = temp;
            }
        }
    }
    return list;
}
var list = [5, 98, 87, 45, 23];
console.log(list);
var sorted_list = sort(list);
console.log(sorted_list);