module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  //increase enhancement by 1 if less than 20
  if (item < 20) {
    return item + 1;
  } else {
    return item;
  }
}

function fail(item) {
  if (item < 15) {
    return item - 5;
  }
  else if (item >= 15) {
    if (item > 16) {
      return item - 1;
    } else {
      return item - 10;
    }
  }
}

function repair(item) {
  if (item < 100) {
    const needs = 100 - item;

    return item + needs;
  } else {
    return item;
  }
}

function get(item) {
  return { ...item };
}
