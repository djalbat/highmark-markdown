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
var _occamdom = require("occam-dom");
var _indexItem = /*#__PURE__*/ _interop_require_default(require("../transform/indexItem"));
var _index = /*#__PURE__*/ _interop_require_default(require("../node/markdown/list/index"));
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
                    var indexListMarkdownNode = _index.default.fromIndexItemTransforms(indexItemTransforms), node = indexListMarkdownNode, tokens = [];
                    indexItemTransforms.forEach(function(indexItemTransform) {
                        indexItemTransform.getTokens(tokens);
                    });
                    indexListTransform = _occamdom.Transform.fromNodeAndTokens(IndexListTransform, node, tokens);
                }
                return indexListTransform;
            }
        }
    ]);
    return IndexListTransform;
}(_occamdom.Transform);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vaW5kZXhMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5cbmltcG9ydCBJbmRleEl0ZW1UcmFuc2Zvcm0gZnJvbSBcIi4uL3RyYW5zZm9ybS9pbmRleEl0ZW1cIjtcbmltcG9ydCBJbmRleExpc3RNYXJrZG93bk5vZGUgZnJvbSBcIi4uL25vZGUvbWFya2Rvd24vbGlzdC9pbmRleFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleExpc3RUcmFuc2Zvcm0gZXh0ZW5kcyBUcmFuc2Zvcm0ge1xuICBzdGF0aWMgZnJvbUluZGV4TGlzdEFuZExldHRlcihpbmRleExpc3QsIGxldHRlciwgY29udGV4dCkge1xuICAgIGxldCBpbmRleExpc3RUcmFuc2Zvcm0gPSBudWxsO1xuXG4gICAgY29uc3QgaW5kZXhJdGVtVHJhbnNmb3JtcyA9IGluZGV4TGlzdC5yZWR1Y2VJbmRleEl0ZW1CeUxldHRlcihsZXR0ZXIsIChpbmRleEl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4SXRlbVRyYW5zZm9ybSA9IEluZGV4SXRlbVRyYW5zZm9ybS5mcm9tSW5kZXhJdGVtKGluZGV4SXRlbSwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiBpbmRleEl0ZW1UcmFuc2Zvcm07XG4gICAgICAgICAgfSksXG4gICAgICAgICAgaW5kZXhJdGVtVHJhbnNmb3Jtc0xlbmd0aCA9IGluZGV4SXRlbVRyYW5zZm9ybXMubGVuZ3RoO1xuXG4gICAgaWYgKGluZGV4SXRlbVRyYW5zZm9ybXNMZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBpbmRleExpc3RNYXJrZG93bk5vZGUgPSBJbmRleExpc3RNYXJrZG93bk5vZGUuZnJvbUluZGV4SXRlbVRyYW5zZm9ybXMoaW5kZXhJdGVtVHJhbnNmb3JtcyksXG4gICAgICAgICAgICBub2RlID0gaW5kZXhMaXN0TWFya2Rvd25Ob2RlLCAvLy9cbiAgICAgICAgICAgIHRva2VucyA9IFtdO1xuXG4gICAgICBpbmRleEl0ZW1UcmFuc2Zvcm1zLmZvckVhY2goKGluZGV4SXRlbVRyYW5zZm9ybSkgPT4ge1xuICAgICAgICBpbmRleEl0ZW1UcmFuc2Zvcm0uZ2V0VG9rZW5zKHRva2Vucyk7XG4gICAgICB9KTtcblxuICAgICAgaW5kZXhMaXN0VHJhbnNmb3JtID0gVHJhbnNmb3JtLmZyb21Ob2RlQW5kVG9rZW5zKEluZGV4TGlzdFRyYW5zZm9ybSwgbm9kZSwgdG9rZW5zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5kZXhMaXN0VHJhbnNmb3JtO1xuICB9XG59XG4iXSwibmFtZXMiOlsiSW5kZXhMaXN0VHJhbnNmb3JtIiwiZnJvbUluZGV4TGlzdEFuZExldHRlciIsImluZGV4TGlzdCIsImxldHRlciIsImNvbnRleHQiLCJpbmRleExpc3RUcmFuc2Zvcm0iLCJpbmRleEl0ZW1UcmFuc2Zvcm1zIiwicmVkdWNlSW5kZXhJdGVtQnlMZXR0ZXIiLCJpbmRleEl0ZW0iLCJpbmRleEl0ZW1UcmFuc2Zvcm0iLCJJbmRleEl0ZW1UcmFuc2Zvcm0iLCJmcm9tSW5kZXhJdGVtIiwiaW5kZXhJdGVtVHJhbnNmb3Jtc0xlbmd0aCIsImxlbmd0aCIsImluZGV4TGlzdE1hcmtkb3duTm9kZSIsIkluZGV4TGlzdE1hcmtkb3duTm9kZSIsImZyb21JbmRleEl0ZW1UcmFuc2Zvcm1zIiwibm9kZSIsInRva2VucyIsImZvckVhY2giLCJnZXRUb2tlbnMiLCJUcmFuc2Zvcm0iLCJmcm9tTm9kZUFuZFRva2VucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7d0JBTEs7Z0VBRUs7NERBQ0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkIsSUFBQSxBQUFNQSxtQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDWkMsS0FBQUE7bUJBQVAsU0FBT0EsdUJBQXVCQyxTQUFTLEVBQUVDLE1BQU0sRUFBRUMsT0FBTztnQkFDdEQsSUFBSUMscUJBQXFCO2dCQUV6QixJQUFNQyxzQkFBc0JKLFVBQVVLLHVCQUF1QixDQUFDSixRQUFRLFNBQUNLO29CQUMvRCxJQUFNQyxxQkFBcUJDLGtCQUFrQixDQUFDQyxhQUFhLENBQUNILFdBQVdKO29CQUV2RSxPQUFPSztnQkFDVCxJQUNBRyw0QkFBNEJOLG9CQUFvQk8sTUFBTTtnQkFFNUQsSUFBSUQsNEJBQTRCLEdBQUc7b0JBQ2pDLElBQU1FLHdCQUF3QkMsY0FBcUIsQ0FBQ0MsdUJBQXVCLENBQUNWLHNCQUN0RVcsT0FBT0gsdUJBQ1BJLFNBQVMsRUFBRTtvQkFFakJaLG9CQUFvQmEsT0FBTyxDQUFDLFNBQUNWO3dCQUMzQkEsbUJBQW1CVyxTQUFTLENBQUNGO29CQUMvQjtvQkFFQWIscUJBQXFCZ0IsbUJBQVMsQ0FBQ0MsaUJBQWlCLENBcEJqQ3RCLG9CQW9Cc0RpQixNQUFNQztnQkFDN0U7Z0JBRUEsT0FBT2I7WUFDVDs7O1dBeEJtQkw7RUFBMkJxQixtQkFBUyJ9