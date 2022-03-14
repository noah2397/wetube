export const trending = (req, res) =>
  res.send(
    "<!DOCTYPE html><html lang='ko'><head><title>Wetube</title></head><body><h1>Home</h1></body></html>"
  );
export const see = (req, res) => {
  console.log(req.params);
  return res.send(`Watch Video #${req.params.id}`);
};
export const edit = (req, res) => {
  console.log(req.params);
  return res.send("Edit");
};

export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("upload");
export const deleteVideo = (req, res) => {
  console.log(req.params);
  return res.send("Delete Video");
};
