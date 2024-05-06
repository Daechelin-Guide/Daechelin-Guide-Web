interface resMealType {
    id: number,
    menu: string,
    date: string,
    cal: string,
    totalScore: number,
    nutrients: string,
    mealType: string
}

export interface serverDataType {
    date : string;
    breakfast : resMealType;
    lunch : resMealType;
    dinner : resMealType;
}