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
var _occamdom = require("occam-dom");
var _easylayout = require("easy-layout");
var _index = require("../index");
var _importer = /*#__PURE__*/ _interop_require_wildcard(require("./importer"));
var _html = /*#__PURE__*/ _interop_require_default(require("../node/html"));
var _indexOptions = /*#__PURE__*/ _interop_require_default(require("./indexOptions"));
var _pageButtons = /*#__PURE__*/ _interop_require_default(require("./view/div/pageButtons"));
var _left = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable/left"));
var _css = /*#__PURE__*/ _interop_require_default(require("./view/div/container/css"));
var _html1 = /*#__PURE__*/ _interop_require_default(require("./view/div/container/html"));
var _left1 = /*#__PURE__*/ _interop_require_default(require("./view/div/tabButtons/left"));
var _right = /*#__PURE__*/ _interop_require_default(require("./view/div/tabButtons/right"));
var _preview = /*#__PURE__*/ _interop_require_default(require("./view/div/container/preview"));
var _markdown = /*#__PURE__*/ _interop_require_default(require("./view/div/container/markdown"));
var _plainText = /*#__PURE__*/ _interop_require_default(require("./view/div/container/plainText"));
var _markdownStyle = /*#__PURE__*/ _interop_require_default(require("./view/div/container/markdownStyle"));
var _inner = /*#__PURE__*/ _interop_require_default(require("./view/textarea/parseTree/markdown/inner"));
var _constants = require("./constants");
var _processing = require("../utilities/processing");
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
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
var topmostNodeFromOuterNodes = _occamdom.nodeUtilities.topmostNodeFromOuterNodes;
var markdownLexer = _index.MarkdownLexer.fromNothing(), markdownParser = _index.MarkdownParser.fromNothing(), markdownStyleLexer = _index.MarkdownStyleLexer.fromNothing(), markdownStyleParser = _index.MarkdownStyleParser.fromNothing();
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    function View() {
        _class_call_check(this, View);
        var _this;
        _this = _call_super(this, View, arguments), _define_property(_this, "markdownStyleCustomHandler", function(event, element) {
            _this.markdownStyle();
        }), _define_property(_this, "pageUpdateCustomHandler", function(event, element, index) {
            _this.clearPage();
            _this.updatePage(index);
        }), _define_property(_this, "plainTextCustomHandler", function(event, element) {
            _this.plainText();
        }), _define_property(_this, "markdownCustomHandler", function(event, element) {
            _this.markdown();
        }), _define_property(_this, "previewCustomHandler", function(event, element) {
            _this.preview();
        }), _define_property(_this, "keyUpCustomHandler", function(event, element) {
            _this.update();
        }), _define_property(_this, "htmlCustomHandler", function(event, element) {
            _this.html();
        }), _define_property(_this, "cssCustomHandler", function(event, element) {
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
                this.clearInnerMarkdownParseTreeTextarea();
            }
        },
        {
            key: "updatePage",
            value: function updatePage(index) {
                var divisionMarkdownNodes = this.getDivisionMarkdownNodes(), divisionMarkdownNode = divisionMarkdownNodes[index], tokens = this.getTokens(), context = {
                    tokens: tokens
                }, length = null;
                var queries = _html.default.queries, node = divisionMarkdownNode, nodes = (0, _query.nodesFromNodeAndQueries)(node, queries), topmostHTMLNode = topmostNodeFromOuterNodes(_html.default, nodes), parseTree = topmostHTMLNode.asParseTree(), html = topmostHTMLNode.asHTML(context), plainText = divisionMarkdownNode.asPlainText(context), innerMarkdownParseTree = parseTree; ///
                this.updateXMP(html);
                this.updatePreviewDiv(divisionMarkdownNode, context);
                this.updatePageButtonsDiv(length, index);
                this.updatePlainTextTextarea(plainText);
                this.updateInnerMarkdownParseTreeTextarea(innerMarkdownParseTree);
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
                    var parseTree = divisionMarkdownNode.asParseTree(tokens), outerMarkdownParseTree = parseTree; ///
                    this.updateOuterMarkdownParseTreeTextarea(outerMarkdownParseTree);
                    var index = 0, length = divisionMarkdownNodes.length;
                    if (length > 0) {
                        this.updatePage(index);
                        this.updatePageButtonsDiv(length);
                    }
                } else {
                    this.clearPage();
                    this.clearPageButtonsDiv();
                    this.clearPlainTextTextarea();
                    this.clearOuterMarkdownParseTreeTextarea();
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
                }), /*#__PURE__*/ React.createElement(_pageButtons.default, {
                    onCustomPageUpdate: this.pageUpdateCustomHandler
                }), /*#__PURE__*/ React.createElement(_css.default, null), /*#__PURE__*/ React.createElement(_html1.default, null), /*#__PURE__*/ React.createElement(_preview.default, null), /*#__PURE__*/ React.createElement(_plainText.default, null), /*#__PURE__*/ React.createElement(_inner.default, null))));
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
_define_property(View, "initialMarkdown", _importer.defaultContent) ///
;
_define_property(View, "initialMarkdownStyle", "width: 100%;\nheight: 199%;  \nposition: absolute;\nmin-height: 100%;  \npadding-top: 5rem;  \n");
_define_property(View, "tagName", "div");
_define_property(View, "ignoredProperties", [
    "markdownStyleElement"
]);
_define_property(View, "defaultProperties", {
    className: "view"
});
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgbm9kZVV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1kb21cIjtcbmltcG9ydCB7IFJvd3NEaXYsIENvbHVtbkRpdiwgQ29sdW1uc0RpdiwgVmVydGljYWxTcGxpdHRlckRpdiB9IGZyb20gXCJlYXN5LWxheW91dFwiO1xuaW1wb3J0IHsgTWFya2Rvd25MZXhlciwgTWFya2Rvd25QYXJzZXIsIE1hcmtkb3duU3R5bGVMZXhlciwgTWFya2Rvd25TdHlsZVBhcnNlciB9IGZyb20gXCIuLi9pbmRleFwiO1xuXG5pbXBvcnQgaW1wb3J0ZXIgZnJvbSBcIi4vaW1wb3J0ZXJcIjtcbmltcG9ydCBIVE1MTm9kZSBmcm9tIFwiLi4vbm9kZS9odG1sXCI7XG5pbXBvcnQgaW5kZXhPcHRpb25zIGZyb20gXCIuL2luZGV4T3B0aW9uc1wiO1xuaW1wb3J0IFBhZ2VCdXR0b25zRGl2IGZyb20gXCIuL3ZpZXcvZGl2L3BhZ2VCdXR0b25zXCI7XG5pbXBvcnQgTGVmdFNpemVhYmxlRGl2IGZyb20gXCIuL3ZpZXcvZGl2L3NpemVhYmxlL2xlZnRcIjtcbmltcG9ydCBDU1NDb250YWluZXJEaXYgZnJvbSBcIi4vdmlldy9kaXYvY29udGFpbmVyL2Nzc1wiO1xuaW1wb3J0IEhUTUxDb250YWluZXJEaXYgZnJvbSBcIi4vdmlldy9kaXYvY29udGFpbmVyL2h0bWxcIjtcbmltcG9ydCBMZWZ0VGFiQnV0dG9uc0RpdiBmcm9tIFwiLi92aWV3L2Rpdi90YWJCdXR0b25zL2xlZnRcIjtcbmltcG9ydCBSaWdodFRhYkJ1dHRvbnNEaXYgZnJvbSBcIi4vdmlldy9kaXYvdGFiQnV0dG9ucy9yaWdodFwiO1xuaW1wb3J0IFByZXZpZXdDb250YWluZXJEaXYgZnJvbSBcIi4vdmlldy9kaXYvY29udGFpbmVyL3ByZXZpZXdcIjtcbmltcG9ydCBNYXJrZG93bkNvbnRhaW5lckRpdiBmcm9tIFwiLi92aWV3L2Rpdi9jb250YWluZXIvbWFya2Rvd25cIjtcbmltcG9ydCBQbGFpblRleHRDb250YWluZXJEaXYgZnJvbSBcIi4vdmlldy9kaXYvY29udGFpbmVyL3BsYWluVGV4dFwiO1xuaW1wb3J0IE1hcmtkb3duU3R5bGVDb250YWluZXJEaXYgZnJvbSBcIi4vdmlldy9kaXYvY29udGFpbmVyL21hcmtkb3duU3R5bGVcIjtcbmltcG9ydCBJbm5lck1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9wYXJzZVRyZWUvbWFya2Rvd24vaW5uZXJcIjtcblxuaW1wb3J0IHsgZGVmYXVsdENvbnRlbnQgfSBmcm9tIFwiLi9pbXBvcnRlclwiO1xuaW1wb3J0IHsgTElORVNfUEVSX1BBR0UsIENPTlRFTlRTX0RFUFRILCBDSEFSQUNURVJTX1BFUl9MSU5FIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBwb3N0cHJvY2VzcywgZGl2aXNpb25NYXJrZG93bk5vZGVzRnJvbU1hcmtkb3duTm9kZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Byb2Nlc3NpbmdcIjtcbmltcG9ydCB7bm9kZXNGcm9tTm9kZUFuZFF1ZXJpZXN9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgeyB0b3Btb3N0Tm9kZUZyb21PdXRlck5vZGVzIH0gPSBub2RlVXRpbGl0aWVzO1xuXG5jb25zdCBtYXJrZG93bkxleGVyID0gTWFya2Rvd25MZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgbWFya2Rvd25QYXJzZXIgPSBNYXJrZG93blBhcnNlci5mcm9tTm90aGluZygpLFxuICAgICAgbWFya2Rvd25TdHlsZUxleGVyID0gTWFya2Rvd25TdHlsZUxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBtYXJrZG93blN0eWxlUGFyc2VyID0gTWFya2Rvd25TdHlsZVBhcnNlci5mcm9tTm90aGluZygpO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIG1hcmtkb3duU3R5bGVDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5tYXJrZG93blN0eWxlKCk7XG4gIH1cblxuICBwYWdlVXBkYXRlQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICB0aGlzLmNsZWFyUGFnZSgpO1xuXG4gICAgdGhpcy51cGRhdGVQYWdlKGluZGV4KTtcbiAgfVxuXG4gIHBsYWluVGV4dEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnBsYWluVGV4dCgpO1xuICB9XG5cbiAgbWFya2Rvd25DdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5tYXJrZG93bigpO1xuICB9XG5cbiAgcHJldmlld0N1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnByZXZpZXcoKTtcbiAgfVxuXG4gIGtleVVwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBodG1sQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMuaHRtbCgpO1xuICB9XG5cbiAgY3NzQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMuY3NzKCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy51cGRhdGVNYXJrZG93bigpO1xuICAgIHRoaXMudXBkYXRlTWFya2Rvd25TdHlsZSgpO1xuICB9XG5cbiAgY2xlYXJQYWdlKCkge1xuICAgIHRoaXMuY2xlYXJYTVAoKTtcblxuICAgIHRoaXMuY2xlYXJQcmV2aWV3RGl2KCk7XG5cbiAgICB0aGlzLmNsZWFySW5uZXJNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhKCk7XG4gIH1cblxuICB1cGRhdGVQYWdlKGluZGV4KSB7XG4gICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGVzID0gdGhpcy5nZXREaXZpc2lvbk1hcmtkb3duTm9kZXMoKSxcbiAgICAgICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2Rlc1tpbmRleF0sXG4gICAgICAgICAgdG9rZW5zID0gdGhpcy5nZXRUb2tlbnMoKSxcbiAgICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgICAgdG9rZW5zXG4gICAgICAgICAgfSxcbiAgICAgICAgICBsZW5ndGggPSBudWxsO1xuXG4gIGNvbnN0IHsgcXVlcmllcyB9ID0gSFRNTE5vZGUsXG4gICAgICAgICAgbm9kZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLCAgLy8vXG4gICAgICAgICAgbm9kZXMgPSBub2Rlc0Zyb21Ob2RlQW5kUXVlcmllcyhub2RlLCBxdWVyaWVzKSxcbiAgICAgICAgICB0b3Btb3N0SFRNTE5vZGUgPSB0b3Btb3N0Tm9kZUZyb21PdXRlck5vZGVzKEhUTUxOb2RlLCBub2RlcyksXG4gICAgICAgICAgcGFyc2VUcmVlID0gdG9wbW9zdEhUTUxOb2RlLmFzUGFyc2VUcmVlKCksXG4gICAgICAgICAgaHRtbCA9IHRvcG1vc3RIVE1MTm9kZS5hc0hUTUwoY29udGV4dCksXG4gICAgICAgICAgcGxhaW5UZXh0ID0gZGl2aXNpb25NYXJrZG93bk5vZGUuYXNQbGFpblRleHQoY29udGV4dCksXG4gICAgICAgICAgaW5uZXJNYXJrZG93blBhcnNlVHJlZSA9IHBhcnNlVHJlZTsgLy8vXG5cbiAgICB0aGlzLnVwZGF0ZVhNUChodG1sKTtcblxuICAgIHRoaXMudXBkYXRlUHJldmlld0RpdihkaXZpc2lvbk1hcmtkb3duTm9kZSwgY29udGV4dCk7XG5cbiAgICB0aGlzLnVwZGF0ZVBhZ2VCdXR0b25zRGl2KGxlbmd0aCwgaW5kZXgpO1xuXG4gICAgdGhpcy51cGRhdGVQbGFpblRleHRUZXh0YXJlYShwbGFpblRleHQpO1xuXG4gICAgdGhpcy51cGRhdGVJbm5lck1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEoaW5uZXJNYXJrZG93blBhcnNlVHJlZSk7XG4gIH1cblxuICB1cGRhdGVNYXJrZG93bigpIHtcbiAgICBjb25zdCBtYXJrZG93biA9IHRoaXMuZ2V0TWFya2Rvd24oKSxcbiAgICAgICAgICBsZXhlciA9IG1hcmtkb3duTGV4ZXIsICAvLy9cbiAgICAgICAgICBwYXJzZXIgPSAgbWFya2Rvd25QYXJzZXIsIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSBtYXJrZG93biwgLy8vXG4gICAgICAgICAgc3RhcnRSdWxlID0gcGFyc2VyLmdldFN0YXJ0UnVsZSgpLFxuICAgICAgICAgIHRva2VucyA9IGxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgIG5vZGUgPSBwYXJzZXIucGFyc2UodG9rZW5zLCBzdGFydFJ1bGUpO1xuXG4gICAgdGhpcy5zZXRUb2tlbnModG9rZW5zKTtcblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBkaXZpc2lvbk1hcmtkb3duTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICAgIGNoYXJhY3RlcnNQZXJMaW5lID0gQ0hBUkFDVEVSU19QRVJfTElORSxcbiAgICAgICAgICAgIGNvbnRlbnRzRGVwdGggPSBDT05URU5UU19ERVBUSCxcbiAgICAgICAgICAgIGxpbmVzUGVyUGFnZSA9IExJTkVTX1BFUl9QQUdFLFxuICAgICAgICAgICAgY29udGV4dCA9IHtcbiAgICAgICAgICAgICAgdG9rZW5zLFxuICAgICAgICAgICAgICBpbXBvcnRlcixcbiAgICAgICAgICAgICAgaW5kZXhPcHRpb25zLFxuICAgICAgICAgICAgICBsaW5lc1BlclBhZ2UsXG4gICAgICAgICAgICAgIGNvbnRlbnRzRGVwdGgsXG4gICAgICAgICAgICAgIG5vZGVGcm9tVG9rZW5zLFxuICAgICAgICAgICAgICB0b2tlbnNGcm9tQ29udGVudCxcbiAgICAgICAgICAgICAgY2hhcmFjdGVyc1BlckxpbmVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtYXJrZG93bk5vZGVzID0gcG9zdHByb2Nlc3MoZGl2aXNpb25NYXJrZG93bk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgZGl2aXNpb25NYXJrZG93bk5vZGVzID0gZGl2aXNpb25NYXJrZG93bk5vZGVzRnJvbU1hcmtkb3duTm9kZXMobWFya2Rvd25Ob2Rlcyk7XG5cbiAgICAgIHRoaXMuc2V0RGl2aXNpb25NYXJrZG93bk5vZGVzKGRpdmlzaW9uTWFya2Rvd25Ob2Rlcyk7XG5cbiAgICAgIGNvbnN0IHBhcnNlVHJlZSA9IGRpdmlzaW9uTWFya2Rvd25Ob2RlLmFzUGFyc2VUcmVlKHRva2VucyksXG4gICAgICAgICAgICBvdXRlck1hcmtkb3duUGFyc2VUcmVlID0gcGFyc2VUcmVlOyAvLy9cblxuICAgICAgdGhpcy51cGRhdGVPdXRlck1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEob3V0ZXJNYXJrZG93blBhcnNlVHJlZSk7XG5cbiAgICAgIGNvbnN0IGluZGV4ID0gMCxcbiAgICAgICAgICAgIGxlbmd0aCA9IGRpdmlzaW9uTWFya2Rvd25Ob2Rlcy5sZW5ndGg7XG5cbiAgICAgIGlmIChsZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMudXBkYXRlUGFnZShpbmRleCk7XG5cbiAgICAgICAgdGhpcy51cGRhdGVQYWdlQnV0dG9uc0RpdihsZW5ndGgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsZWFyUGFnZSgpO1xuXG4gICAgICB0aGlzLmNsZWFyUGFnZUJ1dHRvbnNEaXYoKTtcblxuICAgICAgdGhpcy5jbGVhclBsYWluVGV4dFRleHRhcmVhKCk7XG5cbiAgICAgIHRoaXMuY2xlYXJPdXRlck1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEoKTtcblxuICAgICAgY29uc3QgZGl2aXNpb25NYXJrZG93bk5vZGVzID0gbnVsbDtcblxuICAgICAgdGhpcy5zZXREaXZpc2lvbk1hcmtkb3duTm9kZXMoZGl2aXNpb25NYXJrZG93bk5vZGVzKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVNYXJrZG93blN0eWxlKCkge1xuICAgIGNvbnN0IHsgbWFya2Rvd25TdHlsZUVsZW1lbnQgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBtYXJrZG93blN0eWxlID0gdGhpcy5nZXRNYXJrZG93blN0eWxlKCksXG4gICAgICAgICAgY3NzID0gbWFya2Rvd25TdHlsZUVsZW1lbnQudXBkYXRlKG1hcmtkb3duU3R5bGUpO1xuXG4gICAgdGhpcy5zZXRDU1MoY3NzKTtcblxuICAgIGNvbnN0IGxleGVyID0gbWFya2Rvd25TdHlsZUxleGVyLCAvLy9cbiAgICAgICAgICBwYXJzZXIgPSBtYXJrZG93blN0eWxlUGFyc2VyLCAvLy9cbiAgICAgICAgICBjb250ZW50ID0gbWFya2Rvd25TdHlsZSwgIC8vL1xuICAgICAgICAgIHRva2VucyA9IGxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgIHN0YXJ0UnVsZSA9IHBhcnNlci5nZXRTdGFydFJ1bGUoKSxcbiAgICAgICAgICBub2RlID0gcGFyc2VyLnBhcnNlKHRva2Vucywgc3RhcnRSdWxlKTtcblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG5cbiAgICAgIHRoaXMudXBkYXRlTWFya2Rvd25TdHlsZVBhcnNlVHJlZVRleHRhcmVhKHBhcnNlVHJlZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xlYXJNYXJrZG93blN0eWxlUGFyc2VUcmVlVGV4dGFyZWEoKTtcbiAgICB9XG4gIH1cblxuICBtYXJrZG93blN0eWxlKCkge1xuICAgIHRoaXMuaGlkZU1hcmtkb3duQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5zaG93TWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdigpO1xuICB9XG5cbiAgcGxhaW5UZXh0KCkge1xuICAgIHRoaXMuaGlkZUNTU0NvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZUhUTUxDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVQcmV2aWV3Q29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5zaG93UGxhaW5UZXh0Q29udGFpbmVyRGl2KCk7XG4gIH1cblxuICBtYXJrZG93bigpIHtcbiAgICB0aGlzLnNob3dNYXJrZG93bkNvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZU1hcmtkb3duU3R5bGVDb250YWluZXJEaXYoKTtcbiAgfVxuXG4gIHByZXZpZXcoKSB7XG4gICAgdGhpcy5oaWRlQ1NTQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlSFRNTENvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuc2hvd1ByZXZpZXdDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVQbGFpblRleHRDb250YWluZXJEaXYoKTtcbiAgfVxuXG4gIGh0bWwoKSB7XG4gICAgdGhpcy5oaWRlQ1NTQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5zaG93SFRNTENvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZVByZXZpZXdDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVQbGFpblRleHRDb250YWluZXJEaXYoKTtcbiAgfVxuXG4gIGNzcygpIHtcbiAgICB0aGlzLnNob3dDU1NDb250YWluZXJEaXYoKTtcbiAgICB0aGlzLmhpZGVIVE1MQ29udGFpbmVyRGl2KCk7XG4gICAgdGhpcy5oaWRlUHJldmlld0NvbnRhaW5lckRpdigpO1xuICAgIHRoaXMuaGlkZVBsYWluVGV4dENvbnRhaW5lckRpdigpO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIGNvbnN0IHsgdG9rZW5zIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9XG5cbiAgZ2V0RGl2aXNpb25NYXJrZG93bk5vZGVzKCkge1xuICAgIGNvbnN0IHsgZGl2aXNpb25NYXJrZG93bk5vZGVzIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gZGl2aXNpb25NYXJrZG93bk5vZGVzO1xuICB9XG5cbiAgc2V0VG9rZW5zKHRva2Vucykge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgdG9rZW5zXG4gICAgfSk7XG4gIH1cblxuICBzZXREaXZpc2lvbk1hcmtkb3duTm9kZXMoZGl2aXNpb25NYXJrZG93bk5vZGVzKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBkaXZpc2lvbk1hcmtkb3duTm9kZXNcbiAgICB9KTtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCB0b2tlbnMgPSBudWxsLFxuICAgICAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2RlcyA9IG51bGw7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRva2VucyxcbiAgICAgIGRpdmlzaW9uTWFya2Rvd25Ob2Rlc1xuICAgIH0pO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgPExlZnRTaXplYWJsZURpdj5cbiAgICAgICAgICA8TGVmdFRhYkJ1dHRvbnNEaXYgb25DdXN0b21NYXJrZG93bj17dGhpcy5tYXJrZG93bkN1c3RvbUhhbmRsZXJ9IG9uQ3VzdG9tTWFya2Rvd25TdHlsZT17dGhpcy5tYXJrZG93blN0eWxlQ3VzdG9tSGFuZGxlcn0gLz5cbiAgICAgICAgICA8TWFya2Rvd25Db250YWluZXJEaXYgb25DdXN0b21LZXlVcD17dGhpcy5rZXlVcEN1c3RvbUhhbmRsZXJ9IC8+XG4gICAgICAgICAgPE1hcmtkb3duU3R5bGVDb250YWluZXJEaXYgb25DdXN0b21LZXlVcD17dGhpcy5rZXlVcEN1c3RvbUhhbmRsZXJ9IC8+XG4gICAgICAgIDwvTGVmdFNpemVhYmxlRGl2PlxuICAgICAgICA8VmVydGljYWxTcGxpdHRlckRpdi8+XG4gICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8UmlnaHRUYWJCdXR0b25zRGl2IG9uQ3VzdG9tQ1NTPXt0aGlzLmNzc0N1c3RvbUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ3VzdG9tSFRNTD17dGhpcy5odG1sQ3VzdG9tSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DdXN0b21QcmV2aWV3PXt0aGlzLnByZXZpZXdDdXN0b21IYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkN1c3RvbVBsYWluVGV4dD17dGhpcy5wbGFpblRleHRDdXN0b21IYW5kbGVyfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxQYWdlQnV0dG9uc0RpdiBvbkN1c3RvbVBhZ2VVcGRhdGU9e3RoaXMucGFnZVVwZGF0ZUN1c3RvbUhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8Q1NTQ29udGFpbmVyRGl2Lz5cbiAgICAgICAgICAgIDxIVE1MQ29udGFpbmVyRGl2Lz5cbiAgICAgICAgICAgIDxQcmV2aWV3Q29udGFpbmVyRGl2Lz5cbiAgICAgICAgICAgIDxQbGFpblRleHRDb250YWluZXJEaXYvPlxuICAgICAgICAgICAgPElubmVyTWFya2Rvd25QYXJzZVRyZWVUZXh0YXJlYS8+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L0NvbHVtbkRpdj5cbiAgICAgIDwvQ29sdW1uc0Rpdj5cblxuICAgICk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoKTtcblxuICAgIGNvbnN0IHsgaW5pdGlhbE1hcmtkb3duLCBpbml0aWFsTWFya2Rvd25TdHlsZSB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBtYXJrZG93blN0eWxlID0gaW5pdGlhbE1hcmtkb3duU3R5bGUsIC8vL1xuICAgICAgICAgIG1hcmtkb3duID0gaW5pdGlhbE1hcmtkb3duOyAvLy9cblxuICAgIHRoaXMuc2V0TWFya2Rvd24obWFya2Rvd24pO1xuXG4gICAgdGhpcy5zZXRNYXJrZG93blN0eWxlKG1hcmtkb3duU3R5bGUpO1xuXG4gICAgdGhpcy51cGRhdGUoKTtcblxuICAgIHRoaXMuY3NzKCk7XG4gIH1cblxuICBzdGF0aWMgaW5pdGlhbE1hcmtkb3duID0gZGVmYXVsdENvbnRlbnQ7ICAvLy9cblxuICBzdGF0aWMgaW5pdGlhbE1hcmtkb3duU3R5bGUgPSBgd2lkdGg6IDEwMCU7XG5oZWlnaHQ6IDE5OSU7ICBcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcbm1pbi1oZWlnaHQ6IDEwMCU7ICBcbnBhZGRpbmctdG9wOiA1cmVtOyAgXG5gO1xuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJtYXJrZG93blN0eWxlRWxlbWVudFwiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHBhZGRpbmc6IDFyZW07XG4gIFxuYDtcblxuZnVuY3Rpb24gdG9rZW5zRnJvbUNvbnRlbnQoY29udGVudCkge1xuICBjb25zdCB0b2tlbnMgPSBtYXJrZG93bkxleGVyLnRva2VuaXNlKGNvbnRlbnQpO1xuXG4gIHJldHVybiB0b2tlbnM7XG59XG5cbmZ1bmN0aW9uIG5vZGVGcm9tVG9rZW5zKHRva2Vucywgc3RhcnRSdWxlTmFtZSA9IG51bGwpIHtcbiAgY29uc3QgcnVsZU1hcCA9IG1hcmtkb3duUGFyc2VyLmdldFJ1bGVNYXAoKSxcbiAgICAgICAgc3RhcnRSdWxlID0gKHN0YXJ0UnVsZU5hbWUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICBydWxlTWFwW3N0YXJ0UnVsZU5hbWVdIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtkb3duUGFyc2VyLmdldFN0YXJ0UnVsZSgpLFxuICAgICAgICBub2RlID0gbWFya2Rvd25QYXJzZXIucGFyc2UodG9rZW5zLCBzdGFydFJ1bGUpO1xuXG4gIHJldHVybiBub2RlO1xufVxuIl0sIm5hbWVzIjpbInRvcG1vc3ROb2RlRnJvbU91dGVyTm9kZXMiLCJub2RlVXRpbGl0aWVzIiwibWFya2Rvd25MZXhlciIsIk1hcmtkb3duTGV4ZXIiLCJmcm9tTm90aGluZyIsIm1hcmtkb3duUGFyc2VyIiwiTWFya2Rvd25QYXJzZXIiLCJtYXJrZG93blN0eWxlTGV4ZXIiLCJNYXJrZG93blN0eWxlTGV4ZXIiLCJtYXJrZG93blN0eWxlUGFyc2VyIiwiTWFya2Rvd25TdHlsZVBhcnNlciIsIlZpZXciLCJtYXJrZG93blN0eWxlQ3VzdG9tSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsIm1hcmtkb3duU3R5bGUiLCJwYWdlVXBkYXRlQ3VzdG9tSGFuZGxlciIsImluZGV4IiwiY2xlYXJQYWdlIiwidXBkYXRlUGFnZSIsInBsYWluVGV4dEN1c3RvbUhhbmRsZXIiLCJwbGFpblRleHQiLCJtYXJrZG93bkN1c3RvbUhhbmRsZXIiLCJtYXJrZG93biIsInByZXZpZXdDdXN0b21IYW5kbGVyIiwicHJldmlldyIsImtleVVwQ3VzdG9tSGFuZGxlciIsInVwZGF0ZSIsImh0bWxDdXN0b21IYW5kbGVyIiwiaHRtbCIsImNzc0N1c3RvbUhhbmRsZXIiLCJjc3MiLCJ1cGRhdGVNYXJrZG93biIsInVwZGF0ZU1hcmtkb3duU3R5bGUiLCJjbGVhclhNUCIsImNsZWFyUHJldmlld0RpdiIsImNsZWFySW5uZXJNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhIiwiZGl2aXNpb25NYXJrZG93bk5vZGVzIiwiZ2V0RGl2aXNpb25NYXJrZG93bk5vZGVzIiwiZGl2aXNpb25NYXJrZG93bk5vZGUiLCJ0b2tlbnMiLCJnZXRUb2tlbnMiLCJjb250ZXh0IiwibGVuZ3RoIiwicXVlcmllcyIsIkhUTUxOb2RlIiwibm9kZSIsIm5vZGVzIiwibm9kZXNGcm9tTm9kZUFuZFF1ZXJpZXMiLCJ0b3Btb3N0SFRNTE5vZGUiLCJwYXJzZVRyZWUiLCJhc1BhcnNlVHJlZSIsImFzSFRNTCIsImFzUGxhaW5UZXh0IiwiaW5uZXJNYXJrZG93blBhcnNlVHJlZSIsInVwZGF0ZVhNUCIsInVwZGF0ZVByZXZpZXdEaXYiLCJ1cGRhdGVQYWdlQnV0dG9uc0RpdiIsInVwZGF0ZVBsYWluVGV4dFRleHRhcmVhIiwidXBkYXRlSW5uZXJNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhIiwiZ2V0TWFya2Rvd24iLCJsZXhlciIsInBhcnNlciIsImNvbnRlbnQiLCJzdGFydFJ1bGUiLCJnZXRTdGFydFJ1bGUiLCJ0b2tlbmlzZSIsInBhcnNlIiwic2V0VG9rZW5zIiwiY2hhcmFjdGVyc1BlckxpbmUiLCJDSEFSQUNURVJTX1BFUl9MSU5FIiwiY29udGVudHNEZXB0aCIsIkNPTlRFTlRTX0RFUFRIIiwibGluZXNQZXJQYWdlIiwiTElORVNfUEVSX1BBR0UiLCJpbXBvcnRlciIsImluZGV4T3B0aW9ucyIsIm5vZGVGcm9tVG9rZW5zIiwidG9rZW5zRnJvbUNvbnRlbnQiLCJtYXJrZG93bk5vZGVzIiwicG9zdHByb2Nlc3MiLCJkaXZpc2lvbk1hcmtkb3duTm9kZXNGcm9tTWFya2Rvd25Ob2RlcyIsInNldERpdmlzaW9uTWFya2Rvd25Ob2RlcyIsIm91dGVyTWFya2Rvd25QYXJzZVRyZWUiLCJ1cGRhdGVPdXRlck1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEiLCJjbGVhclBhZ2VCdXR0b25zRGl2IiwiY2xlYXJQbGFpblRleHRUZXh0YXJlYSIsImNsZWFyT3V0ZXJNYXJrZG93blBhcnNlVHJlZVRleHRhcmVhIiwibWFya2Rvd25TdHlsZUVsZW1lbnQiLCJwcm9wZXJ0aWVzIiwiZ2V0TWFya2Rvd25TdHlsZSIsInNldENTUyIsInVwZGF0ZU1hcmtkb3duU3R5bGVQYXJzZVRyZWVUZXh0YXJlYSIsImNsZWFyTWFya2Rvd25TdHlsZVBhcnNlVHJlZVRleHRhcmVhIiwiaGlkZU1hcmtkb3duQ29udGFpbmVyRGl2Iiwic2hvd01hcmtkb3duU3R5bGVDb250YWluZXJEaXYiLCJoaWRlQ1NTQ29udGFpbmVyRGl2IiwiaGlkZUhUTUxDb250YWluZXJEaXYiLCJoaWRlUHJldmlld0NvbnRhaW5lckRpdiIsInNob3dQbGFpblRleHRDb250YWluZXJEaXYiLCJzaG93TWFya2Rvd25Db250YWluZXJEaXYiLCJoaWRlTWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdiIsInNob3dQcmV2aWV3Q29udGFpbmVyRGl2IiwiaGlkZVBsYWluVGV4dENvbnRhaW5lckRpdiIsInNob3dIVE1MQ29udGFpbmVyRGl2Iiwic2hvd0NTU0NvbnRhaW5lckRpdiIsImdldFN0YXRlIiwidXBkYXRlU3RhdGUiLCJzZXRJbml0aWFsU3RhdGUiLCJzZXRTdGF0ZSIsImNoaWxkRWxlbWVudHMiLCJDb2x1bW5zRGl2IiwiTGVmdFNpemVhYmxlRGl2IiwiTGVmdFRhYkJ1dHRvbnNEaXYiLCJvbkN1c3RvbU1hcmtkb3duIiwib25DdXN0b21NYXJrZG93blN0eWxlIiwiTWFya2Rvd25Db250YWluZXJEaXYiLCJvbkN1c3RvbUtleVVwIiwiTWFya2Rvd25TdHlsZUNvbnRhaW5lckRpdiIsIlZlcnRpY2FsU3BsaXR0ZXJEaXYiLCJDb2x1bW5EaXYiLCJSb3dzRGl2IiwiUmlnaHRUYWJCdXR0b25zRGl2Iiwib25DdXN0b21DU1MiLCJvbkN1c3RvbUhUTUwiLCJvbkN1c3RvbVByZXZpZXciLCJvbkN1c3RvbVBsYWluVGV4dCIsIlBhZ2VCdXR0b25zRGl2Iiwib25DdXN0b21QYWdlVXBkYXRlIiwiQ1NTQ29udGFpbmVyRGl2IiwiSFRNTENvbnRhaW5lckRpdiIsIlByZXZpZXdDb250YWluZXJEaXYiLCJQbGFpblRleHRDb250YWluZXJEaXYiLCJJbm5lck1hcmtkb3duUGFyc2VUcmVlVGV4dGFyZWEiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsImNvbnN0cnVjdG9yIiwiaW5pdGlhbE1hcmtkb3duIiwiaW5pdGlhbE1hcmtkb3duU3R5bGUiLCJzZXRNYXJrZG93biIsInNldE1hcmtkb3duU3R5bGUiLCJFbGVtZW50IiwiZGVmYXVsdENvbnRlbnQiLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSIsInN0YXJ0UnVsZU5hbWUiLCJydWxlTWFwIiwiZ2V0UnVsZU1hcCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBK1VBOzs7ZUFBQTs7O29FQTdVc0I7b0JBRUU7d0JBQ007MEJBQ3NDO3FCQUNtQjtnRUFFbEU7MkRBQ0E7bUVBQ0k7a0VBQ0U7MkRBQ0M7MERBQ0E7NERBQ0M7NERBQ0M7NERBQ0M7OERBQ0M7K0RBQ0M7Z0VBQ0M7b0VBQ0k7NERBQ0s7eUJBR3lCOzBCQUNBO3FCQUM5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLElBQU0sQUFBRUEsNEJBQThCQyx1QkFBYSxDQUEzQ0Q7QUFFUixJQUFNRSxnQkFBZ0JDLG9CQUFhLENBQUNDLFdBQVcsSUFDekNDLGlCQUFpQkMscUJBQWMsQ0FBQ0YsV0FBVyxJQUMzQ0cscUJBQXFCQyx5QkFBa0IsQ0FBQ0osV0FBVyxJQUNuREssc0JBQXNCQywwQkFBbUIsQ0FBQ04sV0FBVztBQUUzRCxJQUFBLEFBQU1PLHFCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTs7Z0JBQU4sa0JBQU1BLGtCQUNKQyx3QkFBQUEsOEJBQTZCLFNBQUNDLE9BQU9DO1lBQ25DLE1BQUtDLGFBQWE7UUFDcEIsSUFFQUMsd0JBQUFBLDJCQUEw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