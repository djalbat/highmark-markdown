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
var _index = require("../index");
var _easylayout = require("easy-layout");
var _html = /*#__PURE__*/ _interop_require_default(require("./view/div/html"));
var _preview = /*#__PURE__*/ _interop_require_default(require("./view/div/preview"));
var _subHeading = /*#__PURE__*/ _interop_require_default(require("./view/subHeading"));
var _css = /*#__PURE__*/ _interop_require_default(require("./view/textarea/css"));
var _tabButtons = /*#__PURE__*/ _interop_require_default(require("./view/div/tabButtons"));
var _left = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable/left"));
var _right = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable/right"));
var _markdown = /*#__PURE__*/ _interop_require_default(require("./view/div/container/markdown"));
var _markdownStyle = /*#__PURE__*/ _interop_require_default(require("./view/div/container/markdownStyle"));
var _markdown1 = require("../utilities/markdown");
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
var markdownLexer = _index.MarkdownLexer.fromNothing(), markdownParser = _index.MarkdownParser.fromNothing(), markdownStyleLexer = _index.MarkdownStyleLexer.fromNothing(), markdownStyleParser = _index.MarkdownStyleParser.fromNothing();
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    var _super = _create_super(View);
    function View() {
        _class_call_check(this, View);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "markdownStyleCustomHandler", function(event, element) {
            _this.markdownStyle();
        });
        _define_property(_assert_this_initialized(_this), "markdownCustomHandler", function(event, element) {
            _this.markdown();
        });
        _define_property(_assert_this_initialized(_this), "keyUpCustomHandler", function(event, element) {
            _this.update();
        });
        return _this;
    }
    _create_class(View, [
        {
            key: "updateMarkdownStyle",
            value: function updateMarkdownStyle() {
                var markdownStyleElement = this.properties.markdownStyleElement, markdownStyle = this.getMarkdownStyle(), css = markdownStyleElement.update(markdownStyle);
                this.setCSS(css);
                var lexer = markdownStyleLexer, parser = markdownStyleParser, content = markdownStyle, tokens = lexer.tokenise(content), startRule = parser.getStartRule(), startOfContent = true, node = parser.parse(tokens, startRule, startOfContent);
                if (node !== null) {
                    var parseTree = node.asParseTree(tokens);
                    this.updateMarkdownStyleParseTreeTextarea(parseTree);
                } else {
                    this.clearMarkdownStyleParseTreeTextarea();
                }
            }
        },
        {
            key: "updateMarkdown",
            value: function updateMarkdown() {
                var markdown = this.getMarkdown(), lexer = markdownLexer, parser = markdownParser, content = markdown, tokens = lexer.tokenise(content), startRule = parser.getStartRule(), startOfContent = true, node = parser.parse(tokens, startRule, startOfContent);
                if (node !== null) {
                    var linesPerPage = _constants.DEFAULT_LINES_PER_PAGE, charactersPerLine = _constants.DEFAULT_CHARACTERS_PER_LINE, context = {
                        tokens: tokens,
                        importer: importer,
                        linesPerPage: linesPerPage,
                        charactersPerLine: charactersPerLine
                    }, divisionMarkdownNode = node, divisionMarkdownNodes = (0, _markdown1.preprocess)(divisionMarkdownNode, context);
                    var htmls = [], domElements = [];
                    divisionMarkdownNodes.forEach(function(divisionMarkdownNode) {
                        var html = divisionMarkdownNode.asHTML(context), domElement = divisionMarkdownNode.createDOMElement(context);
                        htmls.push(html);
                        domElements.push(domElement);
                    });
                    this.updateXMP(htmls);
                    this.updatePreviewDiv(domElements);
                    var parseTree = node.asParseTree(tokens);
                    this.updateMarkdownParseTreeTextarea(parseTree);
                } else {
                    this.clearXMP();
                    this.clearPreviewDiv();
                    this.clearMarkdownParseTreeTextarea();
                }
            }
        },
        {
            key: "markdownStyle",
            value: function markdownStyle() {
                this.hideMarkdownContainerDiv();
                this.showMarkdownStyleContainerDiv();
            }
        },
        {
            key: "markdown",
            value: function markdown() {
                this.showMarkdownContainerDiv();
                this.hideMarkdownStyleContainerDiv();
            }
        },
        {
            key: "update",
            value: function update() {
                this.updateMarkdown();
                this.updateMarkdownStyle();
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement(_easylayout.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_left.default, null, /*#__PURE__*/ React.createElement(_tabButtons.default, {
                    onCustomMarkdown: this.markdownCustomHandler,
                    onCustomMarkdownStyle: this.markdownStyleCustomHandler
                }), /*#__PURE__*/ React.createElement(_markdown.default, {
                    onCustomKeyUp: this.keyUpCustomHandler
                }), /*#__PURE__*/ React.createElement(_markdownStyle.default, {
                    onCustomKeyUp: this.keyUpCustomHandler
                })), /*#__PURE__*/ React.createElement(_easylayout.VerticalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easylayout.ColumnDiv, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_right.default, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "HTML"), /*#__PURE__*/ React.createElement(_html.default, null)), /*#__PURE__*/ React.createElement(_easylayout.HorizontalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easylayout.RowDiv, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "CSS"), /*#__PURE__*/ React.createElement(_css.default, null), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Preview"), /*#__PURE__*/ React.createElement(_preview.default, null))))));
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                var _this_constructor = this.constructor, initialMarkdown = _this_constructor.initialMarkdown, initialMarkdownStyle = _this_constructor.initialMarkdownStyle, markdownStyle = initialMarkdownStyle, markdown = initialMarkdown; ///
                this.setMarkdown(markdown);
                this.setMarkdownStyle(markdownStyle);
                this.update();
            }
        }
    ]);
    return View;
}(_wrap_native_super(_easy.Element));
_define_property(View, "initialMarkdownStyle", "pageNumber {\n  colour: red;\n}\n");
_define_property(View, "initialMarkdown", "* Occam [^occam].\n\n[^occam]: Occam.\n\n@footnotes\n\n");
_define_property(View, "tagName", "div");
_define_property(View, "ignoredProperties", [
    "markdownStyleElement"
]);
_define_property(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easywithstyle.default)(View)(_templateObject());
function importer(filePath, context) {
    var content = "# Primary heading\n", startOfContent = true, startRule = markdownParser.getStartRule(), tokens = markdownLexer.tokenise(content), node = markdownParser.parse(tokens, startRule, startOfContent), importedNode = node, importedTokens = tokens, importedClassName = "introduction";
    Object.assign(context, {
        importedNode: importedNode,
        importedTokens: importedTokens,
        importedClassName: importedClassName
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgTWFya2Rvd25MZXhlciwgTWFya2Rvd25QYXJzZXIsIE1hcmtkb3duU3R5bGVMZXhlciwgTWFya2Rvd25TdHlsZVBhcnNlciB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHsgUm93RGl2LCBSb3dzRGl2LCBDb2x1bW5EaXYsIENvbHVtbnNEaXYsIFZlcnRpY2FsU3BsaXR0ZXJEaXYsIEhvcml6b250YWxTcGxpdHRlckRpdiB9IGZyb20gXCJlYXN5LWxheW91dFwiO1xuXG5pbXBvcnQgSFRNTERpdiBmcm9tIFwiLi92aWV3L2Rpdi9odG1sXCI7XG5pbXBvcnQgUHJldmlld0RpdiBmcm9tIFwiLi92aWV3L2Rpdi9wcmV2aWV3XCI7XG5pbXBvcnQgU3ViSGVhZGluZyBmcm9tIFwiLi92aWV3L3N1YkhlYWRpbmdcIjtcbmltcG9ydCBDU1NUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL2Nzc1wiO1xuaW1wb3J0IFRhYkJ1dHRvbnNEaXYgZnJvbSBcIi4vdmlldy9kaXYvdGFiQnV0dG9uc1wiO1xuaW1wb3J0IExlZnRTaXplYWJsZURpdiBmcm9tIFwiLi92aWV3L2Rpdi9zaXplYWJsZS9sZWZ0XCI7XG5pbXBvcnQgUmlnaHRTaXplYWJsZURpdiBmcm9tIFwiLi92aWV3L2Rpdi9zaXplYWJsZS9yaWdodFwiO1xuaW1wb3J0IE1hcmtkb3duQ29udGFpbmVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2NvbnRhaW5lci9tYXJrZG93blwiO1xuaW1wb3J0IE1hcmtkb3duU3R5bGVDb250YWluZXJEaXYgZnJvbSBcIi4vdmlldy9kaXYvY29udGFpbmVyL21hcmtkb3duU3R5bGVcIjtcblxuaW1wb3J0IHsgcHJlcHJvY2VzcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvbWFya2Rvd25cIjtcbmltcG9ydCB7IERFRkFVTFRfTElORVNfUEVSX1BBR0UsIERFRkFVTFRfQ0hBUkFDVEVSU19QRVJfTElORSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jb25zdCBtYXJrZG93bkxleGVyID0gTWFya2Rvd25MZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgbWFya2Rvd25QYXJzZXIgPSBNYXJrZG93blBhcnNlci5mcm9tTm90aGluZygpLFxuICAgICAgbWFya2Rvd25TdHlsZUxleGVyID0gTWFya2Rvd25TdHlsZUxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBtYXJrZG93blN0eWxlUGFyc2VyID0gTWFya2Rvd25TdHlsZVBhcnNlci5mcm9tTm90aGluZygpO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIG1hcmtkb3duU3R5bGVDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5tYXJrZG93blN0eWxlKCk7XG4gIH1cblxuICBtYXJrZG93bkN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLm1hcmtkb3duKCk7XG4gIH1cblxuICBrZXlVcEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgdXBkYXRlTWFya2Rvd25TdHlsZSgpIHtcbiAgICBjb25zdCB7IG1hcmtkb3duU3R5bGVFbGVtZW50IH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgbWFya2Rvd25TdHlsZSA9IHRoaXMuZ2V0TWFya2Rvd25TdHlsZSgpLFxuICAgICAgICAgIGNzcyA9IG1hcmtkb3duU3R5bGVFbGVtZW50LnVwZGF0ZShtYXJrZG93blN0eWxlKTtcblxuICAgIHRoaXMuc2V0Q1NTKGNzcyk7XG5cbiAgICBjb25zdCBsZXhlciA9IG1hcmtkb3duU3R5bGVMZXhlciwgLy8vXG4gICAgICAgICAgcGFyc2VyID0gbWFya2Rvd25TdHlsZVBhcnNlciwgLy8vXG4gICAgICAgICAgY29udGVudCA9IG1hcmtkb3duU3R5bGUsICAvLy9cbiAgICAgICAgICB0b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBzdGFydFJ1bGUgPSBwYXJzZXIuZ2V0U3RhcnRSdWxlKCksXG4gICAgICAgICAgc3RhcnRPZkNvbnRlbnQgPSB0cnVlLFxuICAgICAgICAgIG5vZGUgPSBwYXJzZXIucGFyc2UodG9rZW5zLCBzdGFydFJ1bGUsIHN0YXJ0T2ZDb250ZW50KTtcblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG5cbiAgICAgIHRoaXMudXBkYXRlTWFya2Rvd25TdHlsZVBhcnNlVHJlZVRleHRhcmVhKHBhcnNlVHJlZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xlYXJNYXJrZG93blN0eWxlUGFyc2VUcmVlVGV4dGFyZWEoKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVNYXJrZG93bigpIHtcbiAgICBjb25zdCBtYXJrZG93biA9IHRoaXMuZ2V0TWFya2Rvd24oKSxcbiAgICAgICAgICBsZXhlciA9IG1hcmtkb3duTGV4ZXIsICAvLy9cbiAgICAgICAgICBwYXJzZXIgPSAgbWFya2Rvd25QYXJzZXIsIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSBtYXJrZG93biwgLy8vXG4gICAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgc3RhcnRSdWxlID0gcGFyc2VyLmdldFN0YXJ0UnVsZSgpLFxuICAgICAgICAgIHN0YXJ0T2ZDb250ZW50ID0gdHJ1ZSxcbiAgICAgICAgICBub2RlID0gcGFyc2VyLnBhcnNlKHRva2Vucywgc3RhcnRSdWxlLCBzdGFydE9mQ29udGVudCk7XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbGluZXNQZXJQYWdlID0gREVGQVVMVF9MSU5FU19QRVJfUEFHRSxcbiAgICAgICAgICAgIGNoYXJhY3RlcnNQZXJMaW5lID0gREVGQVVMVF9DSEFSQUNURVJTX1BFUl9MSU5FLFxuICAgICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgICAgdG9rZW5zLFxuICAgICAgICAgICAgICBpbXBvcnRlcixcbiAgICAgICAgICAgICAgbGluZXNQZXJQYWdlLFxuICAgICAgICAgICAgICBjaGFyYWN0ZXJzUGVyTGluZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGVzID0gcHJlcHJvY2VzcyhkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGNvbnN0IGh0bWxzID0gW10sXG4gICAgICAgICAgICBkb21FbGVtZW50cyA9IFtdO1xuXG4gICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZXMuZm9yRWFjaCgoZGl2aXNpb25NYXJrZG93bk5vZGUpID0+IHtcbiAgICAgICAgY29uc3QgaHRtbCA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLmFzSFRNTChjb250ZXh0KSxcbiAgICAgICAgICAgICAgZG9tRWxlbWVudCA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLmNyZWF0ZURPTUVsZW1lbnQoY29udGV4dCk7XG5cbiAgICAgICAgaHRtbHMucHVzaChodG1sKTtcbiAgICAgICAgZG9tRWxlbWVudHMucHVzaChkb21FbGVtZW50KTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnVwZGF0ZVhNUChodG1scyk7XG5cbiAgICAgIHRoaXMudXBkYXRlUHJldmlld0Rpdihkb21FbGVtZW50cyk7XG5cbiAgICAgIGNvbnN0IHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcblxuICAgICAgdGhpcy51cGRhdGVNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhKHBhcnNlVHJlZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xlYXJYTVAoKTtcblxuICAgICAgdGhpcy5jbGVhclByZXZpZXdEaXYoKTtcblxuICAgICAgdGhpcy5jbGVhck1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEoKTtcbiAgICB9XG4gIH1cblxuICBtYXJrZG93blN0eWxlKCkge1xuICAgIHRoaXMuaGlkZU1hcmtkb3duQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5zaG93TWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdigpO1xuICB9XG5cbiAgbWFya2Rvd24oKSB7XG4gICAgdGhpcy5zaG93TWFya2Rvd25Db250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2KCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy51cGRhdGVNYXJrZG93bigpO1xuICAgIHRoaXMudXBkYXRlTWFya2Rvd25TdHlsZSgpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgPExlZnRTaXplYWJsZURpdj5cbiAgICAgICAgICA8VGFiQnV0dG9uc0RpdiBvbkN1c3RvbU1hcmtkb3duPXt0aGlzLm1hcmtkb3duQ3VzdG9tSGFuZGxlcn0gb25DdXN0b21NYXJrZG93blN0eWxlPXt0aGlzLm1hcmtkb3duU3R5bGVDdXN0b21IYW5kbGVyfSAvPlxuICAgICAgICAgIDxNYXJrZG93bkNvbnRhaW5lckRpdiBvbkN1c3RvbUtleVVwPXt0aGlzLmtleVVwQ3VzdG9tSGFuZGxlcn0gLz5cbiAgICAgICAgICA8TWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdiBvbkN1c3RvbUtleVVwPXt0aGlzLmtleVVwQ3VzdG9tSGFuZGxlcn0gLz5cbiAgICAgICAgPC9MZWZ0U2l6ZWFibGVEaXY+XG4gICAgICAgIDxWZXJ0aWNhbFNwbGl0dGVyRGl2Lz5cbiAgICAgICAgPENvbHVtbkRpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxSaWdodFNpemVhYmxlRGl2PlxuICAgICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICBIVE1MXG4gICAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgPEhUTUxEaXYvPlxuICAgICAgICAgICAgPC9SaWdodFNpemVhYmxlRGl2PlxuICAgICAgICAgICAgPEhvcml6b250YWxTcGxpdHRlckRpdi8+XG4gICAgICAgICAgICA8Um93RGl2PlxuICAgICAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgIENTU1xuICAgICAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICA8Q1NTVGV4dGFyZWEvPlxuICAgICAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgUHJldmlld1xuICAgICAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICA8UHJldmlld0Rpdi8+XG4gICAgICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgICAgIDwvUm93RGl2PlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9Db2x1bW5EaXY+XG4gICAgICA8L0NvbHVtbnNEaXY+XG5cbiAgICApO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IHsgaW5pdGlhbE1hcmtkb3duLCBpbml0aWFsTWFya2Rvd25TdHlsZSB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBtYXJrZG93blN0eWxlID0gaW5pdGlhbE1hcmtkb3duU3R5bGUsIC8vL1xuICAgICAgICAgIG1hcmtkb3duID0gaW5pdGlhbE1hcmtkb3duOyAvLy9cblxuICAgIHRoaXMuc2V0TWFya2Rvd24obWFya2Rvd24pO1xuXG4gICAgdGhpcy5zZXRNYXJrZG93blN0eWxlKG1hcmtkb3duU3R5bGUpO1xuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0aWFsTWFya2Rvd25TdHlsZSA9IGBwYWdlTnVtYmVyIHtcbiAgY29sb3VyOiByZWQ7XG59XG5gO1xuXG4gIHN0YXRpYyBpbml0aWFsTWFya2Rvd24gPSBgKiBPY2NhbSBbXm9jY2FtXS5cblxuW15vY2NhbV06IE9jY2FtLlxuXG5AZm9vdG5vdGVzXG5cbmA7XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIm1hcmtkb3duU3R5bGVFbGVtZW50XCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgcGFkZGluZzogMXJlbTtcbiAgXG5gO1xuXG5mdW5jdGlvbiBpbXBvcnRlcihmaWxlUGF0aCwgY29udGV4dCkge1xuICBjb25zdCBjb250ZW50ID0gYCMgUHJpbWFyeSBoZWFkaW5nXG5gLFxuICAgICAgICBzdGFydE9mQ29udGVudCA9IHRydWUsXG4gICAgICAgIHN0YXJ0UnVsZSA9IG1hcmtkb3duUGFyc2VyLmdldFN0YXJ0UnVsZSgpLFxuICAgICAgICB0b2tlbnMgPSBtYXJrZG93bkxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICBub2RlID0gbWFya2Rvd25QYXJzZXIucGFyc2UodG9rZW5zLCBzdGFydFJ1bGUsIHN0YXJ0T2ZDb250ZW50KSxcbiAgICAgICAgaW1wb3J0ZWROb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICBpbXBvcnRlZFRva2VucyA9IHRva2VucyxcbiAgICAgICAgaW1wb3J0ZWRDbGFzc05hbWUgPSBcImludHJvZHVjdGlvblwiO1xuXG4gIE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgIGltcG9ydGVkTm9kZSxcbiAgICBpbXBvcnRlZFRva2VucyxcbiAgICBpbXBvcnRlZENsYXNzTmFtZVxuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJtYXJrZG93bkxleGVyIiwiTWFya2Rvd25MZXhlciIsImZyb21Ob3RoaW5nIiwibWFya2Rvd25QYXJzZXIiLCJNYXJrZG93blBhcnNlciIsIm1hcmtkb3duU3R5bGVMZXhlciIsIk1hcmtkb3duU3R5bGVMZXhlciIsIm1hcmtkb3duU3R5bGVQYXJzZXIiLCJNYXJrZG93blN0eWxlUGFyc2VyIiwiVmlldyIsIm1hcmtkb3duU3R5bGVDdXN0b21IYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwibWFya2Rvd25TdHlsZSIsIm1hcmtkb3duQ3VzdG9tSGFuZGxlciIsIm1hcmtkb3duIiwia2V5VXBDdXN0b21IYW5kbGVyIiwidXBkYXRlIiwidXBkYXRlTWFya2Rvd25TdHlsZSIsIm1hcmtkb3duU3R5bGVFbGVtZW50IiwicHJvcGVydGllcyIsImdldE1hcmtkb3duU3R5bGUiLCJjc3MiLCJzZXRDU1MiLCJsZXhlciIsInBhcnNlciIsImNvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsInN0YXJ0UnVsZSIsImdldFN0YXJ0UnVsZSIsInN0YXJ0T2ZDb250ZW50Iiwibm9kZSIsInBhcnNlIiwicGFyc2VUcmVlIiwiYXNQYXJzZVRyZWUiLCJ1cGRhdGVNYXJrZG93blN0eWxlUGFyc2VUcmVlVGV4dGFyZWEiLCJjbGVhck1hcmtkb3duU3R5bGVQYXJzZVRyZWVUZXh0YXJlYSIsInVwZGF0ZU1hcmtkb3duIiwiZ2V0TWFya2Rvd24iLCJsaW5lc1BlclBhZ2UiLCJERUZBVUxUX0xJTkVTX1BFUl9QQUdFIiwiY2hhcmFjdGVyc1BlckxpbmUiLCJERUZBVUxUX0NIQVJBQ1RFUlNfUEVSX0xJTkUiLCJjb250ZXh0IiwiaW1wb3J0ZXIiLCJkaXZpc2lvbk1hcmtkb3duTm9kZSIsImRpdmlzaW9uTWFya2Rvd25Ob2RlcyIsInByZXByb2Nlc3MiLCJodG1scyIsImRvbUVsZW1lbnRzIiwiZm9yRWFjaCIsImh0bWwiLCJhc0hUTUwiLCJkb21FbGVtZW50IiwiY3JlYXRlRE9NRWxlbWVudCIsInB1c2giLCJ1cGRhdGVYTVAiLCJ1cGRhdGVQcmV2aWV3RGl2IiwidXBkYXRlTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYSIsImNsZWFyWE1QIiwiY2xlYXJQcmV2aWV3RGl2IiwiY2xlYXJNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhIiwiaGlkZU1hcmtkb3duQ29udGFpbmVyRGl2Iiwic2hvd01hcmtkb3duU3R5bGVDb250YWluZXJEaXYiLCJzaG93TWFya2Rvd25Db250YWluZXJEaXYiLCJoaWRlTWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdiIsImNoaWxkRWxlbWVudHMiLCJDb2x1bW5zRGl2IiwiTGVmdFNpemVhYmxlRGl2IiwiVGFiQnV0dG9uc0RpdiIsIm9uQ3VzdG9tTWFya2Rvd24iLCJvbkN1c3RvbU1hcmtkb3duU3R5bGUiLCJNYXJrZG93bkNvbnRhaW5lckRpdiIsIm9uQ3VzdG9tS2V5VXAiLCJNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2IiwiVmVydGljYWxTcGxpdHRlckRpdiIsIkNvbHVtbkRpdiIsIlJvd3NEaXYiLCJSaWdodFNpemVhYmxlRGl2IiwiU3ViSGVhZGluZyIsIkhUTUxEaXYiLCJIb3Jpem9udGFsU3BsaXR0ZXJEaXYiLCJSb3dEaXYiLCJDU1NUZXh0YXJlYSIsIlByZXZpZXdEaXYiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsImNvbnN0cnVjdG9yIiwiaW5pdGlhbE1hcmtkb3duIiwiaW5pdGlhbE1hcmtkb3duU3R5bGUiLCJzZXRNYXJrZG93biIsInNldE1hcmtkb3duU3R5bGUiLCJFbGVtZW50IiwidGFnTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiLCJmaWxlUGF0aCIsImltcG9ydGVkTm9kZSIsImltcG9ydGVkVG9rZW5zIiwiaW1wb3J0ZWRDbGFzc05hbWUiLCJPYmplY3QiLCJhc3NpZ24iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBMk1BOzs7ZUFBQTs7O29FQXpNc0I7b0JBRUU7cUJBQytEOzBCQUNZOzJEQUUvRTs4REFDRztpRUFDQTswREFDQztpRUFDRTsyREFDRTs0REFDQzsrREFDSTtvRUFDSzt5QkFFWDt5QkFDeUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEUsSUFBTUEsZ0JBQWdCQyxvQkFBYSxDQUFDQyxXQUFXLElBQ3pDQyxpQkFBaUJDLHFCQUFjLENBQUNGLFdBQVcsSUFDM0NHLHFCQUFxQkMseUJBQWtCLENBQUNKLFdBQVcsSUFDbkRLLHNCQUFzQkMsMEJBQW1CLENBQUNOLFdBQVc7QUFFM0QsSUFBQSxBQUFNTyxxQkFBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztRQUNKQyxrREFBQUEsOEJBQTZCLFNBQUNDLE9BQU9DO1lB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