"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    filter: function() {
        return filter;
    },
    forEach: function() {
        return forEach;
    },
    mapKeys: function() {
        return mapKeys;
    },
    mapValues: function() {
        return mapValues;
    }
});
function forEach(object, callback) {
    var keys = Object.keys(object);
    keys.forEach(function(key) {
        var value = object[key];
        callback(key, value);
    });
}
function filter(object, callback) {
    var keys = Object.keys(object);
    keys.forEach(function(key) {
        var value = object[key], result = callback(key, value);
        if (!result) {
            delete object[key];
        }
    });
}
function mapKeys(object, callback) {
    var keys = Object.keys(object);
    keys.forEach(function(key) {
        var value = object[key];
        delete object[key];
        key = callback(key, value); ///
        object[key] = value;
    });
}
function mapValues(object, callback) {
    var keys = Object.keys(object);
    keys.forEach(function(key) {
        var value = object[key];
        value = callback(key, value); ///
        object[key] = value;
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvb2JqZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZm9yRWFjaChvYmplY3QsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBvYmplY3Rba2V5XTtcblxuICAgIGNhbGxiYWNrKGtleSwgdmFsdWUpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlcihvYmplY3QsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBvYmplY3Rba2V5XSxcbiAgICAgICAgICByZXN1bHQgPSBjYWxsYmFjayhrZXksIHZhbHVlKTtcblxuICAgIGlmICghcmVzdWx0KSB7XG4gICAgICBkZWxldGUgb2JqZWN0W2tleV07XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcEtleXMob2JqZWN0LCBjYWxsYmFjaykge1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcblxuICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gb2JqZWN0W2tleV07XG5cbiAgICBkZWxldGUgb2JqZWN0W2tleV07XG5cbiAgICBrZXkgPSBjYWxsYmFjayhrZXksIHZhbHVlKTsgLy8vXG5cbiAgICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcFZhbHVlcyhvYmplY3QsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgbGV0IHZhbHVlID0gb2JqZWN0W2tleV07XG5cbiAgICB2YWx1ZSA9IGNhbGxiYWNrKGtleSwgdmFsdWUpOyAvLy9cblxuICAgIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbImZpbHRlciIsImZvckVhY2giLCJtYXBLZXlzIiwibWFwVmFsdWVzIiwib2JqZWN0IiwiY2FsbGJhY2siLCJrZXlzIiwiT2JqZWN0Iiwia2V5IiwidmFsdWUiLCJyZXN1bHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQVlnQkEsTUFBTTtlQUFOQTs7SUFWQUMsT0FBTztlQUFQQTs7SUF1QkFDLE9BQU87ZUFBUEE7O0lBY0FDLFNBQVM7ZUFBVEE7OztBQXJDVCxTQUFTRixRQUFRRyxNQUFNLEVBQUVDLFFBQVE7SUFDdEMsSUFBTUMsT0FBT0MsT0FBT0QsSUFBSSxDQUFDRjtJQUV6QkUsS0FBS0wsT0FBTyxDQUFDLFNBQUNPO1FBQ1osSUFBTUMsUUFBUUwsTUFBTSxDQUFDSSxJQUFJO1FBRXpCSCxTQUFTRyxLQUFLQztJQUNoQjtBQUNGO0FBRU8sU0FBU1QsT0FBT0ksTUFBTSxFQUFFQyxRQUFRO0lBQ3JDLElBQU1DLE9BQU9DLE9BQU9ELElBQUksQ0FBQ0Y7SUFFekJFLEtBQUtMLE9BQU8sQ0FBQyxTQUFDTztRQUNaLElBQU1DLFFBQVFMLE1BQU0sQ0FBQ0ksSUFBSSxFQUNuQkUsU0FBU0wsU0FBU0csS0FBS0M7UUFFN0IsSUFBSSxDQUFDQyxRQUFRO1lBQ1gsT0FBT04sTUFBTSxDQUFDSSxJQUFJO1FBQ3BCO0lBQ0Y7QUFDRjtBQUVPLFNBQVNOLFFBQVFFLE1BQU0sRUFBRUMsUUFBUTtJQUN0QyxJQUFNQyxPQUFPQyxPQUFPRCxJQUFJLENBQUNGO0lBRXpCRSxLQUFLTCxPQUFPLENBQUMsU0FBQ087UUFDWixJQUFNQyxRQUFRTCxNQUFNLENBQUNJLElBQUk7UUFFekIsT0FBT0osTUFBTSxDQUFDSSxJQUFJO1FBRWxCQSxNQUFNSCxTQUFTRyxLQUFLQyxRQUFRLEdBQUc7UUFFL0JMLE1BQU0sQ0FBQ0ksSUFBSSxHQUFHQztJQUNoQjtBQUNGO0FBRU8sU0FBU04sVUFBVUMsTUFBTSxFQUFFQyxRQUFRO0lBQ3hDLElBQU1DLE9BQU9DLE9BQU9ELElBQUksQ0FBQ0Y7SUFFekJFLEtBQUtMLE9BQU8sQ0FBQyxTQUFDTztRQUNaLElBQUlDLFFBQVFMLE1BQU0sQ0FBQ0ksSUFBSTtRQUV2QkMsUUFBUUosU0FBU0csS0FBS0MsUUFBUSxHQUFHO1FBRWpDTCxNQUFNLENBQUNJLElBQUksR0FBR0M7SUFDaEI7QUFDRiJ9