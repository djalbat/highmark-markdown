"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Medias;
    }
});
var _media = /*#__PURE__*/ _interop_require_default(require("./media"));
var _query = require("../utilities/query");
var _constants = require("../constants");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var mediaNonTerminalNodesQuery = (0, _query.nodesQuery)("/*/media");
var Medias = /*#__PURE__*/ function() {
    function Medias(array) {
        _class_call_check(this, Medias);
        this.array = array;
    }
    _create_class(Medias, [
        {
            key: "getLength",
            value: function getLength() {
                return this.array.length;
            }
        },
        {
            key: "asCSS",
            value: function asCSS(mediaType, selectorsList, outermost) {
                var css = _constants.EMPTY_STRING;
                var length = this.getLength(), selectorsListLength = selectorsList.getLength();
                if (length > 0 && selectorsListLength > 0) {
                    css = this.array.reduce(function(css, media) {
                        var mediaCSS = media.asCSS(mediaType, selectorsList, outermost);
                        css = css === null ? mediaCSS : "".concat(css).concat(mediaCSS);
                        return css;
                    }, null);
                }
                return css;
            }
        }
    ], [
        {
            key: "fromNodeAndTokens",
            value: function fromNodeAndTokens(node, tokens) {
                var mediaNonTerminalNodes = mediaNonTerminalNodesQuery(node), array = mediaNonTerminalNodes.map(function(mediaNonTerminalNode) {
                    var _$node = mediaNonTerminalNode, media = _media.default.fromNodeAndTokens(_$node, tokens);
                    return media;
                }), medias = new Medias(array);
                return medias;
            }
        }
    ]);
    return Medias;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9tZWRpYXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNZWRpYSBmcm9tIFwiLi9tZWRpYVwiO1xuXG5pbXBvcnQgeyBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCBtZWRpYU5vblRlcm1pbmFsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvKi9tZWRpYVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVkaWFzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7IHJldHVybiB0aGlzLmFycmF5Lmxlbmd0aDsgfVxuXG4gIGFzQ1NTKG1lZGlhVHlwZSwgc2VsZWN0b3JzTGlzdCwgb3V0ZXJtb3N0KSB7XG4gICAgbGV0IGNzcyA9IEVNUFRZX1NUUklORztcblxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuZ2V0TGVuZ3RoKCksXG4gICAgICAgICAgc2VsZWN0b3JzTGlzdExlbmd0aCA9IHNlbGVjdG9yc0xpc3QuZ2V0TGVuZ3RoKCk7XG5cbiAgICBpZiAoKGxlbmd0aCA+IDApICYmIChzZWxlY3RvcnNMaXN0TGVuZ3RoID4gMCkpIHtcbiAgICAgIGNzcyA9IHRoaXMuYXJyYXkucmVkdWNlKChjc3MsIG1lZGlhKSA9PiB7XG4gICAgICAgIGNvbnN0IG1lZGlhQ1NTID0gbWVkaWEuYXNDU1MobWVkaWFUeXBlLCBzZWxlY3RvcnNMaXN0LCBvdXRlcm1vc3QpO1xuXG4gICAgICAgIGNzcyA9IChjc3MgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICBtZWRpYUNTUyA6ICAvLy9cbiAgICAgICAgICAgICAgICAgIGAke2Nzc30ke21lZGlhQ1NTfWA7XG5cbiAgICAgICAgcmV0dXJuIGNzcztcbiAgICAgIH0sIG51bGwpO1xuICAgIH1cblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3QgbWVkaWFOb25UZXJtaW5hbE5vZGVzID0gbWVkaWFOb25UZXJtaW5hbE5vZGVzUXVlcnkobm9kZSksXG4gICAgICAgICAgYXJyYXkgPSBtZWRpYU5vblRlcm1pbmFsTm9kZXMubWFwKChtZWRpYU5vblRlcm1pbmFsTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IG1lZGlhTm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgIG1lZGlhID0gTWVkaWEuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIG1lZGlhO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIG1lZGlhcyA9IG5ldyBNZWRpYXMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIG1lZGlhcztcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk1lZGlhcyIsIm1lZGlhTm9uVGVybWluYWxOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsImFycmF5IiwiZ2V0TGVuZ3RoIiwibGVuZ3RoIiwiYXNDU1MiLCJtZWRpYVR5cGUiLCJzZWxlY3RvcnNMaXN0Iiwib3V0ZXJtb3N0IiwiY3NzIiwiRU1QVFlfU1RSSU5HIiwic2VsZWN0b3JzTGlzdExlbmd0aCIsInJlZHVjZSIsIm1lZGlhIiwibWVkaWFDU1MiLCJmcm9tTm9kZUFuZFRva2VucyIsIm5vZGUiLCJ0b2tlbnMiLCJtZWRpYU5vblRlcm1pbmFsTm9kZXMiLCJtYXAiLCJtZWRpYU5vblRlcm1pbmFsTm9kZSIsIk1lZGlhIiwibWVkaWFzIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7Ozs0REFQSDtxQkFFUzt5QkFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFNQyw2QkFBNkJDLElBQUFBLGlCQUFVLEVBQUM7QUFFL0IsSUFBQSxBQUFNRix1QkFBRCxBQUFMO2FBQU1BLE9BQ1BHLEtBQUs7Z0NBREVIO1FBRWpCLElBQUksQ0FBQ0csS0FBSyxHQUFHQTs7a0JBRklIOztZQUtuQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFjLE9BQU8sSUFBSSxDQUFDRCxLQUFLLENBQUNFLE1BQU07WUFBRTs7O1lBRXhDQyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsU0FBUyxFQUFFQyxhQUFhLEVBQUVDLFNBQVM7Z0JBQ3ZDLElBQUlDLE1BQU1DLHVCQUFZO2dCQUV0QixJQUFNTixTQUFTLElBQUksQ0FBQ0QsU0FBUyxJQUN2QlEsc0JBQXNCSixjQUFjSixTQUFTO2dCQUVuRCxJQUFJLEFBQUNDLFNBQVMsS0FBT08sc0JBQXNCLEdBQUk7b0JBQzdDRixNQUFNLElBQUksQ0FBQ1AsS0FBSyxDQUFDVSxNQUFNLENBQUMsU0FBQ0gsS0FBS0k7d0JBQzVCLElBQU1DLFdBQVdELE1BQU1SLEtBQUssQ0FBQ0MsV0FBV0MsZUFBZUM7d0JBRXZEQyxNQUFNLEFBQUNBLFFBQVEsT0FDUEssV0FDRSxBQUFDLEdBQVFBLE9BQU5MLEtBQWUsT0FBVEs7d0JBRW5CLE9BQU9MO29CQUNULEdBQUc7Z0JBQ0w7Z0JBRUEsT0FBT0E7WUFDVDs7OztZQUVPTSxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JDLElBQUksRUFBRUMsTUFBTTtnQkFDbkMsSUFBTUMsd0JBQXdCbEIsMkJBQTJCZ0IsT0FDbkRkLFFBQVFnQixzQkFBc0JDLEdBQUcsQ0FBQyxTQUFDQztvQkFDakMsSUFBTUosU0FBT0ksc0JBQ1BQLFFBQVFRLGNBQUssQ0FBQ04saUJBQWlCLENBQUNDLFFBQU1DO29CQUU1QyxPQUFPSjtnQkFDVCxJQUNBUyxTQUFTLElBcENFdkIsT0FvQ1NHO2dCQUUxQixPQUFPb0I7WUFDVDs7O1dBdkNtQnZCIn0=