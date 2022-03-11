import express from "express";
import {
  see,
  edit,
  upload,
  deleteVideo,
} from "../controllers/videoControllers";
const videoRouter = express.Router();

videoRouter.get("/upload", upload); //upload의 순서가 중요하다
videoRouter.get("/:id(\\d+)", see);
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);

export default videoRouter;
