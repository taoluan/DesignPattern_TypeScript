class EmailNotifier implements Notifier {
    public Notify(task:ITask): void {
        console.log(
            `
            Thông báo được gửi từ Email: 
                ${task.author} đã hoàn thành task: ${task.name} - Tính năng:  ${task.description}
            `
        )
    }
}
class PhoneNotifier implements Notifier {
    public Notify(task:ITask): void {
        console.log(
            `
            Thông báo được gửi từ Phone: 
                ${task.author} đã hoàn thành task: ${task.name} - Tính năng:  ${task.description}
            `
        )
    }
}
class ZaloNotifier implements Notifier {
    public Notify(task:ITask): void {
        console.log(
            `
            Thông báo được gửi từ Zalo: 
                ${task.author} đã hoàn thành task: ${task.name} - Tính năng:  ${task.description}
            `
        )
    }
}
interface ITask {
    name: string;
    description: string;
    author: string;
}
interface Notifier {
    Notify(task:ITask);
}
export {EmailNotifier, PhoneNotifier, ZaloNotifier, ITask, Notifier};