import Play from '../play/play'
import './category.css'
function Category(){
    return(
        <div className="full_cont">
             <div className='category_dad'>
            <div className='cont_categoty'>
            <div className='content_category'>
                <h1>Tudo</h1>
            </div>
            <div className='content_category'>
                <h1>memes</h1>
            </div>
            <div className='content_category'>
                <h1>Filmes de comédia</h1>
            </div>
            <div className='content_category'>
                <h1>Podcast</h1>
            </div>
            <div className='content_category'>
                <h1>Anime</h1>
            </div>
            <div className='content_category'>
                <h1>Séries de televisão</h1>
            </div>
            <div className='content_category'>
                <h1>Bola</h1>
            </div>
            <div className='content_category'>
                <h1>JavaScript</h1>
            </div>
            <div className='content_category'>
                <h1>Smzinho</h1>
            </div>
            <div className='content_category'>
                <h1>Super-héroi</h1>
            </div>
           </div>
        </div>
        <Play/>
    </div>
       
        
    )
}
export default Category