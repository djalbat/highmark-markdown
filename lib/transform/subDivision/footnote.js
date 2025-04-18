"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FootnoteSubDivisionTransform;
    }
});
var _subDivision = /*#__PURE__*/ _interop_require_default(require("../../transform/subDivision"));
var _query = require("../../utilities/query");
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
var FootnoteSubDivisionTransform = /*#__PURE__*/ function(SubDivisionTransform) {
    _inherits(FootnoteSubDivisionTransform, SubDivisionTransform);
    function FootnoteSubDivisionTransform() {
        _class_call_check(this, FootnoteSubDivisionTransform);
        return _call_super(this, FootnoteSubDivisionTransform, arguments);
    }
    _create_class(FootnoteSubDivisionTransform, [
        {
            key: "identifier",
            value: function identifier(context) {
                var subDivisionMarkdownNode = this.getSubDivisionMarkdownNode(), node = subDivisionMarkdownNode, footnoteMarkdownNode = (0, _query.footnoteMarkdownNodeFromNode)(node), identifier = footnoteMarkdownNode.identifier(context);
                return identifier;
            }
        }
    ], [
        {
            key: "fromSubDivisionMarkdownNode",
            value: function fromSubDivisionMarkdownNode(subDivisionMarkdownNode, context) {
                var footnoteSubDivisionTransform = null;
                var node = subDivisionMarkdownNode, footnoteMarkdownNode = (0, _query.footnoteMarkdownNodeFromNode)(node);
                if (footnoteMarkdownNode !== null) {
                    footnoteSubDivisionTransform = _subDivision.default.fromSubDivisionMarkdownNode(FootnoteSubDivisionTransform, subDivisionMarkdownNode, context);
                }
                return footnoteSubDivisionTransform;
            }
        }
    ]);
    return FootnoteSubDivisionTransform;
}(_subDivision.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vc3ViRGl2aXNpb24vZm9vdG5vdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdWJEaXZpc2lvblRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL3N1YkRpdmlzaW9uXCI7XG5cbmltcG9ydCB7IGZvb3Rub3RlTWFya2Rvd25Ob2RlRnJvbU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3Rub3RlU3ViRGl2aXNpb25UcmFuc2Zvcm0gZXh0ZW5kcyBTdWJEaXZpc2lvblRyYW5zZm9ybSB7XG4gIGlkZW50aWZpZXIoY29udGV4dCkge1xuICAgIGNvbnN0IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcy5nZXRTdWJEaXZpc2lvbk1hcmtkb3duTm9kZSgpLFxuICAgICAgICAgIG5vZGUgPSBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgLy8vXG4gICAgICAgICAgZm9vdG5vdGVNYXJrZG93bk5vZGUgPSBmb290bm90ZU1hcmtkb3duTm9kZUZyb21Ob2RlKG5vZGUpLFxuICAgICAgICAgIGlkZW50aWZpZXIgPSBmb290bm90ZU1hcmtkb3duTm9kZS5pZGVudGlmaWVyKGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGlkZW50aWZpZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGZvb3Rub3RlU3ViRGl2aXNpb25UcmFuc2Zvcm0gPSBudWxsO1xuXG4gICAgY29uc3Qgbm9kZSA9IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCAvLy9cbiAgICAgICAgICBmb290bm90ZU1hcmtkb3duTm9kZSA9IGZvb3Rub3RlTWFya2Rvd25Ob2RlRnJvbU5vZGUobm9kZSk7XG5cbiAgICBpZiAoZm9vdG5vdGVNYXJrZG93bk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGZvb3Rub3RlU3ViRGl2aXNpb25UcmFuc2Zvcm0gPSBTdWJEaXZpc2lvblRyYW5zZm9ybS5mcm9tU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoRm9vdG5vdGVTdWJEaXZpc2lvblRyYW5zZm9ybSwgc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBmb290bm90ZVN1YkRpdmlzaW9uVHJhbnNmb3JtO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRm9vdG5vdGVTdWJEaXZpc2lvblRyYW5zZm9ybSIsImlkZW50aWZpZXIiLCJjb250ZXh0Iiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJnZXRTdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsIm5vZGUiLCJmb290bm90ZU1hcmtkb3duTm9kZSIsImZvb3Rub3RlTWFya2Rvd25Ob2RlRnJvbU5vZGUiLCJmcm9tU3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJmb290bm90ZVN1YkRpdmlzaW9uVHJhbnNmb3JtIiwiU3ViRGl2aXNpb25UcmFuc2Zvcm0iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O2tFQUpZO3FCQUVZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlCLElBQUEsQUFBTUEsNkNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV0MsT0FBTztnQkFDaEIsSUFBTUMsMEJBQTBCLElBQUksQ0FBQ0MsMEJBQTBCLElBQ3pEQyxPQUFPRix5QkFDUEcsdUJBQXVCQyxJQUFBQSxtQ0FBNEIsRUFBQ0YsT0FDcERKLGFBQWFLLHFCQUFxQkwsVUFBVSxDQUFDQztnQkFFbkQsT0FBT0Q7WUFDVDs7OztZQUVPTyxLQUFBQTttQkFBUCxTQUFPQSw0QkFBNEJMLHVCQUF1QixFQUFFRCxPQUFPO2dCQUNqRSxJQUFJTywrQkFBK0I7Z0JBRW5DLElBQU1KLE9BQU9GLHlCQUNQRyx1QkFBdUJDLElBQUFBLG1DQUE0QixFQUFDRjtnQkFFMUQsSUFBSUMseUJBQXlCLE1BQU07b0JBQ2pDRywrQkFBK0JDLG9CQUFvQixDQUFDRiwyQkFBMkIsQ0FqQmhFUiw4QkFpQitGRyx5QkFBeUJEO2dCQUN6STtnQkFFQSxPQUFPTztZQUNUOzs7V0FyQm1CVDtFQUFxQ1Usb0JBQW9CIn0=