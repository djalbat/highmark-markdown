"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get filter () {
        return filter;
    },
    get forEach () {
        return forEach;
    },
    get mapKeys () {
        return mapKeys;
    },
    get mapValues () {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvb2JqZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZm9yRWFjaChvYmplY3QsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBvYmplY3Rba2V5XTtcblxuICAgIGNhbGxiYWNrKGtleSwgdmFsdWUpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlcihvYmplY3QsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBvYmplY3Rba2V5XSxcbiAgICAgICAgICByZXN1bHQgPSBjYWxsYmFjayhrZXksIHZhbHVlKTtcblxuICAgIGlmICghcmVzdWx0KSB7XG4gICAgICBkZWxldGUgb2JqZWN0W2tleV07XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcEtleXMob2JqZWN0LCBjYWxsYmFjaykge1xuICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG5cbiAgY29uc3QgdmFsdWVzID0gW107XG5cbiAga2V5cyA9IGtleXMubWFwKChrZXkpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IG9iamVjdFtrZXldO1xuXG4gICAgZGVsZXRlIG9iamVjdFtrZXldO1xuXG4gICAga2V5ID0gY2FsbGJhY2soa2V5LCB2YWx1ZSk7IC8vL1xuXG4gICAgdmFsdWVzLnB1c2godmFsdWUpO1xuXG4gICAgcmV0dXJuIGtleTtcbiAgfSk7XG5cbiAga2V5cy5mb3JFYWNoKChrZXksIGluZGV4KSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSB2YWx1ZXNbaW5kZXhdO1xuXG4gICAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXBWYWx1ZXMob2JqZWN0LCBjYWxsYmFjaykge1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcblxuICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGxldCB2YWx1ZSA9IG9iamVjdFtrZXldO1xuXG4gICAgdmFsdWUgPSBjYWxsYmFjayhrZXksIHZhbHVlKTsgLy8vXG5cbiAgICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICB9KTtcbn0iXSwibmFtZXMiOlsiZmlsdGVyIiwiZm9yRWFjaCIsIm1hcEtleXMiLCJtYXBWYWx1ZXMiLCJvYmplY3QiLCJjYWxsYmFjayIsImtleXMiLCJPYmplY3QiLCJrZXkiLCJ2YWx1ZSIsInJlc3VsdCIsInZhbHVlcyIsIm1hcCIsInB1c2giLCJpbmRleCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBWWdCQTtlQUFBQTs7UUFWQUM7ZUFBQUE7O1FBdUJBQztlQUFBQTs7UUF3QkFDO2VBQUFBOzs7QUEvQ1QsU0FBU0YsUUFBUUcsTUFBTSxFQUFFQyxRQUFRO0lBQ3RDLElBQU1DLE9BQU9DLE9BQU9ELElBQUksQ0FBQ0Y7SUFFekJFLEtBQUtMLE9BQU8sQ0FBQyxTQUFDTztRQUNaLElBQU1DLFFBQVFMLE1BQU0sQ0FBQ0ksSUFBSTtRQUV6QkgsU0FBU0csS0FBS0M7SUFDaEI7QUFDRjtBQUVPLFNBQVNULE9BQU9JLE1BQU0sRUFBRUMsUUFBUTtJQUNyQyxJQUFNQyxPQUFPQyxPQUFPRCxJQUFJLENBQUNGO0lBRXpCRSxLQUFLTCxPQUFPLENBQUMsU0FBQ087UUFDWixJQUFNQyxRQUFRTCxNQUFNLENBQUNJLElBQUksRUFDbkJFLFNBQVNMLFNBQVNHLEtBQUtDO1FBRTdCLElBQUksQ0FBQ0MsUUFBUTtZQUNYLE9BQU9OLE1BQU0sQ0FBQ0ksSUFBSTtRQUNwQjtJQUNGO0FBQ0Y7QUFFTyxTQUFTTixRQUFRRSxNQUFNLEVBQUVDLFFBQVE7SUFDdEMsSUFBSUMsT0FBT0MsT0FBT0QsSUFBSSxDQUFDRjtJQUV2QixJQUFNTyxTQUFTLEVBQUU7SUFFakJMLE9BQU9BLEtBQUtNLEdBQUcsQ0FBQyxTQUFDSjtRQUNmLElBQU1DLFFBQVFMLE1BQU0sQ0FBQ0ksSUFBSTtRQUV6QixPQUFPSixNQUFNLENBQUNJLElBQUk7UUFFbEJBLE1BQU1ILFNBQVNHLEtBQUtDLFFBQVEsR0FBRztRQUUvQkUsT0FBT0UsSUFBSSxDQUFDSjtRQUVaLE9BQU9EO0lBQ1Q7SUFFQUYsS0FBS0wsT0FBTyxDQUFDLFNBQUNPLEtBQUtNO1FBQ2pCLElBQU1MLFFBQVFFLE1BQU0sQ0FBQ0csTUFBTTtRQUUzQlYsTUFBTSxDQUFDSSxJQUFJLEdBQUdDO0lBQ2hCO0FBQ0Y7QUFFTyxTQUFTTixVQUFVQyxNQUFNLEVBQUVDLFFBQVE7SUFDeEMsSUFBTUMsT0FBT0MsT0FBT0QsSUFBSSxDQUFDRjtJQUV6QkUsS0FBS0wsT0FBTyxDQUFDLFNBQUNPO1FBQ1osSUFBSUMsUUFBUUwsTUFBTSxDQUFDSSxJQUFJO1FBRXZCQyxRQUFRSixTQUFTRyxLQUFLQyxRQUFRLEdBQUc7UUFFakNMLE1BQU0sQ0FBQ0ksSUFBSSxHQUFHQztJQUNoQjtBQUNGIn0=