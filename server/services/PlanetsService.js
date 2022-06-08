import { dbContext } from "../db/DbContext"



class PlanetsService {
    async createPlanet(body) {
        return await dbContext.Planets.create(body)
    }
    async getAll(query = {}) {
        return await dbContext.Planets.find(query)
    }

}


export const planetsService = new PlanetsService()