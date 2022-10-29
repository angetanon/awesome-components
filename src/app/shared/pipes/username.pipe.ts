import { Pipe, PipeTransform } from "@angular/core";
import { pipe } from "rxjs";

@Pipe({
    name: 'username'
})
export class UsernamePipe implements PipeTransform {
    transform(value: { firstName: string, lastName: string }, loacle: 'en' | 'fr' = 'fr'): string {
        return loacle === 'fr' ?
        `Monsieur ${value.firstName.toUpperCase()} ${value.lastName} ` :
        `Mister ${value.firstName} ${value.lastName} `;        
    }
}