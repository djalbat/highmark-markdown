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
    }
});
var _necessary = require("necessary");
var _constants = require("../constants");
var substring = _necessary.stringUtilities.substring;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3RyaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzdHJpbmdVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBzdWJzdHJpbmcgfSA9IHN0cmluZ1V0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIHNoYXZlKHN0cmluZykge1xuICBjb25zdCBzaGF2ZW5TdHJpbmcgPSBzdHJpbmcucmVwbGFjZSgvXi58LiQvZywgRU1QVFlfU1RSSU5HKTtcblxuICByZXR1cm4gc2hhdmVuU3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hvcChzdHJpbmcsIHN0YXJ0LCBkZWxldGVDb3VudCkge1xuICBsZXQgYmVnaW4sXG4gICAgICBlbmQ7XG5cbiAgYmVnaW4gPSAtMDtcblxuICBlbmQgPSBzdGFydDsgIC8vL1xuXG4gIGNvbnN0IGxlZnRTdHJpbmcgPSBzdWJzdHJpbmcoc3RyaW5nLCBiZWdpbiwgZW5kKTtcblxuICBiZWdpbiA9IHN0YXJ0ICsgZGVsZXRlQ291bnQ7XG5cbiAgZW5kID0gSW5maW5pdHk7IC8vL1xuXG4gIGNvbnN0IHJpZ2h0U3RyaW5nID0gc3Vic3RyaW5nKHN0cmluZywgYmVnaW4sIGVuZCk7XG5cbiAgc3RyaW5nID0gbGVmdFN0cmluZyArIHJpZ2h0U3RyaW5nOyAgLy8vXG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNwbGljZShzdHJpbmcsIHN0YXJ0LCBkZWxldGVDb3VudCwgbWlkZGxlU3RyaW5nKSB7XG4gIGxldCBiZWdpbixcbiAgICAgIGVuZDtcblxuICBiZWdpbiA9IC0wO1xuXG4gIGVuZCA9IHN0YXJ0OyAgLy8vXG5cbiAgY29uc3QgbGVmdFN0cmluZyA9IHN1YnN0cmluZyhzdHJpbmcsIGJlZ2luLCBlbmQpO1xuXG4gIGJlZ2luID0gc3RhcnQgKyBkZWxldGVDb3VudDtcblxuICBlbmQgPSBJbmZpbml0eTsgLy8vXG5cbiAgY29uc3QgcmlnaHRTdHJpbmcgPSBzdWJzdHJpbmcoc3RyaW5nLCBiZWdpbiwgZW5kKTtcblxuICBzdHJpbmcgPSBsZWZ0U3RyaW5nICsgbWlkZGxlU3RyaW5nICsgcmlnaHRTdHJpbmc7ICAvLy9cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG4iXSwibmFtZXMiOlsiY2hvcCIsInNoYXZlIiwic3BsaWNlIiwic3Vic3RyaW5nIiwic3RyaW5nVXRpbGl0aWVzIiwic3RyaW5nIiwic2hhdmVuU3RyaW5nIiwicmVwbGFjZSIsIkVNUFRZX1NUUklORyIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJiZWdpbiIsImVuZCIsImxlZnRTdHJpbmciLCJJbmZpbml0eSIsInJpZ2h0U3RyaW5nIiwibWlkZGxlU3RyaW5nIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQWNnQkEsSUFBSTtlQUFKQTs7SUFOQUMsS0FBSztlQUFMQTs7SUEyQkFDLE1BQU07ZUFBTkE7Ozt5QkFqQ2dCO3lCQUVIO0FBRTdCLElBQU0sQUFBRUMsWUFBY0MsMEJBQWUsQ0FBN0JEO0FBRUQsU0FBU0YsTUFBTUksTUFBTTtJQUMxQixJQUFNQyxlQUFlRCxPQUFPRSxPQUFPLENBQUMsVUFBVUMsdUJBQVk7SUFFMUQsT0FBT0Y7QUFDVDtBQUVPLFNBQVNOLEtBQUtLLE1BQU0sRUFBRUksS0FBSyxFQUFFQyxXQUFXO0lBQzdDLElBQUlDLE9BQ0FDO0lBRUpELFFBQVEsQ0FBQztJQUVUQyxNQUFNSCxPQUFRLEdBQUc7SUFFakIsSUFBTUksYUFBYVYsVUFBVUUsUUFBUU0sT0FBT0M7SUFFNUNELFFBQVFGLFFBQVFDO0lBRWhCRSxNQUFNRSxVQUFVLEdBQUc7SUFFbkIsSUFBTUMsY0FBY1osVUFBVUUsUUFBUU0sT0FBT0M7SUFFN0NQLFNBQVNRLGFBQWFFLGFBQWMsR0FBRztJQUV2QyxPQUFPVjtBQUNUO0FBRU8sU0FBU0gsT0FBT0csTUFBTSxFQUFFSSxLQUFLLEVBQUVDLFdBQVcsRUFBRU0sWUFBWTtJQUM3RCxJQUFJTCxPQUNBQztJQUVKRCxRQUFRLENBQUM7SUFFVEMsTUFBTUgsT0FBUSxHQUFHO0lBRWpCLElBQU1JLGFBQWFWLFVBQVVFLFFBQVFNLE9BQU9DO0lBRTVDRCxRQUFRRixRQUFRQztJQUVoQkUsTUFBTUUsVUFBVSxHQUFHO0lBRW5CLElBQU1DLGNBQWNaLFVBQVVFLFFBQVFNLE9BQU9DO0lBRTdDUCxTQUFTUSxhQUFhRyxlQUFlRCxhQUFjLEdBQUc7SUFFdEQsT0FBT1Y7QUFDVCJ9