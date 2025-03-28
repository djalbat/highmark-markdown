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
var _replacement = /*#__PURE__*/ _interop_require_default(require("../replacement"));
var _indexItem = /*#__PURE__*/ _interop_require_default(require("../replacement/indexItem"));
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
                    indexListReplacement = _replacement.default.fromNodeAndTokens(IndexListReplacement, node, tokens);
                }
                return indexListReplacement;
            }
        }
    ]);
    return IndexListReplacement;
}(_replacement.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlbWVudC9pbmRleExpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZXBsYWNlbWVudCBmcm9tIFwiLi4vcmVwbGFjZW1lbnRcIjtcbmltcG9ydCBJbmRleEl0ZW1SZXBsYWNlbWVudCBmcm9tIFwiLi4vcmVwbGFjZW1lbnQvaW5kZXhJdGVtXCI7XG5pbXBvcnQgSW5kZXhMaXN0TWFya2Rvd25Ob2RlIGZyb20gXCIuLi9ub2RlL21hcmtkb3duL2luZGV4TGlzdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleExpc3RSZXBsYWNlbWVudCBleHRlbmRzIFJlcGxhY2VtZW50IHtcbiAgc3RhdGljIGZyb21JbmRleExpc3RBbmRMZXR0ZXIoaW5kZXhMaXN0LCBsZXR0ZXIsIGNvbnRleHQpIHtcbiAgICBsZXQgaW5kZXhMaXN0UmVwbGFjZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QgaW5kZXhJdGVtUmVwbGFjZW1lbnRzID0gaW5kZXhMaXN0LnJlZHVjZUluZGV4SXRlbUJ5TGV0dGVyKGxldHRlciwgKGluZGV4SXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5kZXhJdGVtUmVwbGFjZW1lbnQgPSBJbmRleEl0ZW1SZXBsYWNlbWVudC5mcm9tSW5kZXhJdGVtKGluZGV4SXRlbSwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiBpbmRleEl0ZW1SZXBsYWNlbWVudDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBpbmRleEl0ZW1SZXBsYWNlbWVudHNMZW5ndGggPSBpbmRleEl0ZW1SZXBsYWNlbWVudHMubGVuZ3RoO1xuXG4gICAgaWYgKGluZGV4SXRlbVJlcGxhY2VtZW50c0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGluZGV4TGlzdE1hcmtkb3duTm9kZSA9IEluZGV4TGlzdE1hcmtkb3duTm9kZS5mcm9tSW5kZXhJdGVtUmVwbGFjZW1lbnRzKGluZGV4SXRlbVJlcGxhY2VtZW50cyksXG4gICAgICAgICAgICBub2RlID0gaW5kZXhMaXN0TWFya2Rvd25Ob2RlLCAvLy9cbiAgICAgICAgICAgIHRva2VucyA9IFtdO1xuXG4gICAgICBpbmRleEl0ZW1SZXBsYWNlbWVudHMuZm9yRWFjaCgoaW5kZXhJdGVtUmVwbGFjZW1lbnQpID0+IHtcbiAgICAgICAgaW5kZXhJdGVtUmVwbGFjZW1lbnQuZ2V0VG9rZW5zKHRva2Vucyk7XG4gICAgICB9KTtcblxuICAgICAgaW5kZXhMaXN0UmVwbGFjZW1lbnQgPSBSZXBsYWNlbWVudC5mcm9tTm9kZUFuZFRva2VucyhJbmRleExpc3RSZXBsYWNlbWVudCwgbm9kZSwgdG9rZW5zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5kZXhMaXN0UmVwbGFjZW1lbnQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJJbmRleExpc3RSZXBsYWNlbWVudCIsImZyb21JbmRleExpc3RBbmRMZXR0ZXIiLCJpbmRleExpc3QiLCJsZXR0ZXIiLCJjb250ZXh0IiwiaW5kZXhMaXN0UmVwbGFjZW1lbnQiLCJpbmRleEl0ZW1SZXBsYWNlbWVudHMiLCJyZWR1Y2VJbmRleEl0ZW1CeUxldHRlciIsImluZGV4SXRlbSIsImluZGV4SXRlbVJlcGxhY2VtZW50IiwiSW5kZXhJdGVtUmVwbGFjZW1lbnQiLCJmcm9tSW5kZXhJdGVtIiwiaW5kZXhJdGVtUmVwbGFjZW1lbnRzTGVuZ3RoIiwibGVuZ3RoIiwiaW5kZXhMaXN0TWFya2Rvd25Ob2RlIiwiSW5kZXhMaXN0TWFya2Rvd25Ob2RlIiwiZnJvbUluZGV4SXRlbVJlcGxhY2VtZW50cyIsIm5vZGUiLCJ0b2tlbnMiLCJmb3JFYWNoIiwiZ2V0VG9rZW5zIiwiUmVwbGFjZW1lbnQiLCJmcm9tTm9kZUFuZFRva2VucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7a0VBSkc7Z0VBQ1M7Z0VBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkIsSUFBQSxBQUFNQSxxQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDWkMsS0FBQUE7bUJBQVAsU0FBT0EsdUJBQXVCQyxTQUFTLEVBQUVDLE1BQU0sRUFBRUMsT0FBTztnQkFDdEQsSUFBSUMsdUJBQXVCO2dCQUUzQixJQUFNQyx3QkFBd0JKLFVBQVVLLHVCQUF1QixDQUFDSixRQUFRLFNBQUNLO29CQUNqRSxJQUFNQyx1QkFBdUJDLGtCQUFvQixDQUFDQyxhQUFhLENBQUNILFdBQVdKO29CQUUzRSxPQUFPSztnQkFDVCxJQUNBRyw4QkFBOEJOLHNCQUFzQk8sTUFBTTtnQkFFaEUsSUFBSUQsOEJBQThCLEdBQUc7b0JBQ25DLElBQU1FLHdCQUF3QkMsa0JBQXFCLENBQUNDLHlCQUF5QixDQUFDVix3QkFDeEVXLE9BQU9ILHVCQUNQSSxTQUFTLEVBQUU7b0JBRWpCWixzQkFBc0JhLE9BQU8sQ0FBQyxTQUFDVjt3QkFDN0JBLHFCQUFxQlcsU0FBUyxDQUFDRjtvQkFDakM7b0JBRUFiLHVCQUF1QmdCLG9CQUFXLENBQUNDLGlCQUFpQixDQXBCckN0QixzQkFvQjREaUIsTUFBTUM7Z0JBQ25GO2dCQUVBLE9BQU9iO1lBQ1Q7OztXQXhCbUJMO0VBQTZCcUIsb0JBQVcifQ==