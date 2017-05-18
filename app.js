/**
 * Created by USER on 13/05/2017.
 */

/**
 *
 * @param r
 * @returns {*}
 */
function calculateArea(r) {
    //validate parameter is number type , then return area if true
    return (typeof r === "number" ? Math.round((r * r) * (Math.PI)) : "invalid input type")
}

var area = calculateArea(7);
console.log(area);