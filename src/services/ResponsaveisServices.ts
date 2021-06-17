import { getCustomRepository } from 'typeorm'
import { ResponsaveisRepository } from '../repositories/ResponsaveisRepository'

interface IResponsaveisCreate {
  responsavel: string;
  telefone: string
}

interface IResponsaveisShow {
  id: string
}

interface IResponsaveisUpdate {
  id: string
  responsavel: string;
  telefone: string
}

class ResponsaveisServices {

  async create({ responsavel, telefone }: IResponsaveisCreate) {

    const responsaveisRepository = getCustomRepository(ResponsaveisRepository)

    const telefoneAlreadyExists = await responsaveisRepository.findOne({
      telefone
    })

    if (telefoneAlreadyExists) {
      throw new Error('Telefone já cadastrado!!')
    }

    const responsaveis = responsaveisRepository.create({
      responsavel,
      telefone
    })

    await responsaveisRepository.save(responsaveis)

    return responsaveis
  }

  async index() {
    const responsaveisRepository = getCustomRepository(ResponsaveisRepository)

    const responsaveis = await responsaveisRepository.find()

    return responsaveis;
  }


  async show({ id }: IResponsaveisShow) {
    const responsaveisRepository = getCustomRepository(ResponsaveisRepository)

    const responsaveis = await responsaveisRepository.findOne({ id })

    console.log(responsaveis)

    if (!responsaveis) {
      throw new Error('Id do responsável não encontrado!!')
    }

    return responsaveis;
  }

  async delete({ id }: IResponsaveisShow) {
    const responsaveisRepository = getCustomRepository(ResponsaveisRepository)

    const responsaveis = await responsaveisRepository.findOne({ id })

    if (!responsaveis) {
      throw new Error('Id do responsável não encontrado!!')
    }

    return await responsaveisRepository.delete({ id })
  }

  async update({ id, responsavel, telefone }: IResponsaveisUpdate) {
    const responsaveisRepository = getCustomRepository(ResponsaveisRepository)

    let responsaveis = await responsaveisRepository.findOne({ id })

    if (!responsaveis) {
      throw new Error('Responsável não encontrado!!')
    }

    await responsaveisRepository.update(
      id, {
        responsavel,
        telefone
    })

    responsaveis = await responsaveisRepository.findOne({ id })

    return responsaveis

  }
}

export { ResponsaveisServices }