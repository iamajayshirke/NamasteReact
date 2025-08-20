import RestoCard from "./RestoCard"

const RestaurantList = ({restaurants}) => {
console.log(restaurants,"Res List")
return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:50}}>
        {restaurants.map((e,i) => {
            return(
                <RestoCard key={i} restoData={e}/>
            )
        })}
    </div>
)
}

export default RestaurantList