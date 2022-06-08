import { planetsService } from "../services/PlanetsService";
import BaseController from "../utils/BaseController";



export class PlanetsController extends BaseController {
    constructor() {
        super('api/planets')
        this.router
            .get('', this.getAll)
            .post('', this.createPlanet)
    }

    async getAll(req, res, next) {
        try {
            let planets = await planetsService.getAll(req.query)
            return res.send(planets)
        } catch (error) {
            next(error)
        }
    }

    async createPlanet(req, res, next) {
        try {
            let planet = await planetsService.createPlanet(req.body)
            return res.send(planet)
        } catch (error) {
            next(error)
        }
    }
}