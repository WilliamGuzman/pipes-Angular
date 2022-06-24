import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'vuela'// Con este nombre sera utilizado el pipe creado
})
export class VuelaPipe implements PipeTransform{

    transform(value: boolean):string {
        return  ( value ) ? 'vuela' : 'no vuela';
    }

}