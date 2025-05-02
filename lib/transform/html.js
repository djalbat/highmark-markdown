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
    function HTMLTransform() {
        _class_call_check(this, HTMLTransform);
        return _call_super(this, HTMLTransform, arguments);
    }
    _create_class(HTMLTransform, [
        {
            key: "appendTo",
            value: function appendTo(parentHTMLNode) {
                var node = this.getNode(), childNode = node, parentNode = parentHTMLNode; ///
                parentNode.appendChildNode(childNode);
            }
        },
        {
            key: "remove",
            value: function remove() {
                var node = this.getNode(), childNode = node, parentNode = node.getParentNode();
                parentNode.removeChildNode(childNode);
            }
        },
        {
            key: "expand",
            value: function expand(Class, ascendantNode) {
                if (ascendantNode === undefined) {
                    ascendantNode = Class; ///
                    Class = _occamdom.Transform; ///
                }
                var node = ascendantNode, tokens = null, transform = _occamdom.Transform.fromNodeAndTokens(Class, node, tokens);
                return transform;
            }
        }
    ], [
        {
            key: "fromHTNLNOde",
            value: // contract(Class, descendentNode, ...remainingArguments) {
            //   if (descendentNode === undefined) {
            //     descendentNode = Class; ///
            //
            //     Class = Transform;  ///
            //   }
            //
            //   const node = descendentNode,  ///
            //     tokens = this.tokens, ///
            //     context = { ///
            //       tokens
            //     },
            //     transform = Class.fromNode(node, ...remainingArguments, context);
            //
            //   return transform;
            // }
            function fromHTNLNOde(Class, htmlNode) {
                if (htmlNode === undefined) {
                    htmlNode = Class; ///
                    Class = _occamdom.Transform; ///
                }
                var node = htmlNode, tokens = null, htmlTransform = _occamdom.Transform.fromNodeAndTokens(Class, node, tokens);
                return htmlTransform;
            }
        }
    ]);
    return HTMLTransform;
}(_occamdom.Transform);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vaHRtbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSBcIm9jY2FtLWRvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIVE1MVHJhbnNmb3JtIGV4dGVuZHMgVHJhbnNmb3JtIHtcbiAgYXBwZW5kVG8ocGFyZW50SFRNTE5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY2hpbGROb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgcGFyZW50Tm9kZSA9IHBhcmVudEhUTUxOb2RlOyAgLy8vXG5cbiAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkTm9kZShjaGlsZE5vZGUpO1xuICB9XG5cbiAgcmVtb3ZlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjaGlsZE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICBwYXJlbnROb2RlID0gbm9kZS5nZXRQYXJlbnROb2RlKCk7XG5cbiAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkTm9kZShjaGlsZE5vZGUpO1xuICB9XG5cbiAgZXhwYW5kKENsYXNzLCBhc2NlbmRhbnROb2RlKSB7XG4gICAgaWYgKGFzY2VuZGFudE5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgYXNjZW5kYW50Tm9kZSA9IENsYXNzOyAgLy8vXG5cbiAgICAgIENsYXNzID0gVHJhbnNmb3JtOyAgLy8vXG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZSA9IGFzY2VuZGFudE5vZGUsIC8vL1xuICAgICAgICAgIHRva2VucyA9IG51bGwsXG4gICAgICAgICAgdHJhbnNmb3JtID0gVHJhbnNmb3JtLmZyb21Ob2RlQW5kVG9rZW5zKENsYXNzLCBub2RlLCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIHRyYW5zZm9ybTtcbiAgfVxuXG4gIC8vIGNvbnRyYWN0KENsYXNzLCBkZXNjZW5kZW50Tm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gIC8vICAgaWYgKGRlc2NlbmRlbnROb2RlID09PSB1bmRlZmluZWQpIHtcbiAgLy8gICAgIGRlc2NlbmRlbnROb2RlID0gQ2xhc3M7IC8vL1xuICAvL1xuICAvLyAgICAgQ2xhc3MgPSBUcmFuc2Zvcm07ICAvLy9cbiAgLy8gICB9XG4gIC8vXG4gIC8vICAgY29uc3Qgbm9kZSA9IGRlc2NlbmRlbnROb2RlLCAgLy8vXG4gIC8vICAgICB0b2tlbnMgPSB0aGlzLnRva2VucywgLy8vXG4gIC8vICAgICBjb250ZXh0ID0geyAvLy9cbiAgLy8gICAgICAgdG9rZW5zXG4gIC8vICAgICB9LFxuICAvLyAgICAgdHJhbnNmb3JtID0gQ2xhc3MuZnJvbU5vZGUobm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzLCBjb250ZXh0KTtcbiAgLy9cbiAgLy8gICByZXR1cm4gdHJhbnNmb3JtO1xuICAvLyB9XG5cbiAgc3RhdGljIGZyb21IVE5MTk9kZShDbGFzcywgaHRtbE5vZGUpIHtcbiAgICBpZiAoaHRtbE5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaHRtbE5vZGUgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gVHJhbnNmb3JtOyAgLy8vXG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZSA9IGh0bWxOb2RlLCAgLy8vXG4gICAgICAgICAgdG9rZW5zID0gbnVsbCxcbiAgICAgICAgICBodG1sVHJhbnNmb3JtID0gVHJhbnNmb3JtLmZyb21Ob2RlQW5kVG9rZW5zKENsYXNzLCBub2RlLCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIGh0bWxUcmFuc2Zvcm07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJIVE1MVHJhbnNmb3JtIiwiYXBwZW5kVG8iLCJwYXJlbnRIVE1MTm9kZSIsIm5vZGUiLCJnZXROb2RlIiwiY2hpbGROb2RlIiwicGFyZW50Tm9kZSIsImFwcGVuZENoaWxkTm9kZSIsInJlbW92ZSIsImdldFBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZE5vZGUiLCJleHBhbmQiLCJDbGFzcyIsImFzY2VuZGFudE5vZGUiLCJ1bmRlZmluZWQiLCJUcmFuc2Zvcm0iLCJ0b2tlbnMiLCJ0cmFuc2Zvcm0iLCJmcm9tTm9kZUFuZFRva2VucyIsImZyb21IVE5MTk9kZSIsImh0bWxOb2RlIiwiaHRtbFRyYW5zZm9ybSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7d0JBRks7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVgsSUFBQSxBQUFNQSw4QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxjQUFjO2dCQUNyQixJQUFNQyxPQUFPLElBQUksQ0FBQ0MsT0FBTyxJQUNuQkMsWUFBWUYsTUFDWkcsYUFBYUosZ0JBQWlCLEdBQUc7Z0JBRXZDSSxXQUFXQyxlQUFlLENBQUNGO1lBQzdCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1MLE9BQU8sSUFBSSxDQUFDQyxPQUFPLElBQ25CQyxZQUFZRixNQUNaRyxhQUFhSCxLQUFLTSxhQUFhO2dCQUVyQ0gsV0FBV0ksZUFBZSxDQUFDTDtZQUM3Qjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxLQUFLLEVBQUVDLGFBQWE7Z0JBQ3pCLElBQUlBLGtCQUFrQkMsV0FBVztvQkFDL0JELGdCQUFnQkQsT0FBUSxHQUFHO29CQUUzQkEsUUFBUUcsbUJBQVMsRUFBRyxHQUFHO2dCQUN6QjtnQkFFQSxJQUFNWixPQUFPVSxlQUNQRyxTQUFTLE1BQ1RDLFlBQVlGLG1CQUFTLENBQUNHLGlCQUFpQixDQUFDTixPQUFPVCxNQUFNYTtnQkFFM0QsT0FBT0M7WUFDVDs7OztZQW1CT0UsS0FBQUE7bUJBQVAsQUFqQkEsMkRBQTJEO1lBQzNELHdDQUF3QztZQUN4QyxrQ0FBa0M7WUFDbEMsRUFBRTtZQUNGLDhCQUE4QjtZQUM5QixNQUFNO1lBQ04sRUFBRTtZQUNGLHNDQUFzQztZQUN0QyxnQ0FBZ0M7WUFDaEMsc0JBQXNCO1lBQ3RCLGVBQWU7WUFDZixTQUFTO1lBQ1Qsd0VBQXdFO1lBQ3hFLEVBQUU7WUFDRixzQkFBc0I7WUFDdEIsSUFBSTtZQUVKLFNBQU9BLGFBQWFQLEtBQUssRUFBRVEsUUFBUTtnQkFDakMsSUFBSUEsYUFBYU4sV0FBVztvQkFDMUJNLFdBQVdSLE9BQU8sR0FBRztvQkFFckJBLFFBQVFHLG1CQUFTLEVBQUcsR0FBRztnQkFDekI7Z0JBRUEsSUFBTVosT0FBT2lCLFVBQ1BKLFNBQVMsTUFDVEssZ0JBQWdCTixtQkFBUyxDQUFDRyxpQkFBaUIsQ0FBQ04sT0FBT1QsTUFBTWE7Z0JBRS9ELE9BQU9LO1lBQ1Q7OztXQTVEbUJyQjtFQUFzQmUsbUJBQVMifQ==