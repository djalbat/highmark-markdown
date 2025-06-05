"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndexListHTMLNode;
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
var IndexListHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(IndexListHTMLNode, HTMLNode);
    function IndexListHTMLNode() {
        _class_call_check(this, IndexListHTMLNode);
        return _call_super(this, IndexListHTMLNode, arguments);
    }
    _create_class(IndexListHTMLNode, [
        {
            key: "getRuleName",
            value: function getRuleName() {
                var ruleName = _markdown.INDEX_LIST_MARKDOWN_RULE_NAME;
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
            key: "fromIndexItemHTMLTransforms",
            value: function fromIndexItemHTMLTransforms(indexItemHTMLTransforms) {
                var indexItemHTMLNodes = indexItemHTMLTransforms.map(function(indexItemHTMLTransform) {
                    var indexListHTMLNode = indexItemHTMLTransform.getIndexItemHTMLNode();
                    return indexListHTMLNode;
                }), childHTMLNodes = indexItemHTMLNodes, indexListHTMLNode = _html.default.fromChildHTMLNodes(IndexListHTMLNode, childHTMLNodes);
                return indexListHTMLNode;
            }
        }
    ]);
    return IndexListHTMLNode;
}(_html.default);
_define_property(IndexListHTMLNode, "tagName", "ul");
_define_property(IndexListHTMLNode, "className", "index");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvbGlzdC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi8uLi9ub2RlL2h0bWxcIjtcblxuaW1wb3J0IHsgSU5ERVhfTElTVF9NQVJLRE9XTl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vLi4vcnVsZU5hbWVzL21hcmtkb3duXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4TGlzdEhUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICBnZXRSdWxlTmFtZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IElOREVYX0xJU1RfTUFSS0RPV05fUlVMRV9OQU1FO1xuXG4gICAgcmV0dXJuIHJ1bGVOYW1lO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgc3RyaW5nID0gcnVsZU5hbWU7ICAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwidWxcIjtcblxuICBzdGF0aWMgY2xhc3NOYW1lID0gXCJpbmRleFwiO1xuXG4gIHN0YXRpYyBmcm9tSW5kZXhJdGVtSFRNTFRyYW5zZm9ybXMoaW5kZXhJdGVtSFRNTFRyYW5zZm9ybXMpIHtcbiAgICBjb25zdCBpbmRleEl0ZW1IVE1MTm9kZXMgPSBpbmRleEl0ZW1IVE1MVHJhbnNmb3Jtcy5tYXAoKGluZGV4SXRlbUhUTUxUcmFuc2Zvcm0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4TGlzdEhUTUxOb2RlID0gaW5kZXhJdGVtSFRNTFRyYW5zZm9ybS5nZXRJbmRleEl0ZW1IVE1MTm9kZSgpO1xuXG4gICAgICAgICAgICByZXR1cm4gaW5kZXhMaXN0SFRNTE5vZGU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2hpbGRIVE1MTm9kZXMgPSBpbmRleEl0ZW1IVE1MTm9kZXMsXG4gICAgICAgICAgaW5kZXhMaXN0SFRNTE5vZGUgPSBIVE1MTm9kZS5mcm9tQ2hpbGRIVE1MTm9kZXMoSW5kZXhMaXN0SFRNTE5vZGUsIGNoaWxkSFRNTE5vZGVzKTtcblxuICAgIHJldHVybiBpbmRleExpc3RIVE1MTm9kZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkluZGV4TGlzdEhUTUxOb2RlIiwiZ2V0UnVsZU5hbWUiLCJydWxlTmFtZSIsIklOREVYX0xJU1RfTUFSS0RPV05fUlVMRV9OQU1FIiwiYXNTdHJpbmciLCJzdHJpbmciLCJmcm9tSW5kZXhJdGVtSFRNTFRyYW5zZm9ybXMiLCJpbmRleEl0ZW1IVE1MVHJhbnNmb3JtcyIsImluZGV4SXRlbUhUTUxOb2RlcyIsIm1hcCIsImluZGV4SXRlbUhUTUxUcmFuc2Zvcm0iLCJpbmRleExpc3RIVE1MTm9kZSIsImdldEluZGV4SXRlbUhUTUxOb2RlIiwiY2hpbGRIVE1MTm9kZXMiLCJIVE1MTm9kZSIsImZyb21DaGlsZEhUTUxOb2RlcyIsInRhZ05hbWUiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7OzJEQUpBO3dCQUV5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0IsSUFBQSxBQUFNQSxrQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVdDLHVDQUE2QjtnQkFFOUMsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNRixXQUFXLElBQUksQ0FBQ0QsV0FBVyxJQUMzQkksU0FBU0gsVUFBVyxHQUFHO2dCQUU3QixPQUFPRztZQUNUOzs7O1lBTU9DLEtBQUFBO21CQUFQLFNBQU9BLDRCQUE0QkMsdUJBQXVCO2dCQUN4RCxJQUFNQyxxQkFBcUJELHdCQUF3QkUsR0FBRyxDQUFDLFNBQUNDO29CQUNoRCxJQUFNQyxvQkFBb0JELHVCQUF1QkUsb0JBQW9CO29CQUVyRSxPQUFPRDtnQkFDVCxJQUNBRSxpQkFBaUJMLG9CQUNqQkcsb0JBQW9CRyxhQUFRLENBQUNDLGtCQUFrQixDQXpCcENmLG1CQXlCd0RhO2dCQUV6RSxPQUFPRjtZQUNUOzs7V0E1Qm1CWDtFQUEwQmMsYUFBUTtBQWNyRCxpQkFkbUJkLG1CQWNaZ0IsV0FBVTtBQUVqQixpQkFoQm1CaEIsbUJBZ0JaaUIsYUFBWSJ9