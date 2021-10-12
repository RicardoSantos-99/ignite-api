import { Request, Response } from 'express'

import CreateCourseService from "./CreateCourseService";

export function createCourse (req: Request, res: Response) {

  CreateCourseService.execute({
    name: "NodeJS",
    educator: "JohnTre",
    duration: 10
  })

  CreateCourseService.execute({
    name: "ReactJS",
    educator: "JohnLocke"
  })

  return res.send()
}
