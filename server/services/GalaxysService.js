import { dbContext } from "../db/DbContext"



class GalaxysService {
    async getAll() {
        const galaxys = await dbContext.Galaxys.find()
        return galaxys
    }

    async createGalaxy(body) {
        const galaxy = await dbContext.Galaxys.create(body)
        return galaxy
    }

    async removeGalaxy(id) {
        const original = await dbContext.Galaxys.findById(id)
        await original.remove()
        return `deleted ${original.name}`
    }
}


export const galaxysService = new GalaxysService()