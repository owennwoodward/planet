import mongoose from 'mongoose'
import { GalaxySchema } from '../models/Galaxy';
import { planetSchema } from '../models/Planet';
import { StarSchema } from '../models/Star';
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);

  Galaxys = mongoose.model('Galaxy', GalaxySchema)

  Stars = mongoose.model('Stars', StarSchema)

  Planets = mongoose.model('Planets', planetSchema)
}

export const dbContext = new DbContext()
