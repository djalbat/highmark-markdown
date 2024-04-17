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
    }
});
var _necessary = require("necessary");
var substring = _necessary.stringUtilities.substring;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc3RyaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzdHJpbmdVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgc3Vic3RyaW5nIH0gPSBzdHJpbmdVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBjaG9wKHN0cmluZywgc3RhcnQsIGRlbGV0ZUNvdW50KSB7XG4gIGxldCBiZWdpbixcbiAgICAgIGVuZDtcblxuICBiZWdpbiA9IC0wO1xuXG4gIGVuZCA9IHN0YXJ0OyAgLy8vXG5cbiAgY29uc3QgbGVmdFN0cmluZyA9IHN1YnN0cmluZyhzdHJpbmcsIGJlZ2luLCBlbmQpO1xuXG4gIGJlZ2luID0gc3RhcnQgKyBkZWxldGVDb3VudDtcblxuICBlbmQgPSBJbmZpbml0eTsgLy8vXG5cbiAgY29uc3QgcmlnaHRTdHJpbmcgPSBzdWJzdHJpbmcoc3RyaW5nLCBiZWdpbiwgZW5kKTtcblxuICBzdHJpbmcgPSBsZWZ0U3RyaW5nICsgcmlnaHRTdHJpbmc7ICAvLy9cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3BsaWNlKHN0cmluZywgc3RhcnQsIGRlbGV0ZUNvdW50LCBtaWRkbGVTdHJpbmcpIHtcbiAgbGV0IGJlZ2luLFxuICAgICAgZW5kO1xuXG4gIGJlZ2luID0gLTA7XG5cbiAgZW5kID0gc3RhcnQ7ICAvLy9cblxuICBjb25zdCBsZWZ0U3RyaW5nID0gc3Vic3RyaW5nKHN0cmluZywgYmVnaW4sIGVuZCk7XG5cbiAgYmVnaW4gPSBzdGFydCArIGRlbGV0ZUNvdW50O1xuXG4gIGVuZCA9IEluZmluaXR5OyAvLy9cblxuICBjb25zdCByaWdodFN0cmluZyA9IHN1YnN0cmluZyhzdHJpbmcsIGJlZ2luLCBlbmQpO1xuXG4gIHN0cmluZyA9IGxlZnRTdHJpbmcgKyBtaWRkbGVTdHJpbmcgKyByaWdodFN0cmluZzsgIC8vL1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsiY2hvcCIsInNwbGljZSIsInN1YnN0cmluZyIsInN0cmluZ1V0aWxpdGllcyIsInN0cmluZyIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJiZWdpbiIsImVuZCIsImxlZnRTdHJpbmciLCJJbmZpbml0eSIsInJpZ2h0U3RyaW5nIiwibWlkZGxlU3RyaW5nIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFNZ0JBLElBQUk7ZUFBSkE7O0lBcUJBQyxNQUFNO2VBQU5BOzs7eUJBekJnQjtBQUVoQyxJQUFNLEFBQUVDLFlBQWNDLDBCQUFlLENBQTdCRDtBQUVELFNBQVNGLEtBQUtJLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxXQUFXO0lBQzdDLElBQUlDLE9BQ0FDO0lBRUpELFFBQVEsQ0FBQztJQUVUQyxNQUFNSCxPQUFRLEdBQUc7SUFFakIsSUFBTUksYUFBYVAsVUFBVUUsUUFBUUcsT0FBT0M7SUFFNUNELFFBQVFGLFFBQVFDO0lBRWhCRSxNQUFNRSxVQUFVLEdBQUc7SUFFbkIsSUFBTUMsY0FBY1QsVUFBVUUsUUFBUUcsT0FBT0M7SUFFN0NKLFNBQVNLLGFBQWFFLGFBQWMsR0FBRztJQUV2QyxPQUFPUDtBQUNUO0FBRU8sU0FBU0gsT0FBT0csTUFBTSxFQUFFQyxLQUFLLEVBQUVDLFdBQVcsRUFBRU0sWUFBWTtJQUM3RCxJQUFJTCxPQUNBQztJQUVKRCxRQUFRLENBQUM7SUFFVEMsTUFBTUgsT0FBUSxHQUFHO0lBRWpCLElBQU1JLGFBQWFQLFVBQVVFLFFBQVFHLE9BQU9DO0lBRTVDRCxRQUFRRixRQUFRQztJQUVoQkUsTUFBTUUsVUFBVSxHQUFHO0lBRW5CLElBQU1DLGNBQWNULFVBQVVFLFFBQVFHLE9BQU9DO0lBRTdDSixTQUFTSyxhQUFhRyxlQUFlRCxhQUFjLEdBQUc7SUFFdEQsT0FBT1A7QUFDVCJ9