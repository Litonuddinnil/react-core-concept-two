export default function Friend({friend}){
    console.log(friend);
    const {title,id}=friend;
    return(
        <div className="box">
            <h3>Title:{title}</h3>
            <h3>Photo:{id}</h3>
        </div>
    )
}