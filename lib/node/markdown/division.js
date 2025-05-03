"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DivisionMarkdownNode;
    }
});
var _markdown = /*#__PURE__*/ _interop_require_default(require("../../node/markdown"));
var _subDivision = /*#__PURE__*/ _interop_require_default(require("../../transform/markdown/subDivision"));
var _ignore = /*#__PURE__*/ _interop_require_default(require("../../transform/markdown/directive/ignore"));
var _markdown1 = require("../../utilities/markdown");
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var DivisionMarkdownNode = /*#__PURE__*/ function(MarkdownNode) {
    _inherits(DivisionMarkdownNode, MarkdownNode);
    function DivisionMarkdownNode(ruleName, parentNode, childNodes, opacity, precedence, divisionClassName) {
        _class_call_check(this, DivisionMarkdownNode);
        var _this;
        _this = _call_super(this, DivisionMarkdownNode, [
            ruleName,
            parentNode,
            childNodes,
            opacity,
            precedence
        ]);
        _this.divisionClassName = divisionClassName;
        return _this;
    }
    _create_class(DivisionMarkdownNode, [
        {
            key: "getDivisionClassName",
            value: function getDivisionClassName() {
                return this.divisionClassName;
            }
        },
        {
            key: "setDivisionClassName",
            value: function setDivisionClassName(divisionClassName) {
                this.divisionClassName = divisionClassName;
            }
        },
        {
            key: "isIgnored",
            value: function isIgnored() {
                var node = this, ignoreDirectiveMarkdownNode = (0, _markdown1.ignoreDirectiveMarkdownNodeFromNode)(node), ignored = ignoreDirectiveMarkdownNode !== null;
                return ignored;
            }
        },
        {
            key: "className",
            value: function className(context) {
                var className = this.divisionClassName; ///
                return className;
            }
        },
        {
            key: "resolveIgnored",
            value: function resolveIgnored(topmostMarkdownNode, context) {
                var ignored = this.isIgnored();
                if (!ignored) {
                    return;
                }
                var divisionMarkdownNode = this, ignoreDirectiveMarkdownTransform = _ignore.default.fromDivisionMarkdownNode(divisionMarkdownNode);
                ignoreDirectiveMarkdownTransform.remove(context);
            }
        },
        {
            key: "resolveIncludes",
            value: function resolveIncludes(topmostMarkdownNode, context) {
                var node = this, includeDirectiveMarkdownNodes = (0, _markdown1.includeDirectiveMarkdownNodesFromNode)(node), includeDirectiveMarkdownTransforms = includeDirectiveMarkdownNodes.reduce(function(includeDirectiveMarkdownTransforms, includeDirectiveMarkdownNode) {
                    var includeDirectiveMarkdownTransform = includeDirectiveMarkdownNode.resolveInclude(context);
                    if (includeDirectiveMarkdownTransform !== null) {
                        includeDirectiveMarkdownTransforms.push(includeDirectiveMarkdownTransform);
                    }
                    return includeDirectiveMarkdownTransforms;
                }, []);
                includeDirectiveMarkdownTransforms.forEach(function(includeDirectiveMarkdownTransform) {
                    var divisionMarkdownNode = includeDirectiveMarkdownTransform.appendToTopmostMarkdownNode(topmostMarkdownNode, context);
                    divisionMarkdownNode.resolveIncludes(topmostMarkdownNode, context);
                });
            }
        },
        {
            key: "resolveEmbeddings",
            value: function resolveEmbeddings(context) {
                var divisionMarkdownNode = this; ///
                this.forEachSubDivisionMarkdownNode(function(subDivisionMarkdownNode) {
                    var embeddingsResolved = subDivisionMarkdownNode.resolveEmbeddings(divisionMarkdownNode, context);
                    if (embeddingsResolved) {
                        var subDivisionMarkdownTransform = _subDivision.default.fromSubDivisionMarkdownNode(subDivisionMarkdownNode);
                        subDivisionMarkdownTransform.remove(context);
                    }
                });
            }
        },
        {
            key: "getSubDivisionMarkdownNodes",
            value: function getSubDivisionMarkdownNodes() {
                var node = this, subDivisionMarkdownNodes = (0, _markdown1.subDivisionMarkdownNodesFromNode)(node);
                return subDivisionMarkdownNodes;
            }
        },
        {
            key: "removeSubDivisionMarkdownNode",
            value: function removeSubDivisionMarkdownNode(subDivisionMarkdownNode) {
                var node = this, childNode = subDivisionMarkdownNode; ///
                node.removeChildNode(childNode);
            }
        },
        {
            key: "forEachSubDivisionMarkdownNode",
            value: function forEachSubDivisionMarkdownNode(callback) {
                var subDivisionMarkdownNodes = this.getSubDivisionMarkdownNodes();
                subDivisionMarkdownNodes.forEach(callback);
            }
        },
        {
            key: "clone",
            value: function clone() {
                return _get(_get_prototype_of(DivisionMarkdownNode.prototype), "clone", this).call(this, this.divisionClassName);
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesAndOpacity",
            value: function fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) {
                var divisionClassName = null, divisionMarkdownNode = _markdown.default.fromRuleNameChildNodesAndOpacity(DivisionMarkdownNode, ruleName, childNodes, opacity, divisionClassName);
                return divisionMarkdownNode;
            }
        }
    ]);
    return DivisionMarkdownNode;
}(_markdown.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL21hcmtkb3duL2RpdmlzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWFya2Rvd25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL21hcmtkb3duXCI7XG5pbXBvcnQgU3ViRGl2aXNpb25NYXJrZG93blRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL21hcmtkb3duL3N1YkRpdmlzaW9uXCI7XG5pbXBvcnQgSWdub3JlRGlyZWN0aXZlTWFya2Rvd25UcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9tYXJrZG93bi9kaXJlY3RpdmUvaWdub3JlXCI7XG5cbmltcG9ydCB7IGlnbm9yZURpcmVjdGl2ZU1hcmtkb3duTm9kZUZyb21Ob2RlLCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXNGcm9tTm9kZSwgaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZXNGcm9tTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbWFya2Rvd25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGl2aXNpb25NYXJrZG93bk5vZGUgZXh0ZW5kcyBNYXJrZG93bk5vZGUge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZSwgcGFyZW50Tm9kZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSwgZGl2aXNpb25DbGFzc05hbWUpIHtcbiAgICBzdXBlcihydWxlTmFtZSwgcGFyZW50Tm9kZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7XG5cbiAgICB0aGlzLmRpdmlzaW9uQ2xhc3NOYW1lID0gZGl2aXNpb25DbGFzc05hbWU7XG4gIH1cblxuICBnZXREaXZpc2lvbkNsYXNzTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXZpc2lvbkNsYXNzTmFtZTtcbiAgfVxuXG4gIHNldERpdmlzaW9uQ2xhc3NOYW1lKGRpdmlzaW9uQ2xhc3NOYW1lKSB7XG4gICAgdGhpcy5kaXZpc2lvbkNsYXNzTmFtZSA9IGRpdmlzaW9uQ2xhc3NOYW1lO1xuICB9XG5cbiAgaXNJZ25vcmVkKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgaWdub3JlRGlyZWN0aXZlTWFya2Rvd25Ob2RlID0gaWdub3JlRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUobm9kZSksXG4gICAgICAgICAgaWdub3JlZCA9IChpZ25vcmVEaXJlY3RpdmVNYXJrZG93bk5vZGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGlnbm9yZWQ7XG4gIH1cblxuICBjbGFzc05hbWUoY29udGV4dCkge1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMuZGl2aXNpb25DbGFzc05hbWU7IC8vL1xuXG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgfVxuXG4gIHJlc29sdmVJZ25vcmVkKHRvcG1vc3RNYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBpZ25vcmVkID0gdGhpcy5pc0lnbm9yZWQoKTtcblxuICAgIGlmICghaWdub3JlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpcywgIC8vL1xuICAgICAgICAgIGlnbm9yZURpcmVjdGl2ZU1hcmtkb3duVHJhbnNmb3JtID0gSWdub3JlRGlyZWN0aXZlTWFya2Rvd25UcmFuc2Zvcm0uZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlKGRpdmlzaW9uTWFya2Rvd25Ob2RlKTtcblxuICAgIGlnbm9yZURpcmVjdGl2ZU1hcmtkb3duVHJhbnNmb3JtLnJlbW92ZShjb250ZXh0KTtcbiAgfVxuXG4gIHJlc29sdmVJbmNsdWRlcyh0b3Btb3N0TWFya2Rvd25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBpbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25Ob2RlcyA9IGluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGVzRnJvbU5vZGUobm9kZSksXG4gICAgICAgICAgaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duVHJhbnNmb3JtcyA9IGluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGVzLnJlZHVjZSgoaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duVHJhbnNmb3JtcywgaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duVHJhbnNmb3JtID0gaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZS5yZXNvbHZlSW5jbHVkZShjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKGluY2x1ZGVEaXJlY3RpdmVNYXJrZG93blRyYW5zZm9ybSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBpbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25UcmFuc2Zvcm1zLnB1c2goaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duVHJhbnNmb3JtKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGluY2x1ZGVEaXJlY3RpdmVNYXJrZG93blRyYW5zZm9ybXM7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duVHJhbnNmb3Jtcy5mb3JFYWNoKChpbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25UcmFuc2Zvcm0pID0+IHtcbiAgICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duVHJhbnNmb3JtLmFwcGVuZFRvVG9wbW9zdE1hcmtkb3duTm9kZSh0b3Btb3N0TWFya2Rvd25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUucmVzb2x2ZUluY2x1ZGVzKHRvcG1vc3RNYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVzb2x2ZUVtYmVkZGluZ3MoY29udGV4dCkge1xuICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gdGhpczsgIC8vL1xuXG4gICAgdGhpcy5mb3JFYWNoU3ViRGl2aXNpb25NYXJrZG93bk5vZGUoKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKSA9PiB7XG4gICAgICBjb25zdCBlbWJlZGRpbmdzUmVzb2x2ZWQgPSBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZS5yZXNvbHZlRW1iZWRkaW5ncyhkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChlbWJlZGRpbmdzUmVzb2x2ZWQpIHtcbiAgICAgICAgY29uc3Qgc3ViRGl2aXNpb25NYXJrZG93blRyYW5zZm9ybSA9IFN1YkRpdmlzaW9uTWFya2Rvd25UcmFuc2Zvcm0uZnJvbVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKVxuXG4gICAgICAgIHN1YkRpdmlzaW9uTWFya2Rvd25UcmFuc2Zvcm0ucmVtb3ZlKGNvbnRleHQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0U3ViRGl2aXNpb25NYXJrZG93bk5vZGVzKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLFxuICAgICAgICAgIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlKG5vZGUpO1xuXG4gICAgcmV0dXJuIHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcztcbiAgfVxuXG4gIHJlbW92ZVN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBjaGlsZE5vZGUgPSBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZTsgIC8vL1xuXG4gICAgbm9kZS5yZW1vdmVDaGlsZE5vZGUoY2hpbGROb2RlKTtcbiAgfVxuXG4gIGZvckVhY2hTdWJEaXZpc2lvbk1hcmtkb3duTm9kZShjYWxsYmFjaykge1xuICAgIGNvbnN0IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IHRoaXMuZ2V0U3ViRGl2aXNpb25NYXJrZG93bk5vZGVzKCk7XG5cbiAgICBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZXMuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIHN1cGVyLmNsb25lKHRoaXMuZGl2aXNpb25DbGFzc05hbWUpOyB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5KSB7XG4gICAgY29uc3QgZGl2aXNpb25DbGFzc05hbWUgPSBudWxsLFxuICAgICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gTWFya2Rvd25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRPcGFjaXR5KERpdmlzaW9uTWFya2Rvd25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgZGl2aXNpb25DbGFzc05hbWUpO1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uTWFya2Rvd25Ob2RlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRGl2aXNpb25NYXJrZG93bk5vZGUiLCJydWxlTmFtZSIsInBhcmVudE5vZGUiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJkaXZpc2lvbkNsYXNzTmFtZSIsImdldERpdmlzaW9uQ2xhc3NOYW1lIiwic2V0RGl2aXNpb25DbGFzc05hbWUiLCJpc0lnbm9yZWQiLCJub2RlIiwiaWdub3JlRGlyZWN0aXZlTWFya2Rvd25Ob2RlIiwiaWdub3JlRGlyZWN0aXZlTWFya2Rvd25Ob2RlRnJvbU5vZGUiLCJpZ25vcmVkIiwiY2xhc3NOYW1lIiwiY29udGV4dCIsInJlc29sdmVJZ25vcmVkIiwidG9wbW9zdE1hcmtkb3duTm9kZSIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiaWdub3JlRGlyZWN0aXZlTWFya2Rvd25UcmFuc2Zvcm0iLCJJZ25vcmVEaXJlY3RpdmVNYXJrZG93blRyYW5zZm9ybSIsImZyb21EaXZpc2lvbk1hcmtkb3duTm9kZSIsInJlbW92ZSIsInJlc29sdmVJbmNsdWRlcyIsImluY2x1ZGVEaXJlY3RpdmVNYXJrZG93bk5vZGVzIiwiaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duTm9kZXNGcm9tTm9kZSIsImluY2x1ZGVEaXJlY3RpdmVNYXJrZG93blRyYW5zZm9ybXMiLCJyZWR1Y2UiLCJpbmNsdWRlRGlyZWN0aXZlTWFya2Rvd25Ob2RlIiwiaW5jbHVkZURpcmVjdGl2ZU1hcmtkb3duVHJhbnNmb3JtIiwicmVzb2x2ZUluY2x1ZGUiLCJwdXNoIiwiZm9yRWFjaCIsImFwcGVuZFRvVG9wbW9zdE1hcmtkb3duTm9kZSIsInJlc29sdmVFbWJlZGRpbmdzIiwiZm9yRWFjaFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJlbWJlZGRpbmdzUmVzb2x2ZWQiLCJzdWJEaXZpc2lvbk1hcmtkb3duVHJhbnNmb3JtIiwiU3ViRGl2aXNpb25NYXJrZG93blRyYW5zZm9ybSIsImZyb21TdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsImdldFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyIsInN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlcyIsInN1YkRpdmlzaW9uTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIiwicmVtb3ZlU3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJjaGlsZE5vZGUiLCJyZW1vdmVDaGlsZE5vZGUiLCJjYWxsYmFjayIsImNsb25lIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZE9wYWNpdHkiLCJNYXJrZG93bk5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7OytEQU5JO2tFQUNnQjs2REFDSTt5QkFFZ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5RyxJQUFBLEFBQU1BLHFDQUFOO2NBQU1BO2FBQUFBLHFCQUNQQyxR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