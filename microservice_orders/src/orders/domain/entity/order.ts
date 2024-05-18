
export class Order{
    constructor(
        readonly id:string,
        readonly total:number,
        readonly date:Date,
        readonly status: string,
        readonly deleted_at: Date|null
    ) {
    }
}