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
function getFirstTokenIndex(context) {
    var firstTokenIndex;
    var tokens = context.tokens, minimumTokenIndex = 0, firstSignificantTokenIndex = this.getFirstSignificantTokenIndex(tokens);
    firstTokenIndex = firstSignificantTokenIndex; ///
    if (firstTokenIndex > minimumTokenIndex) {
        firstTokenIndex--;
        while(firstTokenIndex >= minimumTokenIndex){
            var token = tokens[firstTokenIndex], tokenWhitespaceToken = token.isWhitespaceToken();
            if (!tokenWhitespaceToken) {
                firstTokenIndex++;
                break;
            }
            firstTokenIndex--;
        }
    }
    return firstTokenIndex;
}
function getLastTokenIndex(context) {
    var lastTokenIndex;
    var tokens = context.tokens, tokensLength = tokens.length, maximumTokenIndex = tokensLength - 1, lastSignificantTokenIndex = this.getLastSignificantTokenIndex(tokens);
    lastTokenIndex = lastSignificantTokenIndex; ///
    if (lastTokenIndex < maximumTokenIndex) {
        lastTokenIndex++;
        while(lastTokenIndex <= maximumTokenIndex){
            var token = tokens[lastTokenIndex], tokenWhitespaceToken = token.isWhitespaceToken();
            if (!tokenWhitespaceToken) {
                lastTokenIndex--;
                break;
            }
            lastTokenIndex++;
        }
    }
    return lastTokenIndex;
}
var tokenMixins = {
    getFirstTokenIndex: getFirstTokenIndex,
    getLastTokenIndex: getLastTokenIndex
};
var _default = tokenMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvdG9rZW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIGdldEZpcnN0VG9rZW5JbmRleChjb250ZXh0KSB7XG4gIGxldCBmaXJzdFRva2VuSW5kZXg7XG5cbiAgY29uc3QgeyB0b2tlbnMgfSA9IGNvbnRleHQsXG4gICAgICAgIG1pbmltdW1Ub2tlbkluZGV4ID0gMCxcbiAgICAgICAgZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXggPSB0aGlzLmdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KHRva2Vucyk7XG5cbiAgZmlyc3RUb2tlbkluZGV4ID0gZmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXg7IC8vL1xuXG4gIGlmIChmaXJzdFRva2VuSW5kZXggPiBtaW5pbXVtVG9rZW5JbmRleCkge1xuICAgIGZpcnN0VG9rZW5JbmRleC0tO1xuXG4gICAgd2hpbGUgKGZpcnN0VG9rZW5JbmRleCA+PSBtaW5pbXVtVG9rZW5JbmRleCkge1xuICAgICAgY29uc3QgdG9rZW4gPSB0b2tlbnNbZmlyc3RUb2tlbkluZGV4XSxcbiAgICAgICAgICAgIHRva2VuV2hpdGVzcGFjZVRva2VuID0gdG9rZW4uaXNXaGl0ZXNwYWNlVG9rZW4oKTtcblxuICAgICAgaWYgKCF0b2tlbldoaXRlc3BhY2VUb2tlbikge1xuICAgICAgICBmaXJzdFRva2VuSW5kZXgrKztcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgZmlyc3RUb2tlbkluZGV4LS07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZpcnN0VG9rZW5JbmRleDtcbn1cblxuZnVuY3Rpb24gZ2V0TGFzdFRva2VuSW5kZXgoY29udGV4dCkge1xuICBsZXQgbGFzdFRva2VuSW5kZXg7XG5cbiAgY29uc3QgeyB0b2tlbnMgfSA9IGNvbnRleHQsXG4gICAgICAgIHRva2Vuc0xlbmd0aCA9IHRva2Vucy5sZW5ndGgsXG4gICAgICAgIG1heGltdW1Ub2tlbkluZGV4ID0gdG9rZW5zTGVuZ3RoIC0gMSxcbiAgICAgICAgbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IHRoaXMuZ2V0TGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpO1xuXG4gIGxhc3RUb2tlbkluZGV4ID0gbGFzdFNpZ25pZmljYW50VG9rZW5JbmRleDsgLy8vXG5cbiAgaWYgKGxhc3RUb2tlbkluZGV4IDwgbWF4aW11bVRva2VuSW5kZXgpIHtcbiAgICBsYXN0VG9rZW5JbmRleCsrO1xuXG4gICAgd2hpbGUgKGxhc3RUb2tlbkluZGV4IDw9IG1heGltdW1Ub2tlbkluZGV4KSB7XG4gICAgICBjb25zdCB0b2tlbiA9IHRva2Vuc1tsYXN0VG9rZW5JbmRleF0sXG4gICAgICAgICAgICB0b2tlbldoaXRlc3BhY2VUb2tlbiA9IHRva2VuLmlzV2hpdGVzcGFjZVRva2VuKCk7XG5cbiAgICAgIGlmICghdG9rZW5XaGl0ZXNwYWNlVG9rZW4pIHtcbiAgICAgICAgbGFzdFRva2VuSW5kZXgtLTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgbGFzdFRva2VuSW5kZXgrKztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbGFzdFRva2VuSW5kZXg7XG59XG5cbmNvbnN0IHRva2VuTWl4aW5zID0ge1xuICBnZXRGaXJzdFRva2VuSW5kZXgsXG4gIGdldExhc3RUb2tlbkluZGV4XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0b2tlbk1peGlucztcbiJdLCJuYW1lcyI6WyJnZXRGaXJzdFRva2VuSW5kZXgiLCJjb250ZXh0IiwiZmlyc3RUb2tlbkluZGV4IiwidG9rZW5zIiwibWluaW11bVRva2VuSW5kZXgiLCJmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwidG9rZW4iLCJ0b2tlbldoaXRlc3BhY2VUb2tlbiIsImlzV2hpdGVzcGFjZVRva2VuIiwiZ2V0TGFzdFRva2VuSW5kZXgiLCJsYXN0VG9rZW5JbmRleCIsInRva2Vuc0xlbmd0aCIsImxlbmd0aCIsIm1heGltdW1Ub2tlbkluZGV4IiwibGFzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImdldExhc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJ0b2tlbk1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBa0VBOzs7ZUFBQTs7O0FBaEVBLFNBQVNBLG1CQUFtQkMsT0FBTztJQUNqQyxJQUFJQztJQUVKLElBQU0sQUFBRUMsU0FBV0YsUUFBWEUsUUFDRkMsb0JBQW9CLEdBQ3BCQyw2QkFBNkIsSUFBSSxDQUFDQyw2QkFBNkIsQ0FBQ0g7SUFFdEVELGtCQUFrQkcsNEJBQTRCLEdBQUc7SUFFakQsSUFBSUgsa0JBQWtCRSxtQkFBbUI7UUFDdkNGO1FBRUEsTUFBT0EsbUJBQW1CRSxrQkFBbUI7WUFDM0MsSUFBTUcsUUFBUUosTUFBTSxDQUFDRCxnQkFBZ0IsRUFDL0JNLHVCQUF1QkQsTUFBTUUsaUJBQWlCO1lBRXBELElBQUksQ0FBQ0Qsc0JBQXNCO2dCQUN6Qk47Z0JBRUE7WUFDRjtZQUVBQTtRQUNGO0lBQ0Y7SUFFQSxPQUFPQTtBQUNUO0FBRUEsU0FBU1Esa0JBQWtCVCxPQUFPO0lBQ2hDLElBQUlVO0lBRUosSUFBTSxBQUFFUixTQUFXRixRQUFYRSxRQUNGUyxlQUFlVCxPQUFPVSxNQUFNLEVBQzVCQyxvQkFBb0JGLGVBQWUsR0FDbkNHLDRCQUE0QixJQUFJLENBQUNDLDRCQUE0QixDQUFDYjtJQUVwRVEsaUJBQWlCSSwyQkFBMkIsR0FBRztJQUUvQyxJQUFJSixpQkFBaUJHLG1CQUFtQjtRQUN0Q0g7UUFFQSxNQUFPQSxrQkFBa0JHLGtCQUFtQjtZQUMxQyxJQUFNUCxRQUFRSixNQUFNLENBQUNRLGVBQWUsRUFDOUJILHVCQUF1QkQsTUFBTUUsaUJBQWlCO1lBRXBELElBQUksQ0FBQ0Qsc0JBQXNCO2dCQUN6Qkc7Z0JBRUE7WUFDRjtZQUVBQTtRQUNGO0lBQ0Y7SUFFQSxPQUFPQTtBQUNUO0FBRUEsSUFBTU0sY0FBYztJQUNsQmpCLG9CQUFBQTtJQUNBVSxtQkFBQUE7QUFDRjtJQUVBLFdBQWVPIn0=