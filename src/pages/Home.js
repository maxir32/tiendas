import CardList from "../components/CardList/CardList"


const Home = () => {
    return(
        <div className='general-container'>
            <CardList title={'ON SALE! 30% OFF - HOT SALE'}/>
            <CardList title={'Productos Recomendados'}/>
            <CardList title={'Temporada invierno 2022'}/>
        </div>
    )
}

export default Home