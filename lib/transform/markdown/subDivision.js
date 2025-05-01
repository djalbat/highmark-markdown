"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SubdivisionMarkdownTransform;
    }
});
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../transform/markdown"));
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
var SubdivisionMarkdownTransform = /*#__PURE__*/ function(MarkdownTransform) {
    _inherits(SubdivisionMarkdownTransform, MarkdownTransform);
    function SubdivisionMarkdownTransform() {
        _class_call_check(this, SubdivisionMarkdownTransform);
        return _call_super(this, SubdivisionMarkdownTransform, arguments);
    }
    _create_class(SubdivisionMarkdownTransform, null, [
        {
            key: "fromSubDivisionMarkdownNode",
            value: function fromSubDivisionMarkdownNode(subDivisionMarkdownNode) {
                var node = subDivisionMarkdownNode, tokens = null, embedDirectiveMarkdownTransform = _markdown.default.fromNodeAndTokens(SubdivisionMarkdownTransform, node, tokens);
                return embedDirectiveMarkdownTransform;
            }
        }
    ]);
    return SubdivisionMarkdownTransform;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2Zvcm0vbWFya2Rvd24vc3ViRGl2aXNpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXJrZG93blRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL21hcmtkb3duXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1YmRpdmlzaW9uTWFya2Rvd25UcmFuc2Zvcm0gZXh0ZW5kcyBNYXJrZG93blRyYW5zZm9ybSB7XG4gIHN0YXRpYyBmcm9tU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoc3ViRGl2aXNpb25NYXJrZG93bk5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsICAvLy9cbiAgICAgICAgICB0b2tlbnMgPSBudWxsLFxuICAgICAgICAgIGVtYmVkRGlyZWN0aXZlTWFya2Rvd25UcmFuc2Zvcm0gPSBNYXJrZG93blRyYW5zZm9ybS5mcm9tTm9kZUFuZFRva2VucyhTdWJkaXZpc2lvbk1hcmtkb3duVHJhbnNmb3JtLCBub2RlLCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIGVtYmVkRGlyZWN0aXZlTWFya2Rvd25UcmFuc2Zvcm07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJTdWJkaXZpc2lvbk1hcmtkb3duVHJhbnNmb3JtIiwiZnJvbVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJub2RlIiwidG9rZW5zIiwiZW1iZWREaXJlY3RpdmVNYXJrZG93blRyYW5zZm9ybSIsIk1hcmtkb3duVHJhbnNmb3JtIiwiZnJvbU5vZGVBbmRUb2tlbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OytEQUZTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWYsSUFBQSxBQUFNQSw2Q0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDWkMsS0FBQUE7bUJBQVAsU0FBT0EsNEJBQTRCQyx1QkFBdUI7Z0JBQ3hELElBQU1DLE9BQU9ELHlCQUNQRSxTQUFTLE1BQ1RDLGtDQUFrQ0MsaUJBQWlCLENBQUNDLGlCQUFpQixDQUoxRFAsOEJBSXlGRyxNQUFNQztnQkFFaEgsT0FBT0M7WUFDVDs7O1dBUG1CTDtFQUFxQ00saUJBQWlCIn0=