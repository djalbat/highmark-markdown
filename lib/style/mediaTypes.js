"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MediaTypes;
    }
});
var _mediaType = /*#__PURE__*/ _interop_require_default(require("./mediaType"));
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
var mediaTypeNonTerminalNodesQuery = (0, _query.nodesQuery)("/*/mediaType");
var MediaTypes = /*#__PURE__*/ function() {
    function MediaTypes(array) {
        _class_call_check(this, MediaTypes);
        this.array = array;
    }
    _create_class(MediaTypes, [
        {
            key: "getLength",
            value: function getLength() {
                return this.array.length;
            }
        },
        {
            key: "asCSS",
            value: function asCSS() {
                var css = _constants.EMPTY_STRING;
                var length = this.getLength();
                if (length > 0) {
                    css = this.array.reduce(function(css, media) {
                        var mediaTypeCSS = mediaType.asCSS();
                        css = css === null ? mediaTypeCSS : "".concat(css, " and ").concat(mediaTypeCSS);
                        return css;
                    }, null);
                }
                return css;
            }
        },
        {
            key: "matchMediaType",
            value: function matchMediaType(mediaType1) {
                var mediaTypeA = mediaType1, matchesMediaType = this.array.some(function(mediaType1) {
                    var mediaTypeB = mediaType1, matches = mediaTypeA.match(mediaTypeB);
                    if (matches) {
                        return true;
                    }
                });
                return matchesMediaType;
            }
        }
    ], [
        {
            key: "fromNodeAndTokens",
            value: function fromNodeAndTokens(node, tokens) {
                var mediaTypeNonTerminalNodes = mediaTypeNonTerminalNodesQuery(node), array = mediaTypeNonTerminalNodes.map(function(mediaTypeNonTerminalNode) {
                    var _$node = mediaTypeNonTerminalNode, mediaType1 = _mediaType.default.fromNodeAndTokens(_$node, tokens);
                    return mediaType1;
                }), medias = new MediaTypes(array);
                return medias;
            }
        }
    ]);
    return MediaTypes;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9tZWRpYVR5cGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWVkaWFUeXBlIGZyb20gXCIuL21lZGlhVHlwZVwiO1xuXG5pbXBvcnQgeyBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCBtZWRpYVR5cGVOb25UZXJtaW5hbE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiLyovbWVkaWFUeXBlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZWRpYVR5cGVzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7IHJldHVybiB0aGlzLmFycmF5Lmxlbmd0aDsgfVxuXG4gIGFzQ1NTKCkge1xuICAgIGxldCBjc3MgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmdldExlbmd0aCgpO1xuXG4gICAgaWYgKGxlbmd0aCA+IDApIHtcbiAgICAgIGNzcyA9IHRoaXMuYXJyYXkucmVkdWNlKChjc3MsIG1lZGlhKSA9PiB7XG4gICAgICAgIGNvbnN0IG1lZGlhVHlwZUNTUyA9IG1lZGlhVHlwZS5hc0NTUygpO1xuXG4gICAgICAgIGNzcyA9IChjc3MgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICBtZWRpYVR5cGVDU1MgOiAgLy8vXG4gICAgICAgICAgICAgICAgICBgJHtjc3N9IGFuZCAke21lZGlhVHlwZUNTU31gO1xuXG4gICAgICAgIHJldHVybiBjc3M7XG4gICAgICB9LCBudWxsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgbWF0Y2hNZWRpYVR5cGUobWVkaWFUeXBlKSB7XG4gICAgY29uc3QgbWVkaWFUeXBlQSA9IG1lZGlhVHlwZSwgLy8vXG4gICAgICAgICAgbWF0Y2hlc01lZGlhVHlwZSA9IHRoaXMuYXJyYXkuc29tZSgobWVkaWFUeXBlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZWRpYVR5cGVCID0gbWVkaWFUeXBlLCAvLy9cbiAgICAgICAgICAgICAgICAgIG1hdGNoZXMgPSBtZWRpYVR5cGVBLm1hdGNoKG1lZGlhVHlwZUIpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBtYXRjaGVzTWVkaWFUeXBlO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IG1lZGlhVHlwZU5vblRlcm1pbmFsTm9kZXMgPSBtZWRpYVR5cGVOb25UZXJtaW5hbE5vZGVzUXVlcnkobm9kZSksXG4gICAgICAgICAgYXJyYXkgPSBtZWRpYVR5cGVOb25UZXJtaW5hbE5vZGVzLm1hcCgobWVkaWFUeXBlTm9uVGVybWluYWxOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gbWVkaWFUeXBlTm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgIG1lZGlhVHlwZSA9IE1lZGlhVHlwZS5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gbWVkaWFUeXBlO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIG1lZGlhcyA9IG5ldyBNZWRpYVR5cGVzKGFycmF5KTtcblxuICAgIHJldHVybiBtZWRpYXM7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJNZWRpYVR5cGVzIiwibWVkaWFUeXBlTm9uVGVybWluYWxOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsImFycmF5IiwiZ2V0TGVuZ3RoIiwibGVuZ3RoIiwiYXNDU1MiLCJjc3MiLCJFTVBUWV9TVFJJTkciLCJyZWR1Y2UiLCJtZWRpYSIsIm1lZGlhVHlwZUNTUyIsIm1lZGlhVHlwZSIsIm1hdGNoTWVkaWFUeXBlIiwibWVkaWFUeXBlQSIsIm1hdGNoZXNNZWRpYVR5cGUiLCJzb21lIiwibWVkaWFUeXBlQiIsIm1hdGNoZXMiLCJtYXRjaCIsImZyb21Ob2RlQW5kVG9rZW5zIiwibm9kZSIsInRva2VucyIsIm1lZGlhVHlwZU5vblRlcm1pbmFsTm9kZXMiLCJtYXAiLCJtZWRpYVR5cGVOb25UZXJtaW5hbE5vZGUiLCJNZWRpYVR5cGUiLCJtZWRpYXMiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7O2dFQVBDO3FCQUVLO3lCQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdCLElBQU1DLGlDQUFpQ0MsSUFBQUEsaUJBQVUsRUFBQztBQUVuQyxJQUFBLEFBQU1GLDJCQUFELEFBQUw7YUFBTUEsV0FDUEcsS0FBSztnQ0FERUg7UUFFakIsSUFBSSxDQUFDRyxLQUFLLEdBQUdBOztrQkFGSUg7O1lBS25CSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQWMsT0FBTyxJQUFJLENBQUNELEtBQUssQ0FBQ0UsTUFBTTtZQUFFOzs7WUFFeENDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxNQUFNQyx1QkFBWTtnQkFFdEIsSUFBTUgsU0FBUyxJQUFJLENBQUNELFNBQVM7Z0JBRTdCLElBQUlDLFNBQVMsR0FBRztvQkFDZEUsTUFBTSxJQUFJLENBQUNKLEtBQUssQ0FBQ00sTUFBTSxDQUFDLFNBQUNGLEtBQUtHO3dCQUM1QixJQUFNQyxlQUFlQyxVQUFVTixLQUFLO3dCQUVwQ0MsTUFBTSxBQUFDQSxRQUFRLE9BQ1BJLGVBQ0UsQUFBQyxHQUFhQSxPQUFYSixLQUFJLFNBQW9CLE9BQWJJO3dCQUV4QixPQUFPSjtvQkFDVCxHQUFHO2dCQUNMO2dCQUVBLE9BQU9BO1lBQ1Q7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUQsVUFBUztnQkFDdEIsSUFBTUUsYUFBYUYsWUFDYkcsbUJBQW1CLElBQUksQ0FBQ1osS0FBSyxDQUFDYSxJQUFJLENBQUMsU0FBQ0o7b0JBQ2xDLElBQU1LLGFBQWFMLFlBQ2JNLFVBQVVKLFdBQVdLLEtBQUssQ0FBQ0Y7b0JBRWpDLElBQUlDLFNBQVM7d0JBQ1gsT0FBTztvQkFDVDtnQkFDRjtnQkFFTixPQUFPSDtZQUNUOzs7O1lBRU9LLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQkMsSUFBSSxFQUFFQyxNQUFNO2dCQUNuQyxJQUFNQyw0QkFBNEJ0QiwrQkFBK0JvQixPQUMzRGxCLFFBQVFvQiwwQkFBMEJDLEdBQUcsQ0FBQyxTQUFDQztvQkFDckMsSUFBTUosU0FBT0ksMEJBQ1BiLGFBQVljLGtCQUFTLENBQUNOLGlCQUFpQixDQUFDQyxRQUFNQztvQkFFcEQsT0FBT1Y7Z0JBQ1QsSUFDQWUsU0FBUyxJQWpERTNCLFdBaURhRztnQkFFOUIsT0FBT3dCO1lBQ1Q7OztXQXBEbUIzQiJ9