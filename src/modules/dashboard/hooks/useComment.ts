import { useQuery } from "@tanstack/react-query";
import { getComment } from "../services/comments";

export const useCommentDetail = (commentId: string) => {
  return useQuery({
    queryKey: ['comment', commentId],
    queryFn: () => getComment(commentId),
  });
}