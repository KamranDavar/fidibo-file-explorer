import { useMutation, useQueryClient } from "react-query";
import { addFile } from "../services/file";

export function useAddFiles() {
  const queryClient = useQueryClient();
  return useMutation(addFile, {
    onSuccess: () => {
      queryClient.invalidateQueries("files");
    },
  });
}
