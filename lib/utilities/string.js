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
    shave: function() {
        return shave;
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
function shave(string) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3RyaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzdHJpbmdVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBzdWJzdHJpbmcgfSA9IHN0cmluZ1V0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIHRyaW0oc3RyaW5nKSB7XG4gIGNvbnN0IHRyaW1tZWRTdHJpbmcgPSBzdHJpbmcucmVwbGFjZSgvW1xcblxccl0kL2csIEVNUFRZX1NUUklORyk7XG5cbiAgcmV0dXJuIHRyaW1tZWRTdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaGF2ZShzdHJpbmcpIHtcbiAgY29uc3Qgc2hhdmVuU3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoL14ufC4kL2csIEVNUFRZX1NUUklORyk7XG5cbiAgcmV0dXJuIHNoYXZlblN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNob3Aoc3RyaW5nLCBzdGFydCwgZGVsZXRlQ291bnQpIHtcbiAgbGV0IGJlZ2luLFxuICAgICAgZW5kO1xuXG4gIGJlZ2luID0gLTA7XG5cbiAgZW5kID0gc3RhcnQ7ICAvLy9cblxuICBjb25zdCBsZWZ0U3RyaW5nID0gc3Vic3RyaW5nKHN0cmluZywgYmVnaW4sIGVuZCk7XG5cbiAgYmVnaW4gPSBzdGFydCArIGRlbGV0ZUNvdW50O1xuXG4gIGVuZCA9IEluZmluaXR5OyAvLy9cblxuICBjb25zdCByaWdodFN0cmluZyA9IHN1YnN0cmluZyhzdHJpbmcsIGJlZ2luLCBlbmQpO1xuXG4gIHN0cmluZyA9IGxlZnRTdHJpbmcgKyByaWdodFN0cmluZzsgIC8vL1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzcGxpY2Uoc3RyaW5nLCBzdGFydCwgZGVsZXRlQ291bnQsIG1pZGRsZVN0cmluZykge1xuICBsZXQgYmVnaW4sXG4gICAgICBlbmQ7XG5cbiAgYmVnaW4gPSAtMDtcblxuICBlbmQgPSBzdGFydDsgIC8vL1xuXG4gIGNvbnN0IGxlZnRTdHJpbmcgPSBzdWJzdHJpbmcoc3RyaW5nLCBiZWdpbiwgZW5kKTtcblxuICBiZWdpbiA9IHN0YXJ0ICsgZGVsZXRlQ291bnQ7XG5cbiAgZW5kID0gSW5maW5pdHk7IC8vL1xuXG4gIGNvbnN0IHJpZ2h0U3RyaW5nID0gc3Vic3RyaW5nKHN0cmluZywgYmVnaW4sIGVuZCk7XG5cbiAgc3RyaW5nID0gbGVmdFN0cmluZyArIG1pZGRsZVN0cmluZyArIHJpZ2h0U3RyaW5nOyAgLy8vXG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuIl0sIm5hbWVzIjpbImNob3AiLCJzaGF2ZSIsInNwbGljZSIsInRyaW0iLCJzdWJzdHJpbmciLCJzdHJpbmdVdGlsaXRpZXMiLCJzdHJpbmciLCJ0cmltbWVkU3RyaW5nIiwicmVwbGFjZSIsIkVNUFRZX1NUUklORyIsInNoYXZlblN0cmluZyIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJiZWdpbiIsImVuZCIsImxlZnRTdHJpbmciLCJJbmZpbml0eSIsInJpZ2h0U3RyaW5nIiwibWlkZGxlU3RyaW5nIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFvQmdCQSxJQUFJO2VBQUpBOztJQU5BQyxLQUFLO2VBQUxBOztJQTJCQUMsTUFBTTtlQUFOQTs7SUFqQ0FDLElBQUk7ZUFBSkE7Ozt5QkFOZ0I7eUJBRUg7QUFFN0IsSUFBTSxBQUFFQyxZQUFjQywwQkFBZSxDQUE3QkQ7QUFFRCxTQUFTRCxLQUFLRyxNQUFNO0lBQ3pCLElBQU1DLGdCQUFnQkQsT0FBT0UsT0FBTyxDQUFDLFlBQVlDLHVCQUFZO0lBRTdELE9BQU9GO0FBQ1Q7QUFFTyxTQUFTTixNQUFNSyxNQUFNO0lBQzFCLElBQU1JLGVBQWVKLE9BQU9FLE9BQU8sQ0FBQyxVQUFVQyx1QkFBWTtJQUUxRCxPQUFPQztBQUNUO0FBRU8sU0FBU1YsS0FBS00sTUFBTSxFQUFFSyxLQUFLLEVBQUVDLFdBQVc7SUFDN0MsSUFBSUMsT0FDQUM7SUFFSkQsUUFBUSxDQUFDO0lBRVRDLE1BQU1ILE9BQVEsR0FBRztJQUVqQixJQUFNSSxhQUFhWCxVQUFVRSxRQUFRTyxPQUFPQztJQUU1Q0QsUUFBUUYsUUFBUUM7SUFFaEJFLE1BQU1FLFVBQVUsR0FBRztJQUVuQixJQUFNQyxjQUFjYixVQUFVRSxRQUFRTyxPQUFPQztJQUU3Q1IsU0FBU1MsYUFBYUUsYUFBYyxHQUFHO0lBRXZDLE9BQU9YO0FBQ1Q7QUFFTyxTQUFTSixPQUFPSSxNQUFNLEVBQUVLLEtBQUssRUFBRUMsV0FBVyxFQUFFTSxZQUFZO0lBQzdELElBQUlMLE9BQ0FDO0lBRUpELFFBQVEsQ0FBQztJQUVUQyxNQUFNSCxPQUFRLEdBQUc7SUFFakIsSUFBTUksYUFBYVgsVUFBVUUsUUFBUU8sT0FBT0M7SUFFNUNELFFBQVFGLFFBQVFDO0lBRWhCRSxNQUFNRSxVQUFVLEdBQUc7SUFFbkIsSUFBTUMsY0FBY2IsVUFBVUUsUUFBUU8sT0FBT0M7SUFFN0NSLFNBQVNTLGFBQWFHLGVBQWVELGFBQWMsR0FBRztJQUV0RCxPQUFPWDtBQUNUIn0=