"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FootnoteItemReplacement;
    }
});
var _necessary = require("necessary");
var _replacement = /*#__PURE__*/ _interop_require_default(require("../replacement"));
var _footnoteItem = /*#__PURE__*/ _interop_require_default(require("../node/markdown/footnoteItem"));
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
var FootnoteItemReplacement = /*#__PURE__*/ function(Replacement) {
    _inherits(FootnoteItemReplacement, Replacement);
    var _super = _create_super(FootnoteItemReplacement);
    function FootnoteItemReplacement() {
        _class_call_check(this, FootnoteItemReplacement);
        return _super.apply(this, arguments);
    }
    _create_class(FootnoteItemReplacement, [
        {
            key: "appendToFootnotesListMarkdownNode",
            value: function appendToFootnotesListMarkdownNode(footnotesListMarkdownNode, context) {
                var parentNode = footnotesListMarkdownNode; ///
                _get(_get_prototype_of(FootnoteItemReplacement.prototype), "appendTo", this).call(this, parentNode, context);
            }
        }
    ], [
        {
            key: "fromNode",
            value: function fromNode(node, context) {
                return _replacement.default.fromNode(FootnoteItemReplacement, node, context);
            }
        },
        {
            key: "fromFootnoteReplacementsAndIdentifier",
            value: function fromFootnoteReplacementsAndIdentifier(footnoteReplacements, identifier, context) {
                var footnoteItemReplacement = null;
                var footnoteReplacement = extract(footnoteReplacements, function(footnoteReplacement) {
                    var node = footnoteReplacement.getNode(), footnoteMarkdownNode = node, footnoteMarkdownNodeIdentifier = footnoteMarkdownNode.identifier(context);
                    if (footnoteMarkdownNodeIdentifier === identifier) {
                        return true;
                    }
                }) || null;
                if (footnoteReplacement !== null) {
                    var node = footnoteReplacement.getNode(), footnoteMarkdownNode = node, footnoteItemMarkdownNode = _footnoteItem.default.fromFootnotesMarkdownNodeAndIdentifier(footnoteMarkdownNode, identifier), ascendantNode = footnoteItemMarkdownNode; ///
                    footnoteItemReplacement = footnoteReplacement.expand(FootnoteItemReplacement, ascendantNode);
                }
                return footnoteItemReplacement;
            }
        }
    ]);
    return FootnoteItemReplacement;
}(_replacement.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlbWVudC9mb290bm90ZUl0ZW0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgUmVwbGFjZW1lbnQgZnJvbSBcIi4uL3JlcGxhY2VtZW50XCI7XG5cbmltcG9ydCBGb290bm90ZUl0ZW1NYXJrZG93bk5vZGUgZnJvbSBcIi4uL25vZGUvbWFya2Rvd24vZm9vdG5vdGVJdGVtXCI7XG5cbmNvbnN0IHsgZXh0cmFjdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3Rub3RlSXRlbVJlcGxhY2VtZW50IGV4dGVuZHMgUmVwbGFjZW1lbnQge1xuICBhcHBlbmRUb0Zvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUoZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHBhcmVudE5vZGUgPSBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlOyAvLy9cblxuICAgIHN1cGVyLmFwcGVuZFRvKHBhcmVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlKG5vZGUsIGNvbnRleHQpIHsgcmV0dXJuIFJlcGxhY2VtZW50LmZyb21Ob2RlKEZvb3Rub3RlSXRlbVJlcGxhY2VtZW50LCBub2RlLCBjb250ZXh0KTsgfVxuXG4gIHN0YXRpYyBmcm9tRm9vdG5vdGVSZXBsYWNlbWVudHNBbmRJZGVudGlmaWVyKGZvb3Rub3RlUmVwbGFjZW1lbnRzLCBpZGVudGlmaWVyLCBjb250ZXh0KSB7XG4gICAgbGV0IGZvb3Rub3RlSXRlbVJlcGxhY2VtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IGZvb3Rub3RlUmVwbGFjZW1lbnQgPSBleHRyYWN0KGZvb3Rub3RlUmVwbGFjZW1lbnRzLCAoZm9vdG5vdGVSZXBsYWNlbWVudCkgPT4ge1xuICAgICAgY29uc3Qgbm9kZSA9IGZvb3Rub3RlUmVwbGFjZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgZm9vdG5vdGVNYXJrZG93bk5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgICBmb290bm90ZU1hcmtkb3duTm9kZUlkZW50aWZpZXIgPSBmb290bm90ZU1hcmtkb3duTm9kZS5pZGVudGlmaWVyKGNvbnRleHQpO1xuXG4gICAgICBpZiAoZm9vdG5vdGVNYXJrZG93bk5vZGVJZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAoZm9vdG5vdGVSZXBsYWNlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgbm9kZSA9IGZvb3Rub3RlUmVwbGFjZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgZm9vdG5vdGVNYXJrZG93bk5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgICBmb290bm90ZUl0ZW1NYXJrZG93bk5vZGUgPSBGb290bm90ZUl0ZW1NYXJrZG93bk5vZGUuZnJvbUZvb3Rub3Rlc01hcmtkb3duTm9kZUFuZElkZW50aWZpZXIoZm9vdG5vdGVNYXJrZG93bk5vZGUsIGlkZW50aWZpZXIpLFxuICAgICAgICAgICAgYXNjZW5kYW50Tm9kZSA9IGZvb3Rub3RlSXRlbU1hcmtkb3duTm9kZTsgLy8vXG5cbiAgICAgIGZvb3Rub3RlSXRlbVJlcGxhY2VtZW50ID0gZm9vdG5vdGVSZXBsYWNlbWVudC5leHBhbmQoRm9vdG5vdGVJdGVtUmVwbGFjZW1lbnQsIGFzY2VuZGFudE5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBmb290bm90ZUl0ZW1SZXBsYWNlbWVudDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkZvb3Rub3RlSXRlbVJlcGxhY2VtZW50IiwiZXh0cmFjdCIsImFycmF5VXRpbGl0aWVzIiwiYXBwZW5kVG9Gb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIiwiZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSIsImNvbnRleHQiLCJwYXJlbnROb2RlIiwiYXBwZW5kVG8iLCJmcm9tTm9kZSIsIm5vZGUiLCJSZXBsYWNlbWVudCIsImZyb21Gb290bm90ZVJlcGxhY2VtZW50c0FuZElkZW50aWZpZXIiLCJmb290bm90ZVJlcGxhY2VtZW50cyIsImlkZW50aWZpZXIiLCJmb290bm90ZUl0ZW1SZXBsYWNlbWVudCIsImZvb3Rub3RlUmVwbGFjZW1lbnQiLCJnZXROb2RlIiwiZm9vdG5vdGVNYXJrZG93bk5vZGUiLCJmb290bm90ZU1hcmtkb3duTm9kZUlkZW50aWZpZXIiLCJmb290bm90ZUl0ZW1NYXJrZG93bk5vZGUiLCJGb290bm90ZUl0ZW1NYXJrZG93bk5vZGUiLCJmcm9tRm9vdG5vdGVzTWFya2Rvd25Ob2RlQW5kSWRlbnRpZmllciIsImFzY2VuZGFudE5vZGUiLCJleHBhbmQiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7Ozt5QkFSVTtrRUFFUDttRUFFYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJDLElBQU0sQUFBRUMsVUFBWUMseUJBQWMsQ0FBMUJEO0FBRU8sSUFBQSxBQUFNRCx3Q0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CRyxLQUFBQTttQkFBQUEsU0FBQUEsa0NBQWtDQyx5QkFBeUIsRUFBRUMsT0FBTztnQkFDbEUsSUFBTUMsYUFBYUYsMkJBQTJCLEdBQUc7Z0JBRWpELHVCQUppQkosb0NBSVhPLFlBQU4sSUFBSyxhQUFVRCxZQUFZRDtZQUM3Qjs7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTQyxJQUFJLEVBQUVKLE9BQU87Z0JBQUksT0FBT0ssb0JBQVcsQ0FBQ0YsUUFBUSxDQVB6Q1IseUJBT21FUyxNQUFNSjtZQUFVOzs7WUFFL0ZNLEtBQUFBO21CQUFQLFNBQU9BLHNDQUFzQ0Msb0JBQW9CLEVBQUVDLFVBQVUsRUFBRVIsT0FBTztnQkFDcEYsSUFBSVMsMEJBQTBCO2dCQUU5QixJQUFNQyxzQkFBc0JkLFFBQVFXLHNCQUFzQixTQUFDRztvQkFDekQsSUFBTU4sT0FBT00sb0JBQW9CQyxPQUFPLElBQ2xDQyx1QkFBdUJSLE1BQ3ZCUyxpQ0FBaUNELHFCQUFxQkosVUFBVSxDQUFDUjtvQkFFdkUsSUFBSWEsbUNBQW1DTCxZQUFZO3dCQUNqRCxPQUFPO29CQUNUO2dCQUNGLE1BQU07Z0JBRU4sSUFBSUUsd0JBQXdCLE1BQU07b0JBQ2hDLElBQU1OLE9BQU9NLG9CQUFvQkMsT0FBTyxJQUNsQ0MsdUJBQXVCUixNQUN2QlUsMkJBQTJCQyxxQkFBd0IsQ0FBQ0Msc0NBQXNDLENBQUNKLHNCQUFzQkosYUFDakhTLGdCQUFnQkgsMEJBQTBCLEdBQUc7b0JBRW5ETCwwQkFBMEJDLG9CQUFvQlEsTUFBTSxDQTVCckN2Qix5QkE0QitEc0I7Z0JBQ2hGO2dCQUVBLE9BQU9SO1lBQ1Q7OztXQWhDbUJkO0VBQWdDVSxvQkFBVyJ9