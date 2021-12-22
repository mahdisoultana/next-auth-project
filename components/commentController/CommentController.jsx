import React, { useState } from "react";
import CommentDispaly from "./CommentDispaly";

import CommentForm from "./CommentForm";

import { CommentStyled, CommentListStyles } from "./CommentStyles";

function CommentController({ data }) {
  console.log(data);

  const [comments, setComment] = useState(() => data.comment);
  function addComment(comment) {
    setComment((prevC) => [...comments, comment]);
  }
  return (
    <CommentStyled>
      <CommentForm id={data._id} addComment={addComment} />
      <hr></hr>
      <CommentDispaly comments={comments} />
    </CommentStyled>
  );
}

export default CommentController;
