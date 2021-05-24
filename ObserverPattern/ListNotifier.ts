import { IObserver } from "./base/IObserver";
import { Subject } from "./base/Subject";
import { Task } from "./Task";

class EmailNotifier extends IObserver {

    constructor(_subject: Subject) {
        super();
        this.subject = _subject;
        this.subject.AttachObserver(this)
    }
    
    public Notify(task: Task): void {
        console.log(
            `
            Thông báo được gửi từ Email: 
                ${task.getInformationTask().author} đã hoàn thành task: ${task.getInformationTask().name} - Tính năng:  ${task.getInformationTask().description}
            `
        )
    }
}
class PhoneNotifier extends IObserver {

    constructor(_subject: Subject) {
        super();
        this.subject = _subject;
        this.subject.AttachObserver(this)
    }
    public Notify(task: Task): void {
        console.log(
            `
            Thông báo được gửi từ Phone: 
                ${task.getInformationTask().author} đã hoàn thành task: ${task.getInformationTask().name} - Tính năng:  ${task.getInformationTask().description}
            `
        )
    }
}
class ZaloNotifier extends IObserver {

    constructor(_subject: Subject) {
        super();
        this.subject = _subject;
        this.subject.AttachObserver(this)
        
    }
    public Notify(task: Task): void {
        console.log(
            `
            Thông báo được gửi từ Zalo: 
                ${task.getInformationTask().author} đã hoàn thành task: ${task.getInformationTask().name} - Tính năng:  ${task.getInformationTask().description}
            `
        )
    }
}
interface ITask {
    name: string;
    description: string;
    author: string;
}
// interface Notifier {
//     Notify(task:ITask);
// }
export {EmailNotifier, PhoneNotifier, ZaloNotifier, ITask};