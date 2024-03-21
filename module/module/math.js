export  function plus(x, y) {
    console.log("调用 plus : x - " + x + " y - " + y)
    return x + y;
}

function plus2(x, y) {
    console.log("调用 plus : x - " + x + " y - " + y)
    return x + y + 1;
}

export const name = "square";

export { plus2 as pp}

