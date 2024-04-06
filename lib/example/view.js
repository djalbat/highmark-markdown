"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _easy = require("easy");
var _easylayout = require("easy-layout");
var _xmp = /*#__PURE__*/ _interop_require_default(require("./view/xmp"));
var _preview = /*#__PURE__*/ _interop_require_default(require("./view/div/preview"));
var _subHeading = /*#__PURE__*/ _interop_require_default(require("./view/subHeading"));
var _bnf = /*#__PURE__*/ _interop_require_default(require("./view/textarea/bnf"));
var _left = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable/left"));
var _right = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable/right"));
var _markdown = /*#__PURE__*/ _interop_require_default(require("./view/textarea/markdown"));
var _parseTree = /*#__PURE__*/ _interop_require_default(require("./view/textarea/parseTree"));
var _lexicalEntries = /*#__PURE__*/ _interop_require_default(require("./view/textarea/lexicalEntries"));
var _index = require("../index");
var _constants = require("./constants");
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
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
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
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  padding: 1rem;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var bnf = _index.MarkdownParser.bnf, entries = _index.MarkdownLexer.entries;
var markdownLexer = _index.MarkdownLexer.fromNothing(), markdownParser = _index.MarkdownParser.fromNothing();
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    var _super = _create_super(View);
    function View() {
        _class_call_check(this, View);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "keyUpHandler", function(event, element) {
            _this.update();
        });
        return _this;
    }
    _create_class(View, [
        {
            key: "update",
            value: function update() {
                var markdown = this.getMarkdown(), lexer = markdownLexer, parser = markdownParser, content = markdown, tokens = lexer.tokenise(content), node = parser.parse(tokens);
                var parseTree = null;
                if (node !== null) {
                    var divisionIdentifier = _constants.DOCUMENT_DIVISION_IDENTIFIER, context = {
                        tokens: tokens,
                        importer: importer,
                        divisionIdentifier: divisionIdentifier
                    }, html = node.asHTML(context), domElement = node.createDOMElement(context);
                    this.xmpHTML(html);
                    this.updatePreviewDiv(domElement);
                    parseTree = node.asParseTree(tokens);
                } else {
                    this.clearXMP();
                    this.clearPreviewDiv();
                }
                this.setParseTree(parseTree);
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement(_easylayout.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_left.default, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Lexical entries"), /*#__PURE__*/ React.createElement(_lexicalEntries.default, {
                    onKeyUp: this.keyUpHandler
                }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "BNF"), /*#__PURE__*/ React.createElement(_bnf.default, {
                    onKeyUp: this.keyUpHandler
                }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Parse tree"), /*#__PURE__*/ React.createElement(_parseTree.default, null)), /*#__PURE__*/ React.createElement(_easylayout.VerticalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easylayout.ColumnDiv, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_right.default, null, /*#__PURE__*/ React.createElement(_xmp.default, null)), /*#__PURE__*/ React.createElement(_easylayout.HorizontalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easylayout.RowDiv, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Preview"), /*#__PURE__*/ React.createElement(_preview.default, null), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Markdown"), /*#__PURE__*/ React.createElement(_markdown.default, {
                    onKeyUp: this.keyUpHandler
                }))))));
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                var initialMarkdown = this.constructor.initialMarkdown, markdown = initialMarkdown, lexicalEntries = entries; ///
                this.setBNF(bnf);
                this.setMarkdown(markdown);
                this.setLexicalEntries(lexicalEntries);
                this.update();
            }
        }
    ]);
    return View;
}(_wrap_native_super(_easy.Element));
_define_property(View, "initialMarkdown", '@import("/grammars")\n\n');
_define_property(View, "tagName", "div");
_define_property(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easywithstyle.default)(View)(_templateObject());
var divisionContent = "\n\nHello, world!\n\n";
function importer(path, indent, context) {
    var content = divisionContent, tokens = markdownLexer.tokenise(content), node = markdownParser.parse(tokens), divisionIdentifier = _constants.FRONT_MATTER_DIVISION_IDENTIFIER; //
    context = {
        tokens: tokens,
        divisionIdentifier: divisionIdentifier
    };
    var html = node.asHTML(indent, context);
    return html;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgUm93RGl2LCBSb3dzRGl2LCBDb2x1bW5EaXYsIENvbHVtbnNEaXYsIFZlcnRpY2FsU3BsaXR0ZXJEaXYsIEhvcml6b250YWxTcGxpdHRlckRpdiB9IGZyb20gXCJlYXN5LWxheW91dFwiO1xuXG5pbXBvcnQgWE1QIGZyb20gXCIuL3ZpZXcveG1wXCI7XG5pbXBvcnQgUHJldmlld0RpdiBmcm9tIFwiLi92aWV3L2Rpdi9wcmV2aWV3XCI7XG5pbXBvcnQgU3ViSGVhZGluZyBmcm9tIFwiLi92aWV3L3N1YkhlYWRpbmdcIjtcbmltcG9ydCBCTkZUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL2JuZlwiO1xuaW1wb3J0IExlZnRTaXplYWJsZURpdiBmcm9tIFwiLi92aWV3L2Rpdi9zaXplYWJsZS9sZWZ0XCI7XG5pbXBvcnQgUmlnaHRTaXplYWJsZURpdiBmcm9tIFwiLi92aWV3L2Rpdi9zaXplYWJsZS9yaWdodFwiO1xuaW1wb3J0IE1hcmtkb3duVGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9tYXJrZG93blwiO1xuaW1wb3J0IFBhcnNlVHJlZVRleHRhcmVhIGZyb20gXCIuL3ZpZXcvdGV4dGFyZWEvcGFyc2VUcmVlXCI7XG5pbXBvcnQgTGV4aWNhbEVudHJpZXNUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL2xleGljYWxFbnRyaWVzXCI7XG5cbmltcG9ydCB7IE1hcmtkb3duTGV4ZXIsIE1hcmtkb3duUGFyc2VyIH0gZnJvbSBcIi4uL2luZGV4XCI7XG5pbXBvcnQgeyBET0NVTUVOVF9ESVZJU0lPTl9JREVOVElGSUVSLCBGUk9OVF9NQVRURVJfRElWSVNJT05fSURFTlRJRklFUiB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IGJuZiB9ID0gTWFya2Rvd25QYXJzZXIsXG4gICAgICB7IGVudHJpZXMgfSA9IE1hcmtkb3duTGV4ZXI7XG5cbmNvbnN0IG1hcmtkb3duTGV4ZXIgPSBNYXJrZG93bkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBtYXJrZG93blBhcnNlciA9IE1hcmtkb3duUGFyc2VyLmZyb21Ob3RoaW5nKCk7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAga2V5VXBIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCBtYXJrZG93biA9IHRoaXMuZ2V0TWFya2Rvd24oKSxcbiAgICAgICAgICBsZXhlciA9IG1hcmtkb3duTGV4ZXIsICAvLy9cbiAgICAgICAgICBwYXJzZXIgPSAgbWFya2Rvd25QYXJzZXIsIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSBtYXJrZG93biwgLy8vXG4gICAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgbm9kZSA9IHBhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gICAgbGV0IHBhcnNlVHJlZSA9IG51bGw7XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZGl2aXNpb25JZGVudGlmaWVyID0gRE9DVU1FTlRfRElWSVNJT05fSURFTlRJRklFUixcbiAgICAgICAgICAgIGNvbnRleHQgPSB7XG4gICAgICAgICAgICAgIHRva2VucyxcbiAgICAgICAgICAgICAgaW1wb3J0ZXIsXG4gICAgICAgICAgICAgIGRpdmlzaW9uSWRlbnRpZmllclxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGh0bWwgPSBub2RlLmFzSFRNTChjb250ZXh0KSxcbiAgICAgICAgICAgIGRvbUVsZW1lbnQgPSBub2RlLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCk7XG5cbiAgICAgIHRoaXMueG1wSFRNTChodG1sKTtcblxuICAgICAgdGhpcy51cGRhdGVQcmV2aWV3RGl2KGRvbUVsZW1lbnQpO1xuXG4gICAgICBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xlYXJYTVAoKTtcblxuICAgICAgdGhpcy5jbGVhclByZXZpZXdEaXYoKTtcbiAgICB9XG5cbiAgICB0aGlzLnNldFBhcnNlVHJlZShwYXJzZVRyZWUpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgPExlZnRTaXplYWJsZURpdj5cbiAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgIExleGljYWwgZW50cmllc1xuICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICA8TGV4aWNhbEVudHJpZXNUZXh0YXJlYSBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgIEJORlxuICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICA8Qk5GVGV4dGFyZWEgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICBQYXJzZSB0cmVlXG4gICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgIDxQYXJzZVRyZWVUZXh0YXJlYS8+XG4gICAgICAgIDwvTGVmdFNpemVhYmxlRGl2PlxuICAgICAgICA8VmVydGljYWxTcGxpdHRlckRpdi8+XG4gICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8UmlnaHRTaXplYWJsZURpdj5cbiAgICAgICAgICAgICAgPFhNUC8+XG4gICAgICAgICAgICA8L1JpZ2h0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgICA8SG9yaXpvbnRhbFNwbGl0dGVyRGl2Lz5cbiAgICAgICAgICAgIDxSb3dEaXY+XG4gICAgICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgUHJldmlld1xuICAgICAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICA8UHJldmlld0Rpdi8+XG4gICAgICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICBNYXJrZG93blxuICAgICAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICA8TWFya2Rvd25UZXh0YXJlYSBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICAgICAgPC9Sb3dEaXY+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L0NvbHVtbkRpdj5cbiAgICAgIDwvQ29sdW1uc0Rpdj5cblxuICAgICk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgeyBpbml0aWFsTWFya2Rvd24gfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgbWFya2Rvd24gPSBpbml0aWFsTWFya2Rvd24sIC8vL1xuICAgICAgICAgIGxleGljYWxFbnRyaWVzID0gZW50cmllczsgLy8vXG5cbiAgICB0aGlzLnNldEJORihibmYpO1xuXG4gICAgdGhpcy5zZXRNYXJrZG93bihtYXJrZG93bik7XG5cbiAgICB0aGlzLnNldExleGljYWxFbnRyaWVzKGxleGljYWxFbnRyaWVzKTtcblxuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBzdGF0aWMgaW5pdGlhbE1hcmtkb3duID0gYEBpbXBvcnQoXCIvZ3JhbW1hcnNcIilcblxuYDtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHBhZGRpbmc6IDFyZW07XG4gIFxuYDtcblxuY29uc3QgZGl2aXNpb25Db250ZW50ID0gYFxuXG5IZWxsbywgd29ybGQhXG5cbmA7XG5cbmZ1bmN0aW9uIGltcG9ydGVyKHBhdGgsIGluZGVudCwgY29udGV4dCkge1xuICBjb25zdCBjb250ZW50ID0gZGl2aXNpb25Db250ZW50LCAgLy8vXG4gICAgICAgIHRva2VucyA9IG1hcmtkb3duTGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgIG5vZGUgPSBtYXJrZG93blBhcnNlci5wYXJzZSh0b2tlbnMpLFxuICAgICAgICBkaXZpc2lvbklkZW50aWZpZXIgPSBGUk9OVF9NQVRURVJfRElWSVNJT05fSURFTlRJRklFUjsgIC8vXG5cbiAgY29udGV4dCA9IHsgLy8vXG4gICAgdG9rZW5zLFxuICAgIGRpdmlzaW9uSWRlbnRpZmllclxuICB9XG5cbiAgY29uc3QgaHRtbCA9IG5vZGUuYXNIVE1MKGluZGVudCwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGh0bWw7XG59Il0sIm5hbWVzIjpbImJuZiIsIk1hcmtkb3duUGFyc2VyIiwiZW50cmllcyIsIk1hcmtkb3duTGV4ZXIiLCJtYXJrZG93bkxleGVyIiwiZnJvbU5vdGhpbmciLCJtYXJrZG93blBhcnNlciIsIlZpZXciLCJrZXlVcEhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJ1cGRhdGUiLCJtYXJrZG93biIsImdldE1hcmtkb3duIiwibGV4ZXIiLCJwYXJzZXIiLCJjb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJwYXJzZVRyZWUiLCJkaXZpc2lvbklkZW50aWZpZXIiLCJET0NVTUVOVF9ESVZJU0lPTl9JREVOVElGSUVSIiwiY29udGV4dCIsImltcG9ydGVyIiwiaHRtbCIsImFzSFRNTCIsImRvbUVsZW1lbnQiLCJjcmVhdGVET01FbGVtZW50IiwieG1wSFRNTCIsInVwZGF0ZVByZXZpZXdEaXYiLCJhc1BhcnNlVHJlZSIsImNsZWFyWE1QIiwiY2xlYXJQcmV2aWV3RGl2Iiwic2V0UGFyc2VUcmVlIiwiY2hpbGRFbGVtZW50cyIsIkNvbHVtbnNEaXYiLCJMZWZ0U2l6ZWFibGVEaXYiLCJTdWJIZWFkaW5nIiwiTGV4aWNhbEVudHJpZXNUZXh0YXJlYSIsIm9uS2V5VXAiLCJCTkZUZXh0YXJlYSIsIlBhcnNlVHJlZVRleHRhcmVhIiwiVmVydGljYWxTcGxpdHRlckRpdiIsIkNvbHVtbkRpdiIsIlJvd3NEaXYiLCJSaWdodFNpemVhYmxlRGl2IiwiWE1QIiwiSG9yaXpvbnRhbFNwbGl0dGVyRGl2IiwiUm93RGl2IiwiUHJldmlld0RpdiIsIk1hcmtkb3duVGV4dGFyZWEiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsImluaXRpYWxNYXJrZG93biIsImNvbnN0cnVjdG9yIiwibGV4aWNhbEVudHJpZXMiLCJzZXRCTkYiLCJzZXRNYXJrZG93biIsInNldExleGljYWxFbnRyaWVzIiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSIsImRpdmlzaW9uQ29udGVudCIsInBhdGgiLCJpbmRlbnQiLCJGUk9OVF9NQVRURVJfRElWSVNJT05fSURFTlRJRklFUiJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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