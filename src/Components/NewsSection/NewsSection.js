import '../Styles/NewsSection/NewsSection.css';
import New from './New';
import News1 from '../../images/News/News1.jpg';
import News2 from '../../images/News/News2.jpg';
import News3 from '../../images/News/News3.jpg';

const NewsSection = ()=>{
    return (
        <div className='NewsSection'>
            <div className='header'>
                News
            </div>
            <div className='news'>
                <New 
                    date={'NOV 15, 2022'} 
                    img={News1} 
                    title={'LEARN TO PLAY GUITAR WITH THE BAND'}
                    link={'https://raulacostadeveloper.github.io/raulacostadeveloper/'}
                    />
                <New 
                    date={'NOV 22, 2022'} 
                    img={News2} 
                    title={'STREAMING LIVE ON YOUTUBE'}
                    link={'https://raulacostadeveloper.github.io/raulacostadeveloper/'}
                    />
                <New 
                    date={'DEC 10, 2022'} 
                    img={News3} 
                    title={'READY FOR FUTURE, ANSWERING QUESTIONS'}
                    link={'https://raulacostadeveloper.github.io/raulacostadeveloper/'}
                    />

            </div>
        </div>
    )
}
export default NewsSection;