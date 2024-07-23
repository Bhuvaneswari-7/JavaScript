class Address
{
    constructor(dno,street,city)
    {   this.dno=dno;
        this.street=street;
        this.city=city;
    }
    display()
    {   console.log("display........");
        console.log("Dno=",this.dno);
        console.log("Street=",this.street);
        console.log("City=",this.city);
    }
}
class Emp extends Address
{   
    constructor(eno,ename,sal)
    {   
        super("22-/123/64b","ramnagar","Hyderabad");
        this.eno=eno;
        this.ename=ename;
        this.sal=sal;
    }
    display()
    {   console.log("display........");
        console.log("Eno=",this.eno);
        console.log("Ename=",this.ename);
        console.log("Sal=",this.sal);
        super.display();
    }
}
