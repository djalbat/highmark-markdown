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
var _subDivision = /*#__PURE__*/ _interop_require_default(require("../../replacement/subDivision"));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZXBsYWNlbWVudC9zdWJEaXZpc2lvbi9mb290bm90ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgZnJvbSBcIi4uLy4uL3JlcGxhY2VtZW50L3N1YkRpdmlzaW9uXCI7XG5cbmltcG9ydCB7IGZvb3Rub3RlTWFya2Rvd25Ob2RlRnJvbU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudCBleHRlbmRzIFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQge1xuICBpZGVudGlmaWVyKGNvbnRleHQpIHtcbiAgICBjb25zdCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSA9IHRoaXMuZ2V0U3ViRGl2aXNpb25NYXJrZG93bk5vZGUoKSxcbiAgICAgICAgICBub2RlID0gc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIC8vL1xuICAgICAgICAgIGZvb3Rub3RlTWFya2Rvd25Ob2RlID0gZm9vdG5vdGVNYXJrZG93bk5vZGVGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBpZGVudGlmaWVyID0gZm9vdG5vdGVNYXJrZG93bk5vZGUuaWRlbnRpZmllcihjb250ZXh0KTtcblxuICAgIHJldHVybiBpZGVudGlmaWVyO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdWJEaXZpc2lvbk1hcmtkb3duTm9kZShzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBmb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3Qgbm9kZSA9IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlLCAvLy9cbiAgICAgICAgICBmb290bm90ZU1hcmtkb3duTm9kZSA9IGZvb3Rub3RlTWFya2Rvd25Ob2RlRnJvbU5vZGUobm9kZSk7XG5cbiAgICBpZiAoZm9vdG5vdGVNYXJrZG93bk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudCA9IFN1YkRpdmlzaW9uUmVwbGFjZW1lbnQuZnJvbVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKEZvb3Rub3RlU3ViRGl2aXNpb25SZXBsYWNlbWVudCwgc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBmb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJGb290bm90ZVN1YkRpdmlzaW9uUmVwbGFjZW1lbnQiLCJpZGVudGlmaWVyIiwiY29udGV4dCIsInN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZ2V0U3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJub2RlIiwiZm9vdG5vdGVNYXJrZG93bk5vZGUiLCJmb290bm90ZU1hcmtkb3duTm9kZUZyb21Ob2RlIiwiZnJvbVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZm9vdG5vdGVTdWJEaXZpc2lvblJlcGxhY2VtZW50IiwiU3ViRGl2aXNpb25SZXBsYWNlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7a0VBSmM7cUJBRVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUIsSUFBQSxBQUFNQSwrQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXQyxPQUFPO2dCQUNoQixJQUFNQywwQkFBMEIsSUFBSSxDQUFDQywwQkFBMEIsSUFDekRDLE9BQU9GLHlCQUNQRyx1QkFBdUJDLElBQUFBLG1DQUE0QixFQUFDRixPQUNwREosYUFBYUsscUJBQXFCTCxVQUFVLENBQUNDO2dCQUVuRCxPQUFPRDtZQUNUOzs7O1lBRU9PLEtBQUFBO21CQUFQLFNBQU9BLDRCQUE0QkwsdUJBQXVCLEVBQUVELE9BQU87Z0JBQ2pFLElBQUlPLGlDQUFpQztnQkFFckMsSUFBTUosT0FBT0YseUJBQ1BHLHVCQUF1QkMsSUFBQUEsbUNBQTRCLEVBQUNGO2dCQUUxRCxJQUFJQyx5QkFBeUIsTUFBTTtvQkFDakNHLGlDQUFpQ0Msb0JBQXNCLENBQUNGLDJCQUEyQixDQWpCcEVSLGdDQWlCcUdHLHlCQUF5QkQ7Z0JBQy9JO2dCQUVBLE9BQU9PO1lBQ1Q7OztXQXJCbUJUO0VBQXVDVSxvQkFBc0IifQ==