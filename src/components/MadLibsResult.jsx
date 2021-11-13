export function MadLibsResult({answers}) {

    return (
        <div className='results'>
        <h2>Results</h2>
            <p>Once upon a time in {answers.city}, {answers.name} got out of bed to start their day. To their surprise,
            sitting at the end of their bed was an enormous {answers.animal} {answers.action} the {answers.object}.</p>
            <p>{answers.name} felt so {answers.mood}, they knocked over the glass of {answers.drink} on their bedside table.</p>
            <p>Suddenly, the {answers.animal} spoke...</p>
            <p>"You must answer {answers.number} {answers.adjective} questions, or I will steal your soul... and your {answers.food}!"</p>
        </div>
    )
}