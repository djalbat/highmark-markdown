"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Media;
    }
});
var _ruleSets = /*#__PURE__*/ _interop_require_default(require("./ruleSets"));
var _mediaTypes = /*#__PURE__*/ _interop_require_default(require("./mediaTypes"));
var _declarations = /*#__PURE__*/ _interop_require_default(require("./declarations"));
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
var mediaTypesNonTerminalNodeQuery = (0, _query.nodeQuery)("/*/mediaTypes");
var Media = /*#__PURE__*/ function() {
    function Media(types, ruleSets, declarations) {
        _class_call_check(this, Media);
        this.types = types;
        this.ruleSets = ruleSets;
        this.declarations = declarations;
    }
    _create_class(Media, [
        {
            key: "getTypes",
            value: function getTypes() {
                return this.types;
            }
        },
        {
            key: "getRuleSets",
            value: function getRuleSets() {
                return this.ruleSets;
            }
        },
        {
            key: "getDeclarations",
            value: function getDeclarations() {
                return this.declarations;
            }
        },
        {
            key: "asCSS",
            value: function asCSS(mediaType, selectorsList, outermost) {
                var css = _constants.EMPTY_STRING;
                var typeMatchMediaType = this.types.matchMediaType(mediaType);
                if (typeMatchMediaType) {
                    var declarationsCSS = this.declarations.asCSS(selectorsList, outermost), ruleSetsCSS = this.ruleSets.asCSS(selectorsList, outermost);
                    css = declarationsCSS === _constants.EMPTY_STRING ? ruleSetsCSS : "".concat(declarationsCSS, "\n").concat(ruleSetsCSS);
                }
                return css;
            }
        }
    ], [
        {
            key: "fromNodeAndTokens",
            value: function fromNodeAndTokens(node, tokens) {
                var types = typesFromNodeAndTokens(node, tokens), ruleSets = _ruleSets.default.fromNodeAndTokens(node, tokens), declarations = _declarations.default.fromNodeAndTokens(node, tokens), media = new Media(types, ruleSets, declarations);
                return media;
            }
        }
    ]);
    return Media;
}();
function typesFromNodeAndTokens(node, tokens) {
    var mediaTypesNonTerminalNode = mediaTypesNonTerminalNodeQuery(node);
    node = mediaTypesNonTerminalNode; ///
    var mediaTypes = _mediaTypes.default.fromNodeAndTokens(node, tokens), types = mediaTypes;
    return types;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9tZWRpYS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJ1bGVTZXRzIGZyb20gXCIuL3J1bGVTZXRzXCI7XG5pbXBvcnQgTWVkaWFUeXBlcyBmcm9tIFwiLi9tZWRpYVR5cGVzXCI7XG5pbXBvcnQgRGVjbGFyYXRpb25zIGZyb20gXCIuL2RlY2xhcmF0aW9uc1wiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IG1lZGlhVHlwZXNOb25UZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qL21lZGlhVHlwZXNcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhIHtcbiAgY29uc3RydWN0b3IodHlwZXMsIHJ1bGVTZXRzLCBkZWNsYXJhdGlvbnMpIHtcbiAgICB0aGlzLnR5cGVzID0gdHlwZXM7XG4gICAgdGhpcy5ydWxlU2V0cyA9IHJ1bGVTZXRzO1xuICAgIHRoaXMuZGVjbGFyYXRpb25zID0gZGVjbGFyYXRpb25zO1xuICB9XG5cbiAgZ2V0VHlwZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZXM7XG4gIH1cblxuICBnZXRSdWxlU2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlU2V0cztcbiAgfVxuXG4gIGdldERlY2xhcmF0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kZWNsYXJhdGlvbnM7XG4gIH1cblxuICBhc0NTUyhtZWRpYVR5cGUsIHNlbGVjdG9yc0xpc3QsIG91dGVybW9zdCkge1xuICAgIGxldCBjc3MgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICBjb25zdCB0eXBlTWF0Y2hNZWRpYVR5cGUgPSB0aGlzLnR5cGVzLm1hdGNoTWVkaWFUeXBlKG1lZGlhVHlwZSk7XG5cbiAgICBpZiAodHlwZU1hdGNoTWVkaWFUeXBlKSB7XG4gICAgICBjb25zdCBkZWNsYXJhdGlvbnNDU1MgPSB0aGlzLmRlY2xhcmF0aW9ucy5hc0NTUyhzZWxlY3RvcnNMaXN0LCBvdXRlcm1vc3QpLFxuICAgICAgICAgICAgcnVsZVNldHNDU1MgPSB0aGlzLnJ1bGVTZXRzLmFzQ1NTKHNlbGVjdG9yc0xpc3QsIG91dGVybW9zdCk7XG5cbiAgICAgIGNzcyA9IChkZWNsYXJhdGlvbnNDU1MgPT09IEVNUFRZX1NUUklORykgP1xuICAgICAgICAgICAgICBydWxlU2V0c0NTUyA6IC8vL1xuICAgICAgICAgICAgICBgJHtkZWNsYXJhdGlvbnNDU1N9XG4ke3J1bGVTZXRzQ1NTfWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCB0eXBlcyA9IHR5cGVzRnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBydWxlU2V0cyA9IFJ1bGVTZXRzLmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgZGVjbGFyYXRpb25zID0gRGVjbGFyYXRpb25zLmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgbWVkaWEgPSBuZXcgTWVkaWEodHlwZXMsIHJ1bGVTZXRzLCBkZWNsYXJhdGlvbnMpO1xuXG4gICAgcmV0dXJuIG1lZGlhO1xuICB9XG59XG5cbmZ1bmN0aW9uIHR5cGVzRnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gIGNvbnN0IG1lZGlhVHlwZXNOb25UZXJtaW5hbE5vZGUgPSBtZWRpYVR5cGVzTm9uVGVybWluYWxOb2RlUXVlcnkobm9kZSk7XG5cbiAgbm9kZSA9IG1lZGlhVHlwZXNOb25UZXJtaW5hbE5vZGU7ICAvLy9cblxuICBjb25zdCBtZWRpYVR5cGVzID0gTWVkaWFUeXBlcy5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICB0eXBlcyA9IG1lZGlhVHlwZXM7XG5cbiAgcmV0dXJuIHR5cGVzO1xufVxuIl0sIm5hbWVzIjpbIk1lZGlhIiwibWVkaWFUeXBlc05vblRlcm1pbmFsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidHlwZXMiLCJydWxlU2V0cyIsImRlY2xhcmF0aW9ucyIsImdldFR5cGVzIiwiZ2V0UnVsZVNldHMiLCJnZXREZWNsYXJhdGlvbnMiLCJhc0NTUyIsIm1lZGlhVHlwZSIsInNlbGVjdG9yc0xpc3QiLCJvdXRlcm1vc3QiLCJjc3MiLCJFTVBUWV9TVFJJTkciLCJ0eXBlTWF0Y2hNZWRpYVR5cGUiLCJtYXRjaE1lZGlhVHlwZSIsImRlY2xhcmF0aW9uc0NTUyIsInJ1bGVTZXRzQ1NTIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJub2RlIiwidG9rZW5zIiwidHlwZXNGcm9tTm9kZUFuZFRva2VucyIsIlJ1bGVTZXRzIiwiRGVjbGFyYXRpb25zIiwibWVkaWEiLCJtZWRpYVR5cGVzTm9uVGVybWluYWxOb2RlIiwibWVkaWFUeXBlcyIsIk1lZGlhVHlwZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBV3FCQTs7OytEQVRBO2lFQUNFO21FQUNFO3FCQUVDO3lCQUNHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdCLElBQU1DLGlDQUFpQ0MsSUFBQUEsZ0JBQVMsRUFBQztBQUVsQyxJQUFBLEFBQU1GLHNCQUFELEFBQUw7YUFBTUEsTUFDUEcsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLFlBQVk7Z0NBRHRCTDtRQUVqQixJQUFJLENBQUNHLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxZQUFZLEdBQUdBOztrQkFKSEw7O1lBT25CTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILEtBQUs7WUFDbkI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFFBQVE7WUFDdEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFlBQVk7WUFDMUI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsU0FBUyxFQUFFQyxhQUFhLEVBQUVDLFNBQVM7Z0JBQ3ZDLElBQUlDLE1BQU1DLHVCQUFZO2dCQUV0QixJQUFNQyxxQkFBcUIsSUFBSSxDQUFDWixLQUFLLENBQUNhLGNBQWMsQ0FBQ047Z0JBRXJELElBQUlLLG9CQUFvQjtvQkFDdEIsSUFBTUUsa0JBQWtCLElBQUksQ0FBQ1osWUFBWSxDQUFDSSxLQUFLLENBQUNFLGVBQWVDLFlBQ3pETSxjQUFjLElBQUksQ0FBQ2QsUUFBUSxDQUFDSyxLQUFLLENBQUNFLGVBQWVDO29CQUV2REMsTUFBTSxBQUFDSSxvQkFBb0JILHVCQUFZLEdBQy9CSSxjQUNBLEFBQUMsR0FDYkEsT0FEZUQsaUJBQWdCLE1BQ25CLE9BQVpDO2dCQUNFO2dCQUVBLE9BQU9MO1lBQ1Q7Ozs7WUFFT00sS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCQyxJQUFJLEVBQUVDLE1BQU07Z0JBQ25DLElBQU1sQixRQUFRbUIsdUJBQXVCRixNQUFNQyxTQUNyQ2pCLFdBQVdtQixpQkFBUSxDQUFDSixpQkFBaUIsQ0FBQ0MsTUFBTUMsU0FDNUNoQixlQUFlbUIscUJBQVksQ0FBQ0wsaUJBQWlCLENBQUNDLE1BQU1DLFNBQ3BESSxRQUFRLElBekNHekIsTUF5Q09HLE9BQU9DLFVBQVVDO2dCQUV6QyxPQUFPb0I7WUFDVDs7O1dBNUNtQnpCOztBQStDckIsU0FBU3NCLHVCQUF1QkYsSUFBSSxFQUFFQyxNQUFNO0lBQzFDLElBQU1LLDRCQUE0QnpCLCtCQUErQm1CO0lBRWpFQSxPQUFPTSwyQkFBNEIsR0FBRztJQUV0QyxJQUFNQyxhQUFhQyxtQkFBVSxDQUFDVCxpQkFBaUIsQ0FBQ0MsTUFBTUMsU0FDaERsQixRQUFRd0I7SUFFZCxPQUFPeEI7QUFDVCJ9