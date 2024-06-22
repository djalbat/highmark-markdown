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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9tZWRpYVR5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgbmFtZVRlcm1pbmFsTm9kZXNRdWVyeSA9IG5vZGVRdWVyeShcIi8qL0BuYW1lXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZWRpYVR5cGUge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGFzQ1NTKCkge1xuICAgIGNvbnN0IGNzcyA9IHRoaXMubmFtZTsgIC8vL1xuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIG1hdGNoKG1lZGlhVHlwZSkge1xuICAgIGNvbnN0IG5hbWUgPSBtZWRpYVR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIG1hdGNoZXMgPSAodGhpcy5uYW1lID09PSBuYW1lKTtcblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZWRpYVR5cGVOYW1lKG1lZGlhVHlwZU5hbWUpIHtcbiAgICBjb25zdCBuYW1lID0gbWVkaWFUeXBlTmFtZSwgLy8vXG4gICAgICAgICAgbWVkaWFUeXBlID0gbmV3IE1lZGlhVHlwZShuYW1lKTtcblxuICAgIHJldHVybiBtZWRpYVR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3QgbmFtZSA9IG5hbWVGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBtZWRpYVR5cGUgPSBuZXcgTWVkaWFUeXBlKG5hbWUpO1xuXG4gICAgcmV0dXJuIG1lZGlhVHlwZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBuYW1lRnJvbU5vZGUobm9kZSkge1xuICBjb25zdCBuYW1lVGVybWluYWxOb2RlID0gbmFtZVRlcm1pbmFsTm9kZXNRdWVyeShub2RlKSxcbiAgICAgICAgbmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQgPSBuYW1lVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgbmFtZSA9IG5hbWVUZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cblxuICByZXR1cm4gbmFtZTtcbn1cbiJdLCJuYW1lcyI6WyJNZWRpYVR5cGUiLCJuYW1lVGVybWluYWxOb2Rlc1F1ZXJ5Iiwibm9kZVF1ZXJ5IiwibmFtZSIsImdldE5hbWUiLCJhc0NTUyIsImNzcyIsIm1hdGNoIiwibWVkaWFUeXBlIiwibWF0Y2hlcyIsImZyb21NZWRpYVR5cGVOYW1lIiwibWVkaWFUeXBlTmFtZSIsImZyb21Ob2RlQW5kVG9rZW5zIiwibm9kZSIsInRva2VucyIsIm5hbWVGcm9tTm9kZSIsIm5hbWVUZXJtaW5hbE5vZGUiLCJuYW1lVGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O3FCQUpLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNQyx5QkFBeUJDLElBQUFBLGdCQUFTLEVBQUM7QUFFMUIsSUFBQSxBQUFNRiwwQkFBRCxBQUFMO2FBQU1BLFVBQ1BHLElBQUk7Z0NBREdIO1FBRWpCLElBQUksQ0FBQ0csSUFBSSxHQUFHQTs7a0JBRktIOztZQUtuQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxJQUFJO1lBQ2xCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLE1BQU0sSUFBSSxDQUFDSCxJQUFJLEVBQUcsR0FBRztnQkFFM0IsT0FBT0c7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxTQUFTO2dCQUNiLElBQU1MLE9BQU9LLFVBQVVKLE9BQU8sSUFDeEJLLFVBQVcsSUFBSSxDQUFDTixJQUFJLEtBQUtBO2dCQUUvQixPQUFPTTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQkMsYUFBYTtnQkFDcEMsSUFBTVIsT0FBT1EsZUFDUEgsWUFBWSxJQXhCRFIsVUF3QmVHO2dCQUVoQyxPQUFPSztZQUNUOzs7WUFFT0ksS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCQyxJQUFJLEVBQUVDLE1BQU07Z0JBQ25DLElBQU1YLE9BQU9ZLGFBQWFGLE9BQ3BCTCxZQUFZLElBL0JEUixVQStCZUc7Z0JBRWhDLE9BQU9LO1lBQ1Q7OztXQWxDbUJSOztBQXFDckIsU0FBU2UsYUFBYUYsSUFBSTtJQUN4QixJQUFNRyxtQkFBbUJmLHVCQUF1QlksT0FDMUNJLDBCQUEwQkQsaUJBQWlCRSxVQUFVLElBQ3JEZixPQUFPYyx5QkFBeUIsR0FBRztJQUV6QyxPQUFPZDtBQUNUIn0=