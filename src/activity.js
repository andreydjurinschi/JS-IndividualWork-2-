/**
 * returns a random activity using bored API
 * @returns {string} of an activity
 */

export async function getRandomActivity() {
    const answer = await fetch('https://www.boredapi.com/api/activity/')
    if(answer.ok){
        const data = await answer.json()
        return data.activity
    }else{
        throw new Error ('К сожалению, произошла ошибка')
    }
}