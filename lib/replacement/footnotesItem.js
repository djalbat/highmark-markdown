"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FootnotesItemReplacement;
    }
});
var _necessary = require("necessary");
var _replacement = /*#__PURE__*/ _interop_require_default(require("../replacement"));
var _footnotesItem = /*#__PURE__*/ _interop_require_default(require("../node/markdown/footnotesItem"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var extract = _necessary.arrayUtilities.extract;
var FootnotesItemReplacement = /*#__PURE__*/ function(Replacement) {
    _inherits(FootnotesItemReplacement, Replacement);
    var _super = _create_super(FootnotesItemReplacement);
    function FootnotesItemReplacement() {
        _class_call_check(this, FootnotesItemReplacement);
        return _super.apply(this, arguments);
    }
    _create_class(FootnotesItemReplacement, [
        {
            key: "appendToFootnotesListMarkdownNode",
            value: function appendToFootnotesListMarkdownNode(footnotesListMarkdownNode, context) {
                var parentNode = footnotesListMarkdownNode; ///
                _get(_get_prototype_of(FootnotesItemReplacement.prototype), "appendTo", this).call(this, parentNode, context);
            }
        }
    ], [
        {
            key: "fromNode",
            value: function fromNode(node, context) {
                return _replacement.default.fromNode(FootnotesItemReplacement, node, context);
            }
        },
        {
            key: "fromFootnoteReplacementsAndIdentifier",
            value: function fromFootnoteReplacementsAndIdentifier(footnoteReplacements, identifier, context) {
                var footnotesItemReplacement = null;
                var footnoteReplacement = extract(footnoteReplacements, function(footnoteReplacement) {
                    var node = footnoteReplacement.getNode(), footnoteMarkdownNode = node, footnoteMarkdownNodeIdentifier = footnoteMarkdownNode.identifier(context);
                    if (footnoteMarkdownNodeIdentifier === identifier) {
                        return true;
                    }
                }) || null;
                if (footnoteReplacement !== null) {
                    var node = footnoteReplacement.getNode(), footnoteMarkdownNode = node, footnotesItemMarkdownNode = _footnotesItem.default.fromFootnotesMarkdownNodeAndIdentifier(footnoteMarkdownNode, identifier), ascendantNode = footnotesItemMarkdownNode; ///
                    footnotesItemReplacement = footnoteReplacement.expand(FootnotesItemReplacement, ascendantNode);
                }
                return footnotesItemReplacement;
            }
        }
    ]);
    return FootnotesItemReplacement;
}(_replacement.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlbWVudC9mb290bm90ZXNJdGVtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFJlcGxhY2VtZW50IGZyb20gXCIuLi9yZXBsYWNlbWVudFwiO1xuXG5pbXBvcnQgRm9vdG5vdGVzSXRlbU1hcmtkb3duTm9kZSBmcm9tIFwiLi4vbm9kZS9tYXJrZG93bi9mb290bm90ZXNJdGVtXCI7XG5cbmNvbnN0IHsgZXh0cmFjdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudCBleHRlbmRzIFJlcGxhY2VtZW50IHtcbiAgYXBwZW5kVG9Gb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlKGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZTsgLy8vXG5cbiAgICBzdXBlci5hcHBlbmRUbyhwYXJlbnROb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZShub2RlLCBjb250ZXh0KSB7IHJldHVybiBSZXBsYWNlbWVudC5mcm9tTm9kZShGb290bm90ZXNJdGVtUmVwbGFjZW1lbnQsIG5vZGUsIGNvbnRleHQpOyB9XG5cbiAgc3RhdGljIGZyb21Gb290bm90ZVJlcGxhY2VtZW50c0FuZElkZW50aWZpZXIoZm9vdG5vdGVSZXBsYWNlbWVudHMsIGlkZW50aWZpZXIsIGNvbnRleHQpIHtcbiAgICBsZXQgZm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IGZvb3Rub3RlUmVwbGFjZW1lbnQgPSBleHRyYWN0KGZvb3Rub3RlUmVwbGFjZW1lbnRzLCAoZm9vdG5vdGVSZXBsYWNlbWVudCkgPT4ge1xuICAgICAgY29uc3Qgbm9kZSA9IGZvb3Rub3RlUmVwbGFjZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgZm9vdG5vdGVNYXJrZG93bk5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgICBmb290bm90ZU1hcmtkb3duTm9kZUlkZW50aWZpZXIgPSBmb290bm90ZU1hcmtkb3duTm9kZS5pZGVudGlmaWVyKGNvbnRleHQpO1xuXG4gICAgICBpZiAoZm9vdG5vdGVNYXJrZG93bk5vZGVJZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAoZm9vdG5vdGVSZXBsYWNlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgbm9kZSA9IGZvb3Rub3RlUmVwbGFjZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgZm9vdG5vdGVNYXJrZG93bk5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgICBmb290bm90ZXNJdGVtTWFya2Rvd25Ob2RlID0gRm9vdG5vdGVzSXRlbU1hcmtkb3duTm9kZS5mcm9tRm9vdG5vdGVzTWFya2Rvd25Ob2RlQW5kSWRlbnRpZmllcihmb290bm90ZU1hcmtkb3duTm9kZSwgaWRlbnRpZmllciksXG4gICAgICAgICAgICBhc2NlbmRhbnROb2RlID0gZm9vdG5vdGVzSXRlbU1hcmtkb3duTm9kZTsgLy8vXG5cbiAgICAgIGZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudCA9IGZvb3Rub3RlUmVwbGFjZW1lbnQuZXhwYW5kKEZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudCwgYXNjZW5kYW50Tm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkZvb3Rub3Rlc0l0ZW1SZXBsYWNlbWVudCIsImV4dHJhY3QiLCJhcnJheVV0aWxpdGllcyIsImFwcGVuZFRvRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSIsImZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUiLCJjb250ZXh0IiwicGFyZW50Tm9kZSIsImFwcGVuZFRvIiwiZnJvbU5vZGUiLCJub2RlIiwiUmVwbGFjZW1lbnQiLCJmcm9tRm9vdG5vdGVSZXBsYWNlbWVudHNBbmRJZGVudGlmaWVyIiwiZm9vdG5vdGVSZXBsYWNlbWVudHMiLCJpZGVudGlmaWVyIiwiZm9vdG5vdGVzSXRlbVJlcGxhY2VtZW50IiwiZm9vdG5vdGVSZXBsYWNlbWVudCIsImdldE5vZGUiLCJmb290bm90ZU1hcmtkb3duTm9kZSIsImZvb3Rub3RlTWFya2Rvd25Ob2RlSWRlbnRpZmllciIsImZvb3Rub3Rlc0l0ZW1NYXJrZG93bk5vZGUiLCJGb290bm90ZXNJdGVtTWFya2Rvd25Ob2RlIiwiZnJvbUZvb3Rub3Rlc01hcmtkb3duTm9kZUFuZElkZW50aWZpZXIiLCJhc2NlbmRhbnROb2RlIiwiZXhwYW5kIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7eUJBUlU7a0VBRVA7b0VBRWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFNLEFBQUVDLFVBQVlDLHlCQUFjLENBQTFCRDtBQUVPLElBQUEsQUFBTUQseUNBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkcsS0FBQUE7bUJBQUFBLFNBQUFBLGtDQUFrQ0MseUJBQXlCLEVBQUVDLE9BQU87Z0JBQ2xFLElBQU1DLGFBQWFGLDJCQUEyQixHQUFHO2dCQUVqRCx1QkFKaUJKLHFDQUlYTyxZQUFOLElBQUssYUFBVUQsWUFBWUQ7WUFDN0I7Ozs7WUFFT0csS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0MsSUFBSSxFQUFFSixPQUFPO2dCQUFJLE9BQU9LLG9CQUFXLENBQUNGLFFBQVEsQ0FQekNSLDBCQU9vRVMsTUFBTUo7WUFBVTs7O1lBRWhHTSxLQUFBQTttQkFBUCxTQUFPQSxzQ0FBc0NDLG9CQUFvQixFQUFFQyxVQUFVLEVBQUVSLE9BQU87Z0JBQ3BGLElBQUlTLDJCQUEyQjtnQkFFL0IsSUFBTUMsc0JBQXNCZCxRQUFRVyxzQkFBc0IsU0FBQ0c7b0JBQ3pELElBQU1OLE9BQU9NLG9CQUFvQkMsT0FBTyxJQUNsQ0MsdUJBQXVCUixNQUN2QlMsaUNBQWlDRCxxQkFBcUJKLFVBQVUsQ0FBQ1I7b0JBRXZFLElBQUlhLG1DQUFtQ0wsWUFBWTt3QkFDakQsT0FBTztvQkFDVDtnQkFDRixNQUFNO2dCQUVOLElBQUlFLHdCQUF3QixNQUFNO29CQUNoQyxJQUFNTixPQUFPTSxvQkFBb0JDLE9BQU8sSUFDbENDLHVCQUF1QlIsTUFDdkJVLDRCQUE0QkMsc0JBQXlCLENBQUNDLHNDQUFzQyxDQUFDSixzQkFBc0JKLGFBQ25IUyxnQkFBZ0JILDJCQUEyQixHQUFHO29CQUVwREwsMkJBQTJCQyxvQkFBb0JRLE1BQU0sQ0E1QnRDdkIsMEJBNEJpRXNCO2dCQUNsRjtnQkFFQSxPQUFPUjtZQUNUOzs7V0FoQ21CZDtFQUFpQ1Usb0JBQVcifQ==