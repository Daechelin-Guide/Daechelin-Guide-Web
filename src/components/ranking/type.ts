export interface eachMealRankingType {
    id: number,
    menu: string,
    date: string,
    cal: string,
    totalScore: number,
    ranking: number
}

export interface rankingType {
    breakfastRanking : eachMealRankingType[]
    lunchRanking : eachMealRankingType[]
    dinnerRanking : eachMealRankingType[]
}