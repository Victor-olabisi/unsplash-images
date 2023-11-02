import { useQuery } from "@tanstack/react-query";
import customFetch from "./customFetch";
import axios from "axios";
import { useGlobalContext } from "./context";

const url =
  "https://api.unsplash.com/search/photos?client_id=wgK0UMPby6CACxNTTSq7_0ADfemGRCGtq1XPFBVTkpA&";
const Gallery = () => {
 const {searchTerm} = useGlobalContext()
  const { data,isLoading, isError } = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const { data } = await axios.get(`${url}query=${searchTerm}`);
      return data;
    },
  });
    // loading
    if (isLoading) {
        return (
          <section className="image-container">
            <div className="loading"></div>
          </section>
        );
    }
    // throw error
    if (isError) {
        return <section className="image-container">
            <h4>there was an error</h4>
        </section>
    }
  return (
    <div className="image-container">
      {data.results.map((item) => {
        const image = item?.urls?.regular;
          return <img src={image} alt={item.alt_description} className="img" key={item.id} />;
      })}
    </div>
  );
};

export default Gallery;
