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
    var trimmedString = string.replace(/[\n\r]$/g, _constants.EMPTY_STRING);
    return trimmedString;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3RyaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzdHJpbmdVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBzdWJzdHJpbmcgfSA9IHN0cmluZ1V0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIHRyaW0oc3RyaW5nKSB7XG4gIGNvbnN0IHRyaW1tZWRTdHJpbmcgPSBzdHJpbmcucmVwbGFjZSgvW1xcblxccl0kL2csIEVNUFRZX1NUUklORyk7XG5cbiAgcmV0dXJuIHRyaW1tZWRTdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaG9wKHN0cmluZywgc3RhcnQsIGRlbGV0ZUNvdW50KSB7XG4gIGxldCBiZWdpbixcbiAgICAgIGVuZDtcblxuICBiZWdpbiA9IC0wO1xuXG4gIGVuZCA9IHN0YXJ0OyAgLy8vXG5cbiAgY29uc3QgbGVmdFN0cmluZyA9IHN1YnN0cmluZyhzdHJpbmcsIGJlZ2luLCBlbmQpO1xuXG4gIGJlZ2luID0gc3RhcnQgKyBkZWxldGVDb3VudDtcblxuICBlbmQgPSBJbmZpbml0eTsgLy8vXG5cbiAgY29uc3QgcmlnaHRTdHJpbmcgPSBzdWJzdHJpbmcoc3RyaW5nLCBiZWdpbiwgZW5kKTtcblxuICBzdHJpbmcgPSBsZWZ0U3RyaW5nICsgcmlnaHRTdHJpbmc7ICAvLy9cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3BsaWNlKHN0cmluZywgc3RhcnQsIGRlbGV0ZUNvdW50LCBtaWRkbGVTdHJpbmcpIHtcbiAgbGV0IGJlZ2luLFxuICAgICAgZW5kO1xuXG4gIGJlZ2luID0gLTA7XG5cbiAgZW5kID0gc3RhcnQ7ICAvLy9cblxuICBjb25zdCBsZWZ0U3RyaW5nID0gc3Vic3RyaW5nKHN0cmluZywgYmVnaW4sIGVuZCk7XG5cbiAgYmVnaW4gPSBzdGFydCArIGRlbGV0ZUNvdW50O1xuXG4gIGVuZCA9IEluZmluaXR5OyAvLy9cblxuICBjb25zdCByaWdodFN0cmluZyA9IHN1YnN0cmluZyhzdHJpbmcsIGJlZ2luLCBlbmQpO1xuXG4gIHN0cmluZyA9IGxlZnRTdHJpbmcgKyBtaWRkbGVTdHJpbmcgKyByaWdodFN0cmluZzsgIC8vL1xuXG4gIHJldHVybiBzdHJpbmc7XG59Il0sIm5hbWVzIjpbImNob3AiLCJzcGxpY2UiLCJ0cmltIiwic3Vic3RyaW5nIiwic3RyaW5nVXRpbGl0aWVzIiwic3RyaW5nIiwidHJpbW1lZFN0cmluZyIsInJlcGxhY2UiLCJFTVBUWV9TVFJJTkciLCJzdGFydCIsImRlbGV0ZUNvdW50IiwiYmVnaW4iLCJlbmQiLCJsZWZ0U3RyaW5nIiwiSW5maW5pdHkiLCJyaWdodFN0cmluZyIsIm1pZGRsZVN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBY2dCQSxJQUFJO2VBQUpBOztJQXFCQUMsTUFBTTtlQUFOQTs7SUEzQkFDLElBQUk7ZUFBSkE7Ozt5QkFOZ0I7eUJBRUg7QUFFN0IsSUFBTSxBQUFFQyxZQUFjQywwQkFBZSxDQUE3QkQ7QUFFRCxTQUFTRCxLQUFLRyxNQUFNO0lBQ3pCLElBQU1DLGdCQUFnQkQsT0FBT0UsT0FBTyxDQUFDLFlBQVlDLHVCQUFZO0lBRTdELE9BQU9GO0FBQ1Q7QUFFTyxTQUFTTixLQUFLSyxNQUFNLEVBQUVJLEtBQUssRUFBRUMsV0FBVztJQUM3QyxJQUFJQyxPQUNBQztJQUVKRCxRQUFRLENBQUM7SUFFVEMsTUFBTUgsT0FBUSxHQUFHO0lBRWpCLElBQU1JLGFBQWFWLFVBQVVFLFFBQVFNLE9BQU9DO0lBRTVDRCxRQUFRRixRQUFRQztJQUVoQkUsTUFBTUUsVUFBVSxHQUFHO0lBRW5CLElBQU1DLGNBQWNaLFVBQVVFLFFBQVFNLE9BQU9DO0lBRTdDUCxTQUFTUSxhQUFhRSxhQUFjLEdBQUc7SUFFdkMsT0FBT1Y7QUFDVDtBQUVPLFNBQVNKLE9BQU9JLE1BQU0sRUFBRUksS0FBSyxFQUFFQyxXQUFXLEVBQUVNLFlBQVk7SUFDN0QsSUFBSUwsT0FDQUM7SUFFSkQsUUFBUSxDQUFDO0lBRVRDLE1BQU1ILE9BQVEsR0FBRztJQUVqQixJQUFNSSxhQUFhVixVQUFVRSxRQUFRTSxPQUFPQztJQUU1Q0QsUUFBUUYsUUFBUUM7SUFFaEJFLE1BQU1FLFVBQVUsR0FBRztJQUVuQixJQUFNQyxjQUFjWixVQUFVRSxRQUFRTSxPQUFPQztJQUU3Q1AsU0FBU1EsYUFBYUcsZUFBZUQsYUFBYyxHQUFHO0lBRXRELE9BQU9WO0FBQ1QifQ==