"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FootnoteSubDivisionReplacement;
    }
});
var _subDivision = /*#__PURE__*/ _interop_require_default(require("../subDivision"));
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
var FootnoteSubDivisionReplacement = /*#__PURE__*/ function(SubDivisionReplacement) {
    _inherits(FootnoteSubDivisionReplacement, SubDivisionReplacement);
    function FootnoteSubDivisionReplacement() {
        _class_call_check(this, FootnoteSubDivisionReplacement);
        return _call_super(this, FootnoteSubDivisionReplacement, arguments);
    }
    _create_class(FootnoteSubDivisionReplacement, [
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
                var footnoteSubDivisionReplacement = null;
                var node = subDivisionMarkdownNode, footnoteMarkdownNode = (0, _query.footnoteMarkdownNodeFromNode)(node);
                if (footnoteMarkdownNode !== null) {
                    footnoteSubDivisionReplacement = _subDivision.default.fromSubDivisionMarkdownNode(FootnoteSubDivisionReplacement, subDivisionMarkdownNode, context);
                }
                return footnoteSubDivisionReplacement;
            }
        }
    ]);
    return FootnoteSubDivisionReplacement;
}(_subDivision.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vc3ViRGl2aXNpb24vZm9vdG5vdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdWJEaXZpc2lvblJlcGxhY2VtZW50IGZyb20gXCIuLi9zdWJEaXZpc2lvblwiO1xuXG5pbXBvcnQgeyBmb290bm90ZU1hcmtkb3duTm9kZUZyb21Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgZXh0ZW5kcyBTdWJEaXZpc2lvblJlcGxhY2VtZW50IHtcbiAgaWRlbnRpZmllcihjb250ZXh0KSB7XG4gICAgY29uc3Qgc3ViRGl2aXNpb25NYXJrZG93bk5vZGUgPSB0aGlzLmdldFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKCksXG4gICAgICAgICAgbm9kZSA9IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCAvLy9cbiAgICAgICAgICBmb290bm90ZU1hcmtkb3duTm9kZSA9IGZvb3Rub3RlTWFya2Rvd25Ob2RlRnJvbU5vZGUobm9kZSksXG4gICAgICAgICAgaWRlbnRpZmllciA9IGZvb3Rub3RlTWFya2Rvd25Ob2RlLmlkZW50aWZpZXIoY29udGV4dCk7XG5cbiAgICByZXR1cm4gaWRlbnRpZmllcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgZm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IG5vZGUgPSBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgLy8vXG4gICAgICAgICAgZm9vdG5vdGVNYXJrZG93bk5vZGUgPSBmb290bm90ZU1hcmtkb3duTm9kZUZyb21Ob2RlKG5vZGUpO1xuXG4gICAgaWYgKGZvb3Rub3RlTWFya2Rvd25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBmb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgPSBTdWJEaXZpc2lvblJlcGxhY2VtZW50LmZyb21TdWJEaXZpc2lvbk1hcmtkb3duTm9kZShGb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQsIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50O1xuICB9XG59XG4iXSwibmFtZXMiOlsiRm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50IiwiaWRlbnRpZmllciIsImNvbnRleHQiLCJzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImdldFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwibm9kZSIsImZvb3Rub3RlTWFya2Rvd25Ob2RlIiwiZm9vdG5vdGVNYXJrZG93bk5vZGVGcm9tTm9kZSIsImZyb21TdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudCIsIlN1YkRpdmlzaW9uUmVwbGFjZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O2tFQUpjO3FCQUVVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlCLElBQUEsQUFBTUEsK0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV0MsT0FBTztnQkFDaEIsSUFBTUMsMEJBQTBCLElBQUksQ0FBQ0MsMEJBQTBCLElBQ3pEQyxPQUFPRix5QkFDUEcsdUJBQXVCQyxJQUFBQSxtQ0FBNEIsRUFBQ0YsT0FDcERKLGFBQWFLLHFCQUFxQkwsVUFBVSxDQUFDQztnQkFFbkQsT0FBT0Q7WUFDVDs7OztZQUVPTyxLQUFBQTttQkFBUCxTQUFPQSw0QkFBNEJMLHVCQUF1QixFQUFFRCxPQUFPO2dCQUNqRSxJQUFJTyxpQ0FBaUM7Z0JBRXJDLElBQU1KLE9BQU9GLHlCQUNQRyx1QkFBdUJDLElBQUFBLG1DQUE0QixFQUFDRjtnQkFFMUQsSUFBSUMseUJBQXlCLE1BQU07b0JBQ2pDRyxpQ0FBaUNDLG9CQUFzQixDQUFDRiwyQkFBMkIsQ0FqQnBFUixnQ0FpQnFHRyx5QkFBeUJEO2dCQUMvSTtnQkFFQSxPQUFPTztZQUNUOzs7V0FyQm1CVDtFQUF1Q1Usb0JBQXNCIn0=