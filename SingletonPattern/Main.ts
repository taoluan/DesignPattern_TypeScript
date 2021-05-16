import { Singleton } from './SingletonClass'
function Main() {
    const singleOBv1 = Singleton.getInstance('SINGLETON V1');
    const singleOBv2 = Singleton.getInstance('SINGLETON V2');
    if (singleOBv1 === singleOBv2) {
        console.log('Singleton works, both variables contain the same instance.');
    } else {
        console.log('Singleton failed, variables contain different instances.');
    }
    singleOBv1.sayHi();
    singleOBv2.sayHi();
}
Main();