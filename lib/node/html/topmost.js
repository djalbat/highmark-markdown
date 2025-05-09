"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TopmostHTMLNode;
    }
});
var _html = /*#__PURE__*/ _interop_require_default(require("../../node/html"));
var _index = /*#__PURE__*/ _interop_require_default(require("../../transform/html/index"));
var _division = /*#__PURE__*/ _interop_require_default(require("../../transform/html/division"));
var _contents = /*#__PURE__*/ _interop_require_default(require("../../transform/html/list/contents"));
var _index1 = /*#__PURE__*/ _interop_require_default(require("../../transform/html/directive/index"));
var _contents1 = /*#__PURE__*/ _interop_require_default(require("../../transform/html/directive/contents"));
var _ruleNames = require("../../ruleNames");
var _html1 = require("../../utilities/html");
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
var TopmostHTMLNode = /*#__PURE__*/ function(HTMLNode) {
    _inherits(TopmostHTMLNode, HTMLNode);
    function TopmostHTMLNode() {
        _class_call_check(this, TopmostHTMLNode);
        return _call_super(this, TopmostHTMLNode, arguments);
    }
    _create_class(TopmostHTMLNode, [
        {
            key: "resolve",
            value: function resolve(context) {
                this.paginate(context);
                this.addContents(context);
                this.addIndex(context);
            }
        },
        {
            key: "paginate",
            value: function paginate(context) {
                var divisionHTMLNodes, divisionHTMLTransforms;
                divisionHTMLNodes = this.getDivisionHTMLNodes();
                divisionHTMLTransforms = divisionHTMLTransformsFromDivisionHTMLNodes(divisionHTMLNodes);
                divisionHTMLNodes = [];
                var pageNumber;
                pageNumber = 1;
                Object.assign(context, {
                    pageNumber: pageNumber
                });
                divisionHTMLTransforms.forEach(function(divisionHTMLTransform) {
                    divisionHTMLTransform.remove();
                    divisionHTMLTransform.resolve(divisionHTMLNodes, context);
                });
                delete context.pageNumber;
                divisionHTMLTransforms = divisionHTMLTransformsFromDivisionHTMLNodes(divisionHTMLNodes);
                var topmostHTMLNode = this; ///
                divisionHTMLTransforms.forEach(function(divisionHTMLTransform) {
                    divisionHTMLTransform.appendToTopmostHTMLNode(topmostHTMLNode);
                });
            }
        },
        {
            key: "addIndex",
            value: function addIndex(context) {
                var node = this, indexDirectiveHTMLNode = (0, _html1.indexDirectiveHTMLNodeFromNode)(node);
                if (indexDirectiveHTMLNode === null) {
                    return;
                }
                var divisionHTMLNodes = this.getDivisionHTMLNodes(), indexDirectiveHTMLTransform = _index1.default.fromIndexDirectiveHTMLNode(indexDirectiveHTMLNode), indexHTMLTransform = _index.default.fromIndexDirectiveHTMLTransformAndDivisionHTMLNodes(indexDirectiveHTMLTransform, divisionHTMLNodes, context);
                indexHTMLTransform !== null ? indexHTMLTransform.replaceIndexDirectiveHTMLTransform(indexDirectiveHTMLTransform) : indexDirectiveHTMLTransform.remove();
            }
        },
        {
            key: "addContents",
            value: function addContents(context) {
                var node = this, contentsDirectiveHTMLNode = (0, _html1.contentsDirectiveHTMLNodeFromNode)(node);
                if (contentsDirectiveHTMLNode === null) {
                    return;
                }
                var topmostHTMLNode = this, contentsDirectiveHTMLTransform = _contents1.default.fromContentsDirectiveHTMLNode(contentsDirectiveHTMLNode), contentsListHTMLTransform = _contents.default.fromContentsDirectiveHTMLTransformAndTopmostHTMLNode(contentsDirectiveHTMLTransform, topmostHTMLNode, context);
                contentsListHTMLTransform !== null ? contentsListHTMLTransform.replaceContentsDirectiveHTMLTransform(contentsDirectiveHTMLTransform) : contentsDirectiveHTMLTransform.remove();
            }
        },
        {
            key: "adjustIndent",
            value: function adjustIndent(indent) {
                return indent;
            }
        },
        {
            key: "getRuleName",
            value: function getRuleName() {
                var ruleName = _ruleNames.HTML_RULE_NAME;
                return ruleName;
            }
        },
        {
            key: "getDivisionHTMLNodes",
            value: function getDivisionHTMLNodes() {
                var node = this, divisionHTMLNodes = (0, _html1.divisionHTMLNodesFromNode)(node);
                return divisionHTMLNodes;
            }
        },
        {
            key: "getDivisionHTMLNodeAt",
            value: function getDivisionHTMLNodeAt(index) {
                var divisionHTMLNodes = this.getDivisionHTMLNodes(), divisionHTMLNode = divisionHTMLNodes[index] || null;
                return divisionHTMLNode;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                return _html.default.fromNothing(TopmostHTMLNode);
            }
        }
    ]);
    return TopmostHTMLNode;
}(_html.default);
_define_property(TopmostHTMLNode, "tagName", "html");
_define_property(TopmostHTMLNode, "className", null);
function divisionHTMLTransformsFromDivisionHTMLNodes(divisionHTMLNodes) {
    var divisionHTMLTransforms = divisionHTMLNodes.map(function(divisionHTMLNode) {
        var divisionHTMLTransform = _division.default.fromDivisionHTMLNode(divisionHTMLNode);
        return divisionHTMLTransform;
    });
    return divisionHTMLTransforms;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0bWwvdG9wbW9zdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEhUTUxOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2h0bWxcIjtcbmltcG9ydCBJbmRleEhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2luZGV4XCI7XG5pbXBvcnQgRGl2aXNpb25IVE1MVHJhbnNmb3JtIGZyb20gXCIuLi8uLi90cmFuc2Zvcm0vaHRtbC9kaXZpc2lvblwiO1xuaW1wb3J0IENvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2xpc3QvY29udGVudHNcIjtcbmltcG9ydCBJbmRleERpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0gZnJvbSBcIi4uLy4uL3RyYW5zZm9ybS9odG1sL2RpcmVjdGl2ZS9pbmRleFwiO1xuaW1wb3J0IENvbnRlbnRzRGlyZWN0aXZlSFRNTFRyYW5zZm9ybSBmcm9tIFwiLi4vLi4vdHJhbnNmb3JtL2h0bWwvZGlyZWN0aXZlL2NvbnRlbnRzXCI7XG5cbmltcG9ydCB7IEhUTUxfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgZGl2aXNpb25IVE1MTm9kZXNGcm9tTm9kZSwgaW5kZXhEaXJlY3RpdmVIVE1MTm9kZUZyb21Ob2RlLCBjb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2h0bWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wbW9zdEhUTUxOb2RlIGV4dGVuZHMgSFRNTE5vZGUge1xuICByZXNvbHZlKGNvbnRleHQpIHtcbiAgICB0aGlzLnBhZ2luYXRlKGNvbnRleHQpO1xuXG4gICAgdGhpcy5hZGRDb250ZW50cyhjb250ZXh0KTtcblxuICAgIHRoaXMuYWRkSW5kZXgoY29udGV4dCk7XG4gIH1cblxuICBwYWdpbmF0ZShjb250ZXh0KSB7XG4gICAgbGV0IGRpdmlzaW9uSFRNTE5vZGVzLFxuICAgICAgICBkaXZpc2lvbkhUTUxUcmFuc2Zvcm1zO1xuXG4gICAgZGl2aXNpb25IVE1MTm9kZXMgPSB0aGlzLmdldERpdmlzaW9uSFRNTE5vZGVzKCk7XG5cbiAgICBkaXZpc2lvbkhUTUxUcmFuc2Zvcm1zID0gZGl2aXNpb25IVE1MVHJhbnNmb3Jtc0Zyb21EaXZpc2lvbkhUTUxOb2RlcyhkaXZpc2lvbkhUTUxOb2Rlcyk7XG5cbiAgICBkaXZpc2lvbkhUTUxOb2RlcyA9IFtdO1xuXG4gICAgbGV0IHBhZ2VOdW1iZXI7XG5cbiAgICBwYWdlTnVtYmVyID0gMTtcblxuICAgIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgICAgcGFnZU51bWJlclxuICAgIH0pO1xuXG4gICAgZGl2aXNpb25IVE1MVHJhbnNmb3Jtcy5mb3JFYWNoKChkaXZpc2lvbkhUTUxUcmFuc2Zvcm0pID0+IHtcbiAgICAgIGRpdmlzaW9uSFRNTFRyYW5zZm9ybS5yZW1vdmUoKTtcblxuICAgICAgZGl2aXNpb25IVE1MVHJhbnNmb3JtLnJlc29sdmUoZGl2aXNpb25IVE1MTm9kZXMsIGNvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgZGVsZXRlIGNvbnRleHQucGFnZU51bWJlcjtcblxuICAgIGRpdmlzaW9uSFRNTFRyYW5zZm9ybXMgPSBkaXZpc2lvbkhUTUxUcmFuc2Zvcm1zRnJvbURpdmlzaW9uSFRNTE5vZGVzKGRpdmlzaW9uSFRNTE5vZGVzKTtcblxuICAgIGNvbnN0IHRvcG1vc3RIVE1MTm9kZSA9IHRoaXM7IC8vL1xuXG4gICAgZGl2aXNpb25IVE1MVHJhbnNmb3Jtcy5mb3JFYWNoKChkaXZpc2lvbkhUTUxUcmFuc2Zvcm0pID0+IHtcbiAgICAgIGRpdmlzaW9uSFRNTFRyYW5zZm9ybS5hcHBlbmRUb1RvcG1vc3RIVE1MTm9kZSh0b3Btb3N0SFRNTE5vZGUpO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkSW5kZXgoY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgaW5kZXhEaXJlY3RpdmVIVE1MTm9kZSA9IGluZGV4RGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZShub2RlKTtcblxuICAgIGlmIChpbmRleERpcmVjdGl2ZUhUTUxOb2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZGl2aXNpb25IVE1MTm9kZXMgPSB0aGlzLmdldERpdmlzaW9uSFRNTE5vZGVzKCksXG4gICAgICAgICAgaW5kZXhEaXJlY3RpdmVIVE1MVHJhbnNmb3JtID0gSW5kZXhEaXJlY3RpdmVIVE1MVHJhbnNmb3JtLmZyb21JbmRleERpcmVjdGl2ZUhUTUxOb2RlKGluZGV4RGlyZWN0aXZlSFRNTE5vZGUpLFxuICAgICAgICAgIGluZGV4SFRNTFRyYW5zZm9ybSA9IEluZGV4SFRNTFRyYW5zZm9ybS5mcm9tSW5kZXhEaXJlY3RpdmVIVE1MVHJhbnNmb3JtQW5kRGl2aXNpb25IVE1MTm9kZXMoaW5kZXhEaXJlY3RpdmVIVE1MVHJhbnNmb3JtLCBkaXZpc2lvbkhUTUxOb2RlcywgY29udGV4dCk7XG5cbiAgICAoaW5kZXhIVE1MVHJhbnNmb3JtICE9PSBudWxsKSA/XG4gICAgICBpbmRleEhUTUxUcmFuc2Zvcm0ucmVwbGFjZUluZGV4RGlyZWN0aXZlSFRNTFRyYW5zZm9ybShpbmRleERpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0pIDpcbiAgICAgICAgaW5kZXhEaXJlY3RpdmVIVE1MVHJhbnNmb3JtLnJlbW92ZSgpO1xuICB9XG5cbiAgYWRkQ29udGVudHMoY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgY29udGVudHNEaXJlY3RpdmVIVE1MTm9kZSA9IGNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZShub2RlKTtcblxuICAgIGlmIChjb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdG9wbW9zdEhUTUxOb2RlID0gdGhpcywgLy8vXG4gICAgICAgICAgY29udGVudHNEaXJlY3RpdmVIVE1MVHJhbnNmb3JtID0gQ29udGVudHNEaXJlY3RpdmVIVE1MVHJhbnNmb3JtLmZyb21Db250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlKGNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGUpLFxuICAgICAgICAgIGNvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm0gPSBDb250ZW50c0xpc3RIVE1MVHJhbnNmb3JtLmZyb21Db250ZW50c0RpcmVjdGl2ZUhUTUxUcmFuc2Zvcm1BbmRUb3Btb3N0SFRNTE5vZGUoY29udGVudHNEaXJlY3RpdmVIVE1MVHJhbnNmb3JtLCB0b3Btb3N0SFRNTE5vZGUsIGNvbnRleHQpO1xuXG4gICAgKGNvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm0gIT09IG51bGwpID9cbiAgICAgIGNvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm0ucmVwbGFjZUNvbnRlbnRzRGlyZWN0aXZlSFRNTFRyYW5zZm9ybShjb250ZW50c0RpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0pIDpcbiAgICAgICAgY29udGVudHNEaXJlY3RpdmVIVE1MVHJhbnNmb3JtLnJlbW92ZSgpO1xuICB9XG5cbiAgYWRqdXN0SW5kZW50KGluZGVudCkge1xuICAgIHJldHVybiBpbmRlbnQ7XG4gIH1cblxuICBnZXRSdWxlTmFtZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IEhUTUxfUlVMRV9OQU1FO1xuXG4gICAgcmV0dXJuIHJ1bGVOYW1lO1xuICB9XG5cbiAgZ2V0RGl2aXNpb25IVE1MTm9kZXMoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBkaXZpc2lvbkhUTUxOb2RlcyA9IGRpdmlzaW9uSFRNTE5vZGVzRnJvbU5vZGUobm9kZSk7XG5cbiAgICByZXR1cm4gZGl2aXNpb25IVE1MTm9kZXM7XG4gIH1cblxuICBnZXREaXZpc2lvbkhUTUxOb2RlQXQoaW5kZXgpIHtcbiAgICBjb25zdCBkaXZpc2lvbkhUTUxOb2RlcyA9IHRoaXMuZ2V0RGl2aXNpb25IVE1MTm9kZXMoKSxcbiAgICAgICAgICBkaXZpc2lvbkhUTUxOb2RlID0gZGl2aXNpb25IVE1MTm9kZXNbaW5kZXhdIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZGl2aXNpb25IVE1MTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJodG1sXCI7XG5cbiAgc3RhdGljIGNsYXNzTmFtZSA9IG51bGw7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyByZXR1cm4gSFRNTE5vZGUuZnJvbU5vdGhpbmcoVG9wbW9zdEhUTUxOb2RlKTsgfVxufVxuXG5mdW5jdGlvbiBkaXZpc2lvbkhUTUxUcmFuc2Zvcm1zRnJvbURpdmlzaW9uSFRNTE5vZGVzKGRpdmlzaW9uSFRNTE5vZGVzKSB7XG4gIGNvbnN0IGRpdmlzaW9uSFRNTFRyYW5zZm9ybXMgPSBkaXZpc2lvbkhUTUxOb2Rlcy5tYXAoKGRpdmlzaW9uSFRNTE5vZGUpID0+IHtcbiAgICBjb25zdCBkaXZpc2lvbkhUTUxUcmFuc2Zvcm0gPSBEaXZpc2lvbkhUTUxUcmFuc2Zvcm0uZnJvbURpdmlzaW9uSFRNTE5vZGUoZGl2aXNpb25IVE1MTm9kZSk7XG5cbiAgICByZXR1cm4gZGl2aXNpb25IVE1MVHJhbnNmb3JtO1xuICB9KTtcblxuICByZXR1cm4gZGl2aXNpb25IVE1MVHJhbnNmb3Jtcztcbn1cbiJdLCJuYW1lcyI6WyJUb3Btb3N0SFRNTE5vZGUiLCJyZXNvbHZlIiwiY29udGV4dCIsInBhZ2luYXRlIiwiYWRkQ29udGVudHMiLCJhZGRJbmRleCIsImRpdmlzaW9uSFRNTE5vZGVzIiwiZGl2aXNpb25IVE1MVHJhbnNmb3JtcyIsImdldERpdmlzaW9uSFRNTE5vZGVzIiwiZGl2aXNpb25IVE1MVHJhbnNmb3Jtc0Zyb21EaXZpc2lvbkhUTUxOb2RlcyIsInBhZ2VOdW1iZXIiLCJPYmplY3QiLCJhc3NpZ24iLCJmb3JFYWNoIiwiZGl2aXNpb25IVE1MVHJhbnNmb3JtIiwicmVtb3ZlIiwidG9wbW9zdEhUTUxOb2RlIiwiYXBwZW5kVG9Ub3Btb3N0SFRNTE5vZGUiLCJub2RlIiwiaW5kZXhEaXJlY3RpdmVIVE1MTm9kZSIsImluZGV4RGlyZWN0aXZlSFRNTE5vZGVGcm9tTm9kZSIsImluZGV4RGlyZWN0aXZlSFRNTFRyYW5zZm9ybSIsIkluZGV4RGlyZWN0aXZlSFRNTFRyYW5zZm9ybSIsImZyb21JbmRleERpcmVjdGl2ZUhUTUxOb2RlIiwiaW5kZXhIVE1MVHJhbnNmb3JtIiwiSW5kZXhIVE1MVHJhbnNmb3JtIiwiZnJvbUluZGV4RGlyZWN0aXZlSFRNTFRyYW5zZm9ybUFuZERpdmlzaW9uSFRNTE5vZGVzIiwicmVwbGFjZUluZGV4RGlyZWN0aXZlSFRNTFRyYW5zZm9ybSIsImNvbnRlbnRzRGlyZWN0aXZlSFRNTE5vZGUiLCJjb250ZW50c0RpcmVjdGl2ZUhUTUxOb2RlRnJvbU5vZGUiLCJjb250ZW50c0RpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0iLCJDb250ZW50c0RpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0iLCJmcm9tQ29udGVudHNEaXJlY3RpdmVIVE1MTm9kZSIsImNvbnRlbnRzTGlzdEhUTUxUcmFuc2Zvcm0iLCJDb250ZW50c0xpc3RIVE1MVHJhbnNmb3JtIiwiZnJvbUNvbnRlbnRzRGlyZWN0aXZlSFRNTFRyYW5zZm9ybUFuZFRvcG1vc3RIVE1MTm9kZSIsInJlcGxhY2VDb250ZW50c0RpcmVjdGl2ZUhUTUxUcmFuc2Zvcm0iLCJhZGp1c3RJbmRlbnQiLCJpbmRlbnQiLCJnZXRSdWxlTmFtZSIsInJ1bGVOYW1lIiwiSFRNTF9SVUxFX05BTUUiLCJkaXZpc2lvbkhUTUxOb2Rlc0Zyb21Ob2RlIiwiZ2V0RGl2aXNpb25IVE1MTm9kZUF0IiwiaW5kZXgiLCJkaXZpc2lvbkhUTUxOb2RlIiwiZnJvbU5vdGhpbmciLCJIVE1MTm9kZSIsInRhZ05hbWUiLCJjbGFzc05hbWUiLCJtYXAiLCJEaXZpc2lvbkhUTUxUcmFuc2Zvcm0iLCJmcm9tRGl2aXNpb25IVE1M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