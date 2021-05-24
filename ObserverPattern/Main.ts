import { EmailNotifier, PhoneNotifier, ZaloNotifier } from './ListNotifier';
import {Task} from './Task'
function Main() {
    const task = new Task('Task 1','Chuc nang 1','Luan') ;
    const NotifyEmail = new EmailNotifier(task)
    const NotifyPhone = new PhoneNotifier(task)
    const NotifyZalo = new ZaloNotifier (task)
    task.pullRequest();
    console.log("============================")
    task.DetachObserver(NotifyEmail);
    task.pullRequest();
    // task.AttachObserver()
//     task.pullRequest(new EmailNotifier());
//     task.pullRequest(new PhoneNotifier());
//     task.pullRequest(new ZaloNotifier());
//     task.pullRequest(new ZaloNotifier());
}
Main()