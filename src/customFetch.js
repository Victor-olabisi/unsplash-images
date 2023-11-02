import axios from "axios";

const customFetch = axios.create({
  baseURL:
    "https://api.unsplash.com/search/photos/?client_id=wgK0UMPby6CACxNTTSq7_0ADfemGRCGtq1XPFBVTkpA",
});


export default customFetch;