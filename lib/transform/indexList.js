"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndexListTransform;
    }
});
var _transform = /*#__PURE__*/ _interop_require_default(require("../transform"));
var _indexItem = /*#__PURE__*/ _interop_require_default(require("../transform/indexItem"));
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
var IndexListTransform = /*#__PURE__*/ function(Transform) {
    _inherits(IndexListTransform, Transform);
    function IndexListTransform() {
        _class_call_check(this, IndexListTransform);
        return _call_super(this, IndexListTransform, arguments);
    }
    _create_class(IndexListTransform, null, [
        {
            key: "fromIndexListAndLetter",
            value: function fromIndexListAndLetter(indexList, letter, context) {
                var indexListTransform = null;
                var indexItemTransforms = indexList.reduceIndexItemByLetter(letter, function(indexItem) {
                    var indexItemTransform = _indexItem.default.fromIndexItem(indexItem, context);
                    return indexItemTransform;
                }), indexItemTransformsLength = indexItemTransforms.length;
                if (indexItemTransformsLength > 0) {
                    var indexListMarkdownNode = _indexList.default.fromIndexItemTransforms(indexItemTransforms), node = indexListMarkdownNode, tokens = [];
                    indexItemTransforms.forEach(function(indexItemTransform) {
                        indexItemTransform.getTokens(tokens);
                    });
                    indexListTransform = _transform.default.fromNodeAndTokens(IndexListTransform, node, tokens);
                }
                return indexListTransform;
            }
        }
    ]);
    return IndexListTransform;
}(_transform.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vaW5kZXhMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVHJhbnNmb3JtIGZyb20gXCIuLi90cmFuc2Zvcm1cIjtcbmltcG9ydCBJbmRleEl0ZW1UcmFuc2Zvcm0gZnJvbSBcIi4uL3RyYW5zZm9ybS9pbmRleEl0ZW1cIjtcbmltcG9ydCBJbmRleExpc3RNYXJrZG93bk5vZGUgZnJvbSBcIi4uL25vZGUvbWFya2Rvd24vaW5kZXhMaXN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4TGlzdFRyYW5zZm9ybSBleHRlbmRzIFRyYW5zZm9ybSB7XG4gIHN0YXRpYyBmcm9tSW5kZXhMaXN0QW5kTGV0dGVyKGluZGV4TGlzdCwgbGV0dGVyLCBjb250ZXh0KSB7XG4gICAgbGV0IGluZGV4TGlzdFRyYW5zZm9ybSA9IG51bGw7XG5cbiAgICBjb25zdCBpbmRleEl0ZW1UcmFuc2Zvcm1zID0gaW5kZXhMaXN0LnJlZHVjZUluZGV4SXRlbUJ5TGV0dGVyKGxldHRlciwgKGluZGV4SXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5kZXhJdGVtVHJhbnNmb3JtID0gSW5kZXhJdGVtVHJhbnNmb3JtLmZyb21JbmRleEl0ZW0oaW5kZXhJdGVtLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgcmV0dXJuIGluZGV4SXRlbVRyYW5zZm9ybTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBpbmRleEl0ZW1UcmFuc2Zvcm1zTGVuZ3RoID0gaW5kZXhJdGVtVHJhbnNmb3Jtcy5sZW5ndGg7XG5cbiAgICBpZiAoaW5kZXhJdGVtVHJhbnNmb3Jtc0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGluZGV4TGlzdE1hcmtkb3duTm9kZSA9IEluZGV4TGlzdE1hcmtkb3duTm9kZS5mcm9tSW5kZXhJdGVtVHJhbnNmb3JtcyhpbmRleEl0ZW1UcmFuc2Zvcm1zKSxcbiAgICAgICAgICAgIG5vZGUgPSBpbmRleExpc3RNYXJrZG93bk5vZGUsIC8vL1xuICAgICAgICAgICAgdG9rZW5zID0gW107XG5cbiAgICAgIGluZGV4SXRlbVRyYW5zZm9ybXMuZm9yRWFjaCgoaW5kZXhJdGVtVHJhbnNmb3JtKSA9PiB7XG4gICAgICAgIGluZGV4SXRlbVRyYW5zZm9ybS5nZXRUb2tlbnModG9rZW5zKTtcbiAgICAgIH0pO1xuXG4gICAgICBpbmRleExpc3RUcmFuc2Zvcm0gPSBUcmFuc2Zvcm0uZnJvbU5vZGVBbmRUb2tlbnMoSW5kZXhMaXN0VHJhbnNmb3JtLCBub2RlLCB0b2tlbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBpbmRleExpc3RUcmFuc2Zvcm07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJJbmRleExpc3RUcmFuc2Zvcm0iLCJmcm9tSW5kZXhMaXN0QW5kTGV0dGVyIiwiaW5kZXhMaXN0IiwibGV0dGVyIiwiY29udGV4dCIsImluZGV4TGlzdFRyYW5zZm9ybSIsImluZGV4SXRlbVRyYW5zZm9ybXMiLCJyZWR1Y2VJbmRleEl0ZW1CeUxldHRlciIsImluZGV4SXRlbSIsImluZGV4SXRlbVRyYW5zZm9ybSIsIkluZGV4SXRlbVRyYW5zZm9ybSIsImZyb21JbmRleEl0ZW0iLCJpbmRleEl0ZW1UcmFuc2Zvcm1zTGVuZ3RoIiwibGVuZ3RoIiwiaW5kZXhMaXN0TWFya2Rvd25Ob2RlIiwiSW5kZXhMaXN0TWFya2Rvd25Ob2RlIiwiZnJvbUluZGV4SXRlbVRyYW5zZm9ybXMiLCJub2RlIiwidG9rZW5zIiwiZm9yRWFjaCIsImdldFRva2VucyIsIlRyYW5zZm9ybSIsImZyb21Ob2RlQW5kVG9rZW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OztnRUFKQztnRUFDUztnRUFDRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuQixJQUFBLEFBQU1BLG1DQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNaQyxLQUFBQTttQkFBUCxTQUFPQSx1QkFBdUJDLFNBQVMsRUFBRUMsTUFBTSxFQUFFQyxPQUFPO2dCQUN0RCxJQUFJQyxxQkFBcUI7Z0JBRXpCLElBQU1DLHNCQUFzQkosVUFBVUssdUJBQXVCLENBQUNKLFFBQVEsU0FBQ0s7b0JBQy9ELElBQU1DLHFCQUFxQkMsa0JBQWtCLENBQUNDLGFBQWEsQ0FBQ0gsV0FBV0o7b0JBRXZFLE9BQU9LO2dCQUNULElBQ0FHLDRCQUE0Qk4sb0JBQW9CTyxNQUFNO2dCQUU1RCxJQUFJRCw0QkFBNEIsR0FBRztvQkFDakMsSUFBTUUsd0JBQXdCQyxrQkFBcUIsQ0FBQ0MsdUJBQXVCLENBQUNWLHNCQUN0RVcsT0FBT0gsdUJBQ1BJLFNBQVMsRUFBRTtvQkFFakJaLG9CQUFvQmEsT0FBTyxDQUFDLFNBQUNWO3dCQUMzQkEsbUJBQW1CVyxTQUFTLENBQUNGO29CQUMvQjtvQkFFQWIscUJBQXFCZ0Isa0JBQVMsQ0FBQ0MsaUJBQWlCLENBcEJqQ3RCLG9CQW9Cc0RpQixNQUFNQztnQkFDN0U7Z0JBRUEsT0FBT2I7WUFDVDs7O1dBeEJtQkw7RUFBMkJxQixrQkFBUyJ9