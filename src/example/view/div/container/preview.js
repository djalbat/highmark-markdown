"use strict";

import withStyle from "easy-with-style";  ///

import PreviewDiv from "../../div/preview";
import ContainerDiv from "../../div/container";

class PreviewContainerDiv extends ContainerDiv {
  childElements() {
    return ([

      <PreviewDiv/>

    ]);
  }

  parentContext() {
    const context = this.getContext(),
          showPreviewContainerDiv = this.show.bind(this),  ///
          hidePreviewContainerDiv = this.hide.bind(this);  ///

    return ({
      ...context,
      showPreviewContainerDiv,
      hidePreviewContainerDiv
    });
  }
}

export default withStyle(PreviewContainerDiv)`
  
  padding: 0;
  position: relative;
  
`;
