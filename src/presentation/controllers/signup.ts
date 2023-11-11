export class SignUpController {
  handle (httpRequest: any): any {
    let body = {}

    if (!httpRequest.body.name) {
      body = new Error('Missing param: name')
    }

    if (!httpRequest.body.email) {
      body = new Error('Missing param: email')
    }

    const httpResponse = {
      statusCode: 400,
      body
    }

    return httpResponse
  }
}
