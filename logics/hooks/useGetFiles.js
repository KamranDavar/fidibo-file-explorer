import { useQuery } from "react-query";
import { getFiles } from "../services/file";

export function useGetFiles(id) {
  const key = id ? ["files", { id }] : "files";
  return useQuery(key, getFiles);
}
