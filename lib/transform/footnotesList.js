"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FootnotesListTransform;
    }
});
var _occamdom = require("occam-dom");
var _footnotesItem = /*#__PURE__*/ _interop_require_default(require("../transform/footnotesItem"));
var _footnotes = /*#__PURE__*/ _interop_require_default(require("../node/markdown/list/footnotes"));
var _query = require("../utilities/query");
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
var FootnotesListTransform = /*#__PURE__*/ function(Transform) {
    _inherits(FootnotesListTransform, Transform);
    function FootnotesListTransform() {
        _class_call_check(this, FootnotesListTransform);
        return _call_super(this, FootnotesListTransform, arguments);
    }
    _create_class(FootnotesListTransform, [
        {
            key: "replaceFootnotesDirectiveSubDivisionTransform",
            value: function replaceFootnotesDirectiveSubDivisionTransform(footnotesDirectiveSubDivisionTransform, divisionMarkdownNode, context) {
                var subDivisionMarkdownNode = footnotesDirectiveSubDivisionTransform.getSubDivisionMarkdownNode(), replacedNode = subDivisionMarkdownNode, parentNode = divisionMarkdownNode; ///
                _get(_get_prototype_of(FootnotesListTransform.prototype), "replace", this).call(this, replacedNode, parentNode, context);
            }
        }
    ], [
        {
            key: "fromDivisionMarkdownNodeAndFootnoteTransformMap",
            value: function fromDivisionMarkdownNodeAndFootnoteTransformMap(divisionMarkdownNode, footnoteTransformMap, context) {
                var footnotesListTransform = null;
                var node = divisionMarkdownNode, start = startFromFootnoteTransformMap(footnoteTransformMap), footnoteLinkMarkdownNodes = (0, _query.footnoteLinkMarkdownNodesFromNode)(node), footnotesItemTransforms = [];
                var number = start;
                footnoteLinkMarkdownNodes.forEach(function(footnoteLinkMarkdownNode) {
                    var identifier = footnoteLinkMarkdownNode.identifier(context), footnoteTransform = footnoteTransformMap[identifier] || null;
                    if (footnoteTransform !== null) {
                        var footnoteTransformUnnumbered = footnoteTransform.isUnnumbered();
                        if (footnoteTransformUnnumbered) {
                            var footnotesItemTransform = _footnotesItem.default.fromFootnoteTransformAndIdentifier(footnoteTransform, identifier, context);
                            footnotesItemTransforms.push(footnotesItemTransform);
                            footnoteTransform.setNumber(number);
                            number++;
                        }
                    }
                });
                var footnotesItemTransformsLength = footnotesItemTransforms.length;
                if (footnotesItemTransformsLength > 0) {
                    var footnotesListMarkdownNode = _footnotes.default.fromFootnotesItemTransformsAndStart(footnotesItemTransforms, start), node1 = footnotesListMarkdownNode, tokens = [];
                    footnotesItemTransforms.forEach(function(footnotesItemTransform) {
                        footnotesItemTransform.getTokens(tokens);
                    });
                    footnotesListTransform = _occamdom.Transform.fromNodeAndTokens(FootnotesListTransform, node1, tokens);
                }
                return footnotesListTransform;
            }
        }
    ]);
    return FootnotesListTransform;
}(_occamdom.Transform);
function startFromFootnoteTransformMap(footnoteTransformMap) {
    var footnoteTransforms = Object.values(footnoteTransformMap), numberedFootnoteTransforms = footnoteTransforms.filter(function(footnoteTransform) {
        var footnoteTransformNumbered = footnoteTransform.isNumbered();
        if (footnoteTransformNumbered) {
            return true;
        }
    }), numberedFootnoteTransformsLength = numberedFootnoteTransforms.length, start = numberedFootnoteTransformsLength + 1;
    return start;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vZm9vdG5vdGVzTGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSBcIm9jY2FtLWRvbVwiO1xuXG5pbXBvcnQgRm9vdG5vdGVzSXRlbVRyYW5zZm9ybSBmcm9tIFwiLi4vdHJhbnNmb3JtL2Zvb3Rub3Rlc0l0ZW1cIjtcbmltcG9ydCBGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIGZyb20gXCIuLi9ub2RlL21hcmtkb3duL2xpc3QvZm9vdG5vdGVzXCI7XG5cbmltcG9ydCB7IGZvb3Rub3RlTGlua01hcmtkb3duTm9kZXNGcm9tTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdG5vdGVzTGlzdFRyYW5zZm9ybSBleHRlbmRzIFRyYW5zZm9ybSB7XG4gIHJlcGxhY2VGb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblRyYW5zZm9ybShmb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblRyYW5zZm9ybSwgZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSA9IGZvb3Rub3Rlc0RpcmVjdGl2ZVN1YkRpdmlzaW9uVHJhbnNmb3JtLmdldFN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlKCksXG4gICAgICAgICAgcmVwbGFjZWROb2RlID0gc3ViRGl2aXNpb25NYXJrZG93bk5vZGUsIC8vL1xuICAgICAgICAgIHBhcmVudE5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZTsgIC8vL1xuXG4gICAgc3VwZXIucmVwbGFjZShyZXBsYWNlZE5vZGUsIHBhcmVudE5vZGUsIGNvbnRleHQpXG4gIH1cblxuICBzdGF0aWMgZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlQW5kRm9vdG5vdGVUcmFuc2Zvcm1NYXAoZGl2aXNpb25NYXJrZG93bk5vZGUsIGZvb3Rub3RlVHJhbnNmb3JtTWFwLCBjb250ZXh0KSB7XG4gICAgbGV0IGZvb3Rub3Rlc0xpc3RUcmFuc2Zvcm0gPSBudWxsO1xuXG4gICAgY29uc3Qgbm9kZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLCAgLy8vXG4gICAgICAgICAgc3RhcnQgPSBzdGFydEZyb21Gb290bm90ZVRyYW5zZm9ybU1hcChmb290bm90ZVRyYW5zZm9ybU1hcCksXG4gICAgICAgICAgZm9vdG5vdGVMaW5rTWFya2Rvd25Ob2RlcyA9IGZvb3Rub3RlTGlua01hcmtkb3duTm9kZXNGcm9tTm9kZShub2RlKSxcbiAgICAgICAgICBmb290bm90ZXNJdGVtVHJhbnNmb3JtcyA9IFtdO1xuXG4gICAgbGV0IG51bWJlciA9IHN0YXJ0O1xuXG4gICAgZm9vdG5vdGVMaW5rTWFya2Rvd25Ob2Rlcy5mb3JFYWNoKChmb290bm90ZUxpbmtNYXJrZG93bk5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGlkZW50aWZpZXIgPSBmb290bm90ZUxpbmtNYXJrZG93bk5vZGUuaWRlbnRpZmllcihjb250ZXh0KSxcbiAgICAgICAgICAgIGZvb3Rub3RlVHJhbnNmb3JtID0gZm9vdG5vdGVUcmFuc2Zvcm1NYXBbaWRlbnRpZmllcl0gfHwgbnVsbDtcblxuICAgICAgaWYgKGZvb3Rub3RlVHJhbnNmb3JtICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGZvb3Rub3RlVHJhbnNmb3JtVW5udW1iZXJlZCA9IGZvb3Rub3RlVHJhbnNmb3JtLmlzVW5udW1iZXJlZCgpO1xuXG4gICAgICAgIGlmIChmb290bm90ZVRyYW5zZm9ybVVubnVtYmVyZWQpIHtcbiAgICAgICAgICBjb25zdCBmb290bm90ZXNJdGVtVHJhbnNmb3JtID0gRm9vdG5vdGVzSXRlbVRyYW5zZm9ybS5mcm9tRm9vdG5vdGVUcmFuc2Zvcm1BbmRJZGVudGlmaWVyKGZvb3Rub3RlVHJhbnNmb3JtLCBpZGVudGlmaWVyLCBjb250ZXh0KTtcblxuICAgICAgICAgIGZvb3Rub3Rlc0l0ZW1UcmFuc2Zvcm1zLnB1c2goZm9vdG5vdGVzSXRlbVRyYW5zZm9ybSk7XG5cbiAgICAgICAgICBmb290bm90ZVRyYW5zZm9ybS5zZXROdW1iZXIobnVtYmVyKTtcblxuICAgICAgICAgIG51bWJlcisrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBmb290bm90ZXNJdGVtVHJhbnNmb3Jtc0xlbmd0aCA9IGZvb3Rub3Rlc0l0ZW1UcmFuc2Zvcm1zLmxlbmd0aDtcblxuICAgIGlmIChmb290bm90ZXNJdGVtVHJhbnNmb3Jtc0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUgPSBGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlLmZyb21Gb290bm90ZXNJdGVtVHJhbnNmb3Jtc0FuZFN0YXJ0KGZvb3Rub3Rlc0l0ZW1UcmFuc2Zvcm1zLCBzdGFydCksXG4gICAgICAgICAgICBub2RlID0gZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSwgLy8vXG4gICAgICAgICAgICB0b2tlbnMgPSBbXTtcblxuICAgICAgZm9vdG5vdGVzSXRlbVRyYW5zZm9ybXMuZm9yRWFjaCgoZm9vdG5vdGVzSXRlbVRyYW5zZm9ybSkgPT4ge1xuICAgICAgICBmb290bm90ZXNJdGVtVHJhbnNmb3JtLmdldFRva2Vucyh0b2tlbnMpO1xuICAgICAgfSk7XG5cbiAgICAgIGZvb3Rub3Rlc0xpc3RUcmFuc2Zvcm0gPSBUcmFuc2Zvcm0uZnJvbU5vZGVBbmRUb2tlbnMoRm9vdG5vdGVzTGlzdFRyYW5zZm9ybSwgbm9kZSwgdG9rZW5zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm9vdG5vdGVzTGlzdFRyYW5zZm9ybTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdGFydEZyb21Gb290bm90ZVRyYW5zZm9ybU1hcChmb290bm90ZVRyYW5zZm9ybU1hcCkge1xuICBjb25zdCBmb290bm90ZVRyYW5zZm9ybXMgPSBPYmplY3QudmFsdWVzKGZvb3Rub3RlVHJhbnNmb3JtTWFwKSwgIC8vL1xuICAgICAgICBudW1iZXJlZEZvb3Rub3RlVHJhbnNmb3JtcyA9IGZvb3Rub3RlVHJhbnNmb3Jtcy5maWx0ZXIoKGZvb3Rub3RlVHJhbnNmb3JtKSA9PiB7XG4gICAgICAgICAgY29uc3QgZm9vdG5vdGVUcmFuc2Zvcm1OdW1iZXJlZCA9IGZvb3Rub3RlVHJhbnNmb3JtLmlzTnVtYmVyZWQoKTtcblxuICAgICAgICAgIGlmIChmb290bm90ZVRyYW5zZm9ybU51bWJlcmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBudW1iZXJlZEZvb3Rub3RlVHJhbnNmb3Jtc0xlbmd0aCA9IG51bWJlcmVkRm9vdG5vdGVUcmFuc2Zvcm1zLmxlbmd0aCxcbiAgICAgICAgc3RhcnQgPSBudW1iZXJlZEZvb3Rub3RlVHJhbnNmb3Jtc0xlbmd0aCArIDE7XG5cbiAgcmV0dXJuIHN0YXJ0O1xufVxuIl0sIm5hbWVzIjpbIkZvb3Rub3Rlc0xpc3RUcmFuc2Zvcm0iLCJyZXBsYWNlRm9vdG5vdGVzRGlyZWN0aXZlU3ViRGl2aXNpb25UcmFuc2Zvcm0iLCJmb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblRyYW5zZm9ybSIsImRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiY29udGV4dCIsInN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlIiwiZ2V0U3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJyZXBsYWNlZE5vZGUiLCJwYXJlbnROb2RlIiwicmVwbGFjZSIsImZyb21EaXZpc2lvbk1hcmtkb3duTm9kZUFuZEZvb3Rub3RlVHJhbnNmb3JtTWFwIiwiZm9vdG5vdGVUcmFuc2Zvcm1NYXAiLCJmb290bm90ZXNMaXN0VHJhbnNmb3JtIiwibm9kZSIsInN0YXJ0Iiwic3RhcnRGcm9tRm9vdG5vdGVUcmFuc2Zvcm1NYXAiLCJmb290bm90ZUxpbmtNYXJrZG93bk5vZGVzIiwiZm9vdG5vdGVMaW5rTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIiwiZm9vdG5vdGVzSXRlbVRyYW5zZm9ybXMiLCJudW1iZXIiLCJmb3JFYWNoIiwiZm9vdG5vdGVMaW5rTWFya2Rvd25Ob2RlIiwiaWRlbnRpZmllciIsImZvb3Rub3RlVHJhbnNmb3JtIiwiZm9vdG5vdGVUcmFuc2Zvcm1Vbm51bWJlcmVkIiwiaXNVbm51bWJlcmVkIiwiZm9vdG5vdGVzSXRlbVRyYW5zZm9ybSIsIkZvb3Rub3Rlc0l0ZW1UcmFuc2Zvcm0iLCJmcm9tRm9vdG5vdGVUcmFuc2Zvcm1BbmRJZGVudGlmaWVyIiwicHVzaCIsInNldE51bWJlciIsImZvb3Rub3Rlc0l0ZW1UcmFuc2Zvcm1zTGVuZ3RoIiwibGVuZ3RoIiwiZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSIsIkZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUiLCJmcm9tRm9vdG5vdGVzSXRlbVRyYW5zZm9ybXNBbmRTdGFydCIsInRva2VucyIsImdldFRva2VucyIsIlRyYW5zZm9ybSIsImZyb21Ob2RlQW5kVG9rZW5zIiwiZm9vdG5vdGVUcmFuc2Zvcm1zIiwiT2JqZWN0IiwidmFsdWVzIiwibnVtYmVyZWRGb290bm90ZVRyYW5zZm9ybXMiLCJmaWx0ZXIiLCJmb290bm90ZVRyYW5zZm9ybU51bWJlcmVkIiwiaXNOdW1iZXJlZCIsIm51bWJlcmVkRm9vdG5vdGVUcmFuc2Zvcm1zTGVuZ3RoIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7Ozt3QkFQSztvRUFFUztnRUFDRztxQkFFWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5DLElBQUEsQUFBTUEsdUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsOENBQThDQyxzQ0FBc0MsRUFBRUMsb0JBQW9CLEVBQUVDLE9BQU87Z0JBQ2pILElBQU1DLDBCQUEwQkgsdUNBQXVDSSwwQkFBMEIsSUFDM0ZDLGVBQWVGLHlCQUNmRyxhQUFhTCxzQkFBdUIsR0FBRztnQkFFN0MsdUJBTmlCSCxtQ0FNWFMsV0FBTixJQUFLLGFBQVNGLGNBQWNDLFlBQVlKO1lBQzFDOzs7O1lBRU9NLEtBQUFBO21CQUFQLFNBQU9BLGdEQUFnRFAsb0JBQW9CLEVBQUVRLG9CQUFvQixFQUFFUCxPQUFPO2dCQUN4RyxJQUFJUSx5QkFBeUI7Z0JBRTdCLElBQU1DLE9BQU9WLHNCQUNQVyxRQUFRQyw4QkFBOEJKLHVCQUN0Q0ssNEJBQTRCQyxJQUFBQSx3Q0FBaUMsRUFBQ0osT0FDOURLLDBCQUEwQixFQUFFO2dCQUVsQyxJQUFJQyxTQUFTTDtnQkFFYkUsMEJBQTBCSSxPQUFPLENBQUMsU0FBQ0M7b0JBQ2pDLElBQU1DLGFBQWFELHlCQUF5QkMsVUFBVSxDQUFDbEIsVUFDakRtQixvQkFBb0JaLG9CQUFvQixDQUFDVyxXQUFXLElBQUk7b0JBRTlELElBQUlDLHNCQUFzQixNQUFNO3dCQUM5QixJQUFNQyw4QkFBOEJELGtCQUFrQkUsWUFBWTt3QkFFbEUsSUFBSUQsNkJBQTZCOzRCQUMvQixJQUFNRSx5QkFBeUJDLHNCQUFzQixDQUFDQyxrQ0FBa0MsQ0FBQ0wsbUJBQW1CRCxZQUFZbEI7NEJBRXhIYyx3QkFBd0JXLElBQUksQ0FBQ0g7NEJBRTdCSCxrQkFBa0JPLFNBQVMsQ0FBQ1g7NEJBRTVCQTt3QkFDRjtvQkFDRjtnQkFDRjtnQkFFQSxJQUFNWSxnQ0FBZ0NiLHdCQUF3QmMsTUFBTTtnQkFFcEUsSUFBSUQsZ0NBQWdDLEdBQUc7b0JBQ3JDLElBQU1FLDRCQUE0QkMsa0JBQXlCLENBQUNDLG1DQUFtQyxDQUFDakIseUJBQXlCSixRQUNuSEQsUUFBT29CLDJCQUNQRyxTQUFTLEVBQUU7b0JBRWpCbEIsd0JBQXdCRSxPQUFPLENBQUMsU0FBQ007d0JBQy9CQSx1QkFBdUJXLFNBQVMsQ0FBQ0Q7b0JBQ25DO29CQUVBeEIseUJBQXlCMEIsbUJBQVMsQ0FBQ0MsaUJBQWlCLENBakRyQ3ZDLHdCQWlEOERhLE9BQU11QjtnQkFDckY7Z0JBRUEsT0FBT3hCO1lBQ1Q7OztXQXJEbUJaO0VBQStCc0MsbUJBQVM7QUF3RDdELFNBQVN2Qiw4QkFBOEJKLG9CQUFvQjtJQUN6RCxJQUFNNkIscUJBQXFCQyxPQUFPQyxNQUFNLENBQUMvQix1QkFDbkNnQyw2QkFBNkJILG1CQUFtQkksTUFBTSxDQUFDLFNBQUNyQjtRQUN0RCxJQUFNc0IsNEJBQTRCdEIsa0JBQWtCdUIsVUFBVTtRQUU5RCxJQUFJRCwyQkFBMkI7WUFDN0IsT0FBTztRQUNUO0lBQ0YsSUFDQUUsbUNBQW1DSiwyQkFBMkJYLE1BQU0sRUFDcEVsQixRQUFRaUMsbUNBQW1DO0lBRWpELE9BQU9qQztBQUNUIn0=