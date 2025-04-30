"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return HTMLTransform;
    }
});
var _occamdom = require("occam-dom");
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
var HTMLTransform = /*#__PURE__*/ function(Transform) {
    _inherits(HTMLTransform, Transform);
    function HTMLTransform(node, tokens, htmlNode) {
        _class_call_check(this, HTMLTransform);
        var _this;
        _this = _call_super(this, HTMLTransform, [
            node,
            tokens
        ]);
        _this.htmlNode = htmlNode;
        return _this;
    }
    _create_class(HTMLTransform, [
        {
            key: "getHTMLNode",
            value: function getHTMLNode() {
                return this.htmlNode;
            }
        },
        {
            key: "removeFrom",
            value: function removeFrom(parentHTNLNode, context) {
                var childNode = this.htmlNode; ///
                parentHTNLNode.removeChildNode(childNode);
            }
        }
    ], [
        {
            key: "fromHTNLNOde",
            value: function fromHTNLNOde(Class, htmlNode, context) {
                var outerNode = htmlNode.getOuterNode(), node = outerNode, htmlTransform = _occamdom.Transform.fromNode(Class, node, htmlNode, context);
                return htmlTransform;
            }
        },
        {
            key: "fromHTMLNodeAndTokens",
            value: function fromHTMLNodeAndTokens(Class, htmlNode, tokens, context) {
                var outerNode = htmlNode.getOuterNode(), node = outerNode, htmlTransform = _occamdom.Transform.fromNodeAndTokens(Class, node, tokens, htmlNode, context);
                return htmlTransform;
            }
        }
    ]);
    return HTMLTransform;
}(_occamdom.Transform);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSBcIm9jY2FtLWRvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIVE1MVHJhbnNmb3JtIGV4dGVuZHMgVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3Iobm9kZSwgdG9rZW5zLCBodG1sTm9kZSkge1xuICAgIHN1cGVyKG5vZGUsIHRva2Vucyk7XG5cbiAgICB0aGlzLmh0bWxOb2RlID0gaHRtbE5vZGU7XG4gIH1cblxuICBnZXRIVE1MTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5odG1sTm9kZTtcbiAgfVxuXG4gIHJlbW92ZUZyb20ocGFyZW50SFROTE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZE5vZGUgPSB0aGlzLmh0bWxOb2RlOyAgLy8vXG5cbiAgICBwYXJlbnRIVE5MTm9kZS5yZW1vdmVDaGlsZE5vZGUoY2hpbGROb2RlKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFROTE5PZGUoQ2xhc3MsIGh0bWxOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgb3V0ZXJOb2RlID0gaHRtbE5vZGUuZ2V0T3V0ZXJOb2RlKCksXG4gICAgICAgICAgbm9kZSA9IG91dGVyTm9kZSwgLy8vXG4gICAgICAgICAgaHRtbFRyYW5zZm9ybSA9IFRyYW5zZm9ybS5mcm9tTm9kZShDbGFzcywgbm9kZSwgaHRtbE5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGh0bWxUcmFuc2Zvcm07XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUxOb2RlQW5kVG9rZW5zKENsYXNzLCBodG1sTm9kZSwgdG9rZW5zLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgb3V0ZXJOb2RlID0gaHRtbE5vZGUuZ2V0T3V0ZXJOb2RlKCksXG4gICAgICAgICAgbm9kZSA9IG91dGVyTm9kZSwgLy8vXG4gICAgICAgICAgaHRtbFRyYW5zZm9ybSA9IFRyYW5zZm9ybS5mcm9tTm9kZUFuZFRva2VucyhDbGFzcywgbm9kZSwgdG9rZW5zLCBodG1sTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gaHRtbFRyYW5zZm9ybTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkhUTUxUcmFuc2Zvcm0iLCJub2RlIiwidG9rZW5zIiwiaHRtbE5vZGUiLCJnZXRIVE1MTm9kZSIsInJlbW92ZUZyb20iLCJwYXJlbnRIVE5MTm9kZSIsImNvbnRleHQiLCJjaGlsZE5vZGUiLCJyZW1vdmVDaGlsZE5vZGUiLCJmcm9tSFROTE5PZGUiLCJDbGFzcyIsIm91dGVyTm9kZSIsImdldE91dGVyTm9kZSIsImh0bWxUcmFuc2Zvcm0iLCJUcmFuc2Zvcm0iLCJmcm9tTm9kZSIsImZyb21IVE1MTm9kZUFuZFRva2VucyIsImZyb21Ob2RlQW5kVG9rZW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7Ozt3QkFGSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFWCxJQUFBLEFBQU1BLDhCQUFOO2NBQU1BO2FBQUFBLGNBQ1BDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxRQUFRO2dDQURmSDs7Z0JBRWpCLGtCQUZpQkE7WUFFWEM7WUFBTUM7O1FBRVosTUFBS0MsUUFBUSxHQUFHQTs7O2tCQUpDSDs7WUFPbkJJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsUUFBUTtZQUN0Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXQyxjQUFjLEVBQUVDLE9BQU87Z0JBQ2hDLElBQU1DLFlBQVksSUFBSSxDQUFDTCxRQUFRLEVBQUcsR0FBRztnQkFFckNHLGVBQWVHLGVBQWUsQ0FBQ0Q7WUFDakM7Ozs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0EsYUFBYUMsS0FBSyxFQUFFUixRQUFRLEVBQUVJLE9BQU87Z0JBQzFDLElBQU1LLFlBQVlULFNBQVNVLFlBQVksSUFDakNaLE9BQU9XLFdBQ1BFLGdCQUFnQkMsbUJBQVMsQ0FBQ0MsUUFBUSxDQUFDTCxPQUFPVixNQUFNRSxVQUFVSTtnQkFFaEUsT0FBT087WUFDVDs7O1lBRU9HLEtBQUFBO21CQUFQLFNBQU9BLHNCQUFzQk4sS0FBSyxFQUFFUixRQUFRLEVBQUVELE1BQU0sRUFBRUssT0FBTztnQkFDM0QsSUFBTUssWUFBWVQsU0FBU1UsWUFBWSxJQUNqQ1osT0FBT1csV0FDUEUsZ0JBQWdCQyxtQkFBUyxDQUFDRyxpQkFBaUIsQ0FBQ1AsT0FBT1YsTUFBTUMsUUFBUUMsVUFBVUk7Z0JBRWpGLE9BQU9PO1lBQ1Q7OztXQS9CbUJkO0VBQXNCZSxtQkFBUyJ9