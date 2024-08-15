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
var _index = require("../index");
var _importer = /*#__PURE__*/ _interop_require_wildcard(require("./importer"));
var _indexOptions = /*#__PURE__*/ _interop_require_default(require("./indexOptions"));
var _left = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable/left"));
var _css = /*#__PURE__*/ _interop_require_default(require("./view/div/container/css"));
var _html = /*#__PURE__*/ _interop_require_default(require("./view/div/container/html"));
var _left1 = /*#__PURE__*/ _interop_require_default(require("./view/div/tabButtons/left"));
var _right = /*#__PURE__*/ _interop_require_default(require("./view/div/tabButtons/right"));
var _preview = /*#__PURE__*/ _interop_require_default(require("./view/div/container/preview"));
var _markdown = /*#__PURE__*/ _interop_require_default(require("./view/div/container/markdown"));
var _plainText = /*#__PURE__*/ _interop_require_default(require("./view/div/container/plainText"));
var _markdownStyle = /*#__PURE__*/ _interop_require_default(require("./view/div/container/markdownStyle"));
var _constants = require("./constants");
var _processing = require("../utilities/processing");
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
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
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
        _define_property(_assert_this_initialized(_this), "pageUpdateCustomHandler", function(event, element, index) {
            _this.clearPage();
            _this.updatePage(index);
        });
        _define_property(_assert_this_initialized(_this), "plainTextCustomHandler", function(event, element) {
            _this.plainText();
        });
        _define_property(_assert_this_initialized(_this), "markdownCustomHandler", function(event, element) {
            _this.markdown();
        });
        _define_property(_assert_this_initialized(_this), "previewCustomHandler", function(event, element) {
            _this.preview();
        });
        _define_property(_assert_this_initialized(_this), "keyUpCustomHandler", function(event, element) {
            _this.update();
        });
        _define_property(_assert_this_initialized(_this), "htmlCustomHandler", function(event, element) {
            _this.html();
        });
        _define_property(_assert_this_initialized(_this), "cssCustomHandler", function(event, element) {
            _this.css();
        });
        return _this;
    }
    _create_class(View, [
        {
            key: "update",
            value: function update() {
                this.updateMarkdown();
                this.updateMarkdownStyle();
            }
        },
        {
            key: "clearPage",
            value: function clearPage() {
                this.clearXMP();
                this.clearPreviewDiv();
            }
        },
        {
            key: "updatePage",
            value: function updatePage(index) {
                var divisionMarkdownNodes = this.getDivisionMarkdownNodes(), divisionMarkdownNode = divisionMarkdownNodes[index], tokens = this.getTokens(), context = {
                    tokens: tokens
                }, length = null, html = divisionMarkdownNode.asHTML(context), plainText = divisionMarkdownNode.asPlainText(context);
                this.updateXMP(html);
                this.updatePreviewDiv(divisionMarkdownNode, context);
                this.updatePageButtonsDiv(length, index);
                this.updatePlainTextTextarea(plainText);
            }
        },
        {
            key: "updateMarkdown",
            value: function updateMarkdown() {
                var markdown = this.getMarkdown(), lexer = markdownLexer, parser = markdownParser, content = markdown, startRule = parser.getStartRule(), tokens = lexer.tokenise(content), node = parser.parse(tokens, startRule);
                this.setTokens(tokens);
                if (node !== null) {
                    var divisionMarkdownNode = node, charactersPerLine = _constants.CHARACTERS_PER_LINE, contentsDepth = _constants.CONTENTS_DEPTH, linesPerPage = _constants.LINES_PER_PAGE, context = {
                        tokens: tokens,
                        importer: _importer.default,
                        indexOptions: _indexOptions.default,
                        linesPerPage: linesPerPage,
                        contentsDepth: contentsDepth,
                        nodeFromTokens: nodeFromTokens,
                        tokensFromContent: tokensFromContent,
                        charactersPerLine: charactersPerLine
                    }, markdownNodes = (0, _processing.postprocess)(divisionMarkdownNode, context), divisionMarkdownNodes = (0, _processing.divisionMarkdownNodesFromMarkdownNodes)(markdownNodes);
                    this.setDivisionMarkdownNodes(divisionMarkdownNodes);
                    var parseTree = divisionMarkdownNode.asParseTree(tokens);
                    this.updateMarkdownParseTreeTextarea(parseTree);
                    var index = 0, length = divisionMarkdownNodes.length;
                    if (length > 0) {
                        this.updatePage(index);
                        this.updatePageButtonsDiv(length);
                    }
                } else {
                    this.clearPage();
                    this.clearPageButtonsDiv();
                    this.clearPlainTextTextarea();
                    this.clearMarkdownParseTreeTextarea();
                    var divisionMarkdownNodes1 = null;
                    this.setDivisionMarkdownNodes(divisionMarkdownNodes1);
                }
            }
        },
        {
            key: "updateMarkdownStyle",
            value: function updateMarkdownStyle() {
                var markdownStyleElement = this.properties.markdownStyleElement, markdownStyle = this.getMarkdownStyle(), css = markdownStyleElement.update(markdownStyle);
                this.setCSS(css);
                var lexer = markdownStyleLexer, parser = markdownStyleParser, content = markdownStyle, tokens = lexer.tokenise(content), startRule = parser.getStartRule(), node = parser.parse(tokens, startRule);
                if (node !== null) {
                    var parseTree = node.asParseTree(tokens);
                    this.updateMarkdownStyleParseTreeTextarea(parseTree);
                } else {
                    this.clearMarkdownStyleParseTreeTextarea();
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
            key: "plainText",
            value: function plainText() {
                this.hideCSSContainerDiv();
                this.hideHTMLContainerDiv();
                this.hidePreviewContainerDiv();
                this.showPlainTextContainerDiv();
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
            key: "preview",
            value: function preview() {
                this.hideCSSContainerDiv();
                this.hideHTMLContainerDiv();
                this.showPreviewContainerDiv();
                this.hidePlainTextContainerDiv();
            }
        },
        {
            key: "html",
            value: function html() {
                this.hideCSSContainerDiv();
                this.showHTMLContainerDiv();
                this.hidePreviewContainerDiv();
                this.hidePlainTextContainerDiv();
            }
        },
        {
            key: "css",
            value: function css() {
                this.showCSSContainerDiv();
                this.hideHTMLContainerDiv();
                this.hidePreviewContainerDiv();
                this.hidePlainTextContainerDiv();
            }
        },
        {
            key: "getTokens",
            value: function getTokens() {
                var tokens = this.getState().tokens;
                return tokens;
            }
        },
        {
            key: "getDivisionMarkdownNodes",
            value: function getDivisionMarkdownNodes() {
                var divisionMarkdownNodes = this.getState().divisionMarkdownNodes;
                return divisionMarkdownNodes;
            }
        },
        {
            key: "setTokens",
            value: function setTokens(tokens) {
                this.updateState({
                    tokens: tokens
                });
            }
        },
        {
            key: "setDivisionMarkdownNodes",
            value: function setDivisionMarkdownNodes(divisionMarkdownNodes) {
                this.updateState({
                    divisionMarkdownNodes: divisionMarkdownNodes
                });
            }
        },
        {
            key: "setInitialState",
            value: function setInitialState() {
                var tokens = null, divisionMarkdownNodes = null;
                this.setState({
                    tokens: tokens,
                    divisionMarkdownNodes: divisionMarkdownNodes
                });
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement(_easylayout.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_left.default, null, /*#__PURE__*/ React.createElement(_left1.default, {
                    onCustomMarkdown: this.markdownCustomHandler,
                    onCustomMarkdownStyle: this.markdownStyleCustomHandler
                }), /*#__PURE__*/ React.createElement(_markdown.default, {
                    onCustomKeyUp: this.keyUpCustomHandler
                }), /*#__PURE__*/ React.createElement(_markdownStyle.default, {
                    onCustomKeyUp: this.keyUpCustomHandler
                })), /*#__PURE__*/ React.createElement(_easylayout.VerticalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easylayout.ColumnDiv, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_right.default, {
                    onCustomCSS: this.cssCustomHandler,
                    onCustomHTML: this.htmlCustomHandler,
                    onCustomPreview: this.previewCustomHandler,
                    onCustomPlainText: this.plainTextCustomHandler
                }), /*#__PURE__*/ React.createElement(_css.default, null), /*#__PURE__*/ React.createElement(_html.default, null), /*#__PURE__*/ React.createElement(_preview.default, {
                    onCustomPageUpdate: this.pageUpdateCustomHandler
                }), /*#__PURE__*/ React.createElement(_plainText.default, null))));
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                this.setInitialState();
                var _this_constructor = this.constructor, initialMarkdown = _this_constructor.initialMarkdown, initialMarkdownStyle = _this_constructor.initialMarkdownStyle, markdownStyle = initialMarkdownStyle, markdown = initialMarkdown; ///
                this.setMarkdown(markdown);
                this.setMarkdownStyle(markdownStyle);
                this.update();
                this.css();
            }
        }
    ]);
    return View;
}(_wrap_native_super(_easy.Element));
_define_property(View, "tagName", "div");
_define_property(View, "ignoredProperties", [
    "markdownStyleElement"
]);
_define_property(View, "defaultProperties", {
    className: "view"
});
_define_property(View, "initialMarkdown", _importer.defaultContent) ///
;
_define_property(View, "initialMarkdownStyle", "\n\nwidth: 100%;\nheight: 199%;  \nposition: absolute;\nmin-height: 100%;  \npadding-top: 5rem;  \n\n");
var _default = (0, _easywithstyle.default)(View)(_templateObject());
function tokensFromContent(content) {
    var tokens = markdownLexer.tokenise(content);
    return tokens;
}
function nodeFromTokens(tokens) {
    var startRuleName = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    var ruleMap = markdownParser.getRuleMap(), startRule = startRuleName !== null ? ruleMap[startRuleName] : markdownParser.getStartRule(), node = markdownParser.parse(tokens, startRule);
    return node;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgUm93c0RpdiwgQ29sdW1uRGl2LCBDb2x1bW5zRGl2LCBWZXJ0aWNhbFNwbGl0dGVyRGl2IH0gZnJvbSBcImVhc3ktbGF5b3V0XCI7XG5pbXBvcnQgeyBNYXJrZG93bkxleGVyLCBNYXJrZG93blBhcnNlciwgTWFya2Rvd25TdHlsZUxleGVyLCBNYXJrZG93blN0eWxlUGFyc2VyIH0gZnJvbSBcIi4uL2luZGV4XCI7XG5cbmltcG9ydCBpbXBvcnRlciBmcm9tIFwiLi9pbXBvcnRlclwiO1xuaW1wb3J0IGluZGV4T3B0aW9ucyBmcm9tIFwiLi9pbmRleE9wdGlvbnNcIjtcbmltcG9ydCBMZWZ0U2l6ZWFibGVEaXYgZnJvbSBcIi4vdmlldy9kaXYvc2l6ZWFibGUvbGVmdFwiO1xuaW1wb3J0IENTU0NvbnRhaW5lckRpdiBmcm9tIFwiLi92aWV3L2Rpdi9jb250YWluZXIvY3NzXCI7XG5pbXBvcnQgSFRNTENvbnRhaW5lckRpdiBmcm9tIFwiLi92aWV3L2Rpdi9jb250YWluZXIvaHRtbFwiO1xuaW1wb3J0IExlZnRUYWJCdXR0b25zRGl2IGZyb20gXCIuL3ZpZXcvZGl2L3RhYkJ1dHRvbnMvbGVmdFwiO1xuaW1wb3J0IFJpZ2h0VGFiQnV0dG9uc0RpdiBmcm9tIFwiLi92aWV3L2Rpdi90YWJCdXR0b25zL3JpZ2h0XCI7XG5pbXBvcnQgUHJldmlld0NvbnRhaW5lckRpdiBmcm9tIFwiLi92aWV3L2Rpdi9jb250YWluZXIvcHJldmlld1wiO1xuaW1wb3J0IE1hcmtkb3duQ29udGFpbmVyRGl2IGZyb20gXCIuL3ZpZXcvZGl2L2NvbnRhaW5lci9tYXJrZG93blwiO1xuaW1wb3J0IFBsYWluVGV4dENvbnRhaW5lckRpdiBmcm9tIFwiLi92aWV3L2Rpdi9jb250YWluZXIvcGxhaW5UZXh0XCI7XG5pbXBvcnQgTWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdiBmcm9tIFwiLi92aWV3L2Rpdi9jb250YWluZXIvbWFya2Rvd25TdHlsZVwiO1xuXG5pbXBvcnQgeyBkZWZhdWx0Q29udGVudCB9IGZyb20gXCIuL2ltcG9ydGVyXCI7XG5pbXBvcnQgeyBMSU5FU19QRVJfUEFHRSwgQ09OVEVOVFNfREVQVEgsIENIQVJBQ1RFUlNfUEVSX0xJTkUgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHBvc3Rwcm9jZXNzLCBkaXZpc2lvbk1hcmtkb3duTm9kZXNGcm9tTWFya2Rvd25Ob2RlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvcHJvY2Vzc2luZ1wiO1xuXG5jb25zdCBtYXJrZG93bkxleGVyID0gTWFya2Rvd25MZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgbWFya2Rvd25QYXJzZXIgPSBNYXJrZG93blBhcnNlci5mcm9tTm90aGluZygpLFxuICAgICAgbWFya2Rvd25TdHlsZUxleGVyID0gTWFya2Rvd25TdHlsZUxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBtYXJrZG93blN0eWxlUGFyc2VyID0gTWFya2Rvd25TdHlsZVBhcnNlci5mcm9tTm90aGluZygpO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIG1hcmtkb3duU3R5bGVDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5tYXJrZG93blN0eWxlKCk7XG4gIH1cblxuICBwYWdlVXBkYXRlQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICB0aGlzLmNsZWFyUGFnZSgpO1xuXG4gICAgdGhpcy51cGRhdGVQYWdlKGluZGV4KTtcbiAgfVxuXG4gIHBsYWluVGV4dEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnBsYWluVGV4dCgpO1xuICB9XG5cbiAgbWFya2Rvd25DdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5tYXJrZG93bigpO1xuICB9XG5cbiAgcHJldmlld0N1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnByZXZpZXcoKTtcbiAgfVxuXG4gIGtleVVwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBodG1sQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMuaHRtbCgpO1xuICB9XG5cbiAgY3NzQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMuY3NzKCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy51cGRhdGVNYXJrZG93bigpO1xuICAgIHRoaXMudXBkYXRlTWFya2Rvd25TdHlsZSgpO1xuICB9XG5cbiAgY2xlYXJQYWdlKCkge1xuICAgIHRoaXMuY2xlYXJYTVAoKTtcbiAgICB0aGlzLmNsZWFyUHJldmlld0RpdigpO1xuICB9XG5cbiAgdXBkYXRlUGFnZShpbmRleCkge1xuICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IHRoaXMuZ2V0RGl2aXNpb25NYXJrZG93bk5vZGVzKCksXG4gICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGUgPSBkaXZpc2lvbk1hcmtkb3duTm9kZXNbaW5kZXhdLFxuICAgICAgICAgIHRva2VucyA9IHRoaXMuZ2V0VG9rZW5zKCksXG4gICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgIHRva2Vuc1xuICAgICAgICAgIH0sXG4gICAgICAgICAgbGVuZ3RoID0gbnVsbCxcbiAgICAgICAgICBodG1sID0gZGl2aXNpb25NYXJrZG93bk5vZGUuYXNIVE1MKGNvbnRleHQpLFxuICAgICAgICAgIHBsYWluVGV4dCA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLmFzUGxhaW5UZXh0KGNvbnRleHQpO1xuXG4gICAgdGhpcy51cGRhdGVYTVAoaHRtbCk7XG5cbiAgICB0aGlzLnVwZGF0ZVByZXZpZXdEaXYoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpO1xuXG4gICAgdGhpcy51cGRhdGVQYWdlQnV0dG9uc0RpdihsZW5ndGgsIGluZGV4KTtcblxuICAgIHRoaXMudXBkYXRlUGxhaW5UZXh0VGV4dGFyZWEocGxhaW5UZXh0KTtcbiAgfVxuXG4gIHVwZGF0ZU1hcmtkb3duKCkge1xuICAgIGNvbnN0IG1hcmtkb3duID0gdGhpcy5nZXRNYXJrZG93bigpLFxuICAgICAgICAgIGxleGVyID0gbWFya2Rvd25MZXhlciwgIC8vL1xuICAgICAgICAgIHBhcnNlciA9ICBtYXJrZG93blBhcnNlciwgLy8vXG4gICAgICAgICAgY29udGVudCA9IG1hcmtkb3duLCAvLy9cbiAgICAgICAgICBzdGFydFJ1bGUgPSBwYXJzZXIuZ2V0U3RhcnRSdWxlKCksXG4gICAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgbm9kZSA9IHBhcnNlci5wYXJzZSh0b2tlbnMsIHN0YXJ0UnVsZSk7XG5cbiAgICB0aGlzLnNldFRva2Vucyh0b2tlbnMpO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgICAgY2hhcmFjdGVyc1BlckxpbmUgPSBDSEFSQUNURVJTX1BFUl9MSU5FLFxuICAgICAgICAgICAgY29udGVudHNEZXB0aCA9IENPTlRFTlRTX0RFUFRILFxuICAgICAgICAgICAgbGluZXNQZXJQYWdlID0gTElORVNfUEVSX1BBR0UsXG4gICAgICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgICAgICB0b2tlbnMsXG4gICAgICAgICAgICAgIGltcG9ydGVyLFxuICAgICAgICAgICAgICBpbmRleE9wdGlvbnMsXG4gICAgICAgICAgICAgIGxpbmVzUGVyUGFnZSxcbiAgICAgICAgICAgICAgY29udGVudHNEZXB0aCxcbiAgICAgICAgICAgICAgbm9kZUZyb21Ub2tlbnMsXG4gICAgICAgICAgICAgIHRva2Vuc0Zyb21Db250ZW50LFxuICAgICAgICAgICAgICBjaGFyYWN0ZXJzUGVyTGluZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1hcmtkb3duTm9kZXMgPSBwb3N0cHJvY2VzcyhkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZXMgPSBkaXZpc2lvbk1hcmtkb3duTm9kZXNGcm9tTWFya2Rvd25Ob2RlcyhtYXJrZG93bk5vZGVzKTtcblxuICAgICAgdGhpcy5zZXREaXZpc2lvbk1hcmtkb3duTm9kZXMoZGl2aXNpb25NYXJrZG93bk5vZGVzKTtcblxuICAgICAgY29uc3QgcGFyc2VUcmVlID0gZGl2aXNpb25NYXJrZG93bk5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcblxuICAgICAgdGhpcy51cGRhdGVNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhKHBhcnNlVHJlZSk7XG5cbiAgICAgIGNvbnN0IGluZGV4ID0gMCxcbiAgICAgICAgICAgIGxlbmd0aCA9IGRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChsZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMudXBkYXRlUGFnZShpbmRleCk7XG5cbiAgICAgICAgdGhpcy51cGRhdGVQYWdlQnV0dG9uc0RpdihsZW5ndGgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsZWFyUGFnZSgpO1xuXG4gICAgICB0aGlzLmNsZWFyUGFnZUJ1dHRvbnNEaXYoKTtcblxuICAgICAgdGhpcy5jbGVhclBsYWluVGV4dFRleHRhcmVhKCk7XG5cbiAgICAgIHRoaXMuY2xlYXJNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhKCk7XG5cbiAgICAgIGNvbnN0IGRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IG51bGw7XG5cbiAgICAgIHRoaXMuc2V0RGl2aXNpb25NYXJrZG93bk5vZGVzKGRpdmlzaW9uTWFya2Rvd25Ob2Rlcyk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlTWFya2Rvd25TdHlsZSgpIHtcbiAgICBjb25zdCB7IG1hcmtkb3duU3R5bGVFbGVtZW50IH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgbWFya2Rvd25TdHlsZSA9IHRoaXMuZ2V0TWFya2Rvd25TdHlsZSgpLFxuICAgICAgICAgIGNzcyA9IG1hcmtkb3duU3R5bGVFbGVtZW50LnVwZGF0ZShtYXJrZG93blN0eWxlKTtcblxuICAgIHRoaXMuc2V0Q1NTKGNzcyk7XG5cbiAgICBjb25zdCBsZXhlciA9IG1hcmtkb3duU3R5bGVMZXhlciwgLy8vXG4gICAgICAgICAgcGFyc2VyID0gbWFya2Rvd25TdHlsZVBhcnNlciwgLy8vXG4gICAgICAgICAgY29udGVudCA9IG1hcmtkb3duU3R5bGUsICAvLy9cbiAgICAgICAgICB0b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBzdGFydFJ1bGUgPSBwYXJzZXIuZ2V0U3RhcnRSdWxlKCksXG4gICAgICAgICAgbm9kZSA9IHBhcnNlci5wYXJzZSh0b2tlbnMsIHN0YXJ0UnVsZSk7XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuXG4gICAgICB0aGlzLnVwZGF0ZU1hcmtkb3duU3R5bGVQYXJzZVRyZWVUZXh0YXJlYShwYXJzZVRyZWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsZWFyTWFya2Rvd25TdHlsZVBhcnNlVHJlZVRleHRhcmVhKCk7XG4gICAgfVxuICB9XG5cbiAgbWFya2Rvd25TdHlsZSgpIHtcbiAgICB0aGlzLmhpZGVNYXJrZG93bkNvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuc2hvd01hcmtkb3duU3R5bGVDb250YWluZXJEaXYoKTtcbiAgfVxuXG4gIHBsYWluVGV4dCgpIHtcbiAgICB0aGlzLmhpZGVDU1NDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVIVE1MQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlUHJldmlld0NvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuc2hvd1BsYWluVGV4dENvbnRhaW5lckRpdigpO1xuICB9XG5cbiAgbWFya2Rvd24oKSB7XG4gICAgdGhpcy5zaG93TWFya2Rvd25Db250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2KCk7XG4gIH1cblxuICBwcmV2aWV3KCkge1xuICAgIHRoaXMuaGlkZUNTU0NvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZUhUTUxDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLnNob3dQcmV2aWV3Q29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlUGxhaW5UZXh0Q29udGFpbmVyRGl2KCk7XG4gIH1cblxuICBodG1sKCkge1xuICAgIHRoaXMuaGlkZUNTU0NvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuc2hvd0hUTUxDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVQcmV2aWV3Q29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlUGxhaW5UZXh0Q29udGFpbmVyRGl2KCk7XG4gIH1cblxuICBjc3MoKSB7XG4gICAgdGhpcy5zaG93Q1NTQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlSFRNTENvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZVByZXZpZXdDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVQbGFpblRleHRDb250YWluZXJEaXYoKTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICBjb25zdCB7IHRva2VucyB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIGdldERpdmlzaW9uTWFya2Rvd25Ob2RlcygpIHtcbiAgICBjb25zdCB7IGRpdmlzaW9uTWFya2Rvd25Ob2RlcyB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIGRpdmlzaW9uTWFya2Rvd25Ob2RlcztcbiAgfVxuXG4gIHNldFRva2Vucyh0b2tlbnMpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHRva2Vuc1xuICAgIH0pO1xuICB9XG5cbiAgc2V0RGl2aXNpb25NYXJrZG93bk5vZGVzKGRpdmlzaW9uTWFya2Rvd25Ob2Rlcykge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGVzXG4gICAgfSk7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3QgdG9rZW5zID0gbnVsbCxcbiAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZXMgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0b2tlbnMsXG4gICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZXNcbiAgICB9KTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPENvbHVtbnNEaXY+XG4gICAgICAgIDxMZWZ0U2l6ZWFibGVEaXY+XG4gICAgICAgICAgPExlZnRUYWJCdXR0b25zRGl2IG9uQ3VzdG9tTWFya2Rvd249e3RoaXMubWFya2Rvd25DdXN0b21IYW5kbGVyfSBvbkN1c3RvbU1hcmtkb3duU3R5bGU9e3RoaXMubWFya2Rvd25TdHlsZUN1c3RvbUhhbmRsZXJ9IC8+XG4gICAgICAgICAgPE1hcmtkb3duQ29udGFpbmVyRGl2IG9uQ3VzdG9tS2V5VXA9e3RoaXMua2V5VXBDdXN0b21IYW5kbGVyfSAvPlxuICAgICAgICAgIDxNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2IG9uQ3VzdG9tS2V5VXA9e3RoaXMua2V5VXBDdXN0b21IYW5kbGVyfSAvPlxuICAgICAgICA8L0xlZnRTaXplYWJsZURpdj5cbiAgICAgICAgPFZlcnRpY2FsU3BsaXR0ZXJEaXYvPlxuICAgICAgICA8Q29sdW1uRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFJpZ2h0VGFiQnV0dG9uc0RpdiBvbkN1c3RvbUNTUz17dGhpcy5jc3NDdXN0b21IYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkN1c3RvbUhUTUw9e3RoaXMuaHRtbEN1c3RvbUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ3VzdG9tUHJldmlldz17dGhpcy5wcmV2aWV3Q3VzdG9tSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DdXN0b21QbGFpblRleHQ9e3RoaXMucGxhaW5UZXh0Q3VzdG9tSGFuZGxlcn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Q1NTQ29udGFpbmVyRGl2Lz5cbiAgICAgICAgICAgIDxIVE1MQ29udGFpbmVyRGl2Lz5cbiAgICAgICAgICAgIDxQcmV2aWV3Q29udGFpbmVyRGl2IG9uQ3VzdG9tUGFnZVVwZGF0ZT17dGhpcy5wYWdlVXBkYXRlQ3VzdG9tSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxQbGFpblRleHRDb250YWluZXJEaXYvPlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9Db2x1bW5EaXY+XG4gICAgICA8L0NvbHVtbnNEaXY+XG5cbiAgICApO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XG5cbiAgICBjb25zdCB7IGluaXRpYWxNYXJrZG93biwgaW5pdGlhbE1hcmtkb3duU3R5bGUgfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgbWFya2Rvd25TdHlsZSA9IGluaXRpYWxNYXJrZG93blN0eWxlLCAvLy9cbiAgICAgICAgICBtYXJrZG93biA9IGluaXRpYWxNYXJrZG93bjsgLy8vXG5cbiAgICB0aGlzLnNldE1hcmtkb3duKG1hcmtkb3duKTtcblxuICAgIHRoaXMuc2V0TWFya2Rvd25TdHlsZShtYXJrZG93blN0eWxlKTtcblxuICAgIHRoaXMudXBkYXRlKCk7XG5cbiAgICB0aGlzLmNzcygpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIm1hcmtkb3duU3R5bGVFbGVtZW50XCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xuXG4gIHN0YXRpYyBpbml0aWFsTWFya2Rvd24gPSBkZWZhdWx0Q29udGVudDsgIC8vL1xuXG4gIHN0YXRpYyBpbml0aWFsTWFya2Rvd25TdHlsZSA9IGBcblxud2lkdGg6IDEwMCU7XG5oZWlnaHQ6IDE5OSU7ICBcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcbm1pbi1oZWlnaHQ6IDEwMCU7ICBcbnBhZGRpbmctdG9wOiA1cmVtOyAgXG5cbmA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICBwYWRkaW5nOiAxcmVtO1xuICBcbmA7XG5cbmZ1bmN0aW9uIHRva2Vuc0Zyb21Db250ZW50KGNvbnRlbnQpIHtcbiAgY29uc3QgdG9rZW5zID0gbWFya2Rvd25MZXhlci50b2tlbmlzZShjb250ZW50KTtcblxuICByZXR1cm4gdG9rZW5zO1xufVxuXG5mdW5jdGlvbiBub2RlRnJvbVRva2Vucyh0b2tlbnMsIHN0YXJ0UnVsZU5hbWUgPSBudWxsKSB7XG4gIGNvbnN0IHJ1bGVNYXAgPSBtYXJrZG93blBhcnNlci5nZXRSdWxlTWFwKCksXG4gICAgICAgIHN0YXJ0UnVsZSA9IChzdGFydFJ1bGVOYW1lICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgcnVsZU1hcFtzdGFydFJ1bGVOYW1lXSA6XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrZG93blBhcnNlci5nZXRTdGFydFJ1bGUoKSxcbiAgICAgICAgbm9kZSA9IG1hcmtkb3duUGFyc2VyLnBhcnNlKHRva2Vucywgc3RhcnRSdWxlKTtcblxuICByZXR1cm4gbm9kZTtcbn1cbiJdLCJuYW1lcyI6WyJtYXJrZG93bkxleGVyIiwiTWFya2Rvd25MZXhlciIsImZyb21Ob3RoaW5nIiwibWFya2Rvd25QYXJzZXIiLCJNYXJrZG93blBhcnNlciIsIm1hcmtkb3duU3R5bGVMZXhlciIsIk1hcmtkb3duU3R5bGVMZXhlciIsIm1hcmtkb3duU3R5bGVQYXJzZXIiLCJNYXJrZG93blN0eWxlUGFyc2VyIiwiVmlldyIsIm1hcmtkb3duU3R5bGVDdXN0b21IYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwibWFya2Rvd25TdHlsZSIsInBhZ2VVcGRhdGVDdXN0b21IYW5kbGVyIiwiaW5kZXgiLCJjbGVhclBhZ2UiLCJ1cGRhdGVQYWdlIiwicGxhaW5UZXh0Q3VzdG9tSGFuZGxlciIsInBsYWluVGV4dCIsIm1hcmtkb3duQ3VzdG9tSGFuZGxlciIsIm1hcmtkb3duIiwicHJldmlld0N1c3RvbUhhbmRsZXIiLCJwcmV2aWV3Iiwia2V5VXBDdXN0b21IYW5kbGVyIiwidXBkYXRlIiwiaHRtbEN1c3RvbUhhbmRsZXIiLCJodG1sIiwiY3NzQ3VzdG9tSGFuZGxlciIsImNzcyIsInVwZGF0ZU1hcmtkb3duIiwidXBkYXRlTWFya2Rvd25TdHlsZSIsImNsZWFyWE1QIiwiY2xlYXJQcmV2aWV3RGl2IiwiZGl2aXNpb25NYXJrZG93bk5vZGVzIiwiZ2V0RGl2aXNpb25NYXJrZG93bk5vZGVzIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJ0b2tlbnMiLCJnZXRUb2tlbnMiLCJjb250ZXh0IiwibGVuZ3RoIiwiYXNIVE1MIiwiYXNQbGFpblRleHQiLCJ1cGRhdGVYTVAiLCJ1cGRhdGVQcmV2aWV3RGl2IiwidXBkYXRlUGFnZUJ1dHRvbnNEaXYiLCJ1cGRhdGVQbGFpblRleHRUZXh0YXJlYSIsImdldE1hcmtkb3duIiwibGV4ZXIiLCJwYXJzZXIiLCJjb250ZW50Iiwic3RhcnRSdWxlIiwiZ2V0U3RhcnRSdWxlIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJzZXRUb2tlbnMiLCJjaGFyYWN0ZXJzUGVyTGluZSIsIkNIQVJBQ1RFUlNfUEVSX0xJTkUiLCJjb250ZW50c0RlcHRoIiwiQ09OVEVOVFNfREVQVEgiLCJsaW5lc1BlclBhZ2UiLCJMSU5FU19QRVJfUEFHRSIsImltcG9ydGVyIiwiaW5kZXhPcHRpb25zIiwibm9kZUZyb21Ub2tlbnMiLCJ0b2tlbnNGcm9tQ29udGVudCIsIm1hcmtkb3duTm9kZXMiLCJwb3N0cHJvY2VzcyIsImRpdmlzaW9uTWFya2Rvd25Ob2Rlc0Zyb21NYXJrZG93bk5vZGVzIiwic2V0RGl2aXNpb25NYXJrZG93bk5vZGVzIiwicGFyc2VUcmVlIiwiYXNQYXJzZVRyZWUiLCJ1cGRhdGVNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhIiwiY2xlYXJQYWdlQnV0dG9uc0RpdiIsImNsZWFyUGxhaW5UZXh0VGV4dGFyZWEiLCJjbGVhck1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEiLCJtYXJrZG93blN0eWxlRWxlbWVudCIsInByb3BlcnRpZXMiLCJnZXRNYXJrZG93blN0eWxlIiwic2V0Q1NTIiwidXBkYXRlTWFya2Rvd25TdHlsZVBhcnNlVHJlZVRleHRhcmVhIiwiY2xlYXJNYXJrZG93blN0eWxlUGFyc2VUcmVlVGV4dGFyZWEiLCJoaWRlTWFya2Rvd25Db250YWluZXJEaXYiLCJzaG93TWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdiIsImhpZGVDU1NDb250YWluZXJEaXYiLCJoaWRlSFRNTENvbnRhaW5lckRpdiIsImhpZGVQcmV2aWV3Q29udGFpbmVyRGl2Iiwic2hvd1BsYWluVGV4dENvbnRhaW5lckRpdiIsInNob3dNYXJrZG93bkNvbnRhaW5lckRpdiIsImhpZGVNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2Iiwic2hvd1ByZXZpZXdDb250YWluZXJEaXYiLCJoaWRlUGxhaW5UZXh0Q29udGFpbmVyRGl2Iiwic2hvd0hUTUxDb250YWluZXJEaXYiLCJzaG93Q1NTQ29udGFpbmVyRGl2IiwiZ2V0U3RhdGUiLCJ1cGRhdGVTdGF0ZSIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwiY2hpbGRFbGVtZW50cyIsIkNvbHVtbnNEaXYiLCJMZWZ0U2l6ZWFibGVEaXYiLCJMZWZ0VGFiQnV0dG9uc0RpdiIsIm9uQ3VzdG9tTWFya2Rvd24iLCJvbkN1c3RvbU1hcmtkb3duU3R5bGUiLCJNYXJrZG93bkNvbnRhaW5lckRpdiIsIm9uQ3VzdG9tS2V5VXAiLCJNYXJrZG93blN0eWxlQ29udGFpbmVyRGl2IiwiVmVydGljYWxTcGxpdHRlckRpdiIsIkNvbHVtbkRpdiIsIlJvd3NEaXYiLCJSaWdodFRhYkJ1dHRvbnNEaXYiLCJvbkN1c3RvbUNTUyIsIm9uQ3VzdG9tSFRNTCIsIm9uQ3VzdG9tUHJldmlldyIsIm9uQ3VzdG9tUGxhaW5UZXh0IiwiQ1NTQ29udGFpbmVyRGl2IiwiSFRNTENvbnRhaW5lckRpdiIsIlByZXZpZXdDb250YWluZXJEaXYiLCJvbkN1c3RvbVBhZ2VVcGRhdGUiLCJQbGFpblRleHRDb250YWluZXJEaXYiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsImNvbnN0cnVjdG9yIiwiaW5pdGlhbE1hcmtkb3duIiwiaW5pdGlhbE1hcmtkb3duU3R5bGUiLCJzZXRNYXJrZG93biIsInNldE1hcmtkb3duU3R5bGUiLCJFbGVtZW50IiwidGFnTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJkZWZhdWx0Q29udGVudCIsIndpdGhTdHlsZSIsInN0YXJ0UnVsZU5hbWUiLCJydWxlTWFwIiwiZ2V0UnVsZU1hcCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNFRBOzs7ZUFBQTs7O29FQTFUc0I7b0JBRUU7MEJBQzRDO3FCQUNtQjtnRUFFbEU7bUVBQ0k7MkRBQ0c7MERBQ0E7MkRBQ0M7NERBQ0M7NERBQ0M7OERBQ0M7K0RB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