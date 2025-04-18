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
var _footnotesList = /*#__PURE__*/ _interop_require_default(require("../node/markdown/footnotesList"));
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
                    var footnotesListMarkdownNode = _footnotesList.default.fromFootnotesItemTransformsAndStart(footnotesItemTransforms, start), node1 = footnotesListMarkdownNode, tokens = [];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm0vZm9vdG5vdGVzTGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSBcIm9jY2FtLWRvbVwiO1xuXG5pbXBvcnQgRm9vdG5vdGVzSXRlbVRyYW5zZm9ybSBmcm9tIFwiLi4vdHJhbnNmb3JtL2Zvb3Rub3Rlc0l0ZW1cIjtcbmltcG9ydCBGb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIGZyb20gXCIuLi9ub2RlL21hcmtkb3duL2Zvb3Rub3Rlc0xpc3RcIjtcblxuaW1wb3J0IHsgZm9vdG5vdGVMaW5rTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290bm90ZXNMaXN0VHJhbnNmb3JtIGV4dGVuZHMgVHJhbnNmb3JtIHtcbiAgcmVwbGFjZUZvb3Rub3Rlc0RpcmVjdGl2ZVN1YkRpdmlzaW9uVHJhbnNmb3JtKGZvb3Rub3Rlc0RpcmVjdGl2ZVN1YkRpdmlzaW9uVHJhbnNmb3JtLCBkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHN1YkRpdmlzaW9uTWFya2Rvd25Ob2RlID0gZm9vdG5vdGVzRGlyZWN0aXZlU3ViRGl2aXNpb25UcmFuc2Zvcm0uZ2V0U3ViRGl2aXNpb25NYXJrZG93bk5vZGUoKSxcbiAgICAgICAgICByZXBsYWNlZE5vZGUgPSBzdWJEaXZpc2lvbk1hcmtkb3duTm9kZSwgLy8vXG4gICAgICAgICAgcGFyZW50Tm9kZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlOyAgLy8vXG5cbiAgICBzdXBlci5yZXBsYWNlKHJlcGxhY2VkTm9kZSwgcGFyZW50Tm9kZSwgY29udGV4dClcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGl2aXNpb25NYXJrZG93bk5vZGVBbmRGb290bm90ZVRyYW5zZm9ybU1hcChkaXZpc2lvbk1hcmtkb3duTm9kZSwgZm9vdG5vdGVUcmFuc2Zvcm1NYXAsIGNvbnRleHQpIHtcbiAgICBsZXQgZm9vdG5vdGVzTGlzdFRyYW5zZm9ybSA9IG51bGw7XG5cbiAgICBjb25zdCBub2RlID0gZGl2aXNpb25NYXJrZG93bk5vZGUsICAvLy9cbiAgICAgICAgICBzdGFydCA9IHN0YXJ0RnJvbUZvb3Rub3RlVHJhbnNmb3JtTWFwKGZvb3Rub3RlVHJhbnNmb3JtTWFwKSxcbiAgICAgICAgICBmb290bm90ZUxpbmtNYXJrZG93bk5vZGVzID0gZm9vdG5vdGVMaW5rTWFya2Rvd25Ob2Rlc0Zyb21Ob2RlKG5vZGUpLFxuICAgICAgICAgIGZvb3Rub3Rlc0l0ZW1UcmFuc2Zvcm1zID0gW107XG5cbiAgICBsZXQgbnVtYmVyID0gc3RhcnQ7XG5cbiAgICBmb290bm90ZUxpbmtNYXJrZG93bk5vZGVzLmZvckVhY2goKGZvb3Rub3RlTGlua01hcmtkb3duTm9kZSkgPT4ge1xuICAgICAgY29uc3QgaWRlbnRpZmllciA9IGZvb3Rub3RlTGlua01hcmtkb3duTm9kZS5pZGVudGlmaWVyKGNvbnRleHQpLFxuICAgICAgICAgICAgZm9vdG5vdGVUcmFuc2Zvcm0gPSBmb290bm90ZVRyYW5zZm9ybU1hcFtpZGVudGlmaWVyXSB8fCBudWxsO1xuXG4gICAgICBpZiAoZm9vdG5vdGVUcmFuc2Zvcm0gIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZm9vdG5vdGVUcmFuc2Zvcm1Vbm51bWJlcmVkID0gZm9vdG5vdGVUcmFuc2Zvcm0uaXNVbm51bWJlcmVkKCk7XG5cbiAgICAgICAgaWYgKGZvb3Rub3RlVHJhbnNmb3JtVW5udW1iZXJlZCkge1xuICAgICAgICAgIGNvbnN0IGZvb3Rub3Rlc0l0ZW1UcmFuc2Zvcm0gPSBGb290bm90ZXNJdGVtVHJhbnNmb3JtLmZyb21Gb290bm90ZVRyYW5zZm9ybUFuZElkZW50aWZpZXIoZm9vdG5vdGVUcmFuc2Zvcm0sIGlkZW50aWZpZXIsIGNvbnRleHQpO1xuXG4gICAgICAgICAgZm9vdG5vdGVzSXRlbVRyYW5zZm9ybXMucHVzaChmb290bm90ZXNJdGVtVHJhbnNmb3JtKTtcblxuICAgICAgICAgIGZvb3Rub3RlVHJhbnNmb3JtLnNldE51bWJlcihudW1iZXIpO1xuXG4gICAgICAgICAgbnVtYmVyKys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGZvb3Rub3Rlc0l0ZW1UcmFuc2Zvcm1zTGVuZ3RoID0gZm9vdG5vdGVzSXRlbVRyYW5zZm9ybXMubGVuZ3RoO1xuXG4gICAgaWYgKGZvb3Rub3Rlc0l0ZW1UcmFuc2Zvcm1zTGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgZm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSA9IEZvb3Rub3Rlc0xpc3RNYXJrZG93bk5vZGUuZnJvbUZvb3Rub3Rlc0l0ZW1UcmFuc2Zvcm1zQW5kU3RhcnQoZm9vdG5vdGVzSXRlbVRyYW5zZm9ybXMsIHN0YXJ0KSxcbiAgICAgICAgICAgIG5vZGUgPSBmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlLCAvLy9cbiAgICAgICAgICAgIHRva2VucyA9IFtdO1xuXG4gICAgICBmb290bm90ZXNJdGVtVHJhbnNmb3Jtcy5mb3JFYWNoKChmb290bm90ZXNJdGVtVHJhbnNmb3JtKSA9PiB7XG4gICAgICAgIGZvb3Rub3Rlc0l0ZW1UcmFuc2Zvcm0uZ2V0VG9rZW5zKHRva2Vucyk7XG4gICAgICB9KTtcblxuICAgICAgZm9vdG5vdGVzTGlzdFRyYW5zZm9ybSA9IFRyYW5zZm9ybS5mcm9tTm9kZUFuZFRva2VucyhGb290bm90ZXNMaXN0VHJhbnNmb3JtLCBub2RlLCB0b2tlbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBmb290bm90ZXNMaXN0VHJhbnNmb3JtO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0YXJ0RnJvbUZvb3Rub3RlVHJhbnNmb3JtTWFwKGZvb3Rub3RlVHJhbnNmb3JtTWFwKSB7XG4gIGNvbnN0IGZvb3Rub3RlVHJhbnNmb3JtcyA9IE9iamVjdC52YWx1ZXMoZm9vdG5vdGVUcmFuc2Zvcm1NYXApLCAgLy8vXG4gICAgICAgIG51bWJlcmVkRm9vdG5vdGVUcmFuc2Zvcm1zID0gZm9vdG5vdGVUcmFuc2Zvcm1zLmZpbHRlcigoZm9vdG5vdGVUcmFuc2Zvcm0pID0+IHtcbiAgICAgICAgICBjb25zdCBmb290bm90ZVRyYW5zZm9ybU51bWJlcmVkID0gZm9vdG5vdGVUcmFuc2Zvcm0uaXNOdW1iZXJlZCgpO1xuXG4gICAgICAgICAgaWYgKGZvb3Rub3RlVHJhbnNmb3JtTnVtYmVyZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIG51bWJlcmVkRm9vdG5vdGVUcmFuc2Zvcm1zTGVuZ3RoID0gbnVtYmVyZWRGb290bm90ZVRyYW5zZm9ybXMubGVuZ3RoLFxuICAgICAgICBzdGFydCA9IG51bWJlcmVkRm9vdG5vdGVUcmFuc2Zvcm1zTGVuZ3RoICsgMTtcblxuICByZXR1cm4gc3RhcnQ7XG59XG4iXSwibmFtZXMiOlsiRm9vdG5vdGVzTGlzdFRyYW5zZm9ybSIsInJlcGxhY2VGb290bm90ZXNEaXJlY3RpdmVTdWJEaXZpc2lvblRyYW5zZm9ybSIsImZvb3Rub3Rlc0RpcmVjdGl2ZVN1YkRpdmlzaW9uVHJhbnNmb3JtIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJjb250ZXh0Iiwic3ViRGl2aXNpb25NYXJrZG93bk5vZGUiLCJnZXRTdWJEaXZpc2lvbk1hcmtkb3duTm9kZSIsInJlcGxhY2VkTm9kZSIsInBhcmVudE5vZGUiLCJyZXBsYWNlIiwiZnJvbURpdmlzaW9uTWFya2Rvd25Ob2RlQW5kRm9vdG5vdGVUcmFuc2Zvcm1NYXAiLCJmb290bm90ZVRyYW5zZm9ybU1hcCIsImZvb3Rub3Rlc0xpc3RUcmFuc2Zvcm0iLCJub2RlIiwic3RhcnQiLCJzdGFydEZyb21Gb290bm90ZVRyYW5zZm9ybU1hcCIsImZvb3Rub3RlTGlua01hcmtkb3duTm9kZXMiLCJmb290bm90ZUxpbmtNYXJrZG93bk5vZGVzRnJvbU5vZGUiLCJmb290bm90ZXNJdGVtVHJhbnNmb3JtcyIsIm51bWJlciIsImZvckVhY2giLCJmb290bm90ZUxpbmtNYXJrZG93bk5vZGUiLCJpZGVudGlmaWVyIiwiZm9vdG5vdGVUcmFuc2Zvcm0iLCJmb290bm90ZVRyYW5zZm9ybVVubnVtYmVyZWQiLCJpc1VubnVtYmVyZWQiLCJmb290bm90ZXNJdGVtVHJhbnNmb3JtIiwiRm9vdG5vdGVzSXRlbVRyYW5zZm9ybSIsImZyb21Gb290bm90ZVRyYW5zZm9ybUFuZElkZW50aWZpZXIiLCJwdXNoIiwic2V0TnVtYmVyIiwiZm9vdG5vdGVzSXRlbVRyYW5zZm9ybXNMZW5ndGgiLCJsZW5ndGgiLCJmb290bm90ZXNMaXN0TWFya2Rvd25Ob2RlIiwiRm9vdG5vdGVzTGlzdE1hcmtkb3duTm9kZSIsImZyb21Gb290bm90ZXNJdGVtVHJhbnNmb3Jtc0FuZFN0YXJ0IiwidG9rZW5zIiwiZ2V0VG9rZW5zIiwiVHJhbnNmb3JtIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJmb290bm90ZVRyYW5zZm9ybXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJudW1iZXJlZEZvb3Rub3RlVHJhbnNmb3JtcyIsImZpbHRlciIsImZvb3Rub3RlVHJhbnNmb3JtTnVtYmVyZWQiLCJpc051bWJlcmVkIiwibnVtYmVyZWRGb290bm90ZVRyYW5zZm9ybXNMZW5ndGgiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7O3dCQVBLO29FQUVTO29FQUNHO3FCQUVZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkMsSUFBQSxBQUFNQSx1Q0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSw4Q0FBOENDLHNDQUFzQyxFQUFFQyxvQkFBb0IsRUFBRUMsT0FBTztnQkFDakgsSUFBTUMsMEJBQTBCSCx1Q0FBdUNJLDBCQUEwQixJQUMzRkMsZUFBZUYseUJBQ2ZHLGFBQWFMLHNCQUF1QixHQUFHO2dCQUU3Qyx1QkFOaUJILG1DQU1YUyxXQUFOLElBQUssYUFBU0YsY0FBY0MsWUFBWUo7WUFDMUM7Ozs7WUFFT00sS0FBQUE7bUJBQVAsU0FBT0EsZ0RBQWdEUCxvQkFBb0IsRUFBRVEsb0JBQW9CLEVBQUVQLE9BQU87Z0JBQ3hHLElBQUlRLHlCQUF5QjtnQkFFN0IsSUFBTUMsT0FBT1Ysc0JBQ1BXLFFBQVFDLDhCQUE4QkosdUJBQ3RDSyw0QkFBNEJDLElBQUFBLHdDQUFpQyxFQUFDSixPQUM5REssMEJBQTBCLEVBQUU7Z0JBRWxDLElBQUlDLFNBQVNMO2dCQUViRSwwQkFBMEJJLE9BQU8sQ0FBQyxTQUFDQztvQkFDakMsSUFBTUMsYUFBYUQseUJBQXlCQyxVQUFVLENBQUNsQixVQUNqRG1CLG9CQUFvQlosb0JBQW9CLENBQUNXLFdBQVcsSUFBSTtvQkFFOUQsSUFBSUMsc0JBQXNCLE1BQU07d0JBQzlCLElBQU1DLDhCQUE4QkQsa0JBQWtCRSxZQUFZO3dCQUVsRSxJQUFJRCw2QkFBNkI7NEJBQy9CLElBQU1FLHlCQUF5QkMsc0JBQXNCLENBQUNDLGtDQUFrQyxDQUFDTCxtQkFBbUJELFlBQVlsQjs0QkFFeEhjLHdCQUF3QlcsSUFBSSxDQUFDSDs0QkFFN0JILGtCQUFrQk8sU0FBUyxDQUFDWDs0QkFFNUJBO3dCQUNGO29CQUNGO2dCQUNGO2dCQUVBLElBQU1ZLGdDQUFnQ2Isd0JBQXdCYyxNQUFNO2dCQUVwRSxJQUFJRCxnQ0FBZ0MsR0FBRztvQkFDckMsSUFBTUUsNEJBQTRCQyxzQkFBeUIsQ0FBQ0MsbUNBQW1DLENBQUNqQix5QkFBeUJKLFFBQ25IRCxRQUFPb0IsMkJBQ1BHLFNBQVMsRUFBRTtvQkFFakJsQix3QkFBd0JFLE9BQU8sQ0FBQyxTQUFDTTt3QkFDL0JBLHVCQUF1QlcsU0FBUyxDQUFDRDtvQkFDbkM7b0JBRUF4Qix5QkFBeUIwQixtQkFBUyxDQUFDQyxpQkFBaUIsQ0FqRHJDdkMsd0JBaUQ4RGEsT0FBTXVCO2dCQUNyRjtnQkFFQSxPQUFPeEI7WUFDVDs7O1dBckRtQlo7RUFBK0JzQyxtQkFBUztBQXdEN0QsU0FBU3ZCLDhCQUE4Qkosb0JBQW9CO0lBQ3pELElBQU02QixxQkFBcUJDLE9BQU9DLE1BQU0sQ0FBQy9CLHVCQUNuQ2dDLDZCQUE2QkgsbUJBQW1CSSxNQUFNLENBQUMsU0FBQ3JCO1FBQ3RELElBQU1zQiw0QkFBNEJ0QixrQkFBa0J1QixVQUFVO1FBRTlELElBQUlELDJCQUEyQjtZQUM3QixPQUFPO1FBQ1Q7SUFDRixJQUNBRSxtQ0FBbUNKLDJCQUEyQlgsTUFBTSxFQUNwRWxCLFFBQVFpQyxtQ0FBbUM7SUFFakQsT0FBT2pDO0FBQ1QifQ==