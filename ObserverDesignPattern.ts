class Subject{
    private state:number
    private observers: Observer[]
    public getState():number {
        return this.state;
    }
    public addObserver(observer:Observer){
        this.observers.push(observer);
    }

    public notifyObservers(){
        this.observers.forEach(observer=>{
            console.log("Inside the subject notifying observer", observer.id);
            observer.update();
        })
    }
}

interface Observer{
    id:number;
    subject:Subject;
    update : () => void

}

class ConcreteObserver implements Observer{
    subject: Subject;

    update(): void {
        console.log("printing inside the observer",this.id,this.subject.getState())
    }

    id: number;

}

setInterval(()=>{
    console.log("Hi there")
},1000)


const mergeSort = (n)=>{
    if(n.length===1) return n;
    const a = mergeSort(n.slice(0,n.length/2))
    const b = mergeSort(n.slice(n.length/2,n.length))
    return merge(a,b)
}

const merge =(a,b)=>{
    let i=0,j=0;
    const c =[];
    while (i<a.length && j< b.length){
        if(a[i]<b[j]){
            c.push(a[i]);
            i++;
        }
        else{
            c.push(b[j]);
            j++
        }
    }

    while(i<a.length){
        c.push(a[i]);
    }
    while(j<b.length){
        c.push(b[j]);
    }
}

console.log(mergeSort([1,3,7,5,4]))
