import { BadRequestException as NestBadRequestException } from '@nestjs/common'

export class BadRequestException extends NestBadRequestException {
    constructor(errors: Array<string>) {
        super(errors)
    }
}
