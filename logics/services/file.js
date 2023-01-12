import { jsonServerApi } from "../clients/jsonServerApi";

export const getFiles = async (configs) => {
  const id = configs.queryKey[1]?.id
  const url = id
    ? `/files?_embed=files&id=${id}`
    : "/files?_embed=files&fileId";
    console.log("id", id)
  const response = await jsonServerApi.get(url);
  console.log("response", response);
  return response.data;
};
export const addFile = async (body) => {
  const url = body.id ? `/files?${id}/files` : "/files";
  const response = await jsonServerApi.post(url, body);
  console.log("response", response);
  return response.data;
};
