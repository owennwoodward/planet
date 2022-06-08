import res from "express/lib/response";
import { galaxysService } from "../services/GalaxysService";
import { starsService } from "../services/StarsService";
import BaseController from "../utils/BaseController";




export class GalaxysController extends BaseController {
    constructor() {
        super('api/galaxys')
        this.router
            .get('', this.getAll)
            .get('/:id/stars', this.getStars)
            .post('', this.createGalaxy)
            .delete('/:id', this.removeGalaxy)
    }

    async getAll(req, res, next) {
        try {
            let galaxys = await galaxysService.getAll()
            return res.send(galaxys)
        } catch (error) {
            next(error)
        }
    }

    async createGalaxy(req, res, next) {
        try {
            let galaxy = await galaxysService.createGalaxy(req.body)
            return res.send(galaxy)
        } catch (error) {
            next(error)
        }
    }

    async removeGalaxy(req, res, next) {
        try {
            let message = await galaxysService.removeGalaxy(req.params.id)
            return res.send(message)
        } catch (error) {
            next(error)
        }
    }

    async getStars(req, res, next) {
        try {
            const stars = await starsService.getAll({ GalaxyId: req.params.id })
            return res.send(stars)
        } catch (error) {
            next(error)
        }
    }
}