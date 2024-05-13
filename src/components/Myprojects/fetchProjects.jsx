import { createClient } from "contentful";

const client = createClient({
  space: import.meta.env.VITE_REACT_SPACE,
  environment: "master",
  accessToken: import.meta.env.VITE_REACT_CDAAT,
});

client
  .getEntries({ content_type: "project" })
  .then((response) => console.log(response));
