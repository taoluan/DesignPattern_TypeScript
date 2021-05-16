class Singleton {
    public name:string;
    private static instance: Singleton;
    private constructor(_name:string) {
        this.name = _name;
    }
    public static getInstance(name): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton(name);
        }

        return Singleton.instance;
    }
    sayHi():void {
        console.log(this.name);
    }
}
export { Singleton };