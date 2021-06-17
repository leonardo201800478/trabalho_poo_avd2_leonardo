import { Router } from 'express'

import { ResponsaveisController } from './controllers/ResponsaveisController'

import { DespesasController } from './controllers/DespesasController'

const routes = Router();

const responsaveisController = new ResponsaveisController()

const despesasController = new DespesasController()

routes.post('/responsaveis', responsaveisController.create)
routes.get('/responsaveis', responsaveisController.index)
routes.get('/responsaveis/:id', responsaveisController.show)
routes.delete('/responsaveis/:id', responsaveisController.delete)
routes.put('/responsaveis/:id', responsaveisController.update)

routes.post('/despesas', despesasController.create)
routes.get('/despesas', despesasController.index)
routes.get('/despesas/:id', despesasController.show)
routes.delete('/despesas/:id', despesasController.delete)
routes.put('/despesas/:id', despesasController.update)

export { routes }

