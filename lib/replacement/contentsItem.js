"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ContentsItemReplacement;
    }
});
var _replacement = /*#__PURE__*/ _interop_require_default(require("../replacement"));
var _contentsLink = /*#__PURE__*/ _interop_require_default(require("../replacement/contentsLink"));
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
var ContentsItemReplacement = /*#__PURE__*/ function(Replacement) {
    _inherits(ContentsItemReplacement, Replacement);
    var _super = _create_super(ContentsItemReplacement);
    function ContentsItemReplacement() {
        _class_call_check(this, ContentsItemReplacement);
        return _super.apply(this, arguments);
    }
    _create_class(ContentsItemReplacement, [
        {
            key: "appendToContentsListMarkdownNode",
            value: function appendToContentsListMarkdownNode(contentsListMarkdownNode, context) {
                var parentNode = contentsListMarkdownNode; ///
                _get(_get_prototype_of(ContentsItemReplacement.prototype), "appendTo", this).call(this, parentNode, context);
            }
        }
    ], [
        {
            key: "fromNode",
            value: function fromNode(node, context) {
                return _replacement.default.fromNode(ContentsItemReplacement, node, context);
            }
        },
        {
            key: "fromNestedHeadingMarkdownNode",
            value: function fromNestedHeadingMarkdownNode(nestedHeadingMarkdownNode, context) {
                var replacements = [], contentsLinkReplacement = _contentsLink.default.fromNestedHeadingMarkdownNode(nestedHeadingMarkdownNode, context);
                if (contentsLinkReplacement !== null) {
                    var node = nestedHeadingMarkdownNode.getNode(), headingMarkdownNode = node; ///
                    headingMarkdownNode.addAnchor(context);
                    var replacement = contentsLinkReplacement;
                    replacements.push(replacement);
                }
                var childNestedNodes = nestedHeadingMarkdownNode.getChildNestedNodes(), nestedHeadingMarkdownNodes = childNestedNodes, nestedHeadingMarkdownNodesLength = nestedHeadingMarkdownNodes.length;
                if (nestedHeadingMarkdownNodesLength > 0) {
                    var ContentsListReplacement = ContentsItemReplacement.ContentsListReplacement, contentsListReplacement = ContentsListReplacement.fromNestedHeadingMarkdownNodes(nestedHeadingMarkdownNodes, context), replacement1 = contentsListReplacement; ///
                    replacements.push(replacement1);
                }
                debugger;
                return contentsItemMarkdownNode;
            }
        }
    ]);
    return ContentsItemReplacement;
}(_replacement.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlbWVudC9jb250ZW50c0l0ZW0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZXBsYWNlbWVudCBmcm9tIFwiLi4vcmVwbGFjZW1lbnRcIjtcbmltcG9ydCBDb250ZW50c0xpbmtSZXBsYWNlbWVudCBmcm9tIFwiLi4vcmVwbGFjZW1lbnQvY29udGVudHNMaW5rXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnRzSXRlbVJlcGxhY2VtZW50IGV4dGVuZHMgUmVwbGFjZW1lbnQge1xuICBhcHBlbmRUb0NvbnRlbnRzTGlzdE1hcmtkb3duTm9kZShjb250ZW50c0xpc3RNYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gY29udGVudHNMaXN0TWFya2Rvd25Ob2RlOyAvLy9cblxuICAgIHN1cGVyLmFwcGVuZFRvKHBhcmVudE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlKG5vZGUsIGNvbnRleHQpIHsgcmV0dXJuIFJlcGxhY2VtZW50LmZyb21Ob2RlKENvbnRlbnRzSXRlbVJlcGxhY2VtZW50LCBub2RlLCBjb250ZXh0KTsgfVxuXG4gIHN0YXRpYyBmcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZShuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcmVwbGFjZW1lbnRzID0gW10sXG4gICAgICAgICAgY29udGVudHNMaW5rUmVwbGFjZW1lbnQgPSBDb250ZW50c0xpbmtSZXBsYWNlbWVudC5mcm9tTmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZShuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcblxuICAgIGlmIChjb250ZW50c0xpbmtSZXBsYWNlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgbm9kZSA9IG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUuZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgaGVhZGluZ01hcmtkb3duTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgICAgaGVhZGluZ01hcmtkb3duTm9kZS5hZGRBbmNob3IoY29udGV4dCk7XG5cbiAgICAgIGNvbnN0IHJlcGxhY2VtZW50ID0gY29udGVudHNMaW5rUmVwbGFjZW1lbnQ7XG5cbiAgICAgIHJlcGxhY2VtZW50cy5wdXNoKHJlcGxhY2VtZW50KTtcbiAgICB9XG5cbiAgICBjb25zdCBjaGlsZE5lc3RlZE5vZGVzID0gbmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZS5nZXRDaGlsZE5lc3RlZE5vZGVzKCksXG4gICAgICAgICAgbmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXMgPSBjaGlsZE5lc3RlZE5vZGVzLCAgLy8vXG4gICAgICAgICAgbmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXNMZW5ndGggPSBuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAobmVzdGVkSGVhZGluZ01hcmtkb3duTm9kZXNMZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCB7IENvbnRlbnRzTGlzdFJlcGxhY2VtZW50IH0gPSBDb250ZW50c0l0ZW1SZXBsYWNlbWVudCxcbiAgICAgICAgICAgIGNvbnRlbnRzTGlzdFJlcGxhY2VtZW50ID0gQ29udGVudHNMaXN0UmVwbGFjZW1lbnQuZnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzKG5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHJlcGxhY2VtZW50ID0gY29udGVudHNMaXN0UmVwbGFjZW1lbnQ7IC8vL1xuXG4gICAgICByZXBsYWNlbWVudHMucHVzaChyZXBsYWNlbWVudCk7XG4gICAgfVxuXG4gICAgZGVidWdnZXJcblxuICAgIHJldHVybiBjb250ZW50c0l0ZW1NYXJrZG93bk5vZGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb250ZW50c0l0ZW1SZXBsYWNlbWVudCIsImFwcGVuZFRvQ29udGVudHNMaXN0TWFya2Rvd25Ob2RlIiwiY29udGVudHNMaXN0TWFya2Rvd25Ob2RlIiwiY29udGV4dCIsInBhcmVudE5vZGUiLCJhcHBlbmRUbyIsImZyb21Ob2RlIiwibm9kZSIsIlJlcGxhY2VtZW50IiwiZnJvbU5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGUiLCJuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlIiwicmVwbGFjZW1lbnRzIiwiY29udGVudHNMaW5rUmVwbGFjZW1lbnQiLCJDb250ZW50c0xpbmtSZXBsYWNlbWVudCIsImdldE5vZGUiLCJoZWFkaW5nTWFya2Rvd25Ob2RlIiwiYWRkQW5jaG9yIiwicmVwbGFjZW1lbnQiLCJwdXNoIiwiY2hpbGROZXN0ZWROb2RlcyIsImdldENoaWxkTmVzdGVkTm9kZXMiLCJuZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyIsIm5lc3RlZEhlYWRpbmdNYXJrZG93bk5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwiQ29udGVudHNMaXN0UmVwbGFjZW1lbnQiLCJjb250ZW50c0xpc3RSZXBsYWNlbWVudCIsImZyb21OZXN0ZWRIZWFkaW5nTWFya2Rvd25Ob2RlcyIsImNvbnRlbnRzSXRlbU1hcmtkb3duTm9kZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBS3FCQTs7O2tFQUhHO21FQUNZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckIsSUFBQSxBQUFNQSx3Q0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsaUNBQWlDQyx3QkFBd0IsRUFBRUMsT0FBTztnQkFDaEUsSUFBTUMsYUFBYUYsMEJBQTBCLEdBQUc7Z0JBRWhELHVCQUppQkYsb0NBSVhLLFlBQU4sSUFBSyxhQUFVRCxZQUFZRDtZQUM3Qjs7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTQyxJQUFJLEVBQUVKLE9BQU87Z0JBQUksT0FBT0ssb0JBQVcsQ0FBQ0YsUUFBUSxDQVB6Q04seUJBT21FTyxNQUFNSjtZQUFVOzs7WUFFL0ZNLEtBQUFBO21CQUFQLFNBQU9BLDhCQUE4QkMseUJBQXlCLEVBQUVQLE9BQU87Z0JBQ3JFLElBQU1RLGVBQWUsRUFBRSxFQUNqQkMsMEJBQTBCQyxxQkFBdUIsQ0FBQ0osNkJBQTZCLENBQUNDLDJCQUEyQlA7Z0JBRWpILElBQUlTLDRCQUE0QixNQUFNO29CQUNwQyxJQUFNTCxPQUFPRywwQkFBMEJJLE9BQU8sSUFDeENDLHNCQUFzQlIsTUFBTyxHQUFHO29CQUV0Q1Esb0JBQW9CQyxTQUFTLENBQUNiO29CQUU5QixJQUFNYyxjQUFjTDtvQkFFcEJELGFBQWFPLElBQUksQ0FBQ0Q7Z0JBQ3BCO2dCQUVBLElBQU1FLG1CQUFtQlQsMEJBQTBCVSxtQkFBbUIsSUFDaEVDLDZCQUE2QkYsa0JBQzdCRyxtQ0FBbUNELDJCQUEyQkUsTUFBTTtnQkFFMUUsSUFBSUQsbUNBQW1DLEdBQUc7b0JBQ3hDLElBQU0sQUFBRUUsMEJBN0JPeEIsd0JBNkJQd0IseUJBQ0ZDLDBCQUEwQkQsd0JBQXdCRSw4QkFBOEIsQ0FBQ0wsNEJBQTRCbEIsVUFDN0djLGVBQWNRLHlCQUF5QixHQUFHO29CQUVoRGQsYUFBYU8sSUFBSSxDQUFDRDtnQkFDcEI7Z0JBRUEsUUFBUTtnQkFFUixPQUFPVTtZQUNUOzs7V0F2Q21CM0I7RUFBZ0NRLG9CQUFXIn0=