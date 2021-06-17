import { Request, response, Response } from 'express'
import { ResponsaveisServices } from '../services/ResponsaveisServices'

class ResponsaveisController {

  async create(request: Request, response: Response) {
    const { responsavel, telefone } = request.body

    const responsaveisServices = new ResponsaveisServices()

    try {
      const responsaveis = await responsaveisServices.create({ responsavel, telefone })
      return response.json(responsaveis)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async index(request: Request, response: Response) {
    const responsaveisServices = new ResponsaveisServices()

    try {
      const responsaveis = await responsaveisServices.index()
      return response.json(responsaveis)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async show(request: Request, response: Response) {
    const responsaveisServices = new ResponsaveisServices()
    const { id } = request.params

    try {
      const responsaveis = await responsaveisServices.show({ id })
      return response.json(responsaveis)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async delete(request: Request, response: Response) {
    const responsaveisServices = new ResponsaveisServices()
    const { id } = request.params

    try {
      const responsaveis = await responsaveisServices.delete({ id })
      return response.json({ message: 'ID do responsável deletado com sucesso!!' })
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async update(request: Request, response: Response) {
    const { responsavel, telefone } = request.body
    const { id } = request.params

    const responsaveisServices = new ResponsaveisServices()

    try {
      const responsaveis = await responsaveisServices.update({ id, responsavel, telefone })
      return response.json(responsaveis)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }
}

export { ResponsaveisController }