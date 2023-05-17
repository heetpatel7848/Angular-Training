import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class DataService {
    dataEmitter = new Subject<string>()

    raiseDataEmitterEvent(data: string) {
        this.dataEmitter.next(data);
    }
}

