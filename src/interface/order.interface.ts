export interface Order {
    _id?: String;
    customerId: String;
    roomName: String;
    roomId: String;
    checkInTime: any;
    checkOutTime: any;
    discount: Number;
    adjustment: Number;
    total: Number;
}
