"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ContentsListHTMLNode;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../../node/html"));
var _markdown = require("../../../ruleNames/markdown");
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
var ContentsListHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(ContentsListHTMLNode, HTMLNode);
    function ContentsListHTMLNode() {
        _class_call_check(this, ContentsListHTMLNode);
        return _call_super(this, ContentsListHTMLNode, arguments);
    }
    _create_class(ContentsListHTMLNode, [
        {
            key: "getRuleName",
            value: function getRuleName() {
                var ruleName = _markdown.CONTENTS_LIST_MARKDOWN_RULE_NAME;
                return ruleName;
            }
        },
        {
            key: "asString",
            value: function asString() {
                var ruleName = this.getRuleName(), string = ruleName; ///
                return string;
            }
        }
    ], [
        {
            key: "fromContentsItemHTMLTransforms",
            value: function fromContentsItemHTMLTransforms(contentsItemHTMLTransforms) {
                var contentsItemHTMLNodes = contentsItemHTMLTransforms.map(function(contentsItemHTMLTransform) {
                    var contentsItemHTMLNode = contentsItemHTMLTransform.getContentsItemHTMLNode();
                    return contentsItemHTMLNode;
                }), childNodes = contentsItemHTMLNodes, contentsListHTMLNode = _html.default.fromChildNodes(ContentsListHTMLNode, childNodes);
                return contentsListHTMLNode;
            }
        }
    ]);
    return ContentsListHTMLNode;
}(_html.default);
_define_property(ContentsListHTMLNode, "tagName", "ul");
_define_property(ContentsListHTMLNode, "className", "contents");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGlzdC9jb250ZW50cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcblxuaW1wb3J0IHsgQ09OVEVOVFNfTElTVF9NQVJLRE9XTl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vLi4vcnVsZU5hbWVzL21hcmtkb3duXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnRzTGlzdEhUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICBnZXRSdWxlTmFtZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IENPTlRFTlRTX0xJU1RfTUFSS0RPV05fUlVMRV9OQU1FO1xuXG4gICAgcmV0dXJuIHJ1bGVOYW1lO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgc3RyaW5nID0gcnVsZU5hbWU7ICAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwidWxcIjtcblxuICBzdGF0aWMgY2xhc3NOYW1lID0gXCJjb250ZW50c1wiO1xuXG4gIHN0YXRpYyBmcm9tQ29udGVudHNJdGVtSFRNTFRyYW5zZm9ybXMoY29udGVudHNJdGVtSFRNTFRyYW5zZm9ybXMpIHtcbiAgICBjb25zdCBjb250ZW50c0l0ZW1IVE1MTm9kZXMgPSBjb250ZW50c0l0ZW1IVE1MVHJhbnNmb3Jtcy5tYXAoKGNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm0pID0+IHtcbiAgICAgICAgICBjb25zdCBjb250ZW50c0l0ZW1IVE1MTm9kZSA9IGNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm0uZ2V0Q29udGVudHNJdGVtSFRNTE5vZGUoKTtcblxuICAgICAgICAgIHJldHVybiBjb250ZW50c0l0ZW1IVE1MTm9kZTtcbiAgICAgICAgfSksXG4gICAgICAgIGNoaWxkTm9kZXMgPSBjb250ZW50c0l0ZW1IVE1MTm9kZXMsIC8vL1xuICAgICAgICBjb250ZW50c0xpc3RIVE1MTm9kZSA9IEhUTUxOb2RlLmZyb21DaGlsZE5vZGVzKENvbnRlbnRzTGlzdEhUTUxOb2RlLCBjaGlsZE5vZGVzKTtcblxuICAgIHJldHVybiBjb250ZW50c0xpc3RIVE1MTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbnRlbnRzTGlzdEhUTUxOb2RlIiwiZ2V0UnVsZU5hbWUiLCJydWxlTmFtZSIsIkNPTlRFTlRTX0xJU1RfTUFSS0RPV05fUlVMRV9OQU1FIiwiYXNTdHJpbmciLCJzdHJpbmciLCJmcm9tQ29udGVudHNJdGVtSFRNTFRyYW5zZm9ybXMiLCJjb250ZW50c0l0ZW1IVE1MVHJhbnNmb3JtcyIsImNvbnRlbnRzSXRlbUhUTUxOb2RlcyIsIm1hcCIsImNvbnRlbnRzSXRlbUhUTUxUcmFuc2Zvcm0iLCJjb250ZW50c0l0ZW1IVE1MTm9kZSIsImdldENvbnRlbnRzSXRlbUhUTUxOb2RlIiwiY2hpbGROb2RlcyIsImNvbnRlbnRzTGlzdEhUTUxOb2RlIiwiSFRNTE5vZGUiLCJmcm9tQ2hpbGROb2RlcyIsInRhZ05hbWUiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7OzJEQUpBO3dCQUU0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEMsSUFBQSxBQUFNQSxxQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFXQywwQ0FBZ0M7Z0JBRWpELE9BQU9EO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUYsV0FBVyxJQUFJLENBQUNELFdBQVcsSUFDM0JJLFNBQVNILFVBQVcsR0FBRztnQkFFN0IsT0FBT0c7WUFDVDs7OztZQU1PQyxLQUFBQTttQkFBUCxTQUFPQSwrQkFBK0JDLDBCQUEwQjtnQkFDOUQsSUFBTUMsd0JBQXdCRCwyQkFBMkJFLEdBQUcsQ0FBQyxTQUFDQztvQkFDeEQsSUFBTUMsdUJBQXVCRCwwQkFBMEJFLHVCQUF1QjtvQkFFOUUsT0FBT0Q7Z0JBQ1QsSUFDQUUsYUFBYUwsdUJBQ2JNLHVCQUF1QkMsYUFBUSxDQUFDQyxjQUFjLENBekJqQ2hCLHNCQXlCd0RhO2dCQUV6RSxPQUFPQztZQUNUOzs7V0E1Qm1CZDtFQUE2QmUsYUFBUTtBQWN4RCxpQkFkbUJmLHNCQWNaaUIsV0FBVTtBQUVqQixpQkFoQm1CakIsc0JBZ0Jaa0IsYUFBWSJ9