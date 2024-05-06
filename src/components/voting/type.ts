export interface voteType {
    id: number,
    mealStartDate: string,
    mealEndDate: string,
    voteStartDate: string,
    voteEndDate: string,
    voteStatus: "ONGOING" | "TERMINATION"
}