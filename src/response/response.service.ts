import { Injectable, HttpStatus, NotFoundException } from '@nestjs/common';
import {errorRecive,errorResponse} from './response.interface';

@Injectable()
export class ResponseService {

    public responseError(error : errorRecive) : errorResponse {
        const response: errorResponse = {
            code   : '20',
            status : 400,
            msg    : 'Gestor de errores',
        }  
        return response;
    }

    private sqlError() : errorResponse {
        const response: errorResponse = {
            code   : '20',
            status : 400,
            msg    : 'Error Data base',
        }  
         return response;
    }

    private validationError() : errorResponse {
        const response: errorResponse = {
            code   : '20',
            status : 400,
            msg    : 'Error contolado',
        }  
         return response;

    }
}
