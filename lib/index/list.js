"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndexList;
    }
});
var _necessary = require("necessary");
var _index = require("../utilities/index");
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var strcmp = _necessary.stringUtilities.strcmp;
var IndexList = /*#__PURE__*/ function() {
    function IndexList(entryArray, pageNumbersArray) {
        _class_call_check(this, IndexList);
        this.entryArray = entryArray;
        this.pageNumbersArray = pageNumbersArray;
    }
    _create_class(IndexList, [
        {
            key: "getEntryArray",
            value: function getEntryArray() {
                return this.entryArray;
            }
        },
        {
            key: "getPageNumbersArray",
            value: function getPageNumbersArray() {
                return this.pageNumbersArray;
            }
        },
        {
            key: "mapEntries",
            value: function mapEntries(callback) {
                var _this = this;
                var result = this.entryArray.map(function(entry, index) {
                    var pageNumbers = _this.pageNumbersArray[index], result = callback(entry, pageNumbers);
                    return result;
                });
                return result;
            }
        }
    ], [
        {
            key: "fromDivisionMarkdownNodes",
            value: function fromDivisionMarkdownNodes(divisionMarkdownNodes, context) {
                var indexMap = (0, _index.indexMapFromDivisionMarkdownNodes)(divisionMarkdownNodes, context), entryArray = entryArrayFromIndexMap(indexMap), pageNumbersArray = pageNumbersArrayFromIndexMapAndEntryArray(indexMap, entryArray), indexList = new IndexList(entryArray, pageNumbersArray);
                return indexList;
            }
        }
    ]);
    return IndexList;
}();
function entryArrayFromIndexMap(indexMap) {
    var entryArray = Object.keys(indexMap); ///
    entryArray.sort(function(entryA, entryB) {
        var lowerCaseEntryA = entryA.toLowerCase(), lowerCaseEntryB = entryB.toLowerCase(), difference = strcmp(lowerCaseEntryB, lowerCaseEntryA);
        return difference;
    });
    return entryArray;
}
function pageNumbersArrayFromIndexMapAndEntryArray(indexMap, entryArray) {
    var pageNumbersArray = entryArray.map(function(entry) {
        var pageNumbers = indexMap[entry];
        return pageNumbers;
    });
    return pageNumbersArray;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleC9saXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzdHJpbmdVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IGluZGV4TWFwRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvaW5kZXhcIjtcblxuY29uc3QgeyBzdHJjbXAgfSA9IHN0cmluZ1V0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXhMaXN0IHtcbiAgY29uc3RydWN0b3IoZW50cnlBcnJheSwgcGFnZU51bWJlcnNBcnJheSkge1xuICAgIHRoaXMuZW50cnlBcnJheSA9IGVudHJ5QXJyYXk7XG4gICAgdGhpcy5wYWdlTnVtYmVyc0FycmF5ID0gcGFnZU51bWJlcnNBcnJheTtcbiAgfVxuXG4gIGdldEVudHJ5QXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW50cnlBcnJheTtcbiAgfVxuXG4gIGdldFBhZ2VOdW1iZXJzQXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFnZU51bWJlcnNBcnJheTtcbiAgfVxuXG4gIG1hcEVudHJpZXMoY2FsbGJhY2spIHtcblxuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZW50cnlBcnJheS5tYXAoKGVudHJ5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFnZU51bWJlcnMgPSB0aGlzLnBhZ2VOdW1iZXJzQXJyYXlbaW5kZXhdLFxuICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gY2FsbGJhY2soZW50cnksIHBhZ2VOdW1iZXJzKTtcblxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlcyhkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBpbmRleE1hcCA9IGluZGV4TWFwRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlcyhkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICAgIGVudHJ5QXJyYXkgPSBlbnRyeUFycmF5RnJvbUluZGV4TWFwKGluZGV4TWFwKSxcbiAgICAgICAgICBwYWdlTnVtYmVyc0FycmF5ID0gcGFnZU51bWJlcnNBcnJheUZyb21JbmRleE1hcEFuZEVudHJ5QXJyYXkoaW5kZXhNYXAsIGVudHJ5QXJyYXkpLFxuICAgICAgICAgIGluZGV4TGlzdCA9IG5ldyBJbmRleExpc3QoZW50cnlBcnJheSwgcGFnZU51bWJlcnNBcnJheSk7XG5cbiAgICByZXR1cm4gaW5kZXhMaXN0O1xuICB9XG59XG5cbmZ1bmN0aW9uIGVudHJ5QXJyYXlGcm9tSW5kZXhNYXAoaW5kZXhNYXApIHtcbiAgY29uc3QgZW50cnlBcnJheSA9IE9iamVjdC5rZXlzKGluZGV4TWFwKTsgLy8vXG5cbiAgZW50cnlBcnJheS5zb3J0KChlbnRyeUEsIGVudHJ5QikgPT4ge1xuICAgIGNvbnN0IGxvd2VyQ2FzZUVudHJ5QSA9IGVudHJ5QS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgIGxvd2VyQ2FzZUVudHJ5QiA9IGVudHJ5Qi50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgIGRpZmZlcmVuY2UgPSBzdHJjbXAobG93ZXJDYXNlRW50cnlCLCBsb3dlckNhc2VFbnRyeUEpO1xuXG4gICAgcmV0dXJuIGRpZmZlcmVuY2U7XG4gIH0pO1xuXG4gIHJldHVybiBlbnRyeUFycmF5O1xufVxuXG5mdW5jdGlvbiBwYWdlTnVtYmVyc0FycmF5RnJvbUluZGV4TWFwQW5kRW50cnlBcnJheShpbmRleE1hcCwgZW50cnlBcnJheSkge1xuICBjb25zdCBwYWdlTnVtYmVyc0FycmF5ID0gZW50cnlBcnJheS5tYXAoKGVudHJ5KSA9PiB7XG4gICAgY29uc3QgcGFnZU51bWJlcnMgPSBpbmRleE1hcFtlbnRyeV07XG5cbiAgICByZXR1cm4gcGFnZU51bWJlcnM7XG4gIH0pO1xuXG4gIHJldHVybiBwYWdlTnVtYmVyc0FycmF5O1xufSJdLCJuYW1lcyI6WyJJbmRleExpc3QiLCJzdHJjbXAiLCJzdHJpbmdVdGlsaXRpZXMiLCJlbnRyeUFycmF5IiwicGFnZU51bWJlcnNBcnJheSIsImdldEVudHJ5QXJyYXkiLCJnZXRQYWdlTnVtYmVyc0FycmF5IiwibWFwRW50cmllcyIsImNhbGxiYWNrIiwicmVzdWx0IiwibWFwIiwiZW50cnkiLCJpbmRleCIsInBhZ2VOdW1iZXJzIiwiZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlcyIsImRpdmlzaW9uTWFya2Rvd25Ob2RlcyIsImNvbnRleHQiLCJpbmRleE1hcCIsImluZGV4TWFwRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlcyIsImVudHJ5QXJyYXlGcm9tSW5kZXhNYXAiLCJwYWdlTnVtYmVyc0FycmF5RnJvbUluZGV4TWFwQW5kRW50cnlBcnJheSIsImluZGV4TGlzdCIsIk9iamVjdCIsImtleXMiLCJzb3J0IiwiZW50cnlBIiwiZW50cnlCIiwibG93ZXJDYXNlRW50cnlBIiwidG9Mb3dlckNhc2UiLCJsb3dlckNhc2VFbnRyeUIiLCJkaWZmZXJlbmNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7Ozt5QkFOVztxQkFFa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxELElBQU0sQUFBRUMsU0FBV0MsMEJBQWUsQ0FBMUJEO0FBRU8sSUFBQSxBQUFNRCwwQkFBRCxBQUFMO2FBQU1BLFVBQ1BHLFVBQVUsRUFBRUMsZ0JBQWdCO2dDQURyQko7UUFFakIsSUFBSSxDQUFDRyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsZ0JBQWdCLEdBQUdBOztrQkFIUEo7O1lBTW5CSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFVBQVU7WUFDeEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLGdCQUFnQjtZQUM5Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXQyxRQUFROztnQkFFakIsSUFBTUMsU0FBUyxJQUFJLENBQUNOLFVBQVUsQ0FBQ08sR0FBRyxDQUFDLFNBQUNDLE9BQU9DO29CQUNuQyxJQUFNQyxjQUFjLE1BQUtULGdCQUFnQixDQUFDUSxNQUFNLEVBQzFDSCxTQUFTRCxTQUFTRyxPQUFPRTtvQkFFL0IsT0FBT0o7Z0JBQ1Q7Z0JBRU4sT0FBT0E7WUFDVDs7OztZQUVPSyxLQUFBQTttQkFBUCxTQUFPQSwwQkFBMEJDLHFCQUFxQixFQUFFQyxPQUFPO2dCQUM3RCxJQUFNQyxXQUFXQyxJQUFBQSx3Q0FBaUMsRUFBQ0gsdUJBQXVCQyxVQUNwRWIsYUFBYWdCLHVCQUF1QkYsV0FDcENiLG1CQUFtQmdCLDBDQUEwQ0gsVUFBVWQsYUFDdkVrQixZQUFZLElBOUJEckIsVUE4QmVHLFlBQVlDO2dCQUU1QyxPQUFPaUI7WUFDVDs7O1dBakNtQnJCOztBQW9DckIsU0FBU21CLHVCQUF1QkYsUUFBUTtJQUN0QyxJQUFNZCxhQUFhbUIsT0FBT0MsSUFBSSxDQUFDTixXQUFXLEdBQUc7SUFFN0NkLFdBQVdxQixJQUFJLENBQUMsU0FBQ0MsUUFBUUM7UUFDdkIsSUFBTUMsa0JBQWtCRixPQUFPRyxXQUFXLElBQ3BDQyxrQkFBa0JILE9BQU9FLFdBQVcsSUFDcENFLGFBQWE3QixPQUFPNEIsaUJBQWlCRjtRQUUzQyxPQUFPRztJQUNUO0lBRUEsT0FBTzNCO0FBQ1Q7QUFFQSxTQUFTaUIsMENBQTBDSCxRQUFRLEVBQUVkLFVBQVU7SUFDckUsSUFBTUMsbUJBQW1CRCxXQUFXTyxHQUFHLENBQUMsU0FBQ0M7UUFDdkMsSUFBTUUsY0FBY0ksUUFBUSxDQUFDTixNQUFNO1FBRW5DLE9BQU9FO0lBQ1Q7SUFFQSxPQUFPVDtBQUNUIn0=