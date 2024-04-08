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
    chop: function() {
        return chop;
    },
    splice: function() {
        return splice;
    },
    trim: function() {
        return trim;
    }
});
var _necessary = require("necessary");
var _constants = require("../constants");
var substring = _necessary.stringUtilities.substring;
function trim(string) {
    var shavenString = string.replace(/^.|.$/g, _constants.EMPTY_STRING);
    return shavenString;
}
function chop(string, start, deleteCount) {
    var begin, end;
    begin = -0;
    end = start; ///
    var leftString = substring(string, begin, end);
    begin = start + deleteCount;
    end = Infinity; ///
    var rightString = substring(string, begin, end);
    string = leftString + rightString; ///
    return string;
}
function splice(string, start, deleteCount, middleString) {
    var begin, end;
    begin = -0;
    end = start; ///
    var leftString = substring(string, begin, end);
    begin = start + deleteCount;
    end = Infinity; ///
    var rightString = substring(string, begin, end);
    string = leftString + middleString + rightString; ///
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3RyaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzdHJpbmdVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBzdWJzdHJpbmcgfSA9IHN0cmluZ1V0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIHRyaW0oc3RyaW5nKSB7XG4gIGNvbnN0IHNoYXZlblN0cmluZyA9IHN0cmluZy5yZXBsYWNlKC9eLnwuJC9nLCBFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiBzaGF2ZW5TdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaG9wKHN0cmluZywgc3RhcnQsIGRlbGV0ZUNvdW50KSB7XG4gIGxldCBiZWdpbixcbiAgICAgIGVuZDtcblxuICBiZWdpbiA9IC0wO1xuXG4gIGVuZCA9IHN0YXJ0OyAgLy8vXG5cbiAgY29uc3QgbGVmdFN0cmluZyA9IHN1YnN0cmluZyhzdHJpbmcsIGJlZ2luLCBlbmQpO1xuXG4gIGJlZ2luID0gc3RhcnQgKyBkZWxldGVDb3VudDtcblxuICBlbmQgPSBJbmZpbml0eTsgLy8vXG5cbiAgY29uc3QgcmlnaHRTdHJpbmcgPSBzdWJzdHJpbmcoc3RyaW5nLCBiZWdpbiwgZW5kKTtcblxuICBzdHJpbmcgPSBsZWZ0U3RyaW5nICsgcmlnaHRTdHJpbmc7ICAvLy9cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3BsaWNlKHN0cmluZywgc3RhcnQsIGRlbGV0ZUNvdW50LCBtaWRkbGVTdHJpbmcpIHtcbiAgbGV0IGJlZ2luLFxuICAgICAgZW5kO1xuXG4gIGJlZ2luID0gLTA7XG5cbiAgZW5kID0gc3RhcnQ7ICAvLy9cblxuICBjb25zdCBsZWZ0U3RyaW5nID0gc3Vic3RyaW5nKHN0cmluZywgYmVnaW4sIGVuZCk7XG5cbiAgYmVnaW4gPSBzdGFydCArIGRlbGV0ZUNvdW50O1xuXG4gIGVuZCA9IEluZmluaXR5OyAvLy9cblxuICBjb25zdCByaWdodFN0cmluZyA9IHN1YnN0cmluZyhzdHJpbmcsIGJlZ2luLCBlbmQpO1xuXG4gIHN0cmluZyA9IGxlZnRTdHJpbmcgKyBtaWRkbGVTdHJpbmcgKyByaWdodFN0cmluZzsgIC8vL1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbiJdLCJuYW1lcyI6WyJjaG9wIiwic3BsaWNlIiwidHJpbSIsInN1YnN0cmluZyIsInN0cmluZ1V0aWxpdGllcyIsInN0cmluZyIsInNoYXZlblN0cmluZyIsInJlcGxhY2UiLCJFTVBUWV9TVFJJTkciLCJzdGFydCIsImRlbGV0ZUNvdW50IiwiYmVnaW4iLCJlbmQiLCJsZWZ0U3RyaW5nIiwiSW5maW5pdHkiLCJyaWdodFN0cmluZyIsIm1pZGRsZVN0cmluZyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFjZ0JBLElBQUk7ZUFBSkE7O0lBcUJBQyxNQUFNO2VBQU5BOztJQTNCQUMsSUFBSTtlQUFKQTs7O3lCQU5nQjt5QkFFSDtBQUU3QixJQUFNLEFBQUVDLFlBQWNDLDBCQUFlLENBQTdCRDtBQUVELFNBQVNELEtBQUtHLE1BQU07SUFDekIsSUFBTUMsZUFBZUQsT0FBT0UsT0FBTyxDQUFDLFVBQVVDLHVCQUFZO0lBRTFELE9BQU9GO0FBQ1Q7QUFFTyxTQUFTTixLQUFLSyxNQUFNLEVBQUVJLEtBQUssRUFBRUMsV0FBVztJQUM3QyxJQUFJQyxPQUNBQztJQUVKRCxRQUFRLENBQUM7SUFFVEMsTUFBTUgsT0FBUSxHQUFHO0lBRWpCLElBQU1JLGFBQWFWLFVBQVVFLFFBQVFNLE9BQU9DO0lBRTVDRCxRQUFRRixRQUFRQztJQUVoQkUsTUFBTUUsVUFBVSxHQUFHO0lBRW5CLElBQU1DLGNBQWNaLFVBQVVFLFFBQVFNLE9BQU9DO0lBRTdDUCxTQUFTUSxhQUFhRSxhQUFjLEdBQUc7SUFFdkMsT0FBT1Y7QUFDVDtBQUVPLFNBQVNKLE9BQU9JLE1BQU0sRUFBRUksS0FBSyxFQUFFQyxXQUFXLEVBQUVNLFlBQVk7SUFDN0QsSUFBSUwsT0FDQUM7SUFFSkQsUUFBUSxDQUFDO0lBRVRDLE1BQU1ILE9BQVEsR0FBRztJQUVqQixJQUFNSSxhQUFhVixVQUFVRSxRQUFRTSxPQUFPQztJQUU1Q0QsUUFBUUYsUUFBUUM7SUFFaEJFLE1BQU1FLFVBQVUsR0FBRztJQUVuQixJQUFNQyxjQUFjWixVQUFVRSxRQUFRTSxPQUFPQztJQUU3Q1AsU0FBU1EsYUFBYUcsZUFBZUQsYUFBYyxHQUFHO0lBRXRELE9BQU9WO0FBQ1QifQ==