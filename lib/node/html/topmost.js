"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TopmostHTMLNode;
    }
});
var _occamdom = require("occam-dom");
var _necessary = require("necessary");
var _queries = /*#__PURE__*/ _interop_require_default(require("../../queries"));
var _html = /*#__PURE__*/ _interop_require_default(require("../../node/html"));
var _html1 = /*#__PURE__*/ _interop_require_default(require("../../map/node/html"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var push = _necessary.arrayUtilities.push, topmostNodeFromOuterNodes = _occamdom.nodeUtilities.topmostNodeFromOuterNodes;
var TopmostHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(TopmostHTMLNode, HTMLNode);
    function TopmostHTMLNode() {
        _class_call_check(this, TopmostHTMLNode);
        return _call_super(this, TopmostHTMLNode, arguments);
    }
    _create_class(TopmostHTMLNode, [
        {
            key: "adjustIndent",
            value: function adjustIndent(indent) {
                return indent;
            }
        },
        {
            key: "asString",
            value: function asString() {
                var tagName = this.constructor.tagName, string = tagName; ///
                return string;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _html.default.fromNothing(TopmostHTMLNode);
            }
        },
        {
            key: "fromDivisionMarkdownNode",
            value: function fromDivisionMarkdownNode(divisionMarkdownNode) {
                var node = divisionMarkdownNode, nodes = nodesFromNodeAndQueries(node, _queries.default), topmostHTMLNode = topmostNodeFromOuterNodes(ClassFromOuterNode, nodes);
                return topmostHTMLNode;
            }
        }
    ]);
    return TopmostHTMLNode;
}(_html.default);
_define_property(TopmostHTMLNode, "tagName", "html");
_define_property(TopmostHTMLNode, "className", null);
function ClassFromOuterNode(outerNode) {
    var Class;
    if (outerNode === null) {
        Class = TopmostHTMLNode; ///
    } else {
        var nonTerminalNode = outerNode, ruleName = nonTerminalNode.getRuleName();
        Class = _html1.default[ruleName] || _html.default;
    }
    return Class;
}
function nodesFromNodeAndQueries(node, queries) {
    var nodes = [];
    queries.forEach(function(query) {
        var queryNodes = query.execute(node);
        push(nodes, queryNodes);
    });
    return nodes;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvdG9wbW9zdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZVV0aWxpdGllc30gZnJvbSBcIm9jY2FtLWRvbVwiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBxdWVyaWVzIGZyb20gXCIuLi8uLi9xdWVyaWVzXCI7XG5pbXBvcnQgSFRNTE5vZGUgZnJvbSBcIi4uLy4uL25vZGUvaHRtbFwiO1xuaW1wb3J0IGh0bWxOb2RlTWFwIGZyb20gXCIuLi8uLi9tYXAvbm9kZS9odG1sXCI7XG5cbmNvbnN0IHsgcHVzaCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IHRvcG1vc3ROb2RlRnJvbU91dGVyTm9kZXMgfSA9IG5vZGVVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvcG1vc3RIVE1MTm9kZSBleHRlbmRzIEhUTUxOb2RlIHtcbiAgYWRqdXN0SW5kZW50KGluZGVudCkge1xuICAgIHJldHVybiBpbmRlbnQ7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCB7IHRhZ05hbWUgfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgc3RyaW5nID0gdGFnTmFtZTsgLy8vXG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImh0bWxcIjtcblxuICBzdGF0aWMgY2xhc3NOYW1lID0gbnVsbDtcblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IHJldHVybiBIVE1MTm9kZS5mcm9tTm90aGluZyhUb3Btb3N0SFRNTE5vZGUpOyB9XG5cbiAgc3RhdGljIGZyb21EaXZpc2lvbk1hcmtkb3duTm9kZShkaXZpc2lvbk1hcmtkb3duTm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZSwgIC8vL1xuICAgICAgICAgIG5vZGVzID0gbm9kZXNGcm9tTm9kZUFuZFF1ZXJpZXMobm9kZSwgcXVlcmllcyksXG4gICAgICAgICAgdG9wbW9zdEhUTUxOb2RlID0gdG9wbW9zdE5vZGVGcm9tT3V0ZXJOb2RlcyhDbGFzc0Zyb21PdXRlck5vZGUsIG5vZGVzKTtcblxuICAgIHJldHVybiB0b3Btb3N0SFRNTE5vZGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gQ2xhc3NGcm9tT3V0ZXJOb2RlKG91dGVyTm9kZSkge1xuICBsZXQgQ2xhc3M7XG5cbiAgaWYgKG91dGVyTm9kZSA9PT0gbnVsbCkge1xuICAgIENsYXNzID0gVG9wbW9zdEhUTUxOb2RlOyAgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gb3V0ZXJOb2RlLCAgLy8vXG4gICAgICBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpO1xuXG4gICAgQ2xhc3MgPSBodG1sTm9kZU1hcFtydWxlTmFtZV0gfHwgSFRNTE5vZGU7XG4gIH1cblxuICByZXR1cm4gQ2xhc3M7XG59XG5cbmZ1bmN0aW9uIG5vZGVzRnJvbU5vZGVBbmRRdWVyaWVzKG5vZGUsIHF1ZXJpZXMpIHtcbiAgY29uc3Qgbm9kZXMgPSBbXTtcblxuICBxdWVyaWVzLmZvckVhY2goKHF1ZXJ5KSA9PiB7XG4gICAgY29uc3QgcXVlcnlOb2RlcyA9IHF1ZXJ5LmV4ZWN1dGUobm9kZSk7XG5cbiAgICBwdXNoKG5vZGVzLCBxdWVyeU5vZGVzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIG5vZGVzO1xufVxuIl0sIm5hbWVzIjpbIlRvcG1vc3RIVE1MTm9kZSIsInB1c2giLCJhcnJheVV0aWxpdGllcyIsInRvcG1vc3ROb2RlRnJvbU91dGVyTm9kZXMiLCJub2RlVXRpbGl0aWVzIiwiYWRqdXN0SW5kZW50IiwiaW5kZW50IiwiYXNTdHJpbmciLCJ0YWdOYW1lIiwiY29uc3RydWN0b3IiLCJzdHJpbmciLCJmcm9tTm90aGluZyIsIkhUTUxOb2RlIiwiZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJub2RlIiwibm9kZXMiLCJub2Rlc0Zyb21Ob2RlQW5kUXVlcmllcyIsInF1ZXJpZXMiLCJ0b3Btb3N0SFRNTE5vZGUiLCJDbGFzc0Zyb21PdXRlck5vZGUiLCJjbGFzc05hbWUiLCJvdXRlck5vZGUiLCJDbGFzcyIsIm5vblRlcm1pbmFsTm9kZSIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJodG1sTm9kZU1hcCIsImZvckVhY2giLCJxdWVyeSIsInF1ZXJ5Tm9kZXMiLCJleGVjdXRlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVlxQkE7Ozt3QkFWUTt5QkFDRTs4REFFWDsyREFDQzs0REFDRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEIsSUFBTSxBQUFFQyxPQUFTQyx5QkFBYyxDQUF2QkQsTUFDRixBQUFFRSw0QkFBOEJDLHVCQUFhLENBQTNDRDtBQUVPLElBQUEsQUFBTUgsZ0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CSyxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYUMsTUFBTTtnQkFDakIsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNLEFBQUVDLFVBQVksSUFBSSxDQUFDQyxXQUFXLENBQTVCRCxTQUNGRSxTQUFTRixTQUFTLEdBQUc7Z0JBRTNCLE9BQU9FO1lBQ1Q7Ozs7WUFNT0MsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQWdCLE9BQU9DLGFBQVEsQ0FBQ0QsV0FBVyxDQWhCL0JYO1lBZ0JrRDs7O1lBRTlEYSxLQUFBQTttQkFBUCxTQUFPQSx5QkFBeUJDLG9CQUFvQjtnQkFDbEQsSUFBTUMsT0FBT0Qsc0JBQ1BFLFFBQVFDLHdCQUF3QkYsTUFBTUcsZ0JBQU8sR0FDN0NDLGtCQUFrQmhCLDBCQUEwQmlCLG9CQUFvQko7Z0JBRXRFLE9BQU9HO1lBQ1Q7OztXQXhCbUJuQjtFQUF3QlksYUFBUTtBQVluRCxpQkFabUJaLGlCQVlaUSxXQUFVO0FBRWpCLGlCQWRtQlIsaUJBY1pxQixhQUFZO0FBYXJCLFNBQVNELG1CQUFtQkUsU0FBUztJQUNuQyxJQUFJQztJQUVKLElBQUlELGNBQWMsTUFBTTtRQUN0QkMsUUFBUXZCLGlCQUFrQixHQUFHO0lBQy9CLE9BQU87UUFDTCxJQUFNd0Isa0JBQWtCRixXQUN0QkcsV0FBV0QsZ0JBQWdCRSxXQUFXO1FBRXhDSCxRQUFRSSxjQUFXLENBQUNGLFNBQVMsSUFBSWIsYUFBUTtJQUMzQztJQUVBLE9BQU9XO0FBQ1Q7QUFFQSxTQUFTTix3QkFBd0JGLElBQUksRUFBRUcsT0FBTztJQUM1QyxJQUFNRixRQUFRLEVBQUU7SUFFaEJFLFFBQVFVLE9BQU8sQ0FBQyxTQUFDQztRQUNmLElBQU1DLGFBQWFELE1BQU1FLE9BQU8sQ0FBQ2hCO1FBRWpDZCxLQUFLZSxPQUFPYztJQUNkO0lBRUEsT0FBT2Q7QUFDVCJ9