import {ApiRoute} from"jcc-express-mvc"

ApiRoute.get("/", function (req, res) {
  return res.json({ msg: req.url });
});

