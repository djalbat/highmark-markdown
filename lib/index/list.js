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
    function IndexList(map) {
        _class_call_check(this, IndexList);
        this.map = map;
    }
    _create_class(IndexList, [
        {
            key: "getMap",
            value: function getMap() {
                return this.map;
            }
        },
        {
            key: "getEntries",
            value: function getEntries() {
                var entries = Object.keys(this.map); ///
                entries.sort(function(entryA, entryB) {
                    var lowerCaseEntryA = entryA.toLowerCase(), lowerCaseEntryB = entryB.toLowerCase(), difference = strcmp(lowerCaseEntryB, lowerCaseEntryA);
                    return difference;
                });
                return entries;
            }
        },
        {
            key: "getPageNumbers",
            value: function getPageNumbers(entry) {
                var pageNumbers = this.map[entry] || null;
                return pageNumbers;
            }
        },
        {
            key: "mapEntries",
            value: function mapEntries(callback) {
                var _this = this;
                var entries = this.getEntries(), result = entries.map(function(entry) {
                    var pageNumbers = _this.getPageNumbers(entry), result = callback(entry, pageNumbers);
                    return result;
                });
                return result;
            }
        }
    ], [
        {
            key: "fromDivisionMarkdownNodes",
            value: function fromDivisionMarkdownNodes(divisionMarkdownNodes, context) {
                var indexMap = (0, _index.indexMapFromDivisionMarkdownNodes)(divisionMarkdownNodes, context), map = indexMap, indexList = new IndexList(map);
                return indexList;
            }
        }
    ]);
    return IndexList;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleC9saXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzdHJpbmdVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IGluZGV4TWFwRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvaW5kZXhcIjtcblxuY29uc3QgeyBzdHJjbXAgfSA9IHN0cmluZ1V0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXhMaXN0IHtcbiAgY29uc3RydWN0b3IobWFwKSB7XG4gICAgdGhpcy5tYXAgPSBtYXA7XG4gIH1cblxuICBnZXRNYXAoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwO1xuICB9XG5cbiAgZ2V0RW50cmllcygpIHtcbiAgICBjb25zdCBlbnRyaWVzID0gT2JqZWN0LmtleXModGhpcy5tYXApOyAvLy9cblxuICAgIGVudHJpZXMuc29ydCgoZW50cnlBLCBlbnRyeUIpID0+IHtcbiAgICAgIGNvbnN0IGxvd2VyQ2FzZUVudHJ5QSA9IGVudHJ5QS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgICAgbG93ZXJDYXNlRW50cnlCID0gZW50cnlCLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICBkaWZmZXJlbmNlID0gc3RyY21wKGxvd2VyQ2FzZUVudHJ5QiwgbG93ZXJDYXNlRW50cnlBKTtcblxuICAgICAgcmV0dXJuIGRpZmZlcmVuY2U7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZW50cmllcztcbiAgfVxuXG4gIGdldFBhZ2VOdW1iZXJzKGVudHJ5KSB7XG4gICAgY29uc3QgcGFnZU51bWJlcnMgPSB0aGlzLm1hcFtlbnRyeV0gfHwgbnVsbDtcblxuICAgIHJldHVybiBwYWdlTnVtYmVycztcbiAgfVxuXG4gIG1hcEVudHJpZXMoY2FsbGJhY2spIHtcbiAgICBjb25zdCBlbnRyaWVzID0gdGhpcy5nZXRFbnRyaWVzKCksXG4gICAgICAgICAgcmVzdWx0ID0gZW50cmllcy5tYXAoKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYWdlTnVtYmVycyA9IHRoaXMuZ2V0UGFnZU51bWJlcnMoZW50cnkpLFxuICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gY2FsbGJhY2soZW50cnksIHBhZ2VOdW1iZXJzKTtcblxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlcyhkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBpbmRleE1hcCA9IGluZGV4TWFwRnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlcyhkaXZpc2lvbk1hcmtkb3duTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICAgIG1hcCA9IGluZGV4TWFwLCAvLy9cbiAgICAgICAgICBpbmRleExpc3QgPSBuZXcgSW5kZXhMaXN0KG1hcCk7XG5cbiAgICByZXR1cm4gaW5kZXhMaXN0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiSW5kZXhMaXN0Iiwic3RyY21wIiwic3RyaW5nVXRpbGl0aWVzIiwibWFwIiwiZ2V0TWFwIiwiZ2V0RW50cmllcyIsImVudHJpZXMiLCJPYmplY3QiLCJrZXlzIiwic29ydCIsImVudHJ5QSIsImVudHJ5QiIsImxvd2VyQ2FzZUVudHJ5QSIsInRvTG93ZXJDYXNlIiwibG93ZXJDYXNlRW50cnlCIiwiZGlmZmVyZW5jZSIsImdldFBhZ2VOdW1iZXJzIiwiZW50cnkiLCJwYWdlTnVtYmVycyIsIm1hcEVudHJpZXMiLCJjYWxsYmFjayIsInJlc3VsdCIsImZyb21EaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJkaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJjb250ZXh0IiwiaW5kZXhNYXAiLCJpbmRleE1hcEZyb21EaXZpc2lvbk1hcmtkb3duTm9kZXMiLCJpbmRleExpc3QiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7O3lCQU5XO3FCQUVrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEQsSUFBTSxBQUFFQyxTQUFXQywwQkFBZSxDQUExQkQ7QUFFTyxJQUFBLEFBQU1ELDBCQUFELEFBQUw7YUFBTUEsVUFDUEcsR0FBRztnQ0FESUg7UUFFakIsSUFBSSxDQUFDRyxHQUFHLEdBQUdBOztrQkFGTUg7O1lBS25CSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELEdBQUc7WUFDakI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsVUFBVUMsT0FBT0MsSUFBSSxDQUFDLElBQUksQ0FBQ0wsR0FBRyxHQUFHLEdBQUc7Z0JBRTFDRyxRQUFRRyxJQUFJLENBQUMsU0FBQ0MsUUFBUUM7b0JBQ3BCLElBQU1DLGtCQUFrQkYsT0FBT0csV0FBVyxJQUNwQ0Msa0JBQWtCSCxPQUFPRSxXQUFXLElBQ3BDRSxhQUFhZCxPQUFPYSxpQkFBaUJGO29CQUUzQyxPQUFPRztnQkFDVDtnQkFFQSxPQUFPVDtZQUNUOzs7WUFFQVUsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVDLEtBQUs7Z0JBQ2xCLElBQU1DLGNBQWMsSUFBSSxDQUFDZixHQUFHLENBQUNjLE1BQU0sSUFBSTtnQkFFdkMsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXQyxRQUFROztnQkFDakIsSUFBTWQsVUFBVSxJQUFJLENBQUNELFVBQVUsSUFDekJnQixTQUFTZixRQUFRSCxHQUFHLENBQUMsU0FBQ2M7b0JBQ3BCLElBQU1DLGNBQWMsTUFBS0YsY0FBYyxDQUFDQyxRQUNsQ0ksU0FBU0QsU0FBU0gsT0FBT0M7b0JBRS9CLE9BQU9HO2dCQUNUO2dCQUVOLE9BQU9BO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsMEJBQTBCQyxxQkFBcUIsRUFBRUMsT0FBTztnQkFDN0QsSUFBTUMsV0FBV0MsSUFBQUEsd0NBQWlDLEVBQUNILHVCQUF1QkMsVUFDcEVyQixNQUFNc0IsVUFDTkUsWUFBWSxJQTVDRDNCLFVBNENlRztnQkFFaEMsT0FBT3dCO1lBQ1Q7OztXQS9DbUIzQiJ9