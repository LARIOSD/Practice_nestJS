import { Injectable } from '@nestjs/common';

@Injectable()
export class ResponseService {

    public setLog():string{
        console.log('holis');
        return 'jolis'
    }
}
