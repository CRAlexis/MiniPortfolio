'use strict'

class PortfolioController {

    async index({ request, view, response, auth, params }){
        return view.render('portfolio', {params})
    }
}

module.exports = PortfolioController
