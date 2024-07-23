function student(sno,sname,year,sem){
    this.sno=sno;
    this.sname=sname;
    this.year=year;
    this.sem=sem;
}
const s1=new student(1,8,4,9);
function fun1()
{
    alert('hello world')
    for(let p in s1){
        console.log(p);
    }
}