export default function set_empty(obj: object, key: symbol | number | string, value: unknown) {
    if (value) {
        obj[key] = value
    } else {
        delete obj[key]
    }
}