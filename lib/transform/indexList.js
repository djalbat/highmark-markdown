"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndexListReplacement;
    }
});
var _ = /*#__PURE__*/ _interop_require_default(require("./"));
var _indexItem = /*#__PURE__*/ _interop_require_default(require(".//indexItem"));
var _indexList = /*#__PURE__*/ _interop_require_default(require("../node/markdown/indexList"));
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
var IndexListReplacement = /*#__PURE__*/ function(Replacement) {
    _inherits(IndexListReplacement, Replacement);
    function IndexListReplacement() {
        _class_call_check(this, IndexListReplacement);
        return _call_super(this, IndexListReplacement, arguments);
    }
    _create_class(IndexListReplacement, null, [
        {
            key: "fromIndexListAndLetter",
            value: function fromIndexListAndLetter(indexList, letter, context) {
                var indexListReplacement = null;
                var indexItemReplacements = indexList.reduceIndexItemByLetter(letter, function(indexItem) {
                    var indexItemReplacement = _indexItem.default.fromIndexItem(indexItem, context);
                    return indexItemReplacement;
                }), indexItemReplacementsLength = indexItemReplacements.length;
                if (indexItemReplacementsLength > 0) {
                    var indexListMarkdownNode = _indexList.default.fromIndexItemReplacements(indexItemReplacements), node = indexListMarkdownNode, tokens = [];
                    indexItemReplacements.forEach(function(indexItemReplacement) {
                        indexItemReplacement.getTokens(tokens);
                    });
                    indexListReplacement = _.default.fromNodeAndTokens(IndexListReplacement, node, tokens);
                }
                return indexListReplacement;
            }
        }
    ]);
    return IndexListReplacement;
}(_.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vaW5kZXhMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVwbGFjZW1lbnQgZnJvbSBcIi4vXCI7XG5pbXBvcnQgSW5kZXhJdGVtUmVwbGFjZW1lbnQgZnJvbSBcIi4vL2luZGV4SXRlbVwiO1xuaW1wb3J0IEluZGV4TGlzdE1hcmtkb3duTm9kZSBmcm9tIFwiLi4vbm9kZS9tYXJrZG93bi9pbmRleExpc3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXhMaXN0UmVwbGFjZW1lbnQgZXh0ZW5kcyBSZXBsYWNlbWVudCB7XG4gIHN0YXRpYyBmcm9tSW5kZXhMaXN0QW5kTGV0dGVyKGluZGV4TGlzdCwgbGV0dGVyLCBjb250ZXh0KSB7XG4gICAgbGV0IGluZGV4TGlzdFJlcGxhY2VtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IGluZGV4SXRlbVJlcGxhY2VtZW50cyA9IGluZGV4TGlzdC5yZWR1Y2VJbmRleEl0ZW1CeUxldHRlcihsZXR0ZXIsIChpbmRleEl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4SXRlbVJlcGxhY2VtZW50ID0gSW5kZXhJdGVtUmVwbGFjZW1lbnQuZnJvbUluZGV4SXRlbShpbmRleEl0ZW0sIGNvbnRleHQpO1xuXG4gICAgICAgICAgICByZXR1cm4gaW5kZXhJdGVtUmVwbGFjZW1lbnQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgaW5kZXhJdGVtUmVwbGFjZW1lbnRzTGVuZ3RoID0gaW5kZXhJdGVtUmVwbGFjZW1lbnRzLmxlbmd0aDtcblxuICAgIGlmIChpbmRleEl0ZW1SZXBsYWNlbWVudHNMZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBpbmRleExpc3RNYXJrZG93bk5vZGUgPSBJbmRleExpc3RNYXJrZG93bk5vZGUuZnJvbUluZGV4SXRlbVJlcGxhY2VtZW50cyhpbmRleEl0ZW1SZXBsYWNlbWVudHMpLFxuICAgICAgICAgICAgbm9kZSA9IGluZGV4TGlzdE1hcmtkb3duTm9kZSwgLy8vXG4gICAgICAgICAgICB0b2tlbnMgPSBbXTtcblxuICAgICAgaW5kZXhJdGVtUmVwbGFjZW1lbnRzLmZvckVhY2goKGluZGV4SXRlbVJlcGxhY2VtZW50KSA9PiB7XG4gICAgICAgIGluZGV4SXRlbVJlcGxhY2VtZW50LmdldFRva2Vucyh0b2tlbnMpO1xuICAgICAgfSk7XG5cbiAgICAgIGluZGV4TGlzdFJlcGxhY2VtZW50ID0gUmVwbGFjZW1lbnQuZnJvbU5vZGVBbmRUb2tlbnMoSW5kZXhMaXN0UmVwbGFjZW1lbnQsIG5vZGUsIHRva2Vucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZGV4TGlzdFJlcGxhY2VtZW50O1xuICB9XG59XG4iXSwibmFtZXMiOlsiSW5kZXhMaXN0UmVwbGFjZW1lbnQiLCJmcm9tSW5kZXhMaXN0QW5kTGV0dGVyIiwiaW5kZXhMaXN0IiwibGV0dGVyIiwiY29udGV4dCIsImluZGV4TGlzdFJlcGxhY2VtZW50IiwiaW5kZXhJdGVtUmVwbGFjZW1lbnRzIiwicmVkdWNlSW5kZXhJdGVtQnlMZXR0ZXIiLCJpbmRleEl0ZW0iLCJpbmRleEl0ZW1SZXBsYWNlbWVudCIsIkluZGV4SXRlbVJlcGxhY2VtZW50IiwiZnJvbUluZGV4SXRlbSIsImluZGV4SXRlbVJlcGxhY2VtZW50c0xlbmd0aCIsImxlbmd0aCIsImluZGV4TGlzdE1hcmtkb3duTm9kZSIsIkluZGV4TGlzdE1hcmtkb3duTm9kZSIsImZyb21JbmRleEl0ZW1SZXBsYWNlbWVudHMiLCJub2RlIiwidG9rZW5zIiwiZm9yRWFjaCIsImdldFRva2VucyIsIlJlcGxhY2VtZW50IiwiZnJvbU5vZGVBbmRUb2tlbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O3VEQUpHO2dFQUNTO2dFQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5CLElBQUEsQUFBTUEscUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ1pDLEtBQUFBO21CQUFQLFNBQU9BLHVCQUF1QkMsU0FBUyxFQUFFQyxNQUFNLEVBQUVDLE9BQU87Z0JBQ3RELElBQUlDLHVCQUF1QjtnQkFFM0IsSUFBTUMsd0JBQXdCSixVQUFVSyx1QkFBdUIsQ0FBQ0osUUFBUSxTQUFDSztvQkFDakUsSUFBTUMsdUJBQXVCQyxrQkFBb0IsQ0FBQ0MsYUFBYSxDQUFDSCxXQUFXSjtvQkFFM0UsT0FBT0s7Z0JBQ1QsSUFDQUcsOEJBQThCTixzQkFBc0JPLE1BQU07Z0JBRWhFLElBQUlELDhCQUE4QixHQUFHO29CQUNuQyxJQUFNRSx3QkFBd0JDLGtCQUFxQixDQUFDQyx5QkFBeUIsQ0FBQ1Ysd0JBQ3hFVyxPQUFPSCx1QkFDUEksU0FBUyxFQUFFO29CQUVqQlosc0JBQXNCYSxPQUFPLENBQUMsU0FBQ1Y7d0JBQzdCQSxxQkFBcUJXLFNBQVMsQ0FBQ0Y7b0JBQ2pDO29CQUVBYix1QkFBdUJnQixTQUFXLENBQUNDLGlCQUFpQixDQXBCckN0QixzQkFvQjREaUIsTUFBTUM7Z0JBQ25GO2dCQUVBLE9BQU9iO1lBQ1Q7OztXQXhCbUJMO0VBQTZCcUIsU0FBVyJ9