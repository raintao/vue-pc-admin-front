/**
 * Create an object with values equal to its key names.
 */

export default function (obj) {
    let ret = {}
    let key

    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            ret[key] = key
        }
    }
    return ret
}
