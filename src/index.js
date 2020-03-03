
exports.min = function min (array) {
    if (array && array.length > 0) {
        let numb = array[0];
        array.forEach(function (item, index, array) {
            if (item <= numb) {
                return numb = item;
            }

        });
        return numb
    } else {
        return 0;
    }

};

exports.max = function max (array) {
    if (array && array.length > 0) {
        let numb = array[0];
        array.forEach(function (item, index, array) {
            if (item >= numb) {
                return numb = item;
            }

        });
        return numb
    } else {
        return 0;
    }

};

exports.avg = function avg (array) {
    if (array && array.length > 0) {
        return array.reduce((a, b) => (a + b)) / array.length;
    } else {
        return 0;
    }
};
