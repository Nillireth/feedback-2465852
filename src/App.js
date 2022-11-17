import Header from "./componentes/Header";
import FeedbackItem from "./componentes/FeedBackItem";

function App(){

        //objeto de estilos
        const HeaderStyles = {
            backgroundColor: '#ed5bad',
            color: 'black'
        }
    return (
        <div className="container">
            {/* props: Atributos de etiqueta de un componente react*/}
        <Header 
            bgColor={HeaderStyles.backgroundColor}
            color={HeaderStyles.color}/>

            <FeedbackItem />
            <FeedbackItem />
            <FeedbackItem />
            <FeedbackItem />

        </div>
    )
}

export default App;
