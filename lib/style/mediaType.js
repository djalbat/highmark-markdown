"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MediaType;
    }
});
var _query = require("../utilities/query");
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
var nameTerminalNodesQuery = (0, _query.nodeQuery)("/*/@name");
var MediaType = /*#__PURE__*/ function() {
    function MediaType(name) {
        _class_call_check(this, MediaType);
        this.name = name;
    }
    _create_class(MediaType, [
        {
            key: "getName",
            value: function getName() {
                return this.name;
            }
        },
        {
            key: "asCSS",
            value: function asCSS() {
                var css = this.name; ///
                return css;
            }
        },
        {
            key: "match",
            value: function match(mediaType) {
                var name = mediaType.getName(), matches = this.name === name;
                return matches;
            }
        }
    ], [
        {
            key: "fromMediaTypeName",
            value: function fromMediaTypeName(mediaTypeName) {
                var name = mediaTypeName, mediaType = new MediaType(name);
                return mediaType;
            }
        },
        {
            key: "fromNodeAndTokens",
            value: function fromNodeAndTokens(node, tokens) {
                var name = nameFromNode(node), mediaType = new MediaType(name);
                return mediaType;
            }
        }
    ]);
    return MediaType;
}();
function nameFromNode(node) {
    var nameTerminalNode = nameTerminalNodesQuery(node), nameTerminalNodeContent = nameTerminalNode.getContent(), name = nameTerminalNodeContent; ///
    return name;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9tZWRpYVR5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgbmFtZVRlcm1pbmFsTm9kZXNRdWVyeSA9IG5vZGVRdWVyeShcIi8qL0BuYW1lXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZWRpYVR5cGUge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGFzQ1NTKCkge1xuICAgIGNvbnN0IGNzcyA9IHRoaXMubmFtZTsgIC8vL1xuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIG1hdGNoKG1lZGlhVHlwZSkge1xuICAgIGNvbnN0IG5hbWUgPSBtZWRpYVR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIG1hdGNoZXMgPSAodGhpcy5uYW1lID09PSBuYW1lKTtcblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZWRpYVR5cGVOYW1lKG1lZGlhVHlwZU5hbWUpIHtcbiAgICBjb25zdCBuYW1lID0gbWVkaWFUeXBlTmFtZSwgLy8vXG4gICAgICAgICAgbWVkaWFUeXBlID0gbmV3IE1lZGlhVHlwZShuYW1lKTtcblxuICAgIHJldHVybiBtZWRpYVR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3QgbmFtZSA9IG5hbWVGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBtZWRpYVR5cGUgPSBuZXcgTWVkaWFUeXBlKG5hbWUpO1xuXG4gICAgcmV0dXJuIG1lZGlhVHlwZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBuYW1lRnJvbU5vZGUobm9kZSkge1xuICBjb25zdCBuYW1lVGVybWluYWxOb2RlID0gbmFtZVRlcm1pbmFsTm9kZXNRdWVyeShub2RlKSxcbiAgICAgICAgbmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQgPSBuYW1lVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgbmFtZSA9IG5hbWVUZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cblxuICByZXR1cm4gbmFtZTtcbn1cbiJdLCJuYW1lcyI6WyJNZWRpYVR5cGUiLCJuYW1lVGVybWluYWxOb2Rlc1F1ZXJ5Iiwibm9kZVF1ZXJ5IiwibmFtZSIsImdldE5hbWUiLCJhc0NTUyIsImNzcyIsIm1hdGNoIiwibWVkaWFUeXBlIiwibWF0Y2hlcyIsImZyb21NZWRpYVR5cGVOYW1lIiwibWVkaWFUeXBlTmFtZSIsImZyb21Ob2RlQW5kVG9rZW5zIiwibm9kZSIsInRva2VucyIsIm5hbWVGcm9tTm9kZSIsIm5hbWVUZXJtaW5hbE5vZGUiLCJuYW1lVGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OztxQkFKSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBTUMseUJBQXlCQyxJQUFBQSxnQkFBUyxFQUFDO0FBRTFCLElBQUEsQUFBTUYsMEJBQUQsQUFBTDthQUFNQSxVQUNQRyxJQUFJO2dDQURHSDtRQUVqQixJQUFJLENBQUNHLElBQUksR0FBR0E7O2tCQUZLSDs7WUFLbkJJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsSUFBSTtZQUNsQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxNQUFNLElBQUksQ0FBQ0gsSUFBSSxFQUFHLEdBQUc7Z0JBRTNCLE9BQU9HO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsU0FBUztnQkFDYixJQUFNTCxPQUFPSyxVQUFVSixPQUFPLElBQ3hCSyxVQUFXLElBQUksQ0FBQ04sSUFBSSxLQUFLQTtnQkFFL0IsT0FBT007WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JDLGFBQWE7Z0JBQ3BDLElBQU1SLE9BQU9RLGVBQ1BILFlBQVksSUF4QkRSLFVBd0JlRztnQkFFaEMsT0FBT0s7WUFDVDs7O1lBRU9JLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQkMsSUFBSSxFQUFFQyxNQUFNO2dCQUNuQyxJQUFNWCxPQUFPWSxhQUFhRixPQUNwQkwsWUFBWSxJQS9CRFIsVUErQmVHO2dCQUVoQyxPQUFPSztZQUNUOzs7V0FsQ21CUjs7QUFxQ3JCLFNBQVNlLGFBQWFGLElBQUk7SUFDeEIsSUFBTUcsbUJBQW1CZix1QkFBdUJZLE9BQzFDSSwwQkFBMEJELGlCQUFpQkUsVUFBVSxJQUNyRGYsT0FBT2MseUJBQXlCLEdBQUc7SUFFekMsT0FBT2Q7QUFDVCJ9