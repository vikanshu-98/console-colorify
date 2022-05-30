export  class ConsoleLog{

    static success(message:string){
        console.log(`%c ${message}`,'color:green');     
    }
    static danger(message:string){
        console.log(`%c ${message}`,'color:red');     
    }
    static   info(message:string){
        console.log(`%c ${message}`,'color:black;background:yellow');     
    }
}