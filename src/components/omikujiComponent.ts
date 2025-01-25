import { ComponentContext } from 'discord-hono';

export const omikujiComponent = (c: ComponentContext) => {
    const KindWords = ["スポーツ経験がない男、今まであまり運動の経験がない男、部活に入った経験がない男。俺、ガチで危機感持った方が良いと思う。",
                       "お前最後に腹から声出したのいつ？一日中引き籠ってｲﾔｼﾞｮｰｼﾞｷﾓﾁﾜﾙｲｶﾞｲｼﾞﾝ...ボソボソ喋ってんなよ　マジで。",
                       "スケールする時が来た。次のレベルに進む。新しい景色つくる。現状維持が最大のミス。視座は常に上。",
                       "早寝早起き、コールドシャワー、コールドシャワー後は筋トレやビジネスや勉強などやるべきことに取り組む、スマホを控える、朝食を控える",
                       "誰も”お前のこと”なんて1ミリも気にしてない。今すぐ好きなように生きろ。"]
    
    const randomIndex = Math.floor(Math.random() * KindWords.length);
    const selectedWord = KindWords[randomIndex];

    return c.res({
        content: selectedWord
    })
};