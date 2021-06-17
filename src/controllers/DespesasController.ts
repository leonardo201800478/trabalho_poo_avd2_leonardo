import { Request, Response } from 'express'
import { DespesasServices } from '../services/DespesasServices'

class DespesasController {

  async create(request: Request, response: Response) {
    let { responsaveis_id, local_compra, data_compra, valor } = request.body
    data_compra = new Date(data_compra)
    const despesaServices = new DespesasServices()
    const despesaServico = await despesaServices.create({
      responsaveis_id,
      local_compra,
      data_compra,
      valor
    })

    return response.json(despesaServico)
  }

  async index(request: Request, response: Response) {
    const despesaServices = new DespesasServices()
    try {
      const despesaServico = await despesaServices.index()
      return response.json(despesaServico)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async show(request: Request, response: Response) {
    const despesaServices = new DespesasServices()
    const { id } = request.params

    try {
      const despesaServico = await despesaServices.show({ id })
      return response.json(despesaServico)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async delete(request: Request, response: Response) {
    const despesaServices = new DespesasServices()
    const { id } = request.params

    try {
      await despesaServices.delete({ id })
      return response.json({ message: 'ID da despesa deletada com sucesso' })
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async update(request: Request, response: Response) {
    let { responsaveis_id, local_compra, data_compra, valor } = request.body
    data_compra = new Date(data_compra)
    const { id } = request.params

    const despesaServices = new DespesasServices()

    try {
      const despesas = await despesaServices.update({
        id,
        responsaveis_id,
        local_compra,
        data_compra,
        valor
      })
      return response.json(despesas)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }
}
export { DespesasController }