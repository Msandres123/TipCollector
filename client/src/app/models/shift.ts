export interface Shift{
    id: number;
    user: string;
    userId: number;
    shiftDay: string;
    cashTips: number;
    creditCardTips: number;
    totalTips: number;
    shiftLength: number;
    dateCreated: Date;
}