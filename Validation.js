function getType(obj) {
    if (obj === null) {
        return "null";
    } else if (typeof obj === "object") {
        return Array.isArray(obj) ? "array" : "object";
    } else if (typeof obj === "string") {
        return "string";
    } else if (typeof obj === "number") {
        return Number.isInteger(obj) ? "integer" : "number";
    } else {
        return "unknown";
    }
}
