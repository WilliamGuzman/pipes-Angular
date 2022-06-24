import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'mayusculas'// Con este nombre sera utilizado el pipe creado
})
export class MayusculasPipe implements PipeTransform{

    transform(value: string, enMayuscula: boolean = true ):string {
        return  ( enMayuscula ) ? value.toUpperCase() : value.toLocaleLowerCase();
    }

}