import { EmailNotifier, PhoneNotifier, ZaloNotifier, ITask} from './ListNotifier'
import { Subject } from './base/Subject'
class Task extends Subject {
    private _name: string;
    private _description: string;
    private _author: string;
    private _status: boolean;

    constructor(name: string, description: string, author: string) {
        super();
        this._name = name;
        this._description = description;
        this._author = author;
        this._status = false;
    }

    public getInformationTask(): ITask {
        const data: ITask = {
            name: this._name,
            description: this._description,
            author: this._author
        }
        return data;
    }

    public pullRequest() {
        this._status = true;
        this.NotifyPullRequeste();
         // notifier.Notify(data);
    }

    private NotifyPullRequeste(): void {
        // const data = this.getInformationTask();
        // const EmailNotify = new EmailNotifier();
        // const PhoneNotify = new PhoneNotifier();
        // const ZaloNotify = new ZaloNotifier();
        // EmailNotify.Notify(data);
        // PhoneNotify.Notify(data);
        // ZaloNotify.Notify(data);
        this.notifyObserver(this)
    }

}

export {Task}