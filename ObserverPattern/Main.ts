import {Task} from './Task'
function Main() {
    const task = new Task('Task 1','Chuc nang 1','Luan') ;
    task.pullRequest();
//     task.pullRequest(new EmailNotifier());
//     task.pullRequest(new PhoneNotifier());
//     task.pullRequest(new ZaloNotifier());
//     task.pullRequest(new ZaloNotifier());
}
Main()