import youtube from '../img/youtube-48.png'
import twitter from '../img/twitter-48.png'
import email from '../img/email-48.png'

const BottomInfo = () => {
    return (
        <div className=" h-24 transparencyGray flex justify-center">
            <a className="bottomInfoCss">
                <img src={email} />
            </a>
            <a href="https://www.youtube.com/channel/UCNTYS3J6a_ljLo0wPxhsh5w"  target="_blank" className="bottomInfoCss">
                <img src={youtube} />
            </a>
            <a href="https://twitter.com/BrokenCGames"  target="_blank" className="bottomInfoCss">
                <img src={twitter} />
            </a>
        </div>
    )
}

export default BottomInfo