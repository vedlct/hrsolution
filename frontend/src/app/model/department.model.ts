export interface  Department {

    id:number;
    departmentName:string;
    deptHead:string;
    fkDeptParent:number;
    fkCompany:number;
    deptLevel:number;
    createdBy:number;
}