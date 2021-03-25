import config from "../../config";

//This is just a dummy way of calling axios get requests, it should be keep more contrasted

export default async (url, searchTerm) => {
  const response = await config.get(`/${url}`, {
    params: {
      limit: 50,
      term: searchTerm,
      location: "Hernderson, nevada",
    }
  });
  return response;
};
