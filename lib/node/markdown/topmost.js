"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TopmostMarkdownNode;
    }
});
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
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
var TopmostMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(TopmostMarkdownNode, MarkdownNode);
    function TopmostMarkdownNode() {
        _class_call_check(this, TopmostMarkdownNode);
        return _call_super(this, TopmostMarkdownNode, arguments);
    }
    _create_class(TopmostMarkdownNode, [
        {
            key: "resolve",
            value: function resolve(context) {
            // let divisionMarkdownNodes;
            //
            // divisionMarkdownNodes = resolveIncludes(divisionMarkdownNode, context);
            //
            // resolveEmbeddings(divisionMarkdownNodes, context);
            //
            // const topmostMarkdownNode = TopmostMarkdownNode.fromDivisionMarkdownNodes(divisionMarkdownNodes);
            //
            // return topmostMarkdownNode;
            }
        },
        {
            key: "getDivisionMarkdownNodeAt",
            value: function getDivisionMarkdownNodeAt(index) {
                var divisionNodeIndex = index, childNOde = this.findChildNode(function(childNode, index) {
                    var childNodeIndex = index; ///
                    if (childNodeIndex === divisionNodeIndex) {
                        return true;
                    }
                }), divisionMarkdownNode = childNOde; ///
                return divisionMarkdownNode;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                return _markdown.default.fromRuleNameChildNodesAndOpacity(TopmostMarkdownNode, ruleName, childNodes, opacity);
            }
        }
    ]);
    return TopmostMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL3RvcG1vc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXJrZG93bk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvbWFya2Rvd25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wbW9zdE1hcmtkb3duTm9kZSBleHRlbmRzIE1hcmtkb3duTm9kZSB7XG4gIHJlc29sdmUoY29udGV4dCkge1xuICAgIC8vIGxldCBkaXZpc2lvbk1hcmtkb3duTm9kZXM7XG4gICAgLy9cbiAgICAvLyBkaXZpc2lvbk1hcmtkb3duTm9kZXMgPSByZXNvbHZlSW5jbHVkZXMoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAgIC8vXG4gICAgLy8gcmVzb2x2ZUVtYmVkZGluZ3MoZGl2aXNpb25NYXJrZG93bk5vZGVzLCBjb250ZXh0KTtcbiAgICAvL1xuICAgIC8vIGNvbnN0IHRvcG1vc3RNYXJrZG93bk5vZGUgPSBUb3Btb3N0TWFya2Rvd25Ob2RlLmZyb21EaXZpc2lvbk1hcmtkb3duTm9kZXMoZGl2aXNpb25NYXJrZG93bk5vZGVzKTtcbiAgICAvL1xuICAgIC8vIHJldHVybiB0b3Btb3N0TWFya2Rvd25Ob2RlO1xuICB9XG5cbiAgZ2V0RGl2aXNpb25NYXJrZG93bk5vZGVBdChpbmRleCkge1xuICAgIGNvbnN0IGRpdmlzaW9uTm9kZUluZGV4ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICBjaGlsZE5PZGUgPSB0aGlzLmZpbmRDaGlsZE5vZGUoKGNoaWxkTm9kZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZUluZGV4ID0gaW5kZXg7IC8vL1xuXG4gICAgICAgICAgICBpZiAoY2hpbGROb2RlSW5kZXggPT09IGRpdmlzaW9uTm9kZUluZGV4KSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gY2hpbGROT2RlOyAvLy9cblxuICAgIHJldHVybiBkaXZpc2lvbk1hcmtkb3duTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSkgeyByZXR1cm4gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KFRvcG1vc3RNYXJrZG93bk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KTsgfVxufVxuIl0sIm5hbWVzIjpbIlRvcG1vc3RNYXJrZG93bk5vZGUiLCJyZXNvbHZlIiwiY29udGV4dCIsImdldERpdmlzaW9uTWFya2Rvd25Ob2RlQXQiLCJpbmRleCIsImRpdmlzaW9uTm9kZUluZGV4IiwiY2hpbGROT2RlIiwiZmluZENoaWxkTm9kZSIsImNoaWxkTm9kZSIsImNoaWxkTm9kZUluZGV4IiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kT3BhY2l0eSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJNYXJrZG93bk5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OytEQUZJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVYsSUFBQSxBQUFNQSxvQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxPQUFPO1lBQ2IsNkJBQTZCO1lBQzdCLEVBQUU7WUFDRiwwRUFBMEU7WUFDMUUsRUFBRTtZQUNGLHFEQUFxRDtZQUNyRCxFQUFFO1lBQ0Ysb0dBQW9HO1lBQ3BHLEVBQUU7WUFDRiw4QkFBOEI7WUFDaEM7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsMEJBQTBCQyxLQUFLO2dCQUM3QixJQUFNQyxvQkFBb0JELE9BQ3BCRSxZQUFZLElBQUksQ0FBQ0MsYUFBYSxDQUFDLFNBQUNDLFdBQVdKO29CQUN6QyxJQUFNSyxpQkFBaUJMLE9BQU8sR0FBRztvQkFFakMsSUFBSUssbUJBQW1CSixtQkFBbUI7d0JBQ3hDLE9BQU87b0JBQ1Q7Z0JBQ0YsSUFDQUssdUJBQXVCSixXQUFXLEdBQUc7Z0JBRTNDLE9BQU9JO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsaUNBQWlDQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsT0FBTztnQkFBSSxPQUFPQyxpQkFBWSxDQUFDSixnQ0FBZ0MsQ0EzQjFHWCxxQkEyQmdJWSxVQUFVQyxZQUFZQztZQUFVOzs7V0EzQmhLZDtFQUE0QmUsaUJBQVkifQ==