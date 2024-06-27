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
    var values = [];
    keys = keys.map(function(key) {
        var value = object[key];
        delete object[key];
        key = callback(key, value); ///
        values.push(value);
        return key;
    });
    keys.forEach(function(key, index) {
        var value = values[index];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvb2JqZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZm9yRWFjaChvYmplY3QsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBvYmplY3Rba2V5XTtcblxuICAgIGNhbGxiYWNrKGtleSwgdmFsdWUpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlcihvYmplY3QsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBvYmplY3Rba2V5XSxcbiAgICAgICAgICByZXN1bHQgPSBjYWxsYmFjayhrZXksIHZhbHVlKTtcblxuICAgIGlmICghcmVzdWx0KSB7XG4gICAgICBkZWxldGUgb2JqZWN0W2tleV07XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcEtleXMob2JqZWN0LCBjYWxsYmFjaykge1xuICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG5cbiAgY29uc3QgdmFsdWVzID0gW107XG5cbiAga2V5cyA9IGtleXMubWFwKChrZXkpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IG9iamVjdFtrZXldO1xuXG4gICAgZGVsZXRlIG9iamVjdFtrZXldO1xuXG4gICAga2V5ID0gY2FsbGJhY2soa2V5LCB2YWx1ZSk7IC8vL1xuXG4gICAgdmFsdWVzLnB1c2godmFsdWUpO1xuXG4gICAgcmV0dXJuIGtleTtcbiAgfSk7XG5cbiAga2V5cy5mb3JFYWNoKChrZXksIGluZGV4KSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSB2YWx1ZXNbaW5kZXhdO1xuXG4gICAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXBWYWx1ZXMob2JqZWN0LCBjYWxsYmFjaykge1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcblxuICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGxldCB2YWx1ZSA9IG9iamVjdFtrZXldO1xuXG4gICAgdmFsdWUgPSBjYWxsYmFjayhrZXksIHZhbHVlKTsgLy8vXG5cbiAgICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJmaWx0ZXIiLCJmb3JFYWNoIiwibWFwS2V5cyIsIm1hcFZhbHVlcyIsIm9iamVjdCIsImNhbGxiYWNrIiwia2V5cyIsIk9iamVjdCIsImtleSIsInZhbHVlIiwicmVzdWx0IiwidmFsdWVzIiwibWFwIiwicHVzaCIsImluZGV4Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFZZ0JBLE1BQU07ZUFBTkE7O0lBVkFDLE9BQU87ZUFBUEE7O0lBdUJBQyxPQUFPO2VBQVBBOztJQXdCQUMsU0FBUztlQUFUQTs7O0FBL0NULFNBQVNGLFFBQVFHLE1BQU0sRUFBRUMsUUFBUTtJQUN0QyxJQUFNQyxPQUFPQyxPQUFPRCxJQUFJLENBQUNGO0lBRXpCRSxLQUFLTCxPQUFPLENBQUMsU0FBQ087UUFDWixJQUFNQyxRQUFRTCxNQUFNLENBQUNJLElBQUk7UUFFekJILFNBQVNHLEtBQUtDO0lBQ2hCO0FBQ0Y7QUFFTyxTQUFTVCxPQUFPSSxNQUFNLEVBQUVDLFFBQVE7SUFDckMsSUFBTUMsT0FBT0MsT0FBT0QsSUFBSSxDQUFDRjtJQUV6QkUsS0FBS0wsT0FBTyxDQUFDLFNBQUNPO1FBQ1osSUFBTUMsUUFBUUwsTUFBTSxDQUFDSSxJQUFJLEVBQ25CRSxTQUFTTCxTQUFTRyxLQUFLQztRQUU3QixJQUFJLENBQUNDLFFBQVE7WUFDWCxPQUFPTixNQUFNLENBQUNJLElBQUk7UUFDcEI7SUFDRjtBQUNGO0FBRU8sU0FBU04sUUFBUUUsTUFBTSxFQUFFQyxRQUFRO0lBQ3RDLElBQUlDLE9BQU9DLE9BQU9ELElBQUksQ0FBQ0Y7SUFFdkIsSUFBTU8sU0FBUyxFQUFFO0lBRWpCTCxPQUFPQSxLQUFLTSxHQUFHLENBQUMsU0FBQ0o7UUFDZixJQUFNQyxRQUFRTCxNQUFNLENBQUNJLElBQUk7UUFFekIsT0FBT0osTUFBTSxDQUFDSSxJQUFJO1FBRWxCQSxNQUFNSCxTQUFTRyxLQUFLQyxRQUFRLEdBQUc7UUFFL0JFLE9BQU9FLElBQUksQ0FBQ0o7UUFFWixPQUFPRDtJQUNUO0lBRUFGLEtBQUtMLE9BQU8sQ0FBQyxTQUFDTyxLQUFLTTtRQUNqQixJQUFNTCxRQUFRRSxNQUFNLENBQUNHLE1BQU07UUFFM0JWLE1BQU0sQ0FBQ0ksSUFBSSxHQUFHQztJQUNoQjtBQUNGO0FBRU8sU0FBU04sVUFBVUMsTUFBTSxFQUFFQyxRQUFRO0lBQ3hDLElBQU1DLE9BQU9DLE9BQU9ELElBQUksQ0FBQ0Y7SUFFekJFLEtBQUtMLE9BQU8sQ0FBQyxTQUFDTztRQUNaLElBQUlDLFFBQVFMLE1BQU0sQ0FBQ0ksSUFBSTtRQUV2QkMsUUFBUUosU0FBU0csS0FBS0MsUUFBUSxHQUFHO1FBRWpDTCxNQUFNLENBQUNJLElBQUksR0FBR0M7SUFDaEI7QUFDRiJ9