"use strict";

export function forEach(object, callback) {
  const keys = Object.keys(object);

  keys.forEach((key) => {
    const value = object[key];

    callback(key, value);
  });
}

export function filter(object, callback) {
  const keys = Object.keys(object);

  keys.forEach((key) => {
    const value = object[key],
          result = callback(key, value);

    if (!result) {
      delete object[key];
    }
  });
}

export function mapKeys(object, callback) {
  let keys = Object.keys(object);

  const values = [];

  keys = keys.map((key) => {
    const value = object[key];

    delete object[key];

    key = callback(key, value); ///

    values.push(value);

    return key;
  });

  keys.forEach((key, index) => {
    const value = values[index];

    object[key] = value;
  });
}

export function mapValues(object, callback) {
  const keys = Object.keys(object);

  keys.forEach((key) => {
    let value = object[key];

    value = callback(key, value); ///

    object[key] = value;
  });
}
