import { starsService } from "../services/StarsService";
import BaseController from "../utils/BaseController";



export class StarsController extends BaseController {
    constructor() {
        super('api/stars')
        this.router
            .get('', this.getAll)
            .post('', this.createStar)
    }

    async getAll(req, res, next) {
        try {
            let stars = await starsService.getAll()
            return res.send(stars)
        } catch (error) {
            next(error)
        }
    }

    async createStar(req, res, next) {
        try {
            let star = await starsService.createStar(req.body)
            return res.send(star)
        } catch (error) {
            next(error)
        }
    }
}