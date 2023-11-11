import { MissingParamError } from '../errors/missing-param-error'
import { type HttpRequest, type HttpResponse } from '../protocols/http'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    let body = {}

    if (!httpRequest.body.name) {
      body = new MissingParamError('Missing param: name')
    }

    if (!httpRequest.body.email) {
      body = new MissingParamError('Missing param: email')
    }

    const httpResponse = {
      statusCode: 400,
      body
    }

    return httpResponse
  }
}
