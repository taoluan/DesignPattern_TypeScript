import { Subject } from "./Subject";
abstract class IObserver {
    protected subject : Subject;
    public abstract Notify (subject : Subject): void
}
export {IObserver};