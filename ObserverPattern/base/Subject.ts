import {IObserver} from './IObserver'
export class Subject {
   private _Observers: IObserver[] = [];

   public AttachObserver(observer: IObserver): void {
       this._Observers.push(observer);
   }

   public DetachObserver(observer: IObserver): void {
       const indexObserver = this._Observers.indexOf(observer);
       this._Observers.splice(indexObserver, 1);
   }

   public notifyObserver(subject: Subject) {
       this._Observers.map( observer => {
           observer.Notify(subject)
       })
   }
}
