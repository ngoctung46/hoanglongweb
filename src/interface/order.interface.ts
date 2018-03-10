export interface Order {
    _id?: String;
    customerId: String;
    roomId: String;
    checkInTime: Date;
    checkOutTime: Date;
    discount: Number;
    adjustment: Number;
    total: Number;
}
